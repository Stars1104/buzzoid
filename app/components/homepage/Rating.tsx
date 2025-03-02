import { FaStar } from "react-icons/fa";
import StarRating from "../Star";

const Rating = () => {
    return (
        <div className="max-w-7xl w-full flex flex-col justify-center items-center pt-24">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="lg:text-[3.2rem] md:text-[2rem] text-[1.3rem] font-[system-ui] font-[700] text-center text-[#192d5a]">What Our Customers Say</h1>
            </div>
            <div className="flex justify-center items-center w-full mt-12 lg:flex-row flex-col gap-4 px-4">
                <div className="lg:w-1/2 w-full flex justify-center items-center">
                    <form action="" className="h-fit bg-transparent border border-[#2563EB] rounded-2xl p-4 lg:w-[80%] w-full mx-auto">
                        <h1 className="mb-4 font-[system-ui] text-lg font-bold text-[#192d5a]">Submit Your Review</h1>
                        <div className="relative mb-4">
                            <label className="flex items-center mb-2 text-[#192d5a] text-base leading-6 font-medium font-[system-ui]">Name </label>
                            <div className="relative text-[#192d5a] focus-within:text-[#192d5a]">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#192d5a" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 21C20 18.1716 20 16.7574 19.1213 15.8787C18.2426 15 16.8284 15 14 15H10C7.17157 15 5.75736 15 4.87868 15.8787C4 16.7574 4 18.1716 4 21M12.1441 11C12.0541 10.991 11.9459 10.991 11.8468 11C9.7027 10.9278 8 9.16911 8 7.00451C8 4.79481 9.78378 3 12 3C14.2072 3 16 4.79481 16 7.00451C15.991 9.16911 14.2883 10.9278 12.1441 11Z" stroke="#192d5a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <input type="text" id="username" className="w-full block h-12 pr-5 pl-12 py-2.5 text-base font-medium leading-7 shadow-xs text-[#192d5a] bg-transparent border border-[#192d5a] rounded-lg placeholder-[#192d5a] focus:outline-none" placeholder="harsh" />
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <label className="flex  items-center mb-2 text-[#192d5a] text-base leading-6 font-medium font-[system-ui]">Email </label>
                            <div className="relative text-[#192d5a] focus-within:text-[#192d5a]">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#192d5a" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.25201 7L8.15881 10.8953C10.2686 12.1612 11.3235 12.7941 12.4825 12.7665C13.6416 12.739 14.6652 12.0566 16.7124 10.6917L21.748 7M10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20Z" stroke="white" strokeWidth="0.3" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <input type="text" id="password" className="w-full block h-12 pr-5 pl-12 py-2.5 text-base font-medium leading-7 shadow-xs text-[#192d5a] bg-transparent border border-[#192d5a] rounded-lg placeholder-[#192d5a] focus:outline-none" placeholder="Enter Your Email" />
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <label className="flex  items-center mb-2 text-[#192d5a] text-base leading-6 font-medium font-[system-ui]">Rating </label>
                            <StarRating />
                        </div>
                        <div className="relative mb-4">
                            <label className="flex  items-center mb-2 text-[#192d5a] text-base leading-6 font-medium font-[system-ui]">Message </label>
                            <div className="relative ">
                                <textarea className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-medium shadow-xs text-[#192d5a] bg-transparent border border-[#192d5a] rounded-lg placeholder-[#192d5a] focus:outline-none resize-none" placeholder="Write your message"></textarea>
                            </div>
                        </div>
                        <button className="w-full h-12 rounded-lg bg-gradient-to-r from-[#3b7bfe] to-[#064bd4] hover:bg-[#234183] transition-all duration-700 shadow-sm text-white text-sm font-semibold leading-6 flex items-center justify-center uppercase font-[system-ui]">Submit Review</button>
                    </form>
                </div>
                <div className="lg:w-1/2 w-full flex flex-col justify-start items-start gap-6">
                    <div className="w-full flex flex-col justify-start items-start gap-4">
                        <div className="w-full flex flex-col justify-start items-start gap-1">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="bg-[#eab308] p-[0.5rem] w-7 h-7 flex justify-center items-center rounded-lg">
                                        <FaStar className="text-lg text-white" />
                                    </div>
                                ))}
                            </div>
                            <span className="flex font-[system-ui] font-bold text-lg text-[#192d5a]">Love this app!</span>
                            <span className="flex font-[system-ui] font-bold text-lg text-[#192d5a]">Ellie</span>
                        </div>
                        <div className="w-full flex flex-col justify-start items-start gap-1">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="bg-[#eab308] p-[0.5rem] w-7 h-7 flex justify-center items-center rounded-lg">
                                        <FaStar className="text-lg text-white" />
                                    </div>
                                ))}
                            </div>
                            <span className="flex font-[system-ui] font-bold text-lg text-[#192d5a]">Better than all other websites and this one actually works!</span>
                            <span className="flex font-[system-ui] font-bold text-lg text-[#192d5a]">Andre</span>
                        </div>
                        <div className="w-full flex flex-col justify-start items-start gap-1">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="bg-[#eab308] p-[0.5rem] w-7 h-7 flex justify-center items-center rounded-lg">
                                        <FaStar className="text-lg text-white" />
                                    </div>
                                ))}
                            </div>
                            <span className="flex font-[system-ui] font-bold text-lg text-[#192d5a]">Great service and like that you are given a trial before paying!</span>
                            <span className="flex font-[system-ui] font-bold text-lg text-[#192d5a]">Kay</span>
                        </div>
                        <div className="w-full flex flex-col justify-start items-start gap-1">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="bg-[#eab308] p-[0.5rem] w-7 h-7 flex justify-center items-center rounded-lg">
                                        <FaStar className="text-lg text-white" />
                                    </div>
                                ))}
                            </div>
                            <span className="flex font-[system-ui] font-bold text-lg text-[#192d5a]">It actually works and all of them were legit!!</span>
                            <span className="flex font-[system-ui] font-bold text-lg text-[#192d5a]">Jason</span>
                        </div>
                        <div className="w-full flex flex-col justify-start items-start gap-1">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="bg-[#eab308] p-[0.5rem] w-7 h-7 flex justify-center items-center rounded-lg">
                                        <FaStar className="text-lg text-white" />
                                    </div>
                                ))}
                            </div>
                            <span className="flex font-[system-ui] font-bold text-lg text-[#192d5a]">Really quick and easy</span>
                            <span className="flex font-[system-ui] font-bold text-lg text-[#192d5a]">Bailey</span>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <button className="w-full py-3 border border-[#192d5a] uppercase rounded-lg font-bold font-[system-ui] bg-transparent text-[#192d5a] from-[#3b7bfe] to-[#064bd4] hover:bg-gradient-to-r transition duration-300 hover:text-white">Show All Reviews</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rating;