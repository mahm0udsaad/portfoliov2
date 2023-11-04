"use client"
import {  LiaWhatsapp , LiaGithub , LiaLinkedin} from 'react-icons/lia'
import {BiLogoUpwork} from 'react-icons/bi';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaDatabase , FaFigma } from 'react-icons/fa'; // Import the icons you need
import {TbBrandNextjs} from 'react-icons/tb'
import { SiExpress , SiTypescript } from 'react-icons/si'
import { Note } from '@/components/note';
import ProjectSlider from '@/components/slider';
import { useData } from '@/hooks/useData';
import Cpost from '@/components/clientPost';

const skills = [
  { name: 'React', icon: <FaReact  className='text-sky-500 text-3xl'/> },
  { name: 'Next.js', icon: <TbBrandNextjs className='text-3xl' /> },
  { name: 'JavaScript', icon: <FaJs className='text-yellow-500 text-3xl'/> },
  { name: 'TypeScript', icon: <SiTypescript className='text-blue-500 text-3xl'/> }, // You can replace this with the TypeScript icon
  { name: 'MongoDB', icon: <FaDatabase className='text-green-500 text-3xl' /> },
  { name: 'Express.js', icon: <SiExpress className='text-3xl'/> },
  { name: 'Figma', icon: <FaFigma className='text-3xl text-[#a25aff]'/> },
];
const TwoSoft = () =>{
  return(
    <div>
            <div>
                <h1 className=' font-semibold pt-4 pb-3 flex items-center justify-between'> TwoSoft : <span className='text-blue-500'>(</span> <p className="text-sm">Indian Interior Design Company</p> <span className='text-blue-500'>)</span></h1>
                <div className="img-wrapper flex justify-center">
                  <img  fetchPriority='low' width={200} height={200} src="/images/projects-images/twosoft 2.png" alt="El Sewedy Website" />
                </div>
                  <p>
                         rebuilt there website from HTML
                          css , to a modern React animated website
                          with the same old design  
                  </p>
              </div>
            </div>
  )
}
const Aboutparag = () =>{
  return(
    <span>
      TensorFlow.js and AI modules, I take pride in crafting unique and innovative solutions.
       I handle every aspect of my projects,
    from building the back end to scraping data from cloned websites. I'm not bound by convention;
      I bring creativity and a 'can-do' attitude to every project.
    Trust that I can bring the same level of dedication and ingenuity to your project.
    </span>
  )
}
export default function Home() {
  const posts = [
    {
      image: "public\images\projects-images\daily.png",
      name: "El sewedy Automation",
      link: "http://www.elsewedy-automation.com/",
      brief: "Automation company",
      description: "migrating Elsewedy Automation's website to Next.js, a powerful and efficient React framework. Next.js offers lightning-fast performance, SEO optimization, and a highly responsive user interface. We'll also leverage Tailwind CSS to ensure a sleek and modern design that aligns with industry standards.\r\n\r\n"
    },
    {
      image: "public\images\projects-images\sewedy 1.png",
      name: "daily Travel",
      link: "https://dalitravelsa.com/",
      brief: "Soudi arabia traveling company",
      description: "Transforming a Travel Company Website\r\nI recently had the honor of renewing a travel company's website, transitioning it from PHP to the cutting-edge Next.js framework. With Tailwind CSS for a beautiful UI, Framer Motion for captivating animations, and seamless payment integration, this project was a game-changer in the travel industry."
    },
  ];

  return (
    <>
      <main className="container mx-auto  flex flex-col">
        <section className=''>
          <div className="flex sm:flex-row flex-col-reverse w-5/6 mx-auto justify-between z-20">
            <div className="pt-8 sm:pt-36 flex sm:justify-around justify-between w-11/12 sm:w-[60%]">
            <div className="social text-5xl flex flex-col text-center  space-y-5 sm:space-y-4">
            <a target='_blank' href="https://www.linkedin.com/services/page/80148a324606595320/">
              <LiaLinkedin  className='text-sky-500'/>
              </a>
              <a target='_blank' href="https://wa.me/+201157337829">
              <LiaWhatsapp className='text-green-500'/>
              </a>
              <a target='_blank' href="https://github.com/mahm0udsaad">
              <LiaGithub className='text-white'/>
              </a>
              <a  target='_blank' href='https://www.upwork.com/freelancers/~01d5d33995170dad07'>
              <BiLogoUpwork  className='text-purple-500'/>
              </a>
            </div>
            <div className="intro text-5xl sm:text-6xl text-white sm:w-4/5">
              <span className='hi'>HI</span> I'm <br /> Mahmoud Saad <br />
              <p className='text-xl font-thin text-[#cdcccc]'>Your extraordinary web developer</p>
            <div className="flex  pt-20 lg:w-1/2 justify-around">
              <div className="border-wrap rounded-full">
              <div className="px-4 py-2 bg-[#121924] rounded-full text-sm">Front-End</div>
              </div>
              <div className="border-wrap rounded-full">
              <div className="px-4 py-2 bg-[#121924] rounded-full text-sm"> <a href='./CV..pdf ' className='p-4' target='_blank'>Resume</a></div>
              </div>
            </div>
            </div>
            </div>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            className='flex flex-col mx-auto justify-center mt-12 sm:mt-28'>
            <svg width="284" height="288" viewBox="0 0 284 288" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M183.333 106.2C162.095 106.2 144.815 121.992 144.815 141.4C144.815 160.808 162.095 176.6 183.333 176.6C204.572 176.6 221.852 160.808 221.852 141.4C221.852 121.992 204.572 106.2 183.333 106.2ZM183.333 150.2C178.023 150.2 173.704 146.253 173.704 141.4C173.704 136.547 178.023 132.6 183.333 132.6C188.644 132.6 192.963 136.547 192.963 141.4C192.963 146.253 188.644 150.2 183.333 150.2ZM193.055 126.295C191.533 125.476 189.896 124.843 188.148 124.425V115.396C192.525 116.074 196.569 117.64 200.046 119.906L193.055 126.295ZM178.519 124.425C176.771 124.838 175.129 125.472 173.612 126.295L166.621 119.906C170.098 117.64 174.142 116.074 178.519 115.396V124.425ZM166.804 132.516C165.909 133.907 165.215 135.403 164.758 137H154.878C155.619 133 157.333 129.304 159.808 126.128L166.804 132.516ZM164.758 145.8C165.21 147.397 165.904 148.898 166.804 150.284L159.813 156.672C157.333 153.496 155.619 149.8 154.878 145.8H164.758ZM173.612 156.505C175.134 157.324 176.771 157.957 178.519 158.375V167.404C174.142 166.726 170.098 165.16 166.621 162.894L173.612 156.505ZM188.148 158.375C189.896 157.962 191.538 157.328 193.055 156.505L200.046 162.894C196.569 165.16 192.525 166.726 188.148 167.404V158.375ZM199.863 150.284C200.758 148.893 201.452 147.397 201.909 145.8H211.789C211.048 149.8 209.333 153.496 206.859 156.672L199.863 150.284ZM201.909 137C201.456 135.403 200.763 133.902 199.863 132.516L206.854 126.128C209.333 129.304 211.048 133 211.789 137H201.909Z" fill="url(#paint0_linear_13_3)"/>
            <path d="M130.37 141.4C130.37 124.416 115.247 110.6 96.6662 110.6C78.0859 110.6 62.9625 124.416 62.9625 141.4C62.9625 158.384 78.0859 172.2 96.6662 172.2C115.247 172.2 130.37 158.384 130.37 141.4ZM72.5922 141.4C72.5922 129.269 83.3918 119.4 96.6662 119.4C109.941 119.4 120.74 129.269 120.74 141.4C120.74 153.531 109.941 163.4 96.6662 163.4C83.3918 163.4 72.5922 153.531 72.5922 141.4Z" fill="url(#paint1_linear_13_3)"/>
            <path d="M111.111 141.4C111.111 134.122 104.63 128.2 96.6664 128.2C88.7027 128.2 82.2219 134.122 82.2219 141.4C82.2219 148.678 88.7027 154.6 96.6664 154.6C104.63 154.6 111.111 148.678 111.111 141.4ZM91.8516 141.4C91.8516 138.976 94.0086 137 96.6664 137C99.3241 137 101.481 138.976 101.481 141.4C101.481 143.824 99.3241 145.8 96.6664 145.8C94.0086 145.8 91.8516 143.824 91.8516 141.4Z" fill="url(#paint2_linear_13_3)"/>
            <path d="M178.519 203H101.482C98.8191 203 96.6669 204.971 96.6669 207.4V225C96.6669 227.429 98.8191 229.4 101.482 229.4H178.519C181.181 229.4 183.334 227.429 183.334 225V207.4C183.334 204.971 181.181 203 178.519 203ZM144.815 211.8H154.445V220.6H144.815V211.8ZM135.185 220.6H125.556V211.8H135.185V220.6ZM106.296 211.8H115.926V220.6H106.296V211.8ZM173.704 220.6H164.074V211.8H173.704V220.6Z" fill="url(#paint3_linear_13_3)"/>
            <g filter="url(#filter0_d_13_3)">
            <path d="M255.556 119.4H249.417L250.736 88.776C250.789 87.5792 250.303 86.4132 249.397 85.5552C248.487 84.6884 247.236 84.2 245.926 84.2H212.222V66.6H222.738C224.731 71.7084 230.027 75.4 236.296 75.4C244.26 75.4 250.741 69.4776 250.741 62.2C250.741 54.9224 244.26 49 236.296 49C230.027 49 224.731 52.6916 222.738 57.8H207.407C204.745 57.8 202.593 59.7712 202.593 62.2V84.2H144.815V75.4H183.333C185.996 75.4 188.148 73.4288 188.148 71V40.2H197.778V44.6C197.778 47.0288 199.93 49 202.593 49H221.852C224.514 49 226.667 47.0288 226.667 44.6V27C226.667 24.5712 224.514 22.6 221.852 22.6H202.593C199.93 22.6 197.778 24.5712 197.778 27V31.4H183.333C180.671 31.4 178.519 33.3712 178.519 35.8V66.6H144.815V53.4H164.074C166.737 53.4 168.889 51.4288 168.889 49V30.5904C174.479 28.7688 178.519 23.9288 178.519 18.2C178.519 10.9224 172.038 5 164.074 5C156.11 5 149.63 10.9224 149.63 18.2C149.63 23.9288 153.669 28.7688 159.259 30.5904V44.6H144.815V33.358C144.815 17.7204 130.89 5 113.783 5H113.259C96.8689 5 83.4404 16.6776 82.333 31.4H79.603C65.1152 31.4 53.3333 42.1668 53.3333 55.402V58.6932C42.2448 61.5048 34.0741 70.7888 34.0741 81.802V84.2C32.7644 84.2 31.5126 84.6884 30.6026 85.5508C29.6974 86.4132 29.2111 87.5748 29.2641 88.7716L30.5833 119.4H24.4444C16.4807 119.4 10 125.322 10 132.6V167.8C10 175.078 16.4807 181 24.4444 181H34.2859C39.4089 230.65 84.9378 269 140 269C195.043 269 240.567 230.672 245.709 181H255.556C263.519 181 270 175.078 270 167.8V132.6C270 125.322 263.519 119.4 255.556 119.4ZM236.296 57.8C238.954 57.8 241.111 59.7756 241.111 62.2C241.111 64.6244 238.954 66.6 236.296 66.6C233.639 66.6 231.481 64.6244 231.481 62.2C231.481 59.7756 233.639 57.8 236.296 57.8ZM207.407 31.4H217.037V40.2H207.407V31.4ZM164.074 13.8C166.732 13.8 168.889 15.7756 168.889 18.2C168.889 20.6244 166.732 22.6 164.074 22.6C161.416 22.6 159.259 20.6244 159.259 18.2C159.259 15.7756 161.416 13.8 164.074 13.8ZM260.37 132.6V137H241.111V128.2H244.409H255.556C258.213 128.2 260.37 130.176 260.37 132.6ZM241.111 145.8H260.37V154.6H241.111V145.8ZM43.7037 81.802C43.7037 73.42 51.1667 66.6 60.3389 66.6H67.7778V57.8H62.963V55.402C62.963 47.02 70.4259 40.2 79.5982 40.2H101.481V31.4H92.0685C93.1615 21.544 102.189 13.8 113.254 13.8H113.779C125.584 13.8 135.185 22.5736 135.185 33.358V84.2H43.7037V81.802ZM24.4444 128.2H35.5907H38.8889V137H19.6296V132.6C19.6296 130.176 21.7867 128.2 24.4444 128.2ZM38.8889 154.6H19.6296V145.8H38.8889V154.6ZM19.6296 167.8V163.4H38.8889V172.2H38.6337H24.4444C21.7867 172.2 19.6296 170.224 19.6296 167.8ZM140 260.2C90.287 260.2 49.0096 225.858 43.8433 181C44.2044 180.991 44.5222 180.868 44.8544 180.789C45.1096 180.732 45.3841 180.723 45.62 180.63C45.9667 180.494 46.2459 180.265 46.5493 180.058C46.737 179.926 46.9633 179.843 47.127 179.689C47.4111 179.425 47.5989 179.095 47.8011 178.774C47.907 178.611 48.0611 178.479 48.143 178.303C48.3837 177.775 48.5185 177.203 48.5185 176.6V123.8C48.5185 121.371 46.3663 119.4 43.7037 119.4H40.2178L39.0815 93H140H240.919L239.782 119.4H236.296C233.634 119.4 231.481 121.371 231.481 123.8V176.6C231.481 177.203 231.616 177.775 231.857 178.298C231.944 178.483 232.103 178.624 232.218 178.796C232.42 179.108 232.599 179.434 232.878 179.689C233.056 179.856 233.297 179.953 233.509 180.089C233.793 180.283 234.057 180.498 234.385 180.63C234.63 180.727 234.914 180.736 235.184 180.793C235.507 180.868 235.815 180.991 236.166 181C231.106 225.766 189.78 260.2 140 260.2ZM255.556 172.2H241.366H241.111V163.4H260.37V167.8C260.37 170.224 258.213 172.2 255.556 172.2Z" fill="url(#paint4_linear_13_3)"/>
            </g>
            <motion.path
            initial={{opacity:0}}            
            animate={{opacity:1}}
            transition={{duration:2}}
            d="M115.926 57.8H106.297V66.6H96.6669V75.4H125.556V66.6H115.926V57.8Z" fill="url(#paint5_linear_13_3)"/>
            <motion.path
            initial={{opacity:0}}            
            animate={{opacity:1}}
            transition={{duration:2}}
            d="M120.741 22.6H111.111V31.4H120.741V22.6Z" fill="url(#paint6_linear_13_3)"/>
            <motion.path
            initial={{opacity:0}}            
            animate={{opacity:1}}
            transition={{duration:2}}
            d="M125.555 40.2H115.926V49H125.555V40.2Z" fill="url(#paint7_linear_13_3)"/>
            <motion.path
            initial={{opacity:0}}            
            animate={{opacity:1}}
            transition={{duration:2}}
            d="M91.8516 49.0001H82.2219V57.8001H91.8516V49.0001Z" fill="url(#paint8_linear_13_3)"/>
            <motion.path
            initial={{opacity:0}}            
            animate={{opacity:1}}
            transition={{duration:2}}
            d="M87.0371 66.6H77.4075V75.4H87.0371V66.6Z" fill="url(#paint9_linear_13_3)"/>
            <defs>
            <filter id="filter0_d_13_3" x="0" y="0" width="284" height="288" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="7"/>
            <feGaussianBlur stdDeviation="6"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.43898 0 0 0 0 0.562404 0 0 0 0 1 0 0 0 0.49 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_3"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_3" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_13_3" x1="222.741" y1="142.2" x2="152.373" y2="141.212" gradientUnits="userSpaceOnUse">
            <stop stop-color="#009A7E"/>
            <stop offset="1" stop-color="#0A0049"/>
            </linearGradient>
            <linearGradient id="paint1_linear_13_3" x1="131.148" y1="142.1" x2="69.5759" y2="141.236" gradientUnits="userSpaceOnUse">
            <stop stop-color="#009A7E"/>
            <stop offset="1" stop-color="#0A0049"/>
            </linearGradient>
            <linearGradient id="paint2_linear_13_3" x1="111.444" y1="141.7" x2="85.0562" y2="141.33" gradientUnits="userSpaceOnUse">
            <stop stop-color="#009A7E"/>
            <stop offset="1" stop-color="#0A0049"/>
            </linearGradient>
            <linearGradient id="paint3_linear_13_3" x1="184.334" y1="216.5" x2="105.294" y2="213.172" gradientUnits="userSpaceOnUse">
            <stop stop-color="#009A7E"/>
            <stop offset="1" stop-color="#0A0049"/>
            </linearGradient>
            <linearGradient id="paint4_linear_13_3" x1="273" y1="140" x2="35.5" y2="137" gradientUnits="userSpaceOnUse">
            <stop stop-color="#009A7E"/>
            <stop offset="1" stop-color="#0A0049"/>
            </linearGradient>
            <linearGradient id="paint5_linear_13_3" x1="125.889" y1="66.8" x2="99.5077" y2="66.2446" gradientUnits="userSpaceOnUse">
            <stop stop-color="#009A7E"/>
            <stop offset="1" stop-color="#0A0049"/>
            </linearGradient>
            <linearGradient id="paint6_linear_13_3" x1="120.852" y1="27.1" x2="112.056" y2="26.9766" gradientUnits="userSpaceOnUse">
            <stop stop-color="#009A7E"/>
            <stop offset="1" stop-color="#0A0049"/>
            </linearGradient>
            <linearGradient id="paint7_linear_13_3" x1="125.666" y1="44.7" x2="116.87" y2="44.5766" gradientUnits="userSpaceOnUse">
            <stop stop-color="#009A7E"/>
            <stop offset="1" stop-color="#0A0049"/>
            </linearGradient>
            <linearGradient id="paint8_linear_13_3" x1="91.9627" y1="53.5001" x2="83.1667" y2="53.3766" gradientUnits="userSpaceOnUse">
            <stop stop-color="#009A7E"/>
            <stop offset="1" stop-color="#0A0049"/>
            </linearGradient>
            <linearGradient id="paint9_linear_13_3" x1="87.1482" y1="71.1" x2="78.3522" y2="70.9765" gradientUnits="userSpaceOnUse">
            <stop stop-color="#009A7E"/>
            <stop offset="1" stop-color="#0A0049"/>
            </linearGradient>
            </defs>
            </svg>
            </motion.div>
          </div>
        </section>
        <section className='section-notes z-20 relative sm:pt-56 pt-36 w-11/12 md:w-full lg:w-[85%] mx-auto'>
          <div className='sm:flex sm:space-x-4'>
          <div className='sm:w-1/2 flex flex-col sm:space-y-4 '>
          <Note x={150}  hiddenContent={<Aboutparag />}  scale={1.7}  bg={"bg-[#e5020f] gradint"} text={"text-white"}>
          <h1 id='about'className='font-semibold pb-8 '>About Me</h1>
            <p style={{WebkitLineClamp:''}} className='text-clamp'>
            I'm not your average web developer. With experience in the world of web3 
            and a background in working with 
            </p>
          </Note>
           <Note x={150} scale={1.5} bg={"bg-white"} text={"text-black"}>
           <h1 className='font-semibold pb-4'>Skills</h1>
            <ul className="list-disc list-inside">
            {skills.map((skill, index) => (
              <li key={index} className=" w-[40%] flex items-start text-start justify-around mb-4">
                {skill.icon}
                <span className="ml-2 w-full text-center">{skill.name}</span>
              </li>
            ))}
          </ul>
           </Note>
           <Note x={-250} mt={"mt-4"} scale={1.3}  bg={"bg-[#61DAFB]"} text={"text-white"} >
            <div className=" mx-auto">
            <h1 className="font-bold mb-4">Currently Learning</h1>
            <div className="tech flex flex-col sm:space-y-4 pt-4">
            <p><strong>Mongo DB   :</strong> streaming and pipelines</p>
            </div>
            </div>
            </Note>
          </div>
         <div className='sm:w-1/2 flex'>
            <Note hiddenContent={<Cpost item={posts[0]}/>} x={-250} scale={1.4} bg={"bg-[#0040E5]"} text={"text-white"}>
              <h1 className='font-semibold pb-4  '>Latest Work</h1>
            <Cpost item={posts[1]}/>
            </Note>
          
            </div>
         </div>
         <section className='mt-4' >

         <Note hiddenContent={<ProjectSlider />} Y={-400}  x={0} mt={"mt-4"} scale={1.2} bg={"bg-[#03C988]"}  text={"text-white"}>
            <h1 id='projects' className='font-semibold pb-4'>Projects</h1>
          </Note>

         </section>
        </section>
      </main>
    </>
  )
}