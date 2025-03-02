"use client";
import Image from "next/image";
import Logo from "../../public/assets/img/logo.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {

    const [isToggleOpen, setIsToggleOpen] = useState(false);
    const toggleMenu = () => setIsToggleOpen((prev) => !prev);
    const router = useRouter();

    const Signup = () => {
        router.push("/auth/signup");
    }

    const Login = () => {
        router.push("/auth/signin");
    }

    const PageRouter = (route: string) => {
        if (route === "Buy Instagram Likes") router.push("/instagramlikes");
    }

    const Instagram = [
        {
            id: 1,
            title: "Buy Instagram Likes",
            icon: "assets/icon/love.svg"
        },
        {
            id: 2,
            title: "Buy Instagram Followers",
            icon: "assets/icon/user.svg"
        },
        {
            id: 3,
            title: "Buy Instagram Comments",
            icon: "assets/icon/chat.svg"
        },
        {
            id: 4,
            title: "Buy Instagram Views",
            icon: "assets/icon/eye.svg"
        },
        {
            id: 5,
            title: "Buy Automatic Likes",
            icon: "assets/icon/love.svg"
        }
    ]

    const TikTok = [
        {
            id: 1,
            title: "Buy TikTok Likes",
            icon: "assets/icon/love.svg"
        },
        {
            id: 2,
            title: "Buy TikTok Followers",
            icon: "assets/icon/user.svg"
        },
        {
            id: 3,
            title: "Buy TikTok Views",
            icon: "assets/icon/eye.svg"
        }
    ]

    const Thread = [
        {
            id: 1,
            title: "Buy Threads Likes",
            icon: "assets/icon/love.svg"
        },
        {
            id: 2,
            title: "Buy Threads Followers",
            icon: "assets/icon/user.svg"
        }
    ]

    const Useful = [
        {
            id: 1,
            title: "FAQ",
            icon: "assets/icon/love.svg"
        },
        {
            id: 2,
            title: "Contact",
            icon: "assets/icon/chat.svg"
        },
        {
            id: 3,
            title: "Blog",
            icon: "assets/icon/chat.svg"
        }
    ]

    return (
        <header className="w-full h-[80px] fixed top-0 left-0 z-50 flex justify-between items-center xl:px-8 lg:px-2 px-4 bg-white/5 backdrop-blur-lg">
            <Image
                src={Logo}
                alt="Company Logo"
                className="lg:w-[153px] lg:h-[33px] w-[140px] h-[30px]"
                priority
            />

            <nav className="w-auto flex justify-center items-center">
                <ul className="lg:flex hidden justify-center items-center xl:gap-10 gap-4 cursor-pointer font-medium xl:text-base lg:text-[13px] font-[system-ui]">
                    {["Buy Instagram Likes", "Buy Instagram Followers", "Buy Instagram Comments", "Buy Instagram Views", "FAQ", "Contact Us"].map((item) => (
                        <li key={item} className="hover:text-[#2563EB] text-[#001F3F] transition duration-300" onClick={() => PageRouter(item)}>{item}</li>
                    ))}
                    <li className="hover:text-[#2563EB] transition duration-300 text-[#001F3F]" onClick={() => Login()}>Login</li>
                    <li className="px-4 py-2 border border-[#001F3F] rounded-md text-[#001F3F] hover:bg-[#001F3F] hover:text-white transition duration-300" onClick={() => Signup()}>
                        Sign Up
                    </li>
                </ul>

                <div className="lg:hidden flex items-center">
                    <button className="text-gray-600 focus:outline-none" onClick={toggleMenu}>
                        {isToggleOpen ? (
                            <svg className="w-8 h-8 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-8 h-8 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            <div
                className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${isToggleOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={toggleMenu}
            ></div>

            <div
                className={`fixed top-0 left-0 w-full h-screen sm:w-1/2 bg-white shadow-lg transform transition-transform duration-300 overflow-y-auto ${isToggleOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="w-full h-[80px] flex justify-between items-center px-4">
                    <Image src={Logo} alt="Company Logo" className="w-[140px] h-[30px]" priority />
                    <button className="text-gray-600" onClick={toggleMenu}>
                        <svg className="w-8 h-8 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <ul className="flex flex-col items-start px-6 space-y-6 text-[15px] font-medium mt-6">
                    <div className="flex flex-col gap-3 w-full">
                        <span className="font-bold text-[#7e819c] text-xs font-[system-ui]">INSTAGRAM SERVICES</span>
                        {Instagram.map((item, index) => (
                            <li key={item.id} className={`w-full py-2 hover:text-indigo-500 transition duration-300 font-[system-ui] cursor-pointer flex justify-start items-center gap-3 ${item.id === index - 1 ? "" : "border-b"}`}>
                                <Image src={item.icon} alt="" width={22} height={18} />
                                {item.title}
                            </li>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                        <span className="font-bold text-[#7e819c] text-xs font-[system-ui]">TIKTOK SERVICES</span>
                        {TikTok.map((item, index) => (
                            <li key={item.id} className={`w-full py-2 hover:text-indigo-500 transition duration-300 font-[system-ui] cursor-pointer flex justify-start items-center gap-3 ${item.id === index - 1 ? "" : "border-b"}`}>
                                <Image src={item.icon} alt="" width={22} height={18} />
                                {item.title}
                            </li>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                        <span className="font-bold text-[#7e819c] text-xs font-[system-ui]">THREADS SERVICES</span>
                        {Thread.map((item, index) => (
                            <li key={item.id} className={`w-full py-2 hover:text-indigo-500 transition duration-300 font-[system-ui] cursor-pointer flex justify-start items-center gap-3 ${item.id === index - 1 ? "" : "border-b"}`}>
                                <Image src={item.icon} alt="" width={22} height={18} />
                                {item.title}
                            </li>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                        <span className="font-bold text-[#7e819c] text-xs font-[system-ui]">USEFUL LINKS</span>
                        {Useful.map((item, index) => (
                            <li key={item.id} className={`w-full py-2 hover:text-indigo-500 transition duration-300 font-[system-ui] cursor-pointer flex justify-start items-center gap-3 ${item.id === index - 1 ? "" : "border-b"}`}>
                                <Image src={item.icon} alt="" width={22} height={18} />
                                {item.title}
                            </li>
                        ))}
                    </div>

                    <li className="w-full">
                        <button className="w-full px-4 py-2 border border-indigo-500 rounded-md text-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-300 font-[system-ui]">
                            SIGN UP
                        </button>
                    </li>
                    <li className="w-full">
                        <button className="w-full px-4 py-2 font-[system-ui]">
                            LOG IN
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;