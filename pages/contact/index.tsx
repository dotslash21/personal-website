import { NextPage } from 'next'

import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaTwitter,
} from 'react-icons/fa'

const Contact: NextPage = () => {
  return (
    <>
      {/* Heading section */}
      <section className="p-4 lg:p-12 bg-pearl-bush-600">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Contact</h2>
          <p className="text-center mb-4">
            Want to get in touch with me? You can fill in the form below or
            shoot an email to{' '}
            <a
              href="mailto:arunangshubsws@gmail.com"
              className="text-stack hover:underline hover:text-stack-600"
            >
              arunangshubsws@gmail.com
            </a>
          </p>
          <p className="text-center mb-4">
            Want to connect? Follow me on the social channels below.
          </p>
          <div className="flex gap-6">
            <a href="https://twitter.com/arunangshubsws">
              <FaTwitter className="w-6 h-6 text-stack hover:text-stack-600" />
            </a>
            <a href="https://www.linkedin.com/in/arunangshubsws/">
              <FaLinkedin className="w-6 h-6 text-stack hover:text-stack-600" />
            </a>
            <a href="https://www.linkedin.com/in/arunangshubsws/">
              <FaFacebook className="w-6 h-6 text-stack hover:text-stack-600" />
            </a>
            <a href="https://github.com/dotslash21s">
              <FaGithub className="w-6 h-6 text-stack hover:text-stack-600" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact form section */}
      <section className="p-12">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4">Get In touch</h3>

          {/* Form inputs */}
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-4 w-3/4 md:flex-row">
              <input
                type="text"
                placeholder="Name"
                className="px-3 py-3.5 rounded-md w-full bg-pearl-bush-400 border border-stack focus:shadow-md focus:shadow-stack"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-3.5 rounded-md w-full bg-pearl-bush-400 border border-stack focus:shadow-md focus:shadow-stack"
              />
            </div>
            <textarea
              name="message"
              rows={10}
              placeholder="Enter your message"
              className="px-3 py-3.5 rounded-md w-3/4 bg-pearl-bush-400 border border-stack focus:shadow-md focus:shadow-stack"
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-stack text-white flex items-center gap-2 hover:bg-stack-600"
            >
              <FaPaperPlane />
              <span className="font-bold text-lg">Send</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
