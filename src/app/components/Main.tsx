"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { div } from 'framer-motion/client'
import { BriefcaseBusiness, GraduationCap, SquareCode } from 'lucide-react'

const Main = () => {
    const [isOpen, setisOpen] = useState<boolean>(false)
    const text = "Full-Stack-Developer"
    const chatacters = text.split("")

    return (
        <div id='about'>
            <div className='w-[70vh] mx-auto'>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className=' font-mono flex flex-col gap-3 w-165 justify-center items-center'>
                        <div className='text-2xl'>Introduction</div>
                        <div className='text-4xl'>About Me</div>
                        <div className='object-cover text-md'>Software Engineer with experience building full stack and microservice based applications
                            using MERN, Next.js and Typescript. Strong background in cloud native deployments on
                            AWS (EKS, EC2, ECS) with Kubernetes, Docker, and CI/CD pipelines. Proven ability to
                            design scalable systems using event-driven architectures with Kafka and RabbitMQ.</div>
                    </div>
                </motion.div>
            </div>
            <div className='flex mt-40 w-300 items-start '>
                {/* intro-section */}
                <div className='grid grid-cols-2 gap-[400px] mx-auto transition'>
                    <div className='relative flex ml-10 items-center justify-center font-mono w-[500px] hover:text-gray-700'>
                        <motion.div
                            initial={{ x: -200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Image src={"/2image.jpeg"} alt='profile-image' height={2000} width={2000} className=' relative left-40 hover:shadow-lg duration-300 ease-out hover:translate-y-3 transition shadow-lg hover:shadow-white h-100 w-80 rounded-md' />
                        </motion.div>
                        {/* circle */}
                        <div className='object-cover  rounded-full absolute bottom-1 right-[-100] bg-white'>
                            <div className='rounded-full absolute bottom-1 left-[-150] bg-white'>
                                <div className='relative bg-white h-[140px] w-[140px] rounded-full border-2 border-white flex items-center justify-center overflow-hidden text-black'>

                                    {/* Rotating Text */}
                                    <div className='absolute w-full h-full animate-spin-slow'>
                                        {"FULL-STACK-DEVELOPER • ".split("").map((char, index, arr) => {
                                            const angle = (360 / arr.length) * index;
                                            const radius = 60;

                                            return (
                                                <span
                                                    key={index}
                                                    className='absolute left-1/2 top-1/2 text-[10px] font-semibold'
                                                    style={{
                                                        transform: `
                rotate(${angle}deg)
                translate(${radius}px)
                rotate(90deg)
              `,
                                                        transformOrigin: "0 0",
                                                    }}
                                                >
                                                    {char}
                                                </span>
                                            );
                                        })}
                                    </div>

                                    {/* Center Image */}
                                    <Image
                                        src={"/code-comp.png"}
                                        height={40}
                                        width={40}
                                        alt='code-comp'
                                        className='z-10'
                                    />

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* container*/}
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className='relative'>
                            <div className='flex gap-10 mx-auto w-500'>
                                <div
                                    onClick={() => setisOpen(true)}
                                    className=' hover:shadow-lg duration-300 ease-out hover:translate-y-3 transition top-30 left-10 w-60 flex flex-col gap-3 border rounded-xl px-4 py-6 hover:shadow-white h-50'>
                                    <SquareCode className='w-10 h-10 ' />
                                    <div>Languages</div>
                                    <div>HTML, CSS, JS, TS, React.JS, Next.JS</div>
                                </div>
                                <div className='hover:translate-y-3 hover:shadow-lg duration-300 ease-out top-30 w-60 flex flex-col gap-3 border rounded-xl h-50 px-4 py-6 hover:shadow-white'>
                                    <GraduationCap className='w-[40px] h-[100px]' />
                                    <div>Education</div>
                                    <div>Msc in Accounting and Finance</div>
                                    <div>Bachelor in Commerce</div>
                                </div>
                                <div className=' w-60 h-50 hover:translate-y-3 hover:shadow-lg duration-300 ease-out top-30 flex flex-col gap-3 border rounded-xl px-4 py-6 hover:shadow-white'>
                                    <BriefcaseBusiness className='w-10 h-10 ' />
                                    <div>Languages</div>
                                    <div>HTML, CSS, JS, TS, React.JS, Next.JS</div>
                                </div>
                            </div>
                            {/* Tools */}
                            <div className='mt-30 flex flex-col gap-4'>
                                <div className='font-semibold'>
                                    Tools I use
                                </div>
                                <div className='flex gap-5'>
                                    <div className='hover:translate-y-1 hover:shadow-lg duration-300 ease-out top-30 hover:shadow-white border rounded-md w-15 h-15 object-center flex flex-col items-center justify-center'>
                                        <Image src={"/vscode.png"} alt='vs-code' width={40} height={30} className='object-cover' />
                                    </div>
                                    <div className=' hover:translate-y-1 hover:shadow-lg duration-300 ease-out top-30 hover:shadow-white border rounded-md w-15 h-15 object-center flex flex-col items-center justify-center'>
                                        <Image src={"/aws.png"} alt='vs-code' width={50} height={50} className='object-cover' />
                                    </div>
                                    <div className=' hover:translate-y-1 hover:shadow-lg duration-300 ease-out top-30 hover:shadow-white  border rounded-md w-15 h-15 object-center flex flex-col items-center justify-center'>
                                        <Image src={"/react.png"} alt='vs-code' width={60} height={60} className='object-cover' />
                                    </div>
                                    <div className=' hover:translate-y-1 hover:shadow-lg duration-300 ease-out top-30 hover:shadow-white border rounded-md w-15 h-15 object-center flex flex-col items-center justify-center'>
                                        <Image src={"/docker.webp"} alt='vs-code' width={60} height={60} className='object-cover' />
                                    </div>
                                    <div className=' hover:translate-y-1 hover:shadow-lg duration-300 ease-out top-30 hover:shadow-white border rounded-md w-15 h-15 object-center flex flex-col items-center justify-center'>
                                        <Image src={"/k8s.png"} alt='vs-code' width={60} height={60} className='object-cover' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Main