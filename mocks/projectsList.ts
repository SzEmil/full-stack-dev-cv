import service from '../public/service.jpg';
import pokestudio from '../public/pokestudio.jpg';
import langChainPlatfrom from '../public/langChain.jpg';
import chatApp from '../public/chatApp.jpg';
import filmotekaReact from '../public/reactmovies.png';
import reactImages from '../public/reactimages.png';
import phonebook from '../public/phonebook.png';
import filmLibrary from '../public/filmLibrary.png';
import strizzes from '../public/strizzes.png';
import breakout from '../public/breakout.png';
import searchCountry from '../public/country.png';
import icecream from '../public/icecream.png';
import webstudio from '../public/webstudio.png';

export const topProjects = [
  {
    id: '99',
    name: 'LangChain Learning Platform',
    picture: '/langChain.jpg',
    tech: [
      'HTML5',
      'CSS3',
      'Typescript',
      'React',
      'Redux/toolkit',
      'react-persist',
      'NodeJs',
      'Express',
      'PayU',
      'Api-Key-Auth',
      'Email-Verify',
      'MongoDB',
      'Auth-User',
      'mongoose',
      'REST API',
      'Hooks',
      'css-modules',
      'RWD',
    ],
    overview:
      'My LangChain learning platform features a modernist website showcasing courses and their capabilities. Users can browse available courses, make purchases using PayU, and upon successful payment, access the course in their dashboard to begin learning. The platform offers video materials, text content, and interactive quizzes.',
    web: 'https://szemil.github.io/LangChain-LearningPlatform/',
    git: 'https://github.com/SzEmil/LangChain-LearningPlatform',
  },
  {
    id: '98',
    name: 'Service',
    picture: '/service.jpg',
    tech: [
      'HTML5',
      'CSS3',
      'Typescript',
      'React',
      'NextJs',
      'SSR',
      'Redux/toolkit',
      'react-persist',
      'NodeJs',
      'Express',
      'MongoDB',
      'Auth-User',
      'mongoose',
      'REST API',
      'Hooks',
      'css-modules',
      'RWD',
    ],
    overview:
      'Application that allow waitstaff to add restaurants, menus with detailed dishes, manage tables, effortlessly split bills, solving billing and order management challenges. Also allows inviting waitstaff to collaborate. All data securely stored in a database.',
    web: 'https://service-app-jet.vercel.app/',
    git: 'https://github.com/SzEmil/service-app',
  },
  {
    id: '97',
    name: 'Chat-App',
    picture: '/chatApp.jpg',
    tech: [
      'HTML5',
      'CSS3',
      'Typescript',
      'React',
      'Redux/toolkit',
      'react-persist',
      'NodeJs',
      'Express',
      'Web-Sockets',
      'SQL',
      'MySQL',
      'Auth-User',
      'REST API',
      'Hooks',
      'css-modules',
      'RWD',
    ],
    overview:
      'Chat-App is a custom chat application designed for seamless communication with friends and peers. This application allows users to register as unique individuals, granting them access to the chat functionality. Users can choose from a list of available members and create new conversations with them. With the ability to manage multiple chat sessions simultaneously, Chat-App ensures a dynamic and interactive chatting experience for all its users.',
    web: 'https://szemil.github.io/chat-app/',
    git: 'https://github.com/SzEmil/chat-app',
  },
  {
    id: 'project1',
    name: 'PokeStudio',
    picture: '/pokestudio.jpg',
    tech: [
      'HTML5',
      'CSS3',
      'Typescript',
      'React',
      'react-router',
      'Redux/toolkit',
      'react-persist',
      'Firebase/Auth',
      'Firebase/database',
      'pokeApi',
      'Hooks',
      'css-modules',
      'RWD',
    ],
    overview:
      'Users can browse Pokémon, register for a personal Pokédex, store Pokémon in their own database, open packs, battle AI opponents, earn rewards, and share information on a public board!',
    web: 'https://szemil.github.io/PokeStudio/',
    git: 'https://github.com/SzEmil/PokeStudio',
  },
];

export const easyProjects = [
  {
    id: 'project2',
    name: 'Filmoteka (React)',
    picture: '/reactmovies.png',
    tech: [
      'HTML5',
      'CSS3',
      'Javascript',
      'React',
      'react-router',
      'React Context',
      'Hooks',
      'Api',
      'css-modules',
      'RWD',
    ],
    overview:
      'Aplication based on React library using hooks. The website design takes into account the use of Api, loaders, css-modules, react routing, react context and lazy loading.',
    web: 'https://szemil.github.io/Movies-React-app/',
    git: 'https://github.com/SzEmil/Movies-React-app',
  },
  {
    id: 'project3',
    name: 'Search Images (React)',
    picture: '/reactimages.png',
    tech: [
      'HTML5',
      'CSS3',
      'Javascript',
      'React',
      'Hooks',
      'Api',
      'css-modules',
    ],
    overview:
      'A react application for searching photos for a public database. The application uses react hooks. css-modules was used for styling.',
    web: 'https://szemil.github.io/Images-React-app/',
    git: 'https://github.com/SzEmil/Movies-React-app',
  },
  {
    id: 'project4',
    name: 'Phonebook (React)',
    picture: '/phonebook.png',
    tech: [
      'HTML5',
      'CSS3',
      'Javascript',
      'React',
      'Redux',
      'Auth',
      'JWT',
      'Hooks',
      'Persist',
      'css-modules',
    ],
    overview:
      'A react application that is the first steps in learning with this library. The application is used to add contacts to your phonebook. The application uses react hooks, local-storage or css-modules.',
    web: 'https://szemil.github.io/goit-react-hw-08-phonebook/',
    git: 'https://github.com/SzEmil/goit-react-hw-08-phonebook',
  },
  {
    id: 'project5',
    name: 'Films Library (Group project)',
    picture: '/filmLibrary.png',
    tech: ['HTML5', 'CSS3', 'Javascript', 'RWD', 'Api', 'Firebase'],
    overview:
      'Team leader of a group project based on javascript. My task was to code review, ensure the timeliness of the tasks performed, program the home page and user login panel using Firebase. The user on the website has the ability to view movies from the provided api database. After logging in, the user gets the option to add movies to his own library.',
    web: 'https://szemil.github.io/Group_Project_FIlms_Library/',
    git: 'https://github.com/SzEmil/Group_Project_FIlms_Library',
  },
  {
    id: 'project6',
    name: 'Strizzes company site',
    picture: '/strizzes.png',
    tech: ['HTML5', 'CSS3', 'Javascript', 'BEM', 'SASS', 'RWD'],
    overview:
      'A page used to present the company s available opportunities. The website is equipped with photo galleries and a contact form.',
    web: 'https://www.strizzes.pl/',
    git: 'https://github.com/SzEmil/Strizzes_site',
  },
  {
    id: 'project7',
    name: 'Breakout game',
    picture: '/breakout.png',
    tech: ['HTML5', 'CSS3', 'Javascript'],
    overview:
      'A simple game based on javascript. A project for a class in college. It uses vanilla javascript. The player s task is to break all the blocks by bouncing the ball off the paddle which is controlled with the keyboard.',
    web: 'https://szemil.github.io/Breakout-game/',
    git: 'https://github.com/SzEmil/Breakout-game',
  },
  {
    id: 'project8',
    name: 'Search Country',
    picture: '/country.png',
    tech: ['HTML5', 'CSS3', 'Javascript', 'Api'],
    overview:
      'A page used to search for countries based on the data entered in the form.',
    web: 'https://szemil.github.io/Search-Country/',
    git: 'https://github.com/SzEmil/Search-Country',
  },
  {
    id: 'project9',
    name: 'Icecream site (Group project)',
    picture: '/icecream.png',
    tech: ['HTML5', 'CSS3', 'Javascript', 'RWD', 'BEM', 'SASS'],
    overview:
      'Team leader of a group project. My task was to take care of the correctness of the code or the timeliness of the tasks performed. The site is based mainly on HTML and CSS with a small amount of javascript. This page represents a potential ice cream shop site. The user can learn how his favorite flavors are made.',
    web: 'https://szemil.github.io/Group_Projekt_IceCream/',
    git: 'https://github.com/SzEmil/Group_Projekt_IceCream',
  },
  {
    id: 'project10',
    name: 'Webstudio',
    picture: '/webstudio.png',
    tech: ['HTML5', 'CSS3', 'Javascript', 'BEM', 'SASS', 'RWD'],
    overview:
      'The first step in development as a web developer. A simple website using HTML and CSS with little javascript for modal windows or mobile menu. The page could be a potential website for a web design company.',
    web: 'https://szemil.github.io/WebStudio_site/',
    git: 'https://github.com/SzEmil/WebStudio_site',
  },
];
