import keystro from "../assets/projects/keystro.png";
import artify from "../assets/projects/artify.png";
import starOrganicFarms from "../assets/projects/star_organic.png"
import keystroShot from "../assets/projects/keystro_Screenshot.png"
import artifyShot from "../assets/projects/Artify_Screenshot.png"
export const projectsData = [
    {
        name: 'Keystro',
        img: keystro,
        screenshot: keystroShot,
        info: 'Keystro is an innovative eCommerce platform designed to simplify online shopping. It features a user-friendly interface that allows customers to easily browse, search, and purchase products. With secure payment options and a streamlined checkout process, Keystro ensures a seamless shopping experience, making it a go-to solution for both shoppers and merchants alike.',
        link: 'https://keystro.vercel.app/',
    },

    {
        name: 'Artify Hub',
        img: artify,
        screenshot: artifyShot,
        info: 'Artify Hub serves as a dynamic platform connecting artists with clients seeking creative services. It allows users to showcase their portfolios and discover exciting art projects, fostering collaboration and community engagement. The user-friendly interface simplifies navigation, making it easy to communicate and manage projects, enhancing the creative process for all users involved in art-related endeavors.',
        link: 'https://artify-hub-one.vercel.app/',
    },
    {
        name: 'Star Organic Farms',
        img: starOrganicFarms, // Replace with actual logo URLs
        info: 'Star Organic Farms is an e-commerce site i built when i had just started coding which was filled with a lot of memories. It consists of farm produce sold by farmers and bought by retailers or consumers. It has a gallery section where you can view different product sections',
        link: 'https://star-organic-farms-p6wj.vercel.app/',
    },
];

export default projectsData;