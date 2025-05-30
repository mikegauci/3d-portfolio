import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ title, icon, index }) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 21, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
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
        className={'mt-4 text-secondary text-[17px] max-w-full leading-[30px]'}
      >
        I’m a versatile Senior Frontend Developer with over 10 years of experience, ready to bring your vision to life. I specialize in WordPress, React, Next.js, and Headless CMS solutions, delivering custom WordPress sites, theme and plugin development, and ACF integration for seamless content management and performance optimization.
        <br /><br />
        My extensive work with React and Next.js has equipped me to build modern, scalable web applications that provide exceptional user experiences. With a strong background in SEO strategies, I help boost search rankings and site speed to drive your business growth.
        <br /><br />
        As a Project Manager, I’ve led development teams, managed roadmaps, and aligned technical execution with business goals. I’m skilled in React, TypeScript, and modern frontend frameworks, and I’ve successfully migrated and optimized websites for Headless CMS setups.
        <br /><br />
        I also have hands-on experience as a Shopify business owner, building and scaling an e-commerce store from dropshipping to Print-on-Demand apparel, managing operations, customer relations, and logistics to drive sales.
        <br /><br />
        I bring a proactive, strategic mindset and a commitment to crafting high-quality digital solutions that maximize engagement and revenue. I’m available as a dedicated contractor or developer to elevate your next project or ongoing work as a contractor.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")