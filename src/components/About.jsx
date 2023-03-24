import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ title, icon, index }) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 21, speed: 450 }}
          className="bg-tertiary rounedd-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        </div>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className={'mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'}
      >
        Welcome to my portfolio website! I am an experienced front-end developer with extensive proficiency in WordPress, Shopify, React, and TypeScript. My wealth of experience in the industry has honed my skills in designing visually stunning, user-friendly, and responsive websites. My specialty lies in customizing WordPress and Shopify themes to fit the exact requirements of my clients.
        <br /><br />
        My expertise in React empowers me to develop high-performing and dynamic user interfaces while my knowledge of TypeScript enables me to write scalable and maintainable code. Over the years, I have had the pleasure of working with diverse clients ranging from small businesses to large corporations, delivering top-tier web development solutions.
        <br /><br />
        Whether you require a brand-new website, a revamp of an existing one, or a custom web application, I have the necessary skills to bring your vision to life. Please peruse my portfolio and don't hesitate to contact me should you have any queries.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default About