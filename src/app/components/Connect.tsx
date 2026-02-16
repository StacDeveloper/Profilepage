"use client"
import { MoveRight } from 'lucide-react'
import { useState } from 'react'
import { motion } from "framer-motion"
import HCaptcha from '@hcaptcha/react-hcaptcha'
import toast from 'react-hot-toast'

const Connect = () => {
    const [Form, SetForm] = useState<{
        name: string,
        email: string,
        message: string
    }>
        ({
            name: "",
            email: "",
            message: ""
        })

    const [captcha, SetCaptcha] = useState<string | null>(null)
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (captcha === null || captcha === "") {
            return toast.error("Please Verfify")
        }

        SetForm({
            name: "",
            email: "",
            message: ""
        })
        toast.success("Thank You. Your response has been sent!")
    }

    return (
        <div id='Contact Me'>
            <motion.div
                className="flex flex-col items-center text-center"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className='mt-24 w-200 mx-auto flex flex-col gap-4 justify-center items-center'>
                    <div className='text-xl'>
                        Connect Now
                    </div>
                    <div className='text-3xl'>
                        Connect with me
                    </div>
                    <div>
                        I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
                    </div>
                </div>
                {/* Input */}
                <div>
                    <div className='w-full max-w-xl text-black mx-auto mt-10'>
                        <form onSubmit={handleSubmit}>
                            <div className='flex items-center justify-center gap-[100px]'>
                                <label htmlFor="name"></label>
                                <input
                                    type="text"
                                    id='name'
                                    value={Form.name}
                                    onChange={(e) => SetForm({ ...Form, name: e.target.value })}
                                    className='bg-white px-10 py-3 rounded-xl border focus:border-white focus:border-2'
                                    required
                                    placeholder='Enter your name'
                                />
                                <label htmlFor="email"></label>
                                <input
                                    type="text"
                                    id='name'
                                    value={Form.email}
                                    onChange={(e) => SetForm({ ...Form, email: e.target.value })}
                                    className='bg-white px-10 py-3 rounded-xl'
                                    required
                                    placeholder='Enter your email'
                                />
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='mt-10 w-full'>
                                    <label htmlFor="message">
                                        <textarea
                                            rows={5}
                                            id='name'
                                            value={Form.message}
                                            onChange={(e) => SetForm({ ...Form, message: e.target.value })}
                                            className='bg-white w-full px-40 py-10 rounded-xl'
                                            required
                                            placeholder='Please leave your message'
                                        />
                                    </label>
                                </div>
                                <HCaptcha
                                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY as string}
                                    onVerify={(t) => { SetCaptcha(t) }}
                                />
                                <div className='mt-10 flex justify-end'>
                                    <button
                                        disabled={!captcha}
                                        type='submit'
                                        className='w-40 button-bg hover:shadow-white shadow-md transition flex gap-1 items-center bg-white h-15 px-4 py-4 rounded-xl font-semibold'
                                    >Submit Now <MoveRight className='w-4 h-4' />

                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Connect