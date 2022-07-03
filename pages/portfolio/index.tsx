import { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaEye, FaPaperPlane } from 'react-icons/fa'

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
            <div
              key={i}
              className="mt-4 rounded bg-hint-of-red text-gray-800 shadow-lg"
            >
              <div className="relative w-11/12 aspect-square mx-auto -mt-4 drop-shadow-xl rounded overflow-hidden">
                <Image
                  src={'/personal-website/pocketdict.webp'}
                  alt="Project thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="shadow-lg"
                />

                {/* Image overlay */}
                <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full opacity-0 backdrop-blur-sm backdrop-brightness-50 hover:opacity-100">
                  <button className="flex items-center space-x-2 mb-2 mt-4 px-4 py-2 text-white bg-gray-700 rounded shadow hover:bg-gray-600">
                    <FaEye />
                    <span className="font-bold">View case-study</span>
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h5 className="text-lg font-bold">Project Heading</h5>
                <p>Project description. Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Portfolio
