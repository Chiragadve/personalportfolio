import type { TNavLink, TExperience, TProject } from '../types';

import {
  moviewebsite,
  maha_logo,
  nsmedia,
  frcrce,
  codelabs,
  studentportal,
  pizzawebsite,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'work',
    title: 'Work',
  },
];

const experiences: TExperience[] = [
  {
    title: 'Diploma in Computer Engineering',
    companyName: 'Maharashtra State Board of Technical Education',
    icon: maha_logo,
    iconBg: '#383E56',
    date: 'January 2021 - June 2023',
    points: [
      'Achieved excellent academic performance with consistent 90% grade across all subjects.',
      'Developed a major final year project focused on cryptocurrency prediction and tracking.',
      'Successfully completed an internship during my college years.',
    ],
  },
  {
    title: 'Intern',
    companyName: 'NS Media',
    icon: nsmedia,
    iconBg: '#E6DEDD',
    date: 'July 2022 - August 2022',
    points: [
      'Developed proficiency in WordPress platform, using Avada builder by actively participating in the creation and maintenance of real client websites.',
      'Cultivated skills in Adobe Photoshop, learned to create banner ads, logos, social media posts.',
    ],
  },
  {
    title: 'B.E in Computer Engineering',
    companyName: 'Fr. Conceicao Rodrigues College of Engineering',
    icon: frcrce,
    iconBg: '#383E56',
    date: 'September 2023 - Present',
    points: [
      'Actively engaged in campus events, including Cultural, Technical.',
      'Created a full-stack website as a second-year mini project on a student portal.',
      'Implemented responsive design and ensured cross-browser compatibility.',
      'Participated in and took roles in managing technical events for clubs and committees.',
    ],
  },
  {
    title: 'Problem Setter',
    companyName: 'CodeLabs CRCE',
    icon: codelabs,
    iconBg: '#E6DEDD',
    date: 'July 2024 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to colleagues.',
    ],
  },
];

const projects: TProject[] = [
  {
    name: 'Movie Rating Website',
    description: 'fully functional Movie Rating Website created using OMdb API.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'OMdb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: moviewebsite,
    sourceCodeLink: 'https://github.com/Chiragadve/usepopcorn',
  },
  {
    name: 'Student Portal Website',
    description:
      'A fully functional Student portal for the benefit of the student  departments in schools and colleges ot improve their digital image.',
    tags: [
      {
        name: 'php',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: studentportal,
    sourceCodeLink: 'https://github.com/Chiragadve/Department-portal',
  },
  {
    name: 'Pizza Delivery Website',
    description:
      'A pizza delivery website with fully real-world features to cater the customers in time.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'Redux',
        color: 'pink-text-gradient',
      },
    ],
    image: pizzawebsite,
    sourceCodeLink: 'https://github.com/Chiragadve/fast-react-pizza',
  },
];

export { experiences, projects };
