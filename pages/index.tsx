import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaFileAlt, FaChartBar, FaLaptopCode, FaEye } from 'react-icons/fa'
import ProjectCard from '../components/ProjectCard'
import SkillIcon from '../components/SkillIcon'
import Skill from '../constants/skill'

const Home: NextPage = () => {
  return (
    <>
      {/* About Me section */}
      <section className="p-4 lg:p-12 bg-hint-of-red-600">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-1">Arunangshu Biswas</h2>
          <h3 className="font-extralight text-2xl mb-3">Software Engineer</h3>
          <p className="mb-6">
            I&apos;m a self-taught, passionate software engineer specalized in
            developing scalable backend solutions. I hail from{' '}
            <a
              className="text-havelock-blue-600 cursor-pointer hover:underline hover:text-havelock-blue-700"
              href="https://www.google.com/maps/place/India/@20.7509337,73.7370457,5z/data=!3m1!4b1!4m5!3m4!1s0x30635ff06b92b791:0xd78c4fa1854213a6!8m2!3d20.593684!4d78.96288"
            >
              India
            </a>{' '}
            and currentlly working at{' '}
            <a
              className="text-havelock-blue-600 cursor-pointer hover:underline hover:text-havelock-blue-700"
              href="https://www.crio.do/"
            >
              Crio.Do
            </a>{' '}
            as a backend engineer. From time to time I also dabble in frontend
            development as well. Want to know how I may help your organization?
            Check out my project{' '}
            <Link href={'/portfolio'}>
              <span className="text-havelock-blue-600 cursor-pointer hover:underline hover:text-havelock-blue-700">
                portfolio
              </span>
            </Link>{' '}
            and online{' '}
            <Link href={'/resume'}>
              <span className="text-havelock-blue-600 cursor-pointer hover:underline hover:text-havelock-blue-700">
                resume
              </span>
            </Link>
            .
          </p>
          <div className="flex space-x-4">
            <Link href={'/portfolio'}>
              <button className="flex items-center space-x-2 mb-2 mt-4 px-4 py-1.5 text-white bg-havelock-blue rounded shadow hover:bg-havelock-blue-700">
                <FaLaptopCode />
                <span className="font-bold">View Portfolio</span>
              </button>
            </Link>
            <Link href={'/resume'}>
              <button className="flex items-center space-x-2 mb-2 mt-4 px-4 py-1.5 text-white bg-bali-hai rounded shadow hover:bg-bali-hai-700">
                <FaFileAlt />
                <span className="font-bold">View Resume</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* About Me section end */}

      {/* What I do section */}
      <section className="p-4 lg:p-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold border-l-8 border-havelock-blue pl-4 mb-4">
            My Skills
          </h2>

          <p className="mb-12">
            Over the past 5-6 years I have worked on different types of
            projects, contributed to open-source and on top of that I have 1+
            years of work experience. Below is a quick overview of my main
            technical skill sets and technologies I use. Want to find out more
            about my experience? Check out my online{' '}
            <Link href={'/resume'}>
              <span className="text-havelock-blue-600 cursor-pointer hover:underline hover:text-havelock-blue-700">
                resume
              </span>
            </Link>{' '}
            and project{' '}
            <Link href={'/portfolio'}>
              <span className="text-havelock-blue-600 cursor-pointer hover:underline hover:text-havelock-blue-700">
                portfolio
              </span>
            </Link>
            .
          </p>

          {/* Skill items */}
          <div className="mb-16 grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from(Array(8).keys()).map((i) => (
              <div className="flex flex-col" key={i}>
                <div className="flex py-2 gap-1">
                  <SkillIcon skill={Skill.HTML} />
                  <SkillIcon skill={Skill.CSS} />
                  <SkillIcon skill={Skill.JAVASCRIPT} />
                </div>
                <h3 className="font-bold mb-2">Vanilla HTML/CSS/JS</h3>
                <p>
                  Proficient with the basics of HTML, CSS and JS which are the
                  fundamental building blocks for all websites and frontend
                  libraries.
                </p>
              </div>
            ))}
          </div>

          {/* View more btn */}
          <Link href={'/skills'}>
            <button className="flex items-center space-x-2 my-4 px-4 py-1.5 mx-auto text-white bg-havelock-blue rounded shadow hover:bg-havelock-blue-700">
              <FaChartBar />
              <span className="font-bold">View More</span>
            </button>
          </Link>
        </div>
      </section>

      {/* Featured projects */}
      <section className="p-4 text-white bg-san-juan lg:p-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold border-l-8 border-havelock-blue pl-4 mb-12">
            Featured Projects
          </h2>

          {/* Project cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from(Array(4).keys()).map((i) => (
              <ProjectCard
                imageSrc={'/personal-website/pocketdict.webp'}
                title={'Project Heading'}
                description={'Project description. Lorem ipsum dolor sit amet.'}
                slug={`pocket-dictionary`}
                key={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
