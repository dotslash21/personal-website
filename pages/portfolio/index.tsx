import { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaEye, FaPaperPlane } from 'react-icons/fa'
import ProjectCard from '../../components/ProjectCard'

const FilterBar = ({ onChange }: { onChange: (selected: string) => void }) => {
  const [selected, setSelected] = useState<string>('all')

  useEffect(() => {
    onChange(selected)
  }, [onChange, selected])

  return (
    <ul className="flex justify-center gap-8 font-bold text-gray-500">
      <li
        className={`p-1 cursor-pointer ${
          selected == 'all'
            ? 'text-havelock-blue border-havelock-blue border-t-2'
            : ''
        }`}
        onClick={() => setSelected('all')}
      >
        All
      </li>
      <li
        className={`p-1 cursor-pointer ${
          selected == 'webapps'
            ? 'text-havelock-blue border-havelock-blue border-t-2'
            : ''
        }`}
        onClick={() => setSelected('webapps')}
      >
        Web Apps
      </li>
      <li
        className={`p-1 cursor-pointer ${
          selected == 'mobileapps'
            ? 'text-havelock-blue border-havelock-blue border-t-2'
            : ''
        }`}
        onClick={() => setSelected('mobileapps')}
      >
        Mobile Apps
      </li>
      <li
        className={`p-1 cursor-pointer ${
          selected == 'frontend'
            ? 'text-havelock-blue border-havelock-blue border-t-2'
            : ''
        }`}
        onClick={() => setSelected('frontend')}
      >
        Frontend
      </li>
      <li
        className={`p-1 cursor-pointer ${
          selected == 'backend'
            ? 'text-havelock-blue border-havelock-blue border-t-2'
            : ''
        }`}
        onClick={() => setSelected('backend')}
      >
        Backend
      </li>
    </ul>
  )
}

const Portfolio: NextPage = () => {
  return (
    <>
      {/* Heading section */}
      <section className="p-4 lg:p-12 bg-hint-of-red-600">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold">Portfolio</h2>
          <p className="text-center">
            Welcome to my online portfolio. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            I&apos;m taking on freelance work at the moment. Want some help
            building your software?
          </p>
          <button className="flex items-center space-x-2 mb-2 mt-4 px-6 py-2.5 text-white bg-havelock-blue rounded shadow hover:bg-havelock-blue-700">
            <FaPaperPlane />
            <span className="font-bold">Hire Me</span>
          </button>
        </div>
      </section>

      {/* Portfolio items section */}
      <section className="p-12">
        <FilterBar onChange={(selected: string) => console.log(selected)} />

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      </section>
    </>
  )
}

export default Portfolio
