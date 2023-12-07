const majors = [
  {
    id: 1,
    name: "Engenharia de Materiais",
    college: "UNESP",
    term: "03/2013 - 12/2018",
    location: "Guaratinguetá, SP",
  },
  {
    id: 2,
    name: "Materials Engineering",
    college: "Alfred University",
    term: "08/2015 - 05/2016",
    location: "Alfred, NY",
  },
];

const courses = [
  {
    id: 1,
    name: "React",
    institution: "Origamid",
    institutionSVG: "/svg/origamid.svg",
    certificationLink: import.meta.env.VITE_REACT,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Hooks",
      "React Router",
      "Context",
      "Vite",
    ],
  },
  {
    id: 2,
    name: "TypeScript para Iniciantes",
    institution: "Origamid",
    institutionSVG: "/svg/origamid.svg",
    certificationLink: import.meta.env.VITE_TYPESCRIPT,
    technologies: ["HTML", "TypeScript", "Type", "Interface", "Generics"],
  },
  {
    id: 3,
    name: "Vue.js 2",
    institution: "Origamid",
    institutionSVG: "/svg/origamid.svg",
    certificationLink: import.meta.env.VITE_VUE,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue",
      "Vuetify",
      "Vuex",
      "Vue Router",
      "Vite",
    ],
  },
  {
    id: 4,
    name: "UI Design para Iniciantes",
    institution: "Origamid",
    institutionSVG: "/svg/origamid.svg",
    certificationLink: import.meta.env.VITE_UI_DESIGN,
    technologies: ["HTML", "CSS", "JavaScript", "Figma", "SVG", "Prototipação"],
  },
  {
    id: 5,
    name: "WordPress REST API",
    institution: "Origamid",
    institutionSVG: "/svg/origamid.svg",
    certificationLink: import.meta.env.VITE_WORDPRESS,
    technologies: ["WordPress", "PHP", "REST"],
  },
];

const contacts = [
  {
    id: 1,
    name: "LinkedIn",
    href: import.meta.env.VITE_LINKEDIN,
    src: "/svg/linked-in.svg",
  },
  {
    id: 2,
    name: "GitHub",
    href: import.meta.env.VITE_GITHUB,
    src: "/svg/github.svg",
  },
  {
    id: 3,
    name: "Email",
    href: import.meta.env.VITE_EMAIL,
    src: "/svg/email.svg",
    copy: true,
  },
  {
    id: 4,
    name: "Phone",
    href: import.meta.env.VITE_PHONE,
    src: "/svg/phone.svg",
    copy: true,
  },
  {
    id: 5,
    name: "Download CV",
    href: import.meta.env.VITE_CV,
    src: "/svg/download.svg",
    download: true,
  },
];

const projects = [
  {
    id: 1,
    name: "React - Origamid",
    img: "",
    description: "",
    technologies: [""],
    details: "",
  },
  {
    id: 2,
    name: "Vue 2 - Origamid",
    img: "",
    description: "",
    technologies: [""],
    details: "",
  },
];

export { contacts, courses, majors, projects };
