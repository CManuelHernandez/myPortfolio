import blackJ from "../Assets/Projects/blackjack.png";
import portfolio from "../Assets/Projects/portfolio.png";
import jump from "../Assets/Projects/jump.png";
import teach from "../Assets/Projects/teach.png";
import films from "../Assets/Projects/films.png";
import name from "../Assets/Projects/name.png";
import todo from "../Assets/Projects/todo.png";
import heroes from "../Assets/Projects/heroes.png";

const projectsData = [
  {
    id: 1,
    imgPath: teach,
    fullStack: true,
    title: "Teach it up!",
    description:
      "projects.Application of the final project of the Bootcamp of the Full stack web of KeepCoding. Teach it Up is a platform used to publish online courses. It is designed for users who want to publish online courses or instructors who want to receive them. This application consists of a frontend developed with React and Redux and a backend using NodeJs. It is hosted by Amazon Web Service in the domain teachitup.net",
    link: "http://teachitup.net/",
    linkBack: "https://github.com/jcmpes/nodecourse",
    repo: "https://github.com/jcmpes/reactcourse",
  },
  {
    id: 2,
    imgPath: portfolio,
    fullStack: false,
    title: "projects.My Portfolio",
    description:
      "projects.My personal Portfolio which is developed with React. In it you will find all the information about my experience and training in the IT sector, such as my repositories of my projects and social networks to make myself known. This project will grow with me as my experience grows",
    link: "https://cmanuelhernandez.github.io/myPortfolio",
    repo: "https://github.com/CManuelHernandez/myPortfolio",
  },
  {
    id: 3,
    imgPath: heroes,
    fullStack: false,
    title: "Heroes App",
    description:
      "projects.Application made with React and Bootstrap that also has its testing. It consists of an application to check the operation of the navigation through private and public routes in version 6 of React Router and the filtering and search of heroes",
    link: "https://cmanuelhernandez.github.io/HeroesApp/",
    repo: "https://github.com/CManuelHernandez/HeroesApp",
  },
  {
    id: 4,
    imgPath: films,
    fullStack: false,
    title: "Movie App",
    description:
      "projects.Application to view a wide catalog of movie catalog thanks to the omdbapi Api. Made with React and stylized by Boostrap in which you can search for movies and create a list of favorites.",
    link: "https://cmanuelhernandez.github.io/MovieApp/",
    repo: "https://github.com/CManuelHernandez/MovieApp",
  },
  {
    id: 5,
    imgPath: blackJ,
    fullStack: false,
    title: "Black Jack",
    description:
      "projects.Application that allows you to play games of Black Jack against a bank. This application is made using JavaScript, HTML and CSS",
    link: "https://cmanuelhernandez.github.io/BlackJack/",
    repo: "https://github.com/CManuelHernandez/BlackJack",
  },
  {
    id: 6,
    imgPath: todo,
    fullStack: false,
    title: "React To Do List",
    description:
      "projects.Task list application made with React to generate a list where you can add, mark and delete once completed.",
    link: "https://cmanuelhernandez.github.io/ReactTodoList/",
    repo: "https://github.com/CManuelHernandez/ReactTodoList",
  },
  {
    id: 7,
    imgPath: jump,
    fullStack: false,
    title: "Jumping Guy",
    description:
      "projects.Jumping Guy game is a 2D game of jumping to the enemies that appear and as they are overcome the speed at which they appear increases. Done with C and Unity it was my first contact with the creation of games",
    link: "https://cmanuelhernandez.github.io/JumpingGuy/",
    repo: "https://github.com/CManuelHernandez/JumpingGuy",
  },
  {
    id: 8,
    imgPath: name,
    fullStack: false,
    title: "projects.Name Generator",
    description:
      "projects.Application to generate names randomly being able to choose gender and origin of the names obtained. From my first contacts to using Apis with JavaScript",
    link: "https://github.com/CManuelHernandez/GeneradorNombres",
    repo: "https://cmanuelhernandez.github.io/GeneradorNombres/",
  },
];

export default projectsData;
