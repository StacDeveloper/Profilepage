"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const Section = () => {
  return (
    <div id="Home" className="h-screen w-full mx-auto flex  justify-center items-center">
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Image */}
        <div className="w-64 h-64 relative">
          <Image
            src="/profile_image.jpg"
            alt="profile_image"
            fill
            className="object-cover rounded-full border"
          />
        </div>

        <div className="mt-6 font-light text-2xl">
          Hi! I am Soham Mule 👋
        </div>

        {/* Title */}
        <div className="mt-6 text-4xl">
          Full-Stack Web Developer based in Glasgow
        </div>

        {/* Info */}
        <div className="mt-6 text-xl max-w-2xl">
          <div>I am a Full-Stack Web Developer from Glasgow</div>
          <div>
            with 2 years of project-based experience building full-stack web
            applications.
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Section
