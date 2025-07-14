import { Skill } from '@/utils/data';
import React from 'react'

interface SkillsProps {
    skill: Skill;
}

export default function Skills({skill}: SkillsProps) {
  return (
    <div className='flex justify-between p-6 bg-primary rounded-xl gap-4 items-center'>
      <div className='flex flex-col text-white dark:text-black text-base'>
        <p className='font-semibold text-xl'> {skill.title}</p>
        <p className='text-sm'>{skill.description}</p>
      </div>
      <div className='w-0.5 h-10 bg-gray-200'></div>
      <div className='flex justify-center items-center'>
        <span className='text-gray-400 font-semibold text-4xl'>{skill.percent}%</span>
      </div>
    </div>
  )
}
