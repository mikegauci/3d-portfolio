import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, website_link, github_link }) => {
  const handleCardClick = () => {
    if (website_link) {
      window.open(website_link, "_blank");
    }
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * "0.5", "0.75")}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[600px] flex flex-col"
      >
        <div 
          className={`w-full h-full flex flex-col ${website_link ? 'cursor-pointer' : ''}`}
          onClick={handleCardClick}
        >
          <div className="relative w-full h-[230px]">
            <img 
              src={image}
              alt={name} 
              className="w-full h-[230px] object-cover rounded-2xl"
            />
            {github_link && (
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the card click
                    window.open(github_link, "_blank");
                  }}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-70 transition-opacity duration-300'
                >
                  <img src={github} alt="github" className="w-7 h-7 object-contain" />
                </div>
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-col flex-1">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="text-secondary mt-2 text-[13px] flex-1 leading-[1.4] overflow-hidden">{description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag) => (
                <span key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>
          My work
        </p>
        <h2 className={styles.sectionHeadText}>
          Recent Projects.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <div>
          <motion.p
            variants={fadeIn("", "", "0.1", "1")}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Following projects showcases my skills and experiences through real-world examples of my work.
            Each project is a result of my passion for learning new technologies. 
            It reflects my ability to solve problems and work with different technologies and manage projects effectively.
          </motion.p>
          <div className='mt-20 flex flex-wrap gap-7'>
            {projects.map((project, index) => (
              <ProjectCard 
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')