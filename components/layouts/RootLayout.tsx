import Image from 'next/image'
import Link from 'next/link'
import {
  FaChartBar,
  FaEnvelope,
  FaEnvelopeOpenText,
  FaFacebook,
  FaFileAlt,
  FaGithub,
  FaHeart,
  FaLaptopCode,
  FaLinkedin,
  FaPaperPlane,
  FaTwitter,
  FaUser,
} from 'react-icons/fa'

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="flex flex-col h-screen lg:flex-row lg:h-fit">
      {/* Sidebar container */}
      <aside className="w-screen bg-havelock-blue flex-shrink-0 lg:basis-72 lg:h-screen">
        {/* Flex container */}
        <div className="flex flex-col justify-start">
          {/* Name */}
          <Link href={'/'}>
            <h1 className="text-2xl text-center text-white font-bold py-4 cursor-pointer lg:pb-0">
              Arunangshu Biswas
            </h1>
          </Link>
          {/* Name end */}

          <nav className="hidden flex-col items-center p-6 px-4 lg:flex">
            {/* Profile section */}
            <section className="flex flex-col items-center justify-start w-full">
              {/* Profile picture */}
              <div className="flex justify-center mb-4">
                <Image
                  src={'/personal-website/profile-picture.jpg'}
                  alt="Profile picture"
                  width={160}
                  height={160}
                  className="rounded-full"
                />
              </div>
              {/* Bio */}
              <p className="text-white text-center text-sm mb-4">
                Hi, my name is Arunangshu Biswas and I&apos;m a software
                engineer. Welcome to my personal website!
              </p>
              {/* Social icons */}
              <div className="flex justify-center space-x-4 py-2 text-white">
                <a
                  href={'https://github.com/dotslash21/'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-8 h-8 cursor-pointer hover:text-havelock-blue-700" />
                </a>
                <a
                  href={'https://www.facebook.com/itsmearunangshu/'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-8 h-8 cursor-pointer hover:text-havelock-blue-700" />
                </a>
                <a
                  href={'https://twitter.com/arunangshubsws'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-8 h-8 cursor-pointer hover:text-havelock-blue-700" />
                </a>
                <a
                  href={'https://www.facebook.com/itsmearunangshu/'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="w-8 h-8 cursor-pointer hover:text-havelock-blue-700" />
                </a>
                <a
                  href={'mailto:arunangshubsws@gmail.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope className="w-8 h-8 cursor-pointer hover:text-havelock-blue-700" />
                </a>
              </div>
              {/* Divider */}
              <hr className="my-4 w-full border-gray-300" />
            </section>

            {/* Page navigation section */}
            <section className="flex flex-col items-center justify-start w-full">
              <ul className="flex flex-col w-48 text-white">
                <li className="flex items-center space-x-2 p-2 hover:text-havelock-blue-700">
                  <FaUser />
                  <Link href={'/'}>
                    <span className="font-bold cursor-pointer">About Me</span>
                  </Link>
                </li>
                <li className="flex items-center space-x-2 p-2 hover:text-havelock-blue-700">
                  <FaLaptopCode />
                  <Link href={'/portfolio'}>
                    <span className="font-bold cursor-pointer">Portfolio</span>
                  </Link>
                </li>
                <li className="flex items-center space-x-2 p-2 hover:text-havelock-blue-700">
                  <FaFileAlt />
                  <Link href={'/resume'}>
                    <span className="font-bold cursor-pointer">Resume</span>
                  </Link>
                </li>
                <li className="flex items-center space-x-2 p-2 hover:text-havelock-blue-700">
                  <FaEnvelopeOpenText />
                  <Link href={'/contact'}>
                    <span className="font-bold cursor-pointer">Contact</span>
                  </Link>
                </li>
              </ul>
              {/* Hire me btn */}
              <button className="flex items-center space-x-2 mb-2 mt-8 px-6 py-2.5 text-havelock-blue bg-white rounded shadow hover:bg-havelock-blue-700">
                <FaPaperPlane />
                <span className="font-bold">Hire Me</span>
              </button>
              {/* Divider */}
              <hr className="my-4 w-full border-gray-300" />
            </section>

            {/* Misc. section */}
          </nav>
        </div>
        {/* Flex container end */}
      </aside>
      {/* Sidebar container end */}

      {/* Main container */}
      <div className="flex flex-col basis-full overflow-auto text-gray-800 bg-hint-of-red lg:h-screen">
        <main>{children}</main>

        <footer className="flex items-center justify-center mt-auto py-8 text-white bg-san-juan-400">
          <p>
            Made with <FaHeart className="text-red-500 inline-block" /> and{' '}
            <a
              href="https://nextjs.org/"
              className="text-havelock-blue-300 hover:text-slate-200 hover:underline"
            >
              Next.js
            </a>{' '}
            by{' '}
            <a
              className="text-havelock-blue-300 hover:text-slate-200 hover:underline"
              href="https://github.com/dotslash21"
            >
              Arunangshu Biswas
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default RootLayout
