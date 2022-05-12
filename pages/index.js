import Head from 'next/head'
import Script from 'next/script';
import styles from '../styles/Home.module.css'
import Slider from './slider';

export default function Home() {

    const skills = require("../public/asset/data/skills.json");
    const experiences = require("../public/asset/data/experiences.json");
    const honors = require("../public/asset/data/honors.json");

  const getDurationLinkedin = (date) => {
    const t2 = new Date().getTime();
    const t1 = new Date(date).getTime();

    var diff = Math.floor((t2-t1)/(24*3600*1000));

    const arr = []

    var y = parseInt(diff / 365);

    if(y > 0) {
        arr.push(y)
        arr.push(y == 1 ? "year" : "years")
    }

    var m = parseInt((diff - (y * 365)) / 30)

    if(m > 0) {
        arr.push(m)
        arr.push(m == 1 ? "month" : "months")
    }

    return arr.join(" ")
  }

  return (
    <div>
        <Head>
            <title>Devinca Limto</title>
            <meta name="description" content="Devinca Limto" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Script src="https://use.fontawesome.com/46daf35aa3.js"></Script>
        <Script src="/js/jquery.js"></Script>
        <Script src="/js/scripts.js"></Script>

      <main>
        {/* About */}
        <header className="bg-gray-100" id="about">
            <div className="sm:p-9 max-w-7xl mx-auto">
            {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
            <nav className="pl-4 sm:pl-0 bg-pink-pastel-400 sm:bg-transparent">
                <div className="mx-auto">
                    <div className="relative flex items-center justify-between h-16 ">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" id="mobile-menu-button" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>

                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:block">
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 pr-9 rounded-md text-sm md:text-base font-medium font-semibold" aria-current="page">About</a>

                            <a href="#experience" className="text-gray-600 pr-9 rounded-md text-sm md:text-base font-medium font-semibold whitespace-nowrap">Skill & Experience</a>

                            <a href="#awards" className="text-gray-600 pr-9 rounded-md text-sm md:text-base font-medium font-semibold">Awards</a>

                            <a href="#projects" className="text-gray-600 pr-9 rounded-md text-sm md:text-base font-medium font-semibold">Projects</a>

                            <a href="#contacts" className="text-gray-600 pr-9 rounded-md text-sm md:text-base font-medium font-semibold">Contacts</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className="sm:hidden" id="mobile-menu" style={{display: 'none'}}>
                    <div className="px-2 pt-2 pb-3 space-y-1">

                    <a href="#about" className=" text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">About</a>

                    <a href="#experience" className="text-white block px-3 py-2 rounded-md text-base font-medium">Skill & Experience</a>

                    <a href="#awards" className="text-white block px-3 py-2 rounded-md text-base font-medium">Awards</a>

                    <a href="#projects" className="text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                    <a href="#contacts" className="text-white block px-3 py-2 rounded-md text-base font-medium">Contacts</a>
                    </div>
                </div>
                </nav>

                <div className="sm:grid sm:grid-cols-7 p-6 xs:p-9 sm:p-0">
                    <div className="sm:col-span-4 flex">
                        <div className="sm:grid sm:grid-rows-6">
                            <div className="row-start-2 row-span-3">
                                <div className="pb-3">
                                    <h3 className="text-2xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2 title">Meet</h3>
                                    <h3 className="text-2xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2 title">Devinca Limto</h3>
                                </div>
                                <div className="pb-4">
                                    <p className="text-lg">Fullstack Developer With More Than 3 Years of Experience as Software Developer and Lecturer</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="pr-5">
                                        <button type="button" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-pink-pastel-400 hover:bg-pink-pastel-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-pastel-200">
                                            See my porfolio
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4">
                                        <a href="https://www.linkedin.com/in/devinca-limto-1a9b5b186/">
                                            <i aria-hidden="true" className="fa fa-linkedin"></i>
                                        </a>
                                        <a href="https://t.me/devincalmt">
                                            <i aria-hidden="true" className="fa fa-telegram"></i>
                                        </a>
                                        <a href="https://www.instagram.com/devincalmt/">
                                            <i aria-hidden="true" className="fa fa-instagram"></i>
                                        </a>
                                        <a href="https://github.com/devincalmt">
                                            <i aria-hidden="true" className="fa fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 hidden sm:block">
                      <img src="/asset/img/Devinca Limto.png" alt="Devinca Limto"/>
                    </div>
                </div>
            </div>
        </header>

        {/* Skills & Experience */}
        <div id="experience">
            <div className="p-6 xs:p-9 max-w-7xl mx-auto grid sm:grid-cols-2 gap-x-12">
                <div className="skills-container">
                    <div className="skills-description">
                        <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl whitespace-nowrap sm:whitespace-normal font-bold text-gray-700 dark:text-gray-200 my-2 title pb-3">Skills & Experience</h3>
                        <div className="flex mt-3">
                            <div className="mini-line">
                                <div></div>
                            </div>
                            <p className="leading-7 text-sm xs:text-base">A specialist in website development. Have taught various programming subjects in BINUS University.</p>
                        </div>
                    </div>
                    <div className="list-skills-container pt-0 sm:pt-5 pb-5">
                        <h5 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2 title pb-3">Skills</h5>
                        <div className="grid grid-cols-4 2xs:grid-cols-6 sm2:grid-cols-4 gap-x-4 2md:gap-x-12 gap-y-4">
                            {
                                skills.map((s, k) => {
                                    return (
                                        <div className="text-center" key={k}>
                                            <img src={s.image} alt="" srcSet=""/>
                                            <h6 className="hidden 2md:block text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 my-2 title">{s.name}</h6>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="experience-container">
                    <h5 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2 title pb-0 md:pb-5">Experience</h5>
                    <div className="list-experience">
                        {
                            experiences.map((e, k) => {
                                return (
                                    <div className={"grid grid-cols-4 grid-rows-"+(e.position.length+1)+" gap-x-2 xs:gap-x-3 mt-4"} key={k}>
                                        <div className="company-left row-span-full">
                                            <div className="rect-img-container">
                                                <img className="rect-img" src={e.company_image} alt=""/>
                                            </div>
                                        </div>
                                        <div className="company-right col-span-3">
                                            <h6 className="text-base md:text-base lg:text-xl xl:text-2xl font-bold text-gray-700 dark:text-gray-200 title whitespace-nowrap">{e.company_name}</h6>
                                            <p className="text-sm md:text-base lg:text-xl whitespace-nowrap">
                                            {getDurationLinkedin(e.start_date, false, true, true)}
                                            </p>
                                        </div>
                                        <ul className={"col-span-3 col-start-2 row-span-"+(e.position.length)}>
                                            {
                                                e.position.map((p, k2) => {
                                                    return (
                                                        <li className="relative pt-2 md:pt-3" key={k2}>
                                                            <div className="h-auto">
                                                                <div className="flex items-start">
                                                                    <div className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" >
                                                                        <div className="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400"></div>
                                                                    </div>
                                                                    <span className="ml-4 min-w-0 flex flex-col pb-2">
                                                                        <span className="text-sm xs:text-base xl:text-xl font-semibold tracking-wide">
                                                                            {p.name}
                                                                        </span>
                                                                        <span className="text-sm xs:text-base xl:text-xl text-gray-500">
                                                                            {p.start_date+" - "+(p.current_position ? "Present" : p.end_date)}
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

        {/* Awards */}
        <div id="awards" className="bg-gray-100">
            <div className="p-6 xs:p-9 max-w-7xl mx-auto">
                <h4 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2 title text-center pb-5">Honors & awards</h4>
                <div className="my-5">
                    {
                        honors.map((h, k) => {
                            return (
                                <div className="awards-item py-3" key={k}>
                                    <div>
                                        <h5 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-gray-200 my-2">
                                            {h.name}
                                        </h5>
                                        <h6 className="text-sm sm:text-base text-gray-700 dark:text-gray-200 my-2">
                                            Issued by {h.issued_by} &nbsp; | &nbsp; {h.date}
                                        </h6>
                                    </div>
                                    <div>
                                        <p className="hidden sm:block text-justify">
                                            {h.description}
                                        </p>
                                        <p className="block sm:hidden text-justify">
                                            {h.short_description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

        {/* Projects */}
        <div id="projects">
            <div className="p-6 xs:p-9 max-w-7xl mx-auto">
                <h4 className="text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2 title text-center pb-5">Projects</h4>
                <div className="my-5">
                    <Slider/>
                </div>
                <p className="information">And many more private projects for lecturing purposes.</p>
            </div>
        </div>
        
        {/* Contacts */}
        <div id="contacts" className='p-6 sm:p-16'>
            <div className="max-w-2xl p-1 sm:p-16 mx-auto text-center contact-container">
                <div>
                    <h4 className="text-xl 2xs:text-2xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2 title text-center">
                        Interested to work <br/>
                        with me?
                    </h4>
                </div>
                <div className="py-1 xs:py-3">
                    <a href="mailto: devincalimtobisnis@gmail.com">
                        <button type="button" className="inline-flex items-center px-6 py-3 border text-base font-medium rounded-full shadow-sm bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-pastel-200 text-xs md:text-base">
                            devincalimtobisnis@gmail.com
                        </button>
                    </a>
                </div>
                <div className="contact-social-media">
                    <a href="https://www.linkedin.com/in/devinca-limto-1a9b5b186/">
                        <i aria-hidden="true" className="fa fa-linkedin"></i>
                    </a>
                    <a href="https://t.me/devincalmt">
                        <i aria-hidden="true" className="fa fa-telegram"></i>
                    </a>
                    <a href="https://www.instagram.com/devincalmt/">
                        <i aria-hidden="true" className="fa fa-instagram"></i>
                    </a>
                    <a href="https://github.com/devincalmt">
                        <i aria-hidden="true" className="fa fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; 2022 Devinca Limto. All rights reserved.
      </footer>
    </div>
  )
}
