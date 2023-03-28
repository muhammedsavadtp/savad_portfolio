import React from 'react'

const SkillBar = ({ skillName, width, bar }) => {
  return (
      <div
          className={`skillset_box bar${bar} skill_level col-span-6 flex justify-between align-middle   `}
      >
          <div className="skill_bar overflow-hidden w-full flex rounded-xl h-2 mt-2 mr-2 relative before:block before:absolute before:-inset-1 before:bg-white">
              {/* <div className="progress " style={style}></div> */}
          </div>
          <div className="skill_name w-10">
              <h1>{skillName}</h1>
          </div>
      </div>
  )
}

export default SkillBar
