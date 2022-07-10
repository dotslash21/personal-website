import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FaGlobe, FaIndustry, FaUsers } from 'react-icons/fa'

const Project: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      {/* Heading section */}
      <section className="p-4 lg:p-12 bg-hint-of-red-600">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Case Study: Project Title</h2>
          <p className="text-center text-lg">
            Project intro, Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Excepturi, doloribus? Id in harum officiis cum quia temporibus
            vero adipisci distinctio, qui, eos consequatur voluptas commodi
            modi, architecto sed debitis porro!
          </p>
        </div>
      </section>

      {/* Casestudy content */}
      <section className="p-4 lg:p-12">
        <div className="container mx-auto">
          {/* Project Hero section */}
          <div className="bg-hint-of-red-600 p-6 rounded-sm mb-12">
            <div className="grid grid-cols-12 gap-6">
              <div className="hidden h-full md:relative md:block md:col-span-5 xl:col-span-4 2xl:col-span-3">
                <Image
                  src={'/personal-website/pocketdict.webp'}
                  alt="Project thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>

              <div className="col-span-full md:col-start-6 xl:col-start-5 2xl:col-start-4">
                {/* Company Name/Client Name/Personal */}
                <h3 className="text-3xl font-bold mb-6">Crio.Do</h3>

                {/* Metadata */}
                <ul className="mb-3">
                  <li className="flex flex-row items-center">
                    <FaIndustry className="mr-2" />
                    <span className="font-bold mr-2">Industry:</span>
                    <span>Edu Tech</span>
                  </li>

                  <li className="flex flex-row items-center">
                    <FaUsers className="mr-2" />
                    <span className="font-bold mr-2">Size:</span>
                    <span>~100</span>
                  </li>

                  <li className="flex flex-row items-center">
                    <FaGlobe className="mr-2" />
                    <span className="font-bold mr-2">Website:</span>
                    <a href="https://crio.do/" className="underline">
                      crio.do
                    </a>
                  </li>
                </ul>

                {/* Short description of the project */}
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  quas hic nesciunt vitae excepturi, distinctio praesentium! Ea
                  commodi repellat dolorum delectus optio necessitatibus,
                  expedita quasi nisi, officiis fugiat aliquam similique.
                </p>

                {/* Requirements */}
                <div>
                  <h3 className="font-bold mb-4">Requirements</h3>
                  <ul className="list-disc list-inside pl-3">
                    <li>Requirement 1</li>
                    <li>Requirement 2</li>
                    <li>Requirement 3</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl mb-4">Project Overview</h3>
            <div className="mb-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus.
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl mb-4">The Challenge</h3>
            <div className="mb-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus.
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl mb-4">Approach &amp; Solution</h3>
            <div className="mb-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus.
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl mb-4">Outcome</h3>
            <div className="mb-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus.
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project
