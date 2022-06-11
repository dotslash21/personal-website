import Skill from '../constants/skill'
import { FaCss3, FaHtml5, FaJs } from 'react-icons/fa'

type SkillIconProps = {
  skill: Skill
}

const SkillIcon = ({ skill }: SkillIconProps) => {
  switch (skill) {
    case Skill.HTML:
      return <FaHtml5 className="w-8 h-8 text-[#DE6E3C]" />
    case Skill.CSS:
      return <FaCss3 className="w-8 h-8 text-[#53A7DC]" />
    case Skill.JAVASCRIPT:
      return <FaJs className="w-8 h-8 text-[#DC982A]" />
    default:
      return <></>
  }
}

export default SkillIcon
