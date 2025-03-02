import Image from "next/image";

const Stormlike = () => {
    return (
        <div className="max-w-7xl w-full flex flex-col justify-center items-center mt-24">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="lg:text-[3.2rem] md:text-[2rem] text-[1.3rem] font-[system-ui] font-[700] text-center text-[#001F3F]">Available on Stormlikes</h1>
                <span className="font-[system-ui] text-xl text-center text-[#001F3F]">
                    Whether you’re looking to get your followers growing, your likes <br />
                    flowing or views going — Stormlikes is your #1 option. Premium <br />
                    results, without the price tag.</span>
            </div>
            <div className="lg:w-[60%] md:w-[80%] w-full mt-8 place-items-center flex flex-col justify-center items-center lg:gap-6 gap-4 md:px-0 px-2">
                <div className="w-full flex lg:flex-row flex-col justify-center items-center lg:gap-6 gap-4">
                    <div className="group lg:w-auto w-full border p-[20px] flex justify-between items-center gap-4 cursor-pointer border-dashed hover:border-double shadow-lg border-[#001F3F] rounded-2xl transition duration-300">
                        <Image src="assets/icon/like.svg" width={45} height={45} alt="Likes" />
                        <span className="font-[system-ui] font-medium text-[1.3rem] text-[#001F3F] transition duration-300">Likes</span>
                    </div>
                    <div className="lg:w-auto w-full border p-[20px] flex justify-between items-center gap-4 cursor-pointer border-dashed hover:border-double shadow-lg border-[#001F3F] rounded-2xl transition duration-300">
                        <Image src="assets/icon/view.svg" width={45} height={45} alt="Likes" />
                        <span className="font-[system-ui] font-medium text-[1.3rem] text-[#001F3F]">Views</span>
                    </div>
                    <div className="lg:w-auto w-full border p-[20px] flex justify-between items-center gap-4 cursor-pointer border-dashed hover:border-double shadow-lg border-[#001F3F] rounded-2xl transition duration-300">
                        <Image src="assets/icon/follower.svg" width={45} height={45} alt="Likes" />
                        <span className="font-[system-ui] font-medium text-[1.3rem] text-[#001F3F]">Followers</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stormlike;