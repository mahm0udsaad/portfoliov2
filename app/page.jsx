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
      image: "public\\daily.png",
      name: "daily Travel",
      link: "https://dalitravelsa.com/",
      brief: "Soudi arabia traveling company",
      description: "Transforming a Travel Company Website\r\nI recently had the honor of renewing a travel company's website, transitioning it from PHP to the cutting-edge Next.js framework. With Tailwind CSS for a beautiful UI, Framer Motion for captivating animations, and seamless payment integration, this project was a game-changer in the travel industry."
    },
    {
      image: "public\\sewedy.png",
      name: "El sewedy Automation",
      link: "http://www.elsewedy-automation.com/",
      brief: "Automation company",
      description: "migrating Elsewedy Automation's website to Next.js, a powerful and efficient React framework. Next.js offers lightning-fast performance, SEO optimization, and a highly responsive user interface. We'll also leverage Tailwind CSS to ensure a sleek and modern design that aligns with industry standards.\r\n\r\n"
    }
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
            transition={{ duration:2.5 }}
            className='flex flex-col mx-auto justify-center mt-12 sm:mt-28'>
              <svg width="260" height="264" viewBox="0 0 260 264" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M173.333 101.2C152.095 101.2 134.815 116.992 134.815 136.4C134.815 155.808 152.095 171.6 173.333 171.6C194.572 171.6 211.852 155.808 211.852 136.4C211.852 116.992 194.572 101.2 173.333 101.2ZM173.333 145.2C168.023 145.2 163.704 141.253 163.704 136.4C163.704 131.547 168.023 127.6 173.333 127.6C178.644 127.6 182.963 131.547 182.963 136.4C182.963 141.253 178.644 145.2 173.333 145.2ZM183.055 121.295C181.533 120.476 179.896 119.843 178.148 119.425V110.396C182.525 111.074 186.569 112.64 190.046 114.906L183.055 121.295ZM168.519 119.425C166.771 119.838 165.129 120.472 163.612 121.295L156.621 114.906C160.098 112.64 164.142 111.074 168.519 110.396V119.425ZM156.804 127.516C155.909 128.907 155.215 130.403 154.758 132H144.878C145.619 128 147.333 124.304 149.808 121.128L156.804 127.516ZM154.758 140.8C155.21 142.397 155.904 143.898 156.804 145.284L149.813 151.672C147.333 148.496 145.619 144.8 144.878 140.8H154.758ZM163.612 151.505C165.134 152.324 166.771 152.957 168.519 153.375V162.404C164.142 161.726 160.098 160.16 156.621 157.894L163.612 151.505ZM178.148 153.375C179.896 152.962 181.538 152.328 183.055 151.505L190.046 157.894C186.569 160.16 182.525 161.726 178.148 162.404V153.375ZM189.863 145.284C190.758 143.893 191.452 142.397 191.909 140.8H201.789C201.048 144.8 199.333 148.496 196.859 151.672L189.863 145.284ZM191.909 132C191.456 130.403 190.763 128.902 189.863 127.516L196.854 121.128C199.333 124.304 201.048 128 201.789 132H191.909Z" fill="white"/>
              <path d="M120.37 136.4C120.37 119.416 105.247 105.6 86.6664 105.6C68.086 105.6 52.9626 119.416 52.9626 136.4C52.9626 153.384 68.086 167.2 86.6664 167.2C105.247 167.2 120.37 153.384 120.37 136.4ZM62.5923 136.4C62.5923 124.269 73.3919 114.4 86.6664 114.4C99.9408 114.4 110.74 124.269 110.74 136.4C110.74 148.531 99.9408 158.4 86.6664 158.4C73.3919 158.4 62.5923 148.531 62.5923 136.4Z" fill="white"/>
              <path d="M101.111 136.4C101.111 129.122 94.6301 123.2 86.6664 123.2C78.7027 123.2 72.2219 129.122 72.2219 136.4C72.2219 143.678 78.7027 149.6 86.6664 149.6C94.6301 149.6 101.111 143.678 101.111 136.4ZM81.8516 136.4C81.8516 133.976 84.0086 132 86.6664 132C89.3241 132 91.4812 133.976 91.4812 136.4C91.4812 138.824 89.3241 140.8 86.6664 140.8C84.0086 140.8 81.8516 138.824 81.8516 136.4Z" fill="white"/>
              <path d="M168.519 198H91.4816C88.819 198 86.6667 199.971 86.6667 202.4V220C86.6667 222.429 88.819 224.4 91.4816 224.4H168.519C171.181 224.4 173.333 222.429 173.333 220V202.4C173.333 199.971 171.181 198 168.519 198ZM134.815 206.8H144.445V215.6H134.815V206.8ZM125.185 215.6H115.556V206.8H125.185V215.6ZM96.2964 206.8H105.926V215.6H96.2964V206.8ZM163.704 215.6H154.074V206.8H163.704V215.6Z" fill="white"/>
              <path d="M245.556 114.4H239.417L240.736 83.776C240.789 82.5792 240.303 81.4132 239.397 80.5552C238.487 79.6884 237.236 79.2 235.926 79.2H202.222V61.6H212.738C214.731 66.7084 220.027 70.4 226.296 70.4C234.26 70.4 240.741 64.4776 240.741 57.2C240.741 49.9224 234.26 44 226.296 44C220.027 44 214.731 47.6916 212.738 52.8H197.407C194.745 52.8 192.593 54.7712 192.593 57.2V79.2H134.815V70.4H173.333C175.996 70.4 178.148 68.4288 178.148 66V35.2H187.778V39.6C187.778 42.0288 189.93 44 192.593 44H211.852C214.514 44 216.667 42.0288 216.667 39.6V22C216.667 19.5712 214.514 17.6 211.852 17.6H192.593C189.93 17.6 187.778 19.5712 187.778 22V26.4H173.333C170.671 26.4 168.519 28.3712 168.519 30.8V61.6H134.815V48.4H154.074C156.737 48.4 158.889 46.4288 158.889 44V25.5904C164.479 23.7688 168.519 18.9288 168.519 13.2C168.519 5.9224 162.038 0 154.074 0C146.11 0 139.63 5.9224 139.63 13.2C139.63 18.9288 143.669 23.7688 149.259 25.5904V39.6H134.815V28.358C134.815 12.7204 120.89 0 103.783 0H103.259C86.8689 0 73.4404 11.6776 72.333 26.4H69.603C55.1152 26.4 43.3333 37.1668 43.3333 50.402V53.6932C32.2448 56.5048 24.0741 65.7888 24.0741 76.802V79.2C22.7644 79.2 21.5126 79.6884 20.6026 80.5508C19.6974 81.4132 19.2111 82.5748 19.2641 83.7716L20.5833 114.4H14.4444C6.48074 114.4 0 120.322 0 127.6V162.8C0 170.078 6.48074 176 14.4444 176H24.2859C29.4089 225.65 74.9378 264 130 264C185.043 264 230.567 225.672 235.709 176H245.556C253.519 176 260 170.078 260 162.8V127.6C260 120.322 253.519 114.4 245.556 114.4ZM226.296 52.8C228.954 52.8 231.111 54.7756 231.111 57.2C231.111 59.6244 228.954 61.6 226.296 61.6C223.639 61.6 221.481 59.6244 221.481 57.2C221.481 54.7756 223.639 52.8 226.296 52.8ZM197.407 26.4H207.037V35.2H197.407V26.4ZM154.074 8.8C156.732 8.8 158.889 10.7756 158.889 13.2C158.889 15.6244 156.732 17.6 154.074 17.6C151.416 17.6 149.259 15.6244 149.259 13.2C149.259 10.7756 151.416 8.8 154.074 8.8ZM250.37 127.6V132H231.111V123.2H234.409H245.556C248.213 123.2 250.37 125.176 250.37 127.6ZM231.111 140.8H250.37V149.6H231.111V140.8ZM33.7037 76.802C33.7037 68.42 41.1667 61.6 50.3389 61.6H57.7778V52.8H52.963V50.402C52.963 42.02 60.4259 35.2 69.5982 35.2H91.4815V26.4H82.0685C83.1615 16.544 92.1893 8.8 103.254 8.8H103.779C115.584 8.8 125.185 17.5736 125.185 28.358V79.2H33.7037V76.802ZM14.4444 123.2H25.5907H28.8889V132H9.62963V127.6C9.62963 125.176 11.7867 123.2 14.4444 123.2ZM28.8889 149.6H9.62963V140.8H28.8889V149.6ZM9.62963 162.8V158.4H28.8889V167.2H28.6337H14.4444C11.7867 167.2 9.62963 165.224 9.62963 162.8ZM130 255.2C80.287 255.2 39.0096 220.858 33.8433 176C34.2044 175.991 34.5222 175.868 34.8544 175.789C35.1096 175.732 35.3841 175.723 35.62 175.63C35.9667 175.494 36.2459 175.265 36.5493 175.058C36.737 174.926 36.9633 174.843 37.127 174.689C37.4111 174.425 37.5989 174.095 37.8011 173.774C37.907 173.611 38.0611 173.479 38.143 173.303C38.3837 172.775 38.5185 172.203 38.5185 171.6V118.8C38.5185 116.371 36.3663 114.4 33.7037 114.4H30.2178L29.0815 88H130H230.919L229.782 114.4H226.296C223.634 114.4 221.481 116.371 221.481 118.8V171.6C221.481 172.203 221.616 172.775 221.857 173.298C221.944 173.483 222.103 173.624 222.218 173.796C222.42 174.108 222.599 174.434 222.878 174.689C223.056 174.856 223.297 174.953 223.509 175.089C223.793 175.283 224.057 175.498 224.385 175.63C224.63 175.727 224.914 175.736 225.184 175.793C225.507 175.868 225.815 175.991 226.166 176C221.106 220.766 179.78 255.2 130 255.2ZM245.556 167.2H231.366H231.111V158.4H250.37V162.8C250.37 165.224 248.213 167.2 245.556 167.2Z" fill="white"/>
              <path d="M105.926 52.8H96.2964V61.6H86.6667V70.4H115.556V61.6H105.926V52.8Z" fill="white"/>
              <path d="M110.741 17.6H101.111V26.4H110.741V17.6Z" fill="white"/>
              <path d="M115.555 35.2H105.926V44H115.555V35.2Z" fill="white"/>
              <path d="M81.8516 44H72.2219V52.8H81.8516V44Z" fill="white"/>
              <path d="M77.0371 61.6H67.4075V70.4H77.0371V61.6Z" fill="white"/>
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