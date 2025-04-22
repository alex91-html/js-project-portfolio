# Portfolio

## possible/ reference file tree structure 
my-portfolio/
├── 📄 index.html
├── 📄 package.json
├── 📄 vite.config.js
├── 📄 README.md
├── 📄 TODO.md
├── 📄 .gitignore
├── 📄 package-lock.json

├── 📁 public/
│   └── 📄 vite.svg

├── 📁 src/                                       
│   ├── 📁 assets/           **images,icons,fonts etc**                         
│   │   ├── headshot.png
│   │   ├── 📁 fonts
│   │   │   └── ocr-a.??         
│   │   └── 📁 projImg 
│   │       ├── 📄 img1 
│   │       ├── 📄 img2
│   │       ├── 📄 img3
│   │       └── etc etc
│   │
│   ├── 📁 components/                                            
│   │   ├── 📁 layout/
│   │   │   ├── 📄 Navbar.jsx
│   │   │   ├── 📄 Footer.jsx
│   │   │   └── 📄 SectionWrapper.jsx
│   │   │
│   │   ├── 📁 ui/                        **tiny_reusable_visual_components**
│   │   │   ├── 📄 Button.jsx
│   │   │   ├── 📄 Tag.jsx
│   │   │   └── 📄 HeaderTitle.jsx
│   │   │
│   │   ├── 📁 section-project/
│   │   │   ├── 📄 ProjectsSection.jsx    **Section wrapper**
│   │   │   ├── 📄 ProjectCard.jsx <!--done--> 
│   │   │   ├── 📄 ProjectLinks.jsx <!--done-->
│   │   │   └── 📄 ProjectTags.jsx <!--done-->
│   │   │
│   │   ├── 📁 about/                     **About_Me_section_components**
│   │   │   ├── 📄 AboutSection.jsx       **Section wrapper**
│   │   │   ├── 📄 Bio.jsx
│   │   │   └── 📄 SkillsList.jsx
│   │   │
│   │   └── 📁 contact/
│   │       ├── 📄 ContactSection.jsx     **Section wrapper**
│   │       └── 📄 ContactInfo.jsx
│   │
│   ├── 📁 data/
│   │   └── 📄 projects.js
│   │
│   ├── 📄 App.jsx
│   ├── 📄 main.jsx
│   └── 📄 index.css
