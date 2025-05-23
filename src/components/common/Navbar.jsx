import { useState, useEffect } from "react";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  gap: 3rem;
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
  height: 60px;
  transform: ${({ $isVisible }) => ($isVisible ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.3s ease-in-out;
`;

const NavLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.navLink};
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const scrollToInfo = () => {
    const infoSection = document.getElementById("info-section");
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavbarWrapper $isVisible={isVisible}>
      <NavLink onClick={scrollToInfo}>Info</NavLink>
      <NavLink href="mailto:a.ubelhor@gmail.com">Say Hi</NavLink>
    </NavbarWrapper>
  );
};

export default Navbar;