"use client"
import { SquareArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"

const Service = () => {
    return (
        <div id='Services' className='w-400 mx-auto'>
            <motion.div
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className='relative mt-50 w-[600px] gap-3 items-center justify-center mx-auto flex flex-col'>
                    <h1 className='font-bold text-2xl'>
                        My Porffolio
                    </h1>
                    <div className='text-2xl font-semibold'>
                        Explore My Latest Work
                    </div>
                    <div className='text-xl'>
                        Welcome to my digital space — discover my projects, skills, and services .
                    </div>
                    <div className='text-xl'>
                        Expertising in Frontend and Backend
                    </div>
                </div>
            </motion.div>

            <div className='flex mt-15'>

                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='w-[1000px] flex'
                >
                    {/* Card Section */}
                    <div className='relative hover:shadow-white hover:transform-3d transition hover:translate-y-3 hover:shadow-xl w-[600x] mx-auto border-2 border-white  rounded-xl inline-block'>
                        <div className=' railway flex gap-2 px-1 items-center justify-center text-black absolute w-50 h-18 bg-white rounded-xl top-38 left-6 '>
                            <span className='font-bold'>Chat-App-Project</span>
                            <span className='absolute text-sm bottom-1 text-gray-700 left-3'>Real-Time Web-App</span> <SquareArrowUpRight className='w-8 h-8 shadow-black shadow-xl object-cover inline-block rounded-md bg-black text-white' />
                        </div>
                        <Link href={"https://chat-app-4wq6.vercel.app/login"}>
                            <Image src={"/chat-image.webp"} alt='chat-image' height={1000} width={1000} className='w-[250px] h-[250px] object-cover rounded-xl' />
                        </Link>
                    </div>
                    <div className='relative hover:shadow-white hover:transform-3d transition hover:translate-y-3 hover:shadow-xl w-[600x] mx-auto border-2 border-white inline-block rounded-xl'>
                        <div className=' railway flex gap-2 px-1 items-center justify-center text-black absolute w-50 h-18 bg-white rounded-xl top-38 left-6 '>
                            <span className='font-bold'>Blog-App-Project</span>
                            <span className='absolute text-[15px] bottom-1 text-gray-700 left-3'>Post Blogs Just like twitter</span> <SquareArrowUpRight className='w-8 h-8 shadow-black shadow-xl object-cover inline-block rounded-md bg-black text-white' />
                        </div>
                        <Link href={"https://blog-project-vwko.vercel.app/login"}>
                            <Image src={"/blog-image.jpg"} alt='chat-image' height={1000} width={1000} className='w-[250px] h-[250px] object-cover rounded-xl' />
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className=' w-[1000px] flex'
                >
                    <div className=' relative hover:shadow-white hover:transform-3d transition hover:translate-y-3 hover:shadow-xl w-[600x] mx-auto inline-block border-2 border-white  rounded-xl'>
                        <div className=' railway flex gap-2 px-1 items-center justify-center text-black absolute w-50 h-18 bg-white rounded-xl top-38 left-6 '>
                            <span className='font-bold'>Social-Media-Marketplace</span>
                            <span className='absolute text-sm bottom-1 text-gray-700 left-3 text-[10px]'>Buying and Selling Social Media Platform</span> <SquareArrowUpRight className='w-8 h-8 shadow-black shadow-xl object-cover inline-block rounded-md bg-black text-white' />
                        </div>
                        <Link href={"https://market-place-ten-peach.vercel.app/"}>
                            <Image src={"/social-image.webp"} alt='chat-image' height={1000} width={1000} className='w-[250px] h-[250px] object-cover rounded-xl' />
                        </Link>
                    </div>
                    <div className='relative hover:shadow-white hover:transform-3d transition hover:translate-y-3 hover:shadow-xl w-[600x] mx-auto inline-block border-2 border-white w-60 rounded-xl'>
                        <div className=' railway flex gap-2 px-1 items-center justify-center text-black absolute w-50 h-18 bg-white rounded-xl top-38 left-6 '>
                            <span className='font-bold'>Netflix Clone</span>
                            <span className='absolute text-sm bottom-1 text-gray-700 left-3'>HTML and CSS</span> <SquareArrowUpRight className='w-8 h-8 shadow-black shadow-xl object-cover inline-block rounded-md bg-black text-white' />
                        </div>
                        <Link href={"https://github.com/StacDeveloper/Web-Development-Netflix-Clone"}>
                            <Image src={"/netflix.webp"} alt='chat-image' height={1000} width={1000} className='w-[250px] h-[250px] object-cover rounded-xl' />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div >
    )
}

export default Service