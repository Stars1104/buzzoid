import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    const FooterItems = [
        { title: "FAQ" },
        { title: "Blog" },
        { title: "About Us" },
        { title: "Our Team" },
        { title: "Contact Us" },
        { title: "Term of Service" },
        { title: "Privacy Policy" },
    ]

    return (
        <footer className="w-full mt-24 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="w-full flex flex-col justify-center items-start">
                    <div className="w-full flex flex-row flex-wrap justify-start items-center gap-8 py-10">
                        {
                            FooterItems.map((item) => (
                                <Link key={item.title} href="" className="font-bold text-[#192d5a] text-base hover:text-[#2563EB] transition duration-300">{item.title}</Link>
                            ))
                        }
                    </div>
                    <div className="w-full flex md:flex-row flex-wrap flex-col justify-start items-start gap-24 py-8">
                        <div className="flex flex-col justify-start items-start gap-6 md:w-auto w-full">
                            <h1 className="font-bold font-[system-ui] lg:text-lg text-xl h-8 text-[#192d5a]">Instagram Services</h1>
                            <div className="flex flex-col justify-start items-start gap-3 font-[system-ui] text-[#192d5a] font-medium lg:text-[0.9rem] text-lg">
                                <Link href="" className="hover:text-[#2563EB] transition duration-300">Buy Instagram Likes</Link>
                                <Link href="" className="hover:text-[#2563EB] transition duration-300">Buy Instagram Comments</Link>
                                <Link href="" className="hover:text-[#2563EB] transition duration-300">Buy Instagram Followers</Link>
                                <Link href="" className="hover:text-[#2563EB] transition duration-300">Buy Instagram Views</Link>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-6 md:w-auto w-full">
                            <h1 className="font-bold font-[system-ui] lg:text-lg text-xl h-8 text-[#192d5a]">Tools & Resources</h1>
                            <div className="flex flex-col justify-start items-start gap-3 font-[system-ui] text-[#192d5a] font-medium lg:text-[0.9rem] text-lg">
                                <Link href="" className="hover:text-[#2563EB] transition duration-300">Instagram Video Downloader</Link>
                                <Link href="" className="hover:text-[#2563EB] transition duration-300">Instagram Profile Picture Viewer</Link>
                                <Link href="" className="hover:text-[#2563EB] transition duration-300">Instagram Story Downloader</Link>
                                <Link href="" className="hover:text-[#2563EB] transition duration-300">Instagram Followers Counter</Link>
                                <Link href="" className="hover:text-[#2563EB] transition duration-300">Free Instagram Likes Trial</Link>
                                <Link href="" className="hover:text-[#2563EB] transition duration-300">Free Instagram Followers Trial</Link>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-6 md:w-auto w-full">
                            <h1 className="font-bold font-[system-ui] lg:text-lg text-xl h-8 text-[#192d5a]">My Account</h1>
                            <div className="flex flex-col justify-start items-start gap-3 font-[system-ui] text-[#192d5a] font-medium lg:text-[0.9rem] text-lg">
                                <Link href="" className="hover:text-[#2563EB] transition duration-300">Log In</Link>
                                <Link href="" className="hover:text-[#2563EB] transition duration-300">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                        <span className="text-sm text-[#192d5a] ">©2024, All rights reserved.</span>
                        <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                            <Image src="assets/icon/payment.svg" width={250} height={50} alt="Payment" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;