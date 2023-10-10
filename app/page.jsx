import {LiaFacebookSquare , LiaWhatsapp , LiaGithub , LiaLinkedin} from 'react-icons/lia'
import { FaReact, FaJs, FaDatabase , FaFigma } from 'react-icons/fa'; // Import the icons you need
import {TbBrandNextjs} from 'react-icons/tb'
import {SiExpress , SiTypescript} from 'react-icons/si'
import { ImgContainer, Note } from '@/components/note';
import ProjectSlider from '@/components/slider';

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
  return (
    <>
      <main className="container mx-auto  flex flex-col">
        <section className=''>
          <div className="sm:flex w-11/12 justify-between z-20">
            <div className="pt-36 flex sm:justify-around justify-between w-11/12 sm:w-[60%]">
            <div className="social text-5xl flex flex-col text-center  space-y-5 sm:space-y-4">
              <a  target='_blank' href=''>
              <LiaFacebookSquare  className='text-blue-500'/>
              </a>
              <a target='_blank' href="https://wa.me/1279119364">
              <LiaWhatsapp className='text-green-500'/>
              </a>
              <a target='_blank' href="https://www.linkedin.com/services/page/80148a324606595320/">
              <LiaLinkedin  className='text-sky-500'/>
              </a>
              <a target='_blank' href="https://github.com/mahm0udsaad">
              <LiaGithub className='text-white'/>
              </a>
            </div>
            <div className="intro text-6xl text-white w-4/5">
              <span className='hi'>HI</span> I'm <br /> Mahmoud Saad
            <div className="flex  pt-20 sm:w-1/2 justify-around">
              <div className="border-wrap rounded-full">
              <div className="px-4 py-2 bg-[#121924] rounded-full text-sm">Front-End</div>
              </div>
              <div className="border-wrap rounded-full">
              <div className="px-4 py-2 bg-[#121924] rounded-full text-sm"> <a href='/cv..pdf ' className='p-4' target='_blank'>Resume</a></div>
              </div>
            </div>
            </div>
            </div>
          {/* <ImgContainer /> */}
          </div>
        </section>
        <section className='section-notes z-20 relative pt-36  w-11/12 sm:w-[85%] mx-auto'>
          <div className='sm:flex sm:space-x-4'>
          <div className='sm:w-1/2 flex flex-col sm:space-y-4 '>
          <Note x={150}  hiddenContent={<Aboutparag />}  scale={1.7}  bg={"bg-[#e5020f] gradint"} text={"text-white"}>
          <h1 id='about'className='font-semibold pb-8'>About Me</h1>
            <p>
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
          </div>
         <div className='sm:w-1/2 sm:pt-0 pt-3'>
            <Note hiddenContent={<TwoSoft />} x={-250} scale={1.4} bg={"bg-[#0040E5]"} text={"text-white"}>
              <h1 className='font-semibold pb-4  '>Latest Work</h1>
            <div>
                <h1 className='flex font-semibold pb-3  items-start justify-around '>El Sewedy Automation: <span className='text-blue-500'>(</span> <p className='text-sm w-full text-center'>Egyptian Automation Company</p> <span className='text-blue-500'>)</span></h1>
                <div className="img-wrapper flex justify-center">
                  <img  fetchPriority='low' width={200} height={200} src="/images/projects-images/sewedy 1.png" alt="El Sewedy Website" />
                </div>
                  <p>
                  redesign there website  the old website built
                     with HTML , CSS , JQuery in the new version
                      i used Next js for exporting static pages ,
                      and Tailwind css , Framer motion 
                  </p>
            </div>
            </Note>
            <Note x={-250} mt={"mt-4"} scale={1.3}  bg={"bg-[#61DAFB]"} text={"text-white"} >
            <div className="container mx-auto">
            <h1 className="font-bold mb-4">Currently Learning</h1>
            <div className="tech flex flex-col sm:space-y-4 pt-4">
            <p><strong>Asrtro js  :</strong> new js framework</p>
            <p><strong>Mongo DB   :</strong> streaming and pipelines</p>
            <p><strong>Solidity JS:</strong> blockchain Development</p>
            </div>
            </div>
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