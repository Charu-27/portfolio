import { motion } from 'framer-motion'
import { PersonalInfo } from '../data/portfolioData'

interface AboutProps {
  data: PersonalInfo
}

const About = ({ data }: AboutProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          <div className="about-content">
            <motion.div variants={itemVariants} className="about-text">
              <p>{data.bio}</p>
              <p>
                With {data.yearsOfExperience} years of experience in software development, 
                I've had the opportunity to work on diverse projects ranging from 
                small startups to enterprise-level applications. I'm passionate about 
                writing clean, maintainable code and continuously learning new technologies.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="about-stats">
              <div className="stat-card">
                <div className="stat-number">{data.yearsOfExperience}+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="about-info">
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">{data.location}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <a href={`mailto:${data.email}`} className="info-value">{data.email}</a>
              </div>
              <div className="info-item">
                <span className="info-label">Phone:</span>
                <a href={`tel:${data.phone}`} className="info-value">{data.phone}</a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

