import Ecommerce from '../assets/Projects/Ecommerce.png';
import Weather from '../assets/Projects/Weather.png';
import Todo from '../assets/Projects/Todo.png';
import ChatApp from '../assets/Projects/Talk-A-Tive.png';

const projects = [
    {
        image: Ecommerce,
        name: 'Nephara',
        techStacks: ['Next.js', 'Fabric.js', 'Node.js', 'Express.js', 'MySQL', 'Redis'],
        description:
            ' A seamless shopping journey with Nephara, where innovation meets style. The highlight is the cloth customization feature, allowing users to personalize their purchases.',
        longDescription: 'Nephara, showcases my expertise in web development. With a focus on user engagement, the site features a unique cloth customization option implemented using Canvas and Fabric.js. The platform integrates Nodemailer for efficient email communication and employs Redis caching to enhance loading times and overall user experience. The website boasts a responsive design, ensuring accessibility across devices.Nephara highlights my proficiency in utilizing various technologies to create a seamless and visually appealing online shopping experience. ',
        githubLink: 'https://github.com/AmanBhujel/Ecommerce',
        demoLink: 'https://ecommerce-lime-delta.vercel.app'
    },
    {
        image: Weather,
        name: 'WeatherMan',
        techStacks: ['React', 'CSS', 'API Fetching'],
        description: 'WeatherMan, a responsive web app, demonstrates my API fetching skills, providing real-time weather info from weatherapi.com. This project showcases my ability to integrate external APIs seamlessly for personalized and efficient solutions.        ',
        longDescription: 'WeatherMan stands as a testament to my growth in web development, showcasing my adeptness in creating responsive and user-friendly interfaces. Through this project, I refined my API fetching skills, gaining hands-on experience in seamlessly integrating external data sources. The focus on UI/UX design principles reinforced the importance of accessibility and a visually appealing layout, contributing to a user-friendly experience. ',
        githubLink: 'https://github.com/AmanBhujel/WeatherMan',
        demoLink: 'https://weather-man-ten.vercel.app/'
    },
    {
        image: Todo,
        name: 'Todo App',
        techStacks: ['Material UI','React', 'Node.js', 'Express.js', 'MongoDB'],
        description: 'Todo App is a demonstration of my proficiency in the MERN stack, emphasizing sleek UI/UX design and responsiveness. This project not only showcases my ability to create a user-friendly interface but also highlights my skills in incorporating animations for a more engaging experience.',
        longDescription: `Todo App represents a culmination of my expertise in the MERN stack, where I seamlessly integrated MongoDB, Express.js, React, and Node.js to create a robust and dynamic application. The emphasis on good UI/UX design reflects in the app's sleek interface, ensuring a pleasant and intuitive user experience. Beyond functionality, I delved into responsive design principles, ensuring seamless usage across various devices.`,
        githubLink: 'https://github.com/AmanBhujel/Todo',
        demoLink: 'https://todo-bay-two.vercel.app/'
    },
    {
        image: ChatApp,
        name: 'Chat App',
        techStacks: ['Chakra UI','React', 'Node.js', 'Express.js', 'MongoDB'],
        description: 'Chat App is a feature-rich, MERN stack project showcasing my expertise in real-time messaging, notifications, user search, and group chat creation. Utilizing Socket.io for seamless real-time functionality and Chakra UI for polished UI components.',
        longDescription: '  Leveraging the power of MongoDB, Express.js, React, and Node.js, this app boasts real-time messaging, instant notifications, user search capabilities, and the ability to create group chats. The integration of Socket.io ensures a seamless and responsive real-time communication experience. What sets this project apart is its aesthetic appeal, thanks to the use of Chakra UI for crafting polished and visually pleasing UI components.',
        githubLink: 'https://github.com/AmanBhujel/Talk-A-Tive',
        demoLink: 'https://talk-a-tive-t908.onrender.com'
    }
];
export default projects;