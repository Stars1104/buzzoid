"use client"
import Image from "next/image";
import { useState } from "react";

const FAQ = () => {

    const [faqID, setFAQID] = useState<number>();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const FAQComponent = [
        {
            id: 1,
            title: "How can I reset my password?",
            content: "To create an account, find the Sign up or Create account button, fill out the registration form with your personal information, and click Create account or Sign up. Verify your email address if needed, and then log in to start using the platform."
        },
        {
            id: 2,
            title: "How can I reset my password?",
            content: "To create an account, find the Sign up or Create account button, fill out the registration form with your personal information, and click Create account or Sign up. Verify your email address if needed, and then log in to start using the platform."
        },
        {
            id: 3,
            title: "How can I reset my password?",
            content: "To create an account, find the Sign up or Create account button, fill out the registration form with your personal information, and click Create account or Sign up. Verify your email address if needed, and then log in to start using the platform."
        },
        {
            id: 4,
            title: "How can I reset my password?",
            content: "To create an account, find the Sign up or Create account button, fill out the registration form with your personal information, and click Create account or Sign up. Verify your email address if needed, and then log in to start using the platform."
        },
        {
            id: 5,
            title: "How can I reset my password?",
            content: "To create an account, find the Sign up or Create account button, fill out the registration form with your personal information, and click Create account or Sign up. Verify your email address if needed, and then log in to start using the platform."
        },
        {
            id: 6,
            title: "How can I reset my password?",
            content: "To create an account, find the Sign up or Create account button, fill out the registration form with your personal information, and click Create account or Sign up. Verify your email address if needed, and then log in to start using the platform."
        },
    ]

    const isOpenFAQCompontn = (id: number) => {
        
        if (id === faqID) setIsOpen(false);
        else if (id !== faqID) setIsOpen(true);

        setFAQID(id);
    }

    return (
        <section className="pt-24 w-full max-w-7xl">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="lg:text-[3.2rem] md:text-[2rem] text-[1.3rem] font-[system-ui] font-[700] text-center text-[#001F3F]">Frequently Asked Questions ✋</h1>
            </div>
            <div className="w-full px-4 sm:px-6 lg:px-8 mt-20">
                <div className="flex flex-col justify-center gap-y-5 lg:flex-row w-full">
                    <div className="w-full lg:w-[40%] flex flex-col gap-3">
                        <h1 className="lg:text-3xl md:text-2xl text-xl font-[system-ui] font-[700] text-start text-[#001F3F]">Have Questions About Buying Instagram Followers?</h1>
                        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold  inline-block text-[#eab308]">The Buzzoid FAQ</h1>
                    </div>
                    <div className="w-full lg:w-[60%] flex flex-col gap-3">
                        <div className="flex flex-col gap-2 w-full">
                            {
                                FAQComponent.map((item, index) => (
                                    <div key={index} className="border border-[#001F3F] p-4 rounded-xl transition duration-500 lg:p-4 w-full bg-transparent">
                                        <button className="flex items-center justify-between text-left text-lg font-medium leading-8 w-full">
                                            <h5 className="text-[#001F3F]">{item.title}</h5>
                                            <Image src="assets/icon/plus.svg" alt="Plus" width={30} height={30} className={`transition-transform duration-300 ${isOpen && item.id === faqID ? "rotate-45" : ""}`} onClick={() => isOpenFAQCompontn(item.id)} />
                                        </button>
                                        <div className="w-full overflow-hidden transition-all duration-300 ease-in-out"
                                            style={{
                                                maxHeight: isOpen ? `250px` : "0px",
                                            }}>
                                            {
                                                item.id === faqID
                                                    ? <p className="text-base text-[#001F3F] font-medium leading-6 font-[system-ui]">{item.content}</p>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default FAQ;