"use client"
import { Copyright, Mail } from 'lucide-react'
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='w-fit mx-auto mt-50'>
            <motion.div
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className='text-3xl  justify-center items-center flex flex-col gap-1'>
                    Soham
                    <div className='flex gap-3 text-sm justify-center items-center'>
                        <Mail className='w-4 h-4 ' /> <span className='text-xl'>sohammule9@gmail.com</span>
                    </div>
                </div>
            </motion.div>
            {/* bottom */}
            <div className=' mt-8 border-1 w-screen'>
            </div>
            <div className='mt-3 mb-3'>

                <div className='flex justify-around items-center'>
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className='flex gap-3 items-center'>
                            <Copyright className='w-4 h-4' /> <span>2026 Soham Mule.</span> <span> All rights reserved.</span>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className='flex justify-around gap-20 text-md font-sans'>
                            <Link href={"https://github.com/StacDeveloper"}>Github</Link>
                            <Link href={"https://www.linkedin.com/in/soham-mule-4a4004250/"}>Linkedin</Link>
                            <Link href={"https://www.instagram.com/sohammule9/?hl=en"}>Instagram</Link>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Footer