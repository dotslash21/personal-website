import Image from 'next/image'
import Link from 'next/link'
import { FaEye } from 'react-icons/fa'

type ProjectCardProps = {
  imageSrc: string
  title: string
  description: string
  slug: string
}

const ProjectCard = ({
  imageSrc,
  title,
  description,
  slug,
}: ProjectCardProps) => {
  return (
    <div className="mt-4 rounded bg-hint-of-red text-gray-800 border-2">
      <div className="relative w-11/12 aspect-square mx-auto -mt-4 drop-shadow-xl rounded overflow-hidden">
        <Image
          src={imageSrc}
          alt="Project thumbnail"
          layout="fill"
          objectFit="cover"
          className="shadow-lg"
        />

        {/* Image overlay */}
        <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full opacity-0 backdrop-blur-sm backdrop-brightness-50 hover:opacity-100">
          <Link href={`/portfolio/${slug}`}>
            <button className="flex items-center space-x-2 mb-2 mt-4 px-8 py-3 text-white bg-gray-700 rounded shadow hover:bg-gray-600">
              <FaEye />
              <span className="font-bold">View case-study</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="p-4">
        <h5 className="text-lg font-bold">{title}</h5>
        <p className="">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
