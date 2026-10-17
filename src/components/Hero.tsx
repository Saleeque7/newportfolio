'use client'

import { ReactTyped } from 'react-typed'
import { motion } from 'framer-motion'

type HeroProps = {
  title: string
  typedStrings: string[]
  quote?: string | null
  backgroundUrl: string
}

const Hero = ({ title, typedStrings, quote, backgroundUrl }: HeroProps) => {
  return (
    <div id="hero" className="hero route bg-image" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <div className="overlay-itro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container d-flex">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h5 className="hero-title mb-2">{title}</h5>
              {typedStrings.length > 0 && (
                <p className="hero-subtitle text-start">
                  <span className="typed">
                    <ReactTyped strings={typedStrings} typeSpeed={50} backSpeed={40} loop />
                  </span>
                </p>
              )}
              {quote && (
                <p className="text-start p-0 m-0" style={{ borderBottom: '1px solid' }}>
                  &quot;{quote}&quot;
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
