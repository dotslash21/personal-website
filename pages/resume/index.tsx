import { NextPage } from 'next'
import {
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaGithubSquare,
  FaGlobe,
  FaLinkedin,
  FaMobile,
  FaTwitterSquare,
} from 'react-icons/fa'

const Resume: NextPage = () => {
  return (
    <>
      {/* Heading section */}
      <section className="p-4 lg:p-12 bg-hint-of-red-600">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Resume</h2>
          <button className="flex items-center space-x-2 mb-2 mt-4 px-6 py-2.5 text-white bg-havelock-blue rounded shadow hover:bg-havelock-blue-700">
            <FaFilePdf />
            <span className="font-bold">Download PDF version</span>
          </button>
        </div>
      </section>

      {/* Resume wrapper */}
      <section className="w-11/12 mx-auto px-12 md:w-10/12 lg:w-9/12">
        {/* Resume root */}
        <div className="my-12 p-12 shadow-lg bg-white text-gray-700">
          {/* Resume header */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-start">
              <h2 className="text-5xl font-bold text-havelock-blue">
                ARUNANGSHU BISWAS
              </h2>
              <p className="text-xl py-1">Software Engineer</p>
            </div>

            <div className="flex flex-col border-l border-gray-400">
              <ul className="px-3">
                <li className="flex gap-1 items-center">
                  <FaMobile />
                  +91 70038 23192
                </li>
                <li className="flex gap-1 items-center">
                  <FaEnvelope />
                  arunangshubsws@gmail.com
                </li>
                <li className="flex gap-1 items-center">
                  <FaGlobe />
                  https://arunangshu.dev/
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t border-gray-700 my-4" />

          {/* Resume body */}
          <div className="flex">
            {/* Main column */}
            <div className="flex flex-col justify-start basis-full pl-3 pr-12">
              {/* Work experience section */}
              <div className="my-4">
                <h3 className="text-lg text-havelock-blue font-bold border-l-8 border-havelock-blue pl-4 mb-6">
                  WORK EXPERIENCES
                </h3>
                {/* Items */}
                {Array.from(Array(2).keys()).map((i) => (
                  <div key={i} className="mb-4">
                    <div className="flex justify-between mb-0.5">
                      <h4 className="font-bold">Software Engineer</h4>
                      <span>Crio.Do | 2021 - Present</span>
                    </div>
                    <p className="mb-2">
                      Role description goes here ipsum dolor sit amet,
                      consectetuer adipiscing elit. Aenean commodo ligula eget
                      dolor. Aenean massa. Cum sociis natoque penatibus et
                      magnis dis parturient montes, nascetur ridiculus mus.
                      Donec quam felis, ultricies nec, pellentesque eu, pretium
                      quis, sem. Donec pede justo, fringilla vel. Lorem ipsum
                      dolor sit amet, consectetuer adipiscing elit. Aenean
                      commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis.
                    </p>
                    <ul className="list-disc list-inside">
                      <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                      <li>Aenean commodo ligula eget dolor.</li>
                      <li>Etiam ultricies nisi vel augue.</li>
                    </ul>
                  </div>
                ))}
              </div>

              {/* Projects section */}
              <div className="my-4">
                <h3 className="text-lg text-havelock-blue font-bold border-l-8 border-havelock-blue pl-4 mb-6">
                  PROJECTS
                </h3>
                {/* Items */}
                {Array.from(Array(2).keys()).map((i) => (
                  <div key={i} className="mb-4">
                    <div className="flex justify-between mb-0.5">
                      <h4 className="font-bold">Project Lorem Ipsum</h4>
                      <span>Open source</span>
                    </div>
                    <p className="mb-2">
                      You can use this section for your side projects. You can
                      provide a project link here as well. Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor. Aenean massa. Cum sociis natoque penatibus et
                      magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Side column */}
            <div className="px-6 pb-6 border-l border-gray-400">
              {/* Skills section */}
              <div className="py-4">
                <h3 className="text-lg text-havelock-blue font-bold border-l-8 border-havelock-blue pl-4 mb-6">
                  SKILLS
                </h3>
                <h4 className="font-bold">Technical</h4>
                <ul className="mb-4 flex flex-col gap-1">
                  <li>Javascript/React/Next.js/Redux</li>
                  <li>Python/Bash</li>
                  <li>Spring Boot/Node.js</li>
                  <li>MySQL/MongoDb</li>
                  <li>Object-oriented design</li>
                  <li>Design and implement database structures</li>
                </ul>
                <h4 className="font-bold">Professional</h4>
                <ul className="mb-4 flex flex-col gap-1">
                  <li>Team player</li>
                  <li>Problem solver</li>
                  <li>Good time management</li>
                </ul>
              </div>

              {/* Education section */}
              <div className="py-4">
                <h3 className="text-lg text-havelock-blue font-bold border-l-8 border-havelock-blue pl-4 mb-6">
                  EDUCATION
                </h3>
                {Array.from(Array(2).keys()).map((i) => (
                  <div key={i} className="mb-4">
                    <div className="">
                      B.Tech in Computer Science & Engineering
                    </div>
                    <div className="text-sm">
                      Govt. College of Engg. & Textile Technology, Berhampore
                    </div>
                    <div className="text-xs">2017 - 2021</div>
                  </div>
                ))}
              </div>

              {/* Language section */}
              <div className="py-4">
                <h3 className="text-lg text-havelock-blue font-bold border-l-8 border-havelock-blue pl-4 mb-6">
                  LANGUAGES
                </h3>
                <ul>
                  <li>English (Professional)</li>
                  <li>Bengali (Native)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t border-gray-700 my-4" />

          {/* Resume footer */}
          <div className="flex justify-center gap-4">
            {/* Github */}
            <div className="flex items-center gap-1 hover:text-havelock-blue">
              <FaGithubSquare className="w-5 h-5" />
              <a href="https://github.com/dotslash21" className="text-sm">
                github.com/dotslash21
              </a>
            </div>

            {/* Linkedin */}
            <div className="flex items-center gap-1 hover:text-havelock-blue">
              <FaLinkedin className="w-5 h-5" />
              <a
                href="https://linkedin.com/in/arunangshubsws"
                className="text-sm"
              >
                linkedin.com/in/arunangshubsws
              </a>
            </div>

            {/* Github */}
            <div className="flex items-center gap-1 hover:text-havelock-blue">
              <FaTwitterSquare className="w-5 h-5" />
              <a href="https://twitter.com/arunangshubsws" className="text-sm">
                @arunangshubsws
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume
