import Head from 'next/head'
import { BsToggle2On } from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
// import deved from "../public/dev-ed-wave.png"
// import niyo from '../public/niyo.png'
import raiyan from '../public/RaiyanTwo.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Raiyan Khalil Shuvo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-myGunMetal text-white px-10 lg:max-w-[70%] lg:mx-auto pb-12 md:px-20 lg:px-15 font-Calibri'>
        <section className=''>
          <nav className='py-10 mb-8 flex justify-between'>
            <h1 className='text-xl font-burtons'>Raiyan Khalil Shuvo</h1>
            <ul className='flex items-center'>
              {/* <li>
                <BsToggle2On className='cursor-pointer text-xl'/>
              </li> */}
              <li>
                <a className='bg-myCoral text-white px-4 py-2 rounded-md ml-8' href="/Raiyan_Khalil_Shuvo.pdf" download="Raiyan_Khalil_Shuvo">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-4xl py-2 text-myCoral font-medium md:text-6xl'>Raiyan Khalil Shuvo</h2>
            <h3 className='text-3xl py-2 md:text-3xl'>Full Stack JavaScript Developer</h3>
            {/* <p className='text-2xl py-5 leading-8 text-white mx-w-xl'>Postgradute and Full-Stack JavaScript Engineer with over two years of professional development experience.</p>       */}
            <p className='text-2xl py-5 leading-8 text-white mx-w-xl'>I am a highly motivated and versatile Full Stack JavaScript Engineer with a passion for web and mobile application development. My professional journey has been driven by a commitment to technical excellence and a thirst for continuous learning. I'm currently based in Vancouver, BC, and I'm eager to contribute my skills and experience to innovative projects and collaborative teams.</p>      
          
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 md:text-5xl'>
            <a href="https://www.linkedin.com/in/raiyankhalil/"><AiFillLinkedin fill='coral' /></a>
            <a href="https://github.com/RaiyanKhalil"><AiFillGithub fill='coral' /></a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-4 overflow-hidden'>
            <Image alt='Raiyan Shuvo' src={raiyan} layout="fill" objectFit='cover'/>
          </div>
        </section>
{/* className='list-disc' */}
        <section className='my-4 '>
          <h3 className='text-3xl py-2 my-4 text-center'>Skills</h3>
          <div className='grid grid-cols-3 md:grid-cols-4 gap-1 text-center '>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>HTML</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>CSS</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>JQuery</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>Javascript</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>Typescript</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>Tailwind</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>Bootstrap</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>ReactJS</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>React-Native</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>Python</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>Django</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>Java</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>Spring Boot</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>SQL/NoSQL</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>Git</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>PHP/Laravel</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>VueJS</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>Express</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>Agile</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>REST/JSON</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>C#</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>ASP.NET</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>NEXTJS</div>
            <div className='bg-myCoral text-gray-800 px-4 py-2 rounded-md'>AWS/GCP</div>
          </div>
        </section>
        <section className='my-4'>
          <h3 className='text-3xl py-2 text-center my-2'>Professional Experience</h3>

          <div className='min-w-fit mt-5 py-2 leading-loose'>
            <div className='flex justify-between'>              
              <h4>Echologyx Ltd, Dhaka, Bangladesh</h4>
              <h4>June 2021 - January 2022</h4>
            </div>
            <div>
              <h4 className='font-bold'>Software Engineer</h4>
              <ul className='list-inside list-disc pl-4'>
                <li>Write functional, responsive, and efficient code and take part in peer evaluations across team members.</li>
                <li>Work in a cross-functional team to deliver multiple tests in a Scrum framework. </li>
                <li>Develop and deploy experimentation tests (A/B Tests) for multiple high-profile European clients.</li>
                <li>Generate analytics from experimentation tests like heat maps, bounce rate, check-outs, and click rate.</li>
                <li>Provide technical consultation and feedback to scale CRO Metrics for clients.</li>
                <li>Led full-stack development of new features for the Product Passport mobile application by espares.com using React-Native and StrapiJS. </li>
              </ul>
            </div>
          </div>

          <div className='min-w-fit mt-5 py-2 leading-loose'>
            <div className='flex justify-between'>              
              <h4>Dokane Dokane AD, Dhaka, Bangladesh</h4>
              <h4>September 2020 - May 2021</h4>
            </div>
            <div>
              <h4 className='font-bold'>Co-Founder | Software Engineer</h4>
              <ul className='list-inside list-disc pl-4'>
                <li>Communicate with potential investors about the company’s vision, technological innovations, and progress.</li>
                <li>Manage team workflow in a SCRUM framework by holding Bi-Weekly Sprint Planning, Review, Retrospective, and Daily Scrums.</li>
                <li>Develop and deploy incremental features of an admin application using ReactJS for clients to upload, schedule, and select locations to play their ads.</li>
                <li>Recognised for innovating the FMCG Retail Space by a national <a className='font-bold italic' href="https://www.tbsnews.net/feature/panorama/dokane-dokane-ad-packaging-age-old-marketing-strategy-strokes-tech-180583">newspaper</a>.</li>
              </ul>
            </div>
          </div>

          <div className='min-w-fit mt-5 py-2 leading-loose'>
            <div className='flex justify-between'>              
              <h4>Techdojo, Dhaka, Bangladesh</h4>
              <h4>September 2019 – August 2020</h4>
            </div>
            <div>
              <h4 className='font-bold'>Junior Software Engineer</h4>
              <ul className='list-inside list-disc pl-4'>
                <li>Developed efficient Bengali-to-English phonetics algorithm and keyboard generation algorithm for a Bengali word-based game, <a href="https://play.google.com/store/apps/details?id=com.reikriya.niyo&hl=en&gl=US">NIYO</a>, using vanilla JavaScript.</li>
                <li>Developed core game logic for a Bengali number-based game, <a href="https://play.google.com/store/apps/details?id=com.reikriya.dui&hl=en&gl=US">DUI</a>, which is a combination of Solitaire and 2048.</li>
                <li>Work in a cross-functional team to deliver two mobile games using React-Native, Firebase, JavaScript.</li>
                <li>Deploy mobile application in Google Play Store.</li>
                <li>Learn from senior team members on various aspects of development using React, React-Native, Hooks, Reuseable Components, and more.</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h3 className='text-3xl py-2 text-center'>Projects</h3>
        
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>

          <div class="max-w-md mx-auto bg-myGray rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex md:flex-col">
              <div class="md:flex-shrink-0">
              {/* <img class="h-48 w-full object-cover md:h-48 md:w-full" src="https://via.placeholder.com/300" alt="Card image" /> */}
                {/* <Image src={deved}  /> */}
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-gray-300 font-semibold">Mobile</div>
                <p class="block mt-1 text-lg leading-tight font-medium text-myCoral">Garbage Recycler & Home Utility Tracker</p>
                <p class="mt-2 text-white h-36 ">A mobile application to incentivize garbage recycling through AI. And also keep track of all of your utilies like electricity, gas and water through one app.</p>
                <a href="https://github.com/RaiyanKhalil/GarbageRecyclerRewardApplication" class="mt-4 inline-block px-4 py-2 bg-myCoral text-white font-semibold rounded-lg">Read more</a>
              </div>
            </div>
          </div>

          <div class="max-w-md mx-auto bg-myGray rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex md:flex-col">
              <div class="md:flex-shrink-0">
              {/* <img class="h-48 w-full object-cover md:h-48 md:w-full" src="https://via.placeholder.com/300" alt="Card image" /> */}
                {/* <Image src={deved}  /> */}
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-gray-300 font-semibold">Mobile</div>
                <p class="block mt-1 text-lg leading-tight font-medium text-myCoral">Food Genie</p>
                <p class="mt-2 text-white h-36 ">An application that lets you track food calories, show recipes, and also lets user connect to professional dietitians all over the world.</p>
                <a href="https://github.com/RaiyanKhalil/FoodGenie" class="mt-4 inline-block px-4 py-2 bg-myCoral text-white font-semibold rounded-lg">Read more</a>
              </div>
            </div>
          </div>


            <div class="max-w-md mx-auto bg-myGray rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex md:flex-col">
                <div class="md:flex-shrink-0">
                {/* <img class="h-48 w-full object-cover md:h-48 md:w-full" src="https://via.placeholder.com/300" alt="Card image" /> */}
                  {/* <Image src={deved}  /> */}
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-gray-300 font-semibold">Web</div>
                  <p class="block mt-1 text-lg leading-tight font-medium text-myCoral">Easy Checkup</p>
                  <p class="mt-2 text-white h-36 ">A PHP/Laravel application to find doctors near users, based on their location. It will also show a list of relevant doctors in a map based on what type doctors they are searching for. Also has a system for doctors & patients to have virtual sessions.</p>
                  <a href="https://github.com/RaiyanKhalil/easy-check-up" class="mt-4 inline-block px-4 py-2 bg-myCoral text-white font-semibold rounded-lg">Read more</a>
                </div>
              </div>
            </div>


            <div class="max-w-md mx-auto bg-myGray rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex md:flex-col">
                <div class="md:flex-shrink-0">
                {/* <img class="h-48 w-full object-cover md:h-48 md:w-full" src="https://via.placeholder.com/300" alt="Card image" /> */}
                  {/* <Image src={deved}  /> */}
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-gray-300 font-semibold">Web</div>
                  <p  class="block mt-1 text-lg leading-tight font-medium text-myCoral">Bibliostock</p>
                  <p class="mt-2 text-white h-36 ">A spring boot application with VueJS as frontend. This application is book management system so mom & pop bookstores can manage their inventory with built in ecommerce platform.</p>
                  <a href="#" class="mt-4 inline-block px-4 py-2 bg-myCoral text-white font-semibold rounded-lg">Read more</a>
                </div>
              </div>
            </div>
            
            <div class="max-w-md mx-auto bg-myGray rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex md:flex-col">
                <div class="md:flex-shrink-0">
                {/* <img class="h-48 w-full object-cover md:h-48 md:w-full" src="https://via.placeholder.com/300" alt="Card image" /> */}
                  {/* <Image src={deved}  /> */}
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-gray-300 font-semibold">Mobile</div>
                  <p class="block mt-1 text-lg leading-tight font-medium text-myCoral">Lefties</p>
                  <p class="mt-2 text-white h-36 ">A native android application for restaurants to sell their leftoverr foods at a discounted price to reduce food wastes.</p>
                  <a href="https://github.com/RaiyanKhalil/LeftiesFoodApp" class="mt-4 inline-block px-4 py-2 bg-myCoral text-white font-semibold rounded-lg">Read more</a>
                </div>
              </div>
            </div>

            <div class="max-w-md mx-auto bg-myGray rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex md:flex-col">
                <div class="md:flex-shrink-0">
                {/* <img class="h-48 w-full object-cover md:h-48 md:w-full" src="https://via.placeholder.com/300" alt="Card image" /> */}
                  {/* <Image src={deved}  /> */}
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-gray-300 font-semibold">Mobile</div>
                  <p class="block mt-1 text-lg leading-tight font-medium text-myCoral">Product Passport</p>
                  <p class="mt-2 text-white h-36 ">An IOS/Android application for "espares.com" to keep track of appliances at home. This applications was developed using React-Native</p>
                  <a href='https://productpassport.co.uk/' class="mt-4 inline-block px-4 py-2 bg-myCoral text-white font-semibold rounded-lg">Read more</a>
                </div>
              </div>
            </div>

            <div class="max-w-md mx-auto bg-myGray rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex md:flex-col">
                <div class="md:flex-shrink-0">
                {/* <img class="h-48 w-full object-cover md:h-48 md:w-full" src="https://via.placeholder.com/300" alt="Card image" /> */}
                  {/* <Image src={deved}  /> */}
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-gray-300 font-semibold">Mobile</div>
                  <p class="block mt-1 text-lg leading-tight font-medium text-myCoral">Dui</p>
                  <p class="mt-2 text-white h-36 ">A simple Bangla number game. A brain training game to enhance your Math skills. Start adding similar numbers and become a math Genius!</p>
                  <a href="https://play.google.com/store/apps/details?id=com.reikriya.dui" class="mt-4 inline-block px-4 py-2 bg-myCoral text-white font-semibold rounded-lg">Read more</a>
                </div>
              </div>
            </div>
            
            <div class="max-w-md mx-auto bg-myGray rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex md:flex-col">
                <div class="md:flex-shrink-0">
                {/* <Image src={niyo} objectFit='cover' height="50%" width="100%" /> */}
                {/* <img class="h-48 w-full object-cover md:h-48 md:w-full" src="" alt="Card image" /> */}
                  {/* <Image src={deved}  /> */}
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-gray-300 font-semibold">Mobile</div>
                  <p class="block mt-1 text-lg leading-tight font-medium text-myCoral">Niyo</p>
                  <p class="mt-2 text-white h-36">A unique two-player turn-based game with Bangla words. If you wanted to enhance or show-off your Bangla vocab skills with your friends, this Scrabble-like game with Bangla words is for you!</p>
                  <a href="https://play.google.com/store/apps/details?id=com.reikriya.niyo&hl=en&gl=US" class="mt-4 inline-block px-4 py-2 bg-myCoral text-white font-semibold rounded-lg">Read more</a>
                </div>
              </div>
            </div>
          </div>

        </section> 
      </main>
    </>
  );
};
