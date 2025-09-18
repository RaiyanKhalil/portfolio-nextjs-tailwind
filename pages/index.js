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
        <title>Raiyan Khalil Shuvo | Portfolio</title>
        <meta name="description" content="Modern portfolio of Raiyan Khalil Shuvo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-br from-myGunMetal via-gray-900 to-myCoral min-h-screen text-white font-Calibri">
        {/* Top Navigation Bar */}
  <nav className="fixed top-0 left-0 w-full z-[100] bg-gray-900 bg-opacity-90 backdrop-blur shadow-lg flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-xl font-burtons text-myCoral">Raiyan Khalil Shuvo</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#hero" className="text-white hover:text-myCoral font-semibold transition">Home</a>
            <a href="#about" className="text-white hover:text-myCoral font-semibold transition">About</a>
            <a href="#services" className="text-white hover:text-myCoral font-semibold transition">Services</a>
            <a href="#projects" className="text-white hover:text-myCoral font-semibold transition">Projects</a>
            <a href="#experience" className="text-white hover:text-myCoral font-semibold transition">Experience</a>
            <a href="#blog" className="text-white hover:text-myCoral font-semibold transition">Blog</a>
            <a href="#testimonials" className="text-white hover:text-myCoral font-semibold transition">Testimonials</a>
            <a href="#contact" className="text-white hover:text-myCoral font-semibold transition">Contact</a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button id="menu-toggle" className="text-white focus:outline-none">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu (hidden by default, toggled by button) */}
        <div id="mobile-menu" className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 z-40 flex-col items-center justify-center hidden">
          <div className="flex flex-col gap-8 items-center justify-center h-full">
            <a href="#hero" className="text-white text-2xl font-semibold hover:text-myCoral transition" onClick={() => document.getElementById('mobile-menu').style.display = 'none'}>Home</a>
            <a href="#about" className="text-white text-2xl font-semibold hover:text-myCoral transition" onClick={() => document.getElementById('mobile-menu').style.display = 'none'}>About</a>
            <a href="#services" className="text-white text-2xl font-semibold hover:text-myCoral transition" onClick={() => document.getElementById('mobile-menu').style.display = 'none'}>Services</a>
            <a href="#projects" className="text-white text-2xl font-semibold hover:text-myCoral transition" onClick={() => document.getElementById('mobile-menu').style.display = 'none'}>Projects</a>
            <a href="#experience" className="text-white text-2xl font-semibold hover:text-myCoral transition" onClick={() => document.getElementById('mobile-menu').style.display = 'none'}>Experience</a>
            <a href="#blog" className="text-white text-2xl font-semibold hover:text-myCoral transition" onClick={() => document.getElementById('mobile-menu').style.display = 'none'}>Blog</a>
            <a href="#testimonials" className="text-white text-2xl font-semibold hover:text-myCoral transition" onClick={() => document.getElementById('mobile-menu').style.display = 'none'}>Testimonials</a>
            <a href="#contact" className="text-white text-2xl font-semibold hover:text-myCoral transition" onClick={() => document.getElementById('mobile-menu').style.display = 'none'}>Contact</a>
          </div>
        </div>
        <script dangerouslySetInnerHTML={{__html:`
          document.getElementById('menu-toggle').onclick = function() {
            var menu = document.getElementById('mobile-menu');
            menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
          }
        `}} />
        {/* Hero Section */}
        <section id="hero" className="flex flex-col items-center justify-center px-4 pt-16 pb-0 text-center animate-fade-in">
          {/* Removed duplicate navigation bar for cleaner layout. Resume button is now accessible via top navigation or elsewhere if needed. */}
          <h2 className="text-4xl sm:text-6xl font-bold text-myCoral mb-4 animate-slide-up">Full Stack JavaScript Developer</h2>
          <p className="max-w-xl mx-auto text-lg sm:text-2xl mb-6 animate-fade-in">I build modern web and mobile apps with a focus on performance, accessibility, and beautiful design.</p>
          <div className="flex gap-6 justify-center text-4xl animate-fade-in">
            <a href="https://www.linkedin.com/in/raiyankhalil/" className="hover:scale-110 transition-transform"><AiFillLinkedin fill='coral' /></a>
            <a href="https://github.com/RaiyanKhalil" className="hover:scale-110 transition-transform"><AiFillGithub fill='coral' /></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 mt-8 overflow-hidden shadow-xl animate-fade-in">
            <Image alt='Raiyan Shuvo' src={raiyan} layout="fill" objectFit='cover'/>
          </div>
        </section>

  {/* About Section */}
  <section id="about" className="max-w-4xl mx-auto px-4 py-16 text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-myCoral mb-4">About Me</h3>
          <p className="text-lg sm:text-xl text-gray-200 mb-6">I'm a passionate developer with experience in building scalable web and mobile applications. I love working with modern JavaScript frameworks and cloud technologies.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-4 animate-fade-in">
            <span className="bg-myCoral text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow hover:scale-105 transition-transform">React</span>
            <span className="bg-myCoral text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow hover:scale-105 transition-transform">Next.js</span>
            <span className="bg-myCoral text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow hover:scale-105 transition-transform">Tailwind</span>
            <span className="bg-myCoral text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow hover:scale-105 transition-transform">Node.js</span>
            <span className="bg-myCoral text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow hover:scale-105 transition-transform">TypeScript</span>
            <span className="bg-myCoral text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow hover:scale-105 transition-transform">Python</span>
            <span className="bg-myCoral text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow hover:scale-105 transition-transform">AWS</span>
          </div>
        </section>

  {/* Services Section */}
  <section id="services" className="max-w-4xl mx-auto px-4 py-16 text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-myCoral mb-8 text-center">What I Do</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in">
              <h4 className="text-xl font-bold mb-2 text-myCoral">Web Development</h4>
              <p className="text-gray-200">Building fast, responsive, and accessible websites using React, Next.js, and Tailwind CSS.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in">
              <h4 className="text-xl font-bold mb-2 text-myCoral">Mobile Apps</h4>
              <p className="text-gray-200">Creating cross-platform mobile apps with React Native and modern APIs.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in">
              <h4 className="text-xl font-bold mb-2 text-myCoral">Cloud & DevOps</h4>
              <p className="text-gray-200">Deploying scalable apps on AWS, GCP, and automating workflows with CI/CD.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in">
              <h4 className="text-xl font-bold mb-2 text-myCoral">UI/UX Design</h4>
              <p className="text-gray-200">Designing beautiful, user-friendly interfaces and experiences.</p>
            </div>
          </div>
        </section>

  {/* Featured Projects Section */}
  <section id="projects" className="max-w-6xl mx-auto px-4 py-16 animate-fade-in">
          <h3 className="text-3xl font-bold text-myCoral mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Example Project Card */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 animate-fade-in">
              <h4 className="text-xl font-bold text-myCoral mb-2">Garbage Recycler & Home Utility Tracker</h4>
              <p className="text-gray-200 mb-4">A mobile app to incentivize garbage recycling through AI and track home utilities.</p>
              <a href="https://github.com/RaiyanKhalil/GarbageRecyclerRewardApplication" target="_blank" rel="noopener" className="mt-auto bg-myCoral text-white px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform">View on GitHub</a>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 animate-fade-in">
              <h4 className="text-xl font-bold text-myCoral mb-2">Food Genie</h4>
              <p className="text-gray-200 mb-4">Track food calories, show recipes, and connect users to professional dietitians worldwide.</p>
              <a href="https://github.com/RaiyanKhalil/FoodGenie" target="_blank" rel="noopener" className="mt-auto bg-myCoral text-white px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform">View on GitHub</a>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 animate-fade-in">
              <h4 className="text-xl font-bold text-myCoral mb-2">Easy Checkup</h4>
              <p className="text-gray-200 mb-4">A PHP/Laravel app to find doctors near users, show relevant doctors on a map, and enable virtual sessions.</p>
              <a href="https://github.com/RaiyanKhalil/easy-check-up" target="_blank" rel="noopener" className="mt-auto bg-myCoral text-white px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform">View on GitHub</a>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 animate-fade-in">
              <h4 className="text-xl font-bold text-myCoral mb-2">Bibliostock</h4>
              <p className="text-gray-200 mb-4">A Spring Boot + VueJS app for bookstore inventory management and ecommerce.</p>
              <a href="#" className="mt-auto bg-myCoral text-white px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform">View Project</a>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 animate-fade-in">
              <h4 className="text-xl font-bold text-myCoral mb-2">Lefties</h4>
              <p className="text-gray-200 mb-4">A native Android app for restaurants to sell leftover food at a discount to reduce waste.</p>
              <a href="https://github.com/RaiyanKhalil/LeftiesFoodApp" target="_blank" rel="noopener" className="mt-auto bg-myCoral text-white px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform">View on GitHub</a>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 animate-fade-in">
              <h4 className="text-xl font-bold text-myCoral mb-2">Product Passport</h4>
              <p className="text-gray-200 mb-4">An iOS/Android app for espares.com to track home appliances, built with React Native.</p>
              <a href="https://productpassport.co.uk/" target="_blank" rel="noopener" className="mt-auto bg-myCoral text-white px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform">View Project</a>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 animate-fade-in">
              <h4 className="text-xl font-bold text-myCoral mb-2">Dui</h4>
              <p className="text-gray-200 mb-4">A Bangla number game for brain training, combining Solitaire and 2048.</p>
              <a href="https://play.google.com/store/apps/details?id=com.reikriya.dui" target="_blank" rel="noopener" className="mt-auto bg-myCoral text-white px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform">View on Play Store</a>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 animate-fade-in">
              <h4 className="text-xl font-bold text-myCoral mb-2">Niyo</h4>
              <p className="text-gray-200 mb-4">A two-player turn-based Bangla word game, Scrabble-like, for vocabulary skills.</p>
              <a href="https://play.google.com/store/apps/details?id=com.reikriya.niyo&hl=en&gl=US" target="_blank" rel="noopener" className="mt-auto bg-myCoral text-white px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform">View on Play Store</a>
            </div>
          </div>
        </section>
  {/* Professional Experience Section */}
  <section id="experience" className="max-w-4xl mx-auto px-4 py-16 animate-fade-in">
        {/* Blog Section */}
        <section id="blog" className="max-w-4xl mx-auto px-4 py-16 text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-myCoral mb-8 text-center">Blog</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 animate-fade-in">
              <h4 className="text-xl font-bold text-myCoral mb-2">How to Build a Modern Portfolio with Next.js & Tailwind</h4>
              <p className="text-gray-200 mb-4">A step-by-step guide to creating a beautiful, responsive portfolio using Next.js and Tailwind CSS.</p>
              <span className="text-gray-400 text-sm">Sep 2025</span>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 animate-fade-in">
              <h4 className="text-xl font-bold text-myCoral mb-2">Top 5 JavaScript Frameworks for 2025</h4>
              <p className="text-gray-200 mb-4">A quick overview of the most popular JavaScript frameworks and why you should learn them.</p>
              <span className="text-gray-400 text-sm">Aug 2025</span>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 animate-fade-in">
              <h4 className="text-xl font-bold text-myCoral mb-2">Tips for Responsive Web Design</h4>
              <p className="text-gray-200 mb-4">Best practices and tools for making your websites look great on any device.</p>
              <span className="text-gray-400 text-sm">Jul 2025</span>
            </div>
          </div>
        </section>
          <h3 className="text-3xl font-bold text-myCoral mb-8 text-center">Professional Experience</h3>
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row justify-between mb-2">
                <span className="font-bold text-lg text-myCoral">Echologyx Ltd, Dhaka, Bangladesh</span>
                <span className="text-gray-400">June 2021 - January 2022</span>
              </div>
              <div className="mb-2 font-semibold text-white">Software Engineer</div>
              <ul className="list-disc list-inside text-gray-200 pl-4">
                <li>Write functional, responsive, and efficient code and take part in peer evaluations across team members.</li>
                <li>Work in a cross-functional team to deliver multiple tests in a Scrum framework.</li>
                <li>Develop and deploy experimentation tests (A/B Tests) for multiple high-profile European clients.</li>
                <li>Generate analytics from experimentation tests like heat maps, bounce rate, check-outs, and click rate.</li>
                <li>Provide technical consultation and feedback to scale CRO Metrics for clients.</li>
                <li>Led full-stack development of new features for the Product Passport mobile application by espares.com using React-Native and StrapiJS.</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row justify-between mb-2">
                <span className="font-bold text-lg text-myCoral">Dokane Dokane AD, Dhaka, Bangladesh</span>
                <span className="text-gray-400">September 2020 - May 2021</span>
              </div>
              <div className="mb-2 font-semibold text-white">Co-Founder | Software Engineer</div>
              <ul className="list-disc list-inside text-gray-200 pl-4">
                <li>Communicate with potential investors about the company’s vision, technological innovations, and progress.</li>
                <li>Manage team workflow in a SCRUM framework by holding Bi-Weekly Sprint Planning, Review, Retrospective, and Daily Scrums.</li>
                <li>Develop and deploy incremental features of an admin application using ReactJS for clients to upload, schedule, and select locations to play their ads.</li>
                <li>Recognised for innovating the FMCG Retail Space by a national newspaper.</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row justify-between mb-2">
                <span className="font-bold text-lg text-myCoral">Techdojo, Dhaka, Bangladesh</span>
                <span className="text-gray-400">September 2019 – August 2020</span>
              </div>
              <div className="mb-2 font-semibold text-white">Junior Software Engineer</div>
              <ul className="list-disc list-inside text-gray-200 pl-4">
                <li>Developed Bengali-to-English phonetics and keyboard generation algorithms for a Bengali word-based game (NIYO).</li>
                <li>Developed core game logic for a Bengali number-based game (DUI), combining Solitaire and 2048.</li>
                <li>Worked in a cross-functional team to deliver two mobile games using React-Native, Firebase, JavaScript.</li>
                <li>Deployed mobile applications to Google Play Store.</li>
                <li>Learned from senior team members on various aspects of development using React, React-Native, Hooks, and reusable components.</li>
              </ul>
            </div>
          </div>
        </section>

  {/* Testimonials Section */}
  <section id="testimonials" className="max-w-4xl mx-auto px-4 py-16 text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-myCoral mb-8 text-center">Testimonials</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg animate-fade-in">
              <p className="text-gray-200 italic mb-4">"Raiyan is a talented developer who delivers quality work on time!"</p>
              <span className="text-myCoral font-bold">- Client Name</span>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg animate-fade-in">
              <p className="text-gray-200 italic mb-4">"Great communication and technical skills. Highly recommended."</p>
              <span className="text-myCoral font-bold">- Client Name</span>
            </div>
          </div>
        </section>

  {/* Contact Section */}
  <section id="contact" className="max-w-4xl mx-auto px-4 py-16 text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-myCoral mb-8 text-center">Contact Me</h3>
          <form className="flex flex-col gap-4 max-w-lg mx-auto">
            <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-myCoral transition" />
            <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-myCoral transition" />
            <textarea placeholder="Your Message" className="p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-myCoral transition" rows={5} />
            <button type="submit" className="bg-myCoral text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform duration-300"
              onClick={() => {
                if (typeof window.gtag === 'function') {
                  window.gtag('event', 'contact_submit', {
                    event_category: 'Button',
                    event_label: 'Contact Form Submit',
                  });
                }
              }}
            >Send Message</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="w-full py-6 text-center text-gray-400 bg-gray-900 animate-fade-in">
          &copy; {new Date().getFullYear()} Raiyan Khalil Shuvo. All rights reserved.
        </footer>
      </main>
    </>
  );
};
