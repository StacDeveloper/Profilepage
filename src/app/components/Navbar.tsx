import { MoveUpRight, Sun } from 'lucide-react'
import React from 'react'

const Navbar: React.FC = () => {

    let navbarItems: { name: string, label: string }[] = [
        { name: "Home", label: "Home" },
        { name: "About Me", label: "about" },
        { name: "Services", label: "Services" },
        { name: "My Work", label: "My Work" },
        { name: "Contact me", label: "Contact Me" },
    ]

    // const handleColor = (color:string)=>{
    //     if()
    // }
    return (
        <div className='flex justify-around items-center '>
            <div className='font-semibold text-3xl'>
                Soham  <span className='w-10 h-10 animate-spin text-red-500'> . </span>
            </div>
            <div className='border-[0.0001px] mt-5 rounded-2xl px-8 py-4 flex gap-5 font-medium  items-center cursor-pointer'>
                {navbarItems.map((nv, i) => (
                    <a href={`#${nv.label}`} key={i} className='transition hover:font-semibold hover:text-gray-600 text-shadow-initial italic'>
                        {nv.name}
                    </a>

                )
                )}
            </div>

            <div className='mt-4 flex justify-between w-10 gap-10'>
                <button>
                    <Sun  
                    // onClick={handleColor}
                    />
                </button>
                <button className='relative px-6  rounded-2xl py-3 flex border border-gray-200 gap-3 hover:text-gray-600 transition font-semibold italic'>
                    Contact <span><MoveUpRight size={13} className='absolute top-3 h-4 w-4' /></span>
                </button>
            </div>
        </div>
    )
}

export default Navbar