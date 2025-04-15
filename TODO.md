## to do / log
- [x] look into file structure
- [] build components
  - [] About.jsx
  - [] Tech.jsx
  - [] Skills.jsx
  - [] Projects.jsx 
  - [x] ProjecCard.jsx
  - [] ProjectTags.jsx
  - [] Contact.jsx 
- [] add details to projects.json 
- [] style ProjectCard.jsx
- [] style 




## file tree structure 
📁 my-portfolio/
│
├── 📄 index.html              	← HTML entry point (handled by Vite)
├── 📄 package.json            	← Project metadata + dependencies
├── 📄 vite.config.js          	← Vite config (e.g. aliases, plugins)
├── 📄 README.md               ← Project info
├── 📁 public/                 		← Static files (copied as-is)
│   └── vite.svg              		← Example asset (favicon, images, etc.)
│
├── 📁 src/                    		← Source code lives here
│   ├── 📁 assets/             	← Images, videos, fonts
│   │   └── profile-pic.jpg
│   │
│   ├── 📁 components/         	← Reusable UI pieces
│   │   ├── About.jsx
│   │   ├── Tech.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx or ProjectList.jsx
│   │   ├── ProjecCard.jsx
│   │   ├── ProjectTags.jsx
│   │   ├── Contact.jsx
│   │
│   ├── 📁 data/               		← Static JSON or JS data
│   │   └── projects.js
│   │
│   ├── App.jsx              		 ← Main component
│   ├── main.jsx             		 ← App entry point (renders into DOM)
│   └── index.css            		 ← Global styles or CSS reset
│
├── 📄 .gitignore              	← Files to exclude from Git
├── 📄 pull_request_template.md (optional)
└── 📄 package-lock.json      ← Auto-generated dependency lockfile