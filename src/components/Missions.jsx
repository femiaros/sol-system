import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import "react-vertical-timeline-component/style.min.css"
import { styles } from '../styles'
import { missions } from "../contents"
import ImageHolder from "./ImageHolder"
import { staggerContainer,textVariant,fadeIn } from "../utils/motion"

const MissionCard = ({ mission }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={mission.date}
      iconStyle={{ background: mission.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={mission.icon}
            alt={mission.company_name}
            className='w-[95%] h-[95%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{mission.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {mission.company_name}
        </p>
      </div>

      <div className='mt-6 w-full max-w-[] h-[230px] rounded-2xl overflow-hidden'>
        <ImageHolder src={mission.src} hashString={mission.hashString}/>
      </div>

      <ul className='mt-6 list-disc ml-5 space-y-2'>
        {mission.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[13px] xs:text-[14px] leading-6 pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Missions = () => {
  return (
    <section id='missions' className="relative z-[-1] mb-[90px] scroll-mt-20"
    >

      <motion.div variants={staggerContainer(0.4)}
        className={`${styles.paddingX} max-w-7xl mx-auto z-0`}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            How far we have come
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Space Missions.
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-4 text-secondary mxs:text-[14px] text-[15px] max-w-3xl leading-[30px]`}
        >
            More than 250 robotic spacecraft—and 24 humans—have ventured into space since we first began exploring beyond Earth’s atmosphere in 1958. This section focuses on a few U.S. missions with science goals to study planets, moons, asteroids and comets beyond Earth orbit.
        </motion.p>
      </motion.div>


      <div className='mt-20 flex flex-col'>
        <VerticalTimeline children> 
          {missions.map((mission, index) => (
            <MissionCard
              key={`experience-${index}`}
              mission={mission}
            />
          ))}
        </VerticalTimeline>
      </div>

    </section>
  );
};

export default Missions;
