import Head from 'next/head'
import Script from 'next/script';
import styles from '../styles/Home.module.css'
import Slider from './slider';
import {motion} from 'framer-motion'
import {fadeIn, fadeInUp, stagger} from '../public/js/animation'

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
    <motion.div 
        exit={{opacity: 0}}
        initial='initial'
        animate='animate'
    >
        <Head>
            <title>Devinca Limto</title>
            <meta name="description" content="Devinca Limto" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* <Script src="https://use.fontawesome.com/46daf35aa3.js"></Script> */}
        <Script src="/asset/fontawesome/js/brands.js"></Script>
        <Script src="/asset/fontawesome/js/solid.js"></Script>
        <Script src="/asset/fontawesome/js/fontawesome.js"></Script>
        <Script src="/js/jquery.js"></Script>
        <Script src="/js/scripts.js"></Script>

      <main>
        {/* About */}
        <header className="bg-gray-100" id="about">
            <motion.div variants={fadeIn} className="sm:p-9 max-w-7xl mx-auto">
            {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
            <nav className="pl-4 sm:pl-0 bg-pink-pastel-400 sm:bg-transparent">
                <motion.div variants={fadeIn} className="mx-auto">
                    <motion.div variants={fadeIn} className="relative flex items-center justify-between h-16 ">
                    <motion.div variants={fadeIn} className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
                    </motion.div>
                    <motion.div variants={fadeIn} className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <motion.div variants={fadeIn} className="hidden sm:block">
                        <motion.div variants={fadeIn} className="flex space-x-4">
                            <a href="#" className="text-gray-600 pr-9 rounded-md text-sm md:text-base font-medium font-semibold" aria-current="page">About</a>

                            <a href="#experience" className="text-gray-600 pr-9 rounded-md text-sm md:text-base font-medium font-semibold whitespace-nowrap">Skill & Experience</a>

                            <a href="#awards" className="text-gray-600 pr-9 rounded-md text-sm md:text-base font-medium font-semibold">Awards</a>

                            <a href="#projects" className="text-gray-600 pr-9 rounded-md text-sm md:text-base font-medium font-semibold">Projects</a>

                            <a href="#contacts" className="text-gray-600 pr-9 rounded-md text-sm md:text-base font-medium font-semibold">Contacts</a>
                        </motion.div>
                        </motion.div>
                    </motion.div>
                    </motion.div>
                </motion.div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <motion.div variants={fadeInUp} className="sm:hidden" id="mobile-menu" style={{display: 'none'}}>
                    <motion.div variants={fadeInUp} className="px-2 pt-2 pb-3 space-y-1">

                    <a href="#about" className=" text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">About</a>

                    <a href="#experience" className="text-white block px-3 py-2 rounded-md text-base font-medium">Skill & Experience</a>

                    <a href="#awards" className="text-white block px-3 py-2 rounded-md text-base font-medium">Awards</a>

                    <a href="#projects" className="text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                    <a href="#contacts" className="text-white block px-3 py-2 rounded-md text-base font-medium">Contacts</a>
                    </motion.div>
                </motion.div>
                </nav>

                <motion.div variants={stagger} className="sm:grid sm:grid-cols-7 p-6 xs:p-9 sm:p-0">
                    <motion.div variants={fadeIn} className="sm:col-span-4 flex">
                        <motion.div variants={fadeIn} className="sm:grid sm:grid-rows-6">
                            <motion.div variants={fadeIn} className="row-start-2 row-span-3">
                                <motion.div variants={fadeIn} className="pb-3">
                                    <h3 className="text-2xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2 title">Meet</h3>
                                    <h3 className="text-2xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2 title">Devinca Limto</h3>
                                </motion.div>
                                <motion.div variants={fadeIn} className="pb-4">
                                    <p className="text-lg">Fullstack Developer With More Than 3 Years of Experience as Software Developer and Lecturer</p>
                                </motion.div>
                                <motion.div variants={fadeIn} className="flex items-center">
                                    <motion.div variants={fadeIn} className="pr-5">
                                        <button type="button" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-pink-pastel-400 hover:bg-pink-pastel-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-pastel-200">
                                            See my porfolio
                                        </button>
                                    </motion.div>
                                    <motion.div variants={fadeIn} className="grid grid-cols-4 gap-4">
                                        <a href="https://www.linkedin.com/in/devinca-limto-1a9b5b186/">
                                            <i aria-hidden="true" className="fab fa-linkedin"></i>
                                        </a>
                                        <a href="https://t.me/devincalmt">
                                            <i aria-hidden="true" className="fab fa-telegram"></i>
                                        </a>
                                        <a href="https://www.instagram.com/devincalmt/">
                                            <i aria-hidden="true" className="fab fa-instagram"></i>
                                        </a>
                                        <a href="https://github.com/devincalmt">
                                            <i aria-hidden="true" className="fab fa-github"></i>
                                        </a>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div className="col-span-3 hidden sm:block">
                      <motion.img 
                        initial={{y: 40, opacity: 0}} 
                        animate={{y: 0, opacity: 1}} 
                        transition={{delay: 0.2}}
                        src="/asset/img/Devinca Limto.png" alt="Devinca Limto"
                    />
                    </motion.div>
                </motion.div>
            </motion.div>
        </header>

        {/* Skills & Experience */}
        <motion.div variants={fadeInUp} id="experience">
            <motion.div variants={fadeInUp} className="p-6 xs:p-9 max-w-7xl mx-auto grid sm:grid-cols-2 gap-x-12">
                <motion.div variants={fadeInUp} className="skills-container">
                    <motion.div variants={fadeInUp} className="skills-description">
                        <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl whitespace-nowrap sm:whitespace-normal font-bold text-gray-700 dark:text-gray-200 my-2 title pb-3">Skills & Experience</h3>
                        <motion.div variants={fadeInUp} className="flex mt-3">
                            <motion.div variants={fadeInUp} className="mini-line">
                                <motion.div variants={fadeInUp}></motion.div>
                            </motion.div>
                            <p className="leading-7 text-sm xs:text-base">A specialist in website development. Have taught various programming subjects in BINUS University.</p>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="list-skills-container pt-0 sm:pt-5 pb-5">
                        <h5 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2 title pb-3">Skills</h5>
                        <motion.div variants={fadeInUp} className="grid grid-cols-4 2xs:grid-cols-6 sm2:grid-cols-4 gap-x-4 2md:gap-x-12 gap-y-4">
                            {
                                skills.map((s, k) => {
                                    return (
                                        <motion.div variants={fadeInUp} className="text-center" key={k}>
                                            <img src={s.image} alt={s.name} srcSet=""/>
                                            <h6 className="hidden 2md:block text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 my-2 title">{s.name}</h6>
                                        </motion.div>
                                    )
                                })
                            }
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div variants={fadeInUp} className="experience-container">
                    <h5 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2 title pb-0 md:pb-5">Experience</h5>
                    <motion.div variants={fadeInUp} className="list-experience">
                        {
                            experiences.map((e, k) => {
                                return (
                                    <motion.div variants={fadeInUp} className={"grid grid-cols-4 grid-rows-"+(e.position.length+1)+" gap-x-2 xs:gap-x-3 mt-4"} key={k}>
                                        <motion.div variants={fadeInUp} className="company-left row-span-full">
                                            <motion.div variants={fadeInUp} className="rect-img-container">
                                                <img className="rect-img" src={e.company_image} alt={e.company_name}/>
                                            </motion.div>
                                        </motion.div>
                                        <motion.div variants={fadeInUp} className="company-right col-span-3">
                                            <h6 className="text-base md:text-base lg:text-xl xl:text-2xl font-bold text-gray-700 dark:text-gray-200 title whitespace-nowrap">{e.company_name}</h6>
                                            <p className="text-sm md:text-base lg:text-xl whitespace-nowrap">
                                            {getDurationLinkedin(e.start_date, false, true, true)}
                                            </p>
                                        </motion.div>
                                        <ul className={"col-span-3 col-start-2 row-span-"+(e.position.length)}>
                                            {
                                                e.position.map((p, k2) => {
                                                    return (
                                                        <li className="relative pt-2 md:pt-3" key={k2}>
                                                            <motion.div variants={fadeInUp} className="h-auto">
                                                                <motion.div variants={fadeInUp} className="flex items-start">
                                                                    <motion.div variants={fadeInUp} className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" >
                                                                        <motion.div variants={fadeInUp} className="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400"></motion.div>
                                                                    </motion.div>
                                                                    <span className="ml-4 min-w-0 flex flex-col pb-2">
                                                                        <span className="text-sm xs:text-base xl:text-xl font-semibold tracking-wide">
                                                                            {p.name}
                                                                        </span>
                                                                        <span className="text-sm xs:text-base xl:text-xl text-gray-500">
                                                                            {p.start_date+" - "+(p.current_position ? "Present" : p.end_date)}
                                                                        </span>
                                                                    </span>
                                                                </motion.div>
                                                            </motion.div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </motion.div>
                                )
                            })
                        }
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>

        {/* Awards */}
        <motion.div variants={fadeInUp} id="awards" className="bg-gray-100">
            <motion.div variants={fadeInUp} className="p-6 xs:p-9 max-w-7xl mx-auto">
                <h4 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2 title text-center pb-5">Honors & awards</h4>
                <motion.div variants={fadeInUp} className="my-5">
                    {
                        honors.map((h, k) => {
                            return (
                                <motion.div variants={fadeInUp} className="awards-item py-3" key={k}>
                                    <motion.div variants={fadeInUp}>
                                        <h5 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-gray-200 my-2">
                                            {h.name}
                                        </h5>
                                        <h6 className="text-sm sm:text-base text-gray-700 dark:text-gray-200 my-2">
                                            Issued by {h.issued_by} &nbsp; | &nbsp; {h.date}
                                        </h6>
                                    </motion.div>
                                    <motion.div variants={fadeInUp}>
                                        <p className="hidden sm:block text-justify">
                                            {h.description}
                                        </p>
                                        <p className="block sm:hidden text-justify">
                                            {h.short_description}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </motion.div>

        {/* Projects */}
        <motion.div variants={fadeInUp} id="projects">
            <motion.div variants={fadeInUp} className="p-6 xs:p-9 max-w-7xl mx-auto">
                <h4 className="text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2 title text-center pb-5">Projects</h4>
                <motion.div variants={fadeInUp} className="my-5">
                    <Slider/>
                </motion.div>
                <p className="information">And many more private projects for lecturing purposes.</p>
            </motion.div>
        </motion.div>
        
        {/* Contacts */}
        <motion.div variants={fadeInUp} id="contacts" className='p-6 sm:p-16'>
            <motion.div variants={fadeInUp} className="max-w-2xl p-1 sm:p-16 mx-auto text-center contact-container">
                <motion.div variants={fadeInUp}>
                    <h4 className="text-xl 2xs:text-2xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2 title text-center">
                        Interested to work <br/>
                        with me?
                    </h4>
                </motion.div>
                <motion.div variants={fadeInUp} className="py-1 xs:py-3">
                    <a href="mailto: devincalimtobisnis@gmail.com">
                        <button type="button" className="inline-flex items-center px-6 py-3 border text-base font-medium rounded-full shadow-sm bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-pastel-200 text-xs md:text-base">
                            devincalimtobisnis@gmail.com
                        </button>
                    </a>
                </motion.div>
                <motion.div variants={fadeInUp} className="contact-social-media">
                    <a href="https://www.linkedin.com/in/devinca-limto-1a9b5b186/">
                        <i aria-hidden="true" className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://t.me/devincalmt">
                        <i aria-hidden="true" className="fab fa-telegram"></i>
                    </a>
                    <a href="https://www.instagram.com/devincalmt/">
                        <i aria-hidden="true" className="fab fa-instagram"></i>
                    </a>
                    <a href="https://github.com/devincalmt">
                        <i aria-hidden="true" className="fab fa-github"></i>
                    </a>
                </motion.div>
            </motion.div>
        </motion.div>
      </main>

      <footer className={styles.footer}>
        &copy; 2022 Devinca Limto. All rights reserved.
      </footer>
    </motion.div>
  )
}
