import React from 'react'

interface TitleDescProps {
  title: string;
  description: string;
  titleColor: string;
}

const TitleProp: React.FC<TitleDescProps> = ({ title, description, titleColor}) => {
  return (
    <div>
      <h2 className={`${titleColor} font-bold text-2xl max-md:text-xl `}>{title}</h2>
      <p className={` md:w-[60%] pt-3 text-white`}>{description}</p>
    </div>
  )
}

export default TitleProp