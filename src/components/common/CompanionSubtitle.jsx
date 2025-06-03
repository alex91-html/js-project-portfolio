import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { mediaQueries } from "../../styles/media";

const ToggleWrapper = styled.div`
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 2100;
  font-size: 1.2rem;
  font-family: inherit;
  border-radius: 1.2em;
  border: 2px solid #000000;
  user-select: none;
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 0.7em;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5em;
`;

const Switch = styled.span`
  position: relative;
  display: inline-block;
  width: 38px;
  height: 22px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background: #00ff3c;
  }
  &:checked + span:before {
    transform: translateX(16px);
    background: #fff;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background: #ccc;
  border-radius: 22px;
  transition: background 0.2s;
  &:before {
    content: "";
    position: absolute;
    height: 18px;
    width: 18px;
    left: 2px;
    bottom: 2px;
    background: #fff;
    border-radius: 50%;
    transition: transform 0.2s;
  }
`;

const OverlaySubtitle = styled.div`
  position: fixed;
  bottom: 40px;
  left: 0;
  width: 100vw;
  z-index: 2000;
  pointer-events: none;
  display: flex;
  justify-content: center;

    :hover {
    cursor: pointer;
  }
`;

const SubtitleText = styled.span`
  background: none;
  line-height: 1.2;
  color: #00ff3c;
  font-size: 1.1rem;
  font-weight: 200;
  transition: opacity 0.5s;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.463);
  -webkit-text-stroke: 0.5px #000;
  pointer-events: auto;


  ${mediaQueries.tablet} {
    font-size: 2rem;
    padding: 0.4em 2em;
    border-radius: 2rem;
  }

  ${mediaQueries.desktop} {
    font-size: 3rem;
    padding: 0.5em 3em;
    border-radius: 2.5rem;
    -webkit-text-stroke: 1px #000;
  }
`;

const heroText = [
  "This website uses subtitles.",
  "Welcome to my Technigo Bootcamp portfolio.",
  "Here I'm sharing what I have been learning.",
  "And coding so far.",
  "Scroll down to see..."
];
const heroSubtitles = heroText;

const projectsText = [
  "Here are some of the course projects.",
  "Each one has a description, code, and live demo!",
  "Enjoy ;)"
];
const projectsSubtitles = projectsText.map(text => text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text]).flat();

// Break infoText into shorter sentences for more frequent subtitle changes
const infoText = [
  "This is the info section.",
  "It contains details about my journey, skills",
  "and experiences.",
  "Feel free to explore!",
  "And to contact me.",
  "I’m happy to share my design portfolio",
  "and a more detailed CV upon request!"
];
const infoSubtitles = infoText;

const sectionMap = [
  { id: "hero-section", subtitles: heroSubtitles },
  { id: "projects-section", subtitles: projectsSubtitles },
  { id: "info-section", subtitles: infoSubtitles }
];

const CompanionSubtitle = () => {
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [sectionIndex, setSectionIndex] = useState(0);
  const prevSectionIndex = useRef(0);
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef();

  // Detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      let active = 0;
      sectionMap.forEach((section, idx) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Section is considered active if its top is above mid viewport and its bottom is below mid viewport
          if (rect.top < vh / 2 && rect.bottom > vh / 2) {
            active = idx;
          }
        }
      });
      if (active !== prevSectionIndex.current) {
        setSectionIndex(active);
        setSubtitleIndex(0); // Only reset when section changes
        prevSectionIndex.current = active;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate through the current section's subtitles
  useEffect(() => {
    if (!showSubtitles || paused) return;
    const currentSubtitles = sectionMap[sectionIndex].subtitles;
    if (subtitleIndex === currentSubtitles.length - 1) return;

    intervalRef.current = setInterval(() => {
      setSubtitleIndex((prev) =>
        prev < currentSubtitles.length - 1 ? prev + 1 : prev
      );
    }, 2500);

    return () => clearInterval(intervalRef.current);
  }, [showSubtitles, paused, sectionIndex, subtitleIndex]);

  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);

  const handlePrev = () => {
    setSubtitleIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const currentSubtitles = sectionMap[sectionIndex].subtitles;

  return (
    <>
      <div
        style={{ position: 'fixed', inset: 0, zIndex: 2099, pointerEvents: showSubtitles ? 'auto' : 'none' }}
        onClick={() => showSubtitles && setShowSubtitles(false)}
      />
      <ToggleWrapper>
        <SwitchLabel>
          <Switch>
            <SwitchInput
              type="checkbox"
              checked={showSubtitles}
              onChange={() => {
                setShowSubtitles((v) => !v);
                setSubtitleIndex(0);
              }}
              aria-label="Toggle subtitles"
            />
            <Slider />
          </Switch>
        </SwitchLabel>
      </ToggleWrapper>
      {showSubtitles && (
        <OverlaySubtitle>
          <SubtitleText
            key={subtitleIndex + "-" + sectionIndex}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handlePrev}
            title="Click to show previous subtitle"
          >
            {currentSubtitles[subtitleIndex] || currentSubtitles[0]}
          </SubtitleText>
        </OverlaySubtitle>
      )}
    </>
  );
};

export default CompanionSubtitle;