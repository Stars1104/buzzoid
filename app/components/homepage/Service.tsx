import Image from "next/image";

const starIconPath = "M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z";

const StarRating: React.FC<{ count: number }> = ({ count }) => {
    return (
        <div className="flex items-center gap-2 text-[#eab308]">
            {Array.from({ length: count }).map((_, index) => (
                <svg
                    key={index}
                    className="w-6 h-6"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d={starIconPath} fill="currentColor" />
                </svg>
            ))}
        </div>
    );
};

const Service = () => {
    return (
        <div className="max-w-7xl w-full flex flex-col justify-center items-center pt-24">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="lg:text-[3.2rem] md:text-[2rem] text-[1.3rem] font-[system-ui] font-[700] text-center text-[#001F3F]">Grow faster. Without the hassle.</h1>
                <span className="font-[system-ui] text-xl text-center text-[#001F3F]">
                    Instagram promotion made easy. Whether looking for likes, views or <br />
                    followers, you have come to the right place. Let Stormlikes do the work. <br /></span>
            </div>
            <div className="md:w-[85%] w-full mt-8 flex flex-col justify-center items-center lg:gap-10 gap-4 md:px-0 px-2">
                <div className="bg-transparent border-[#001F3F] transition duration-300 cursor-pointer border border-solid rounded-2xl p-6 md:w-[60%] w-full md:mr-[30%]">
                    <div className="flex items-center gap-4 py-4 border-b">
                        <Image src="assets/icon/like.svg" width={40} height={40} alt="Like" />
                        <h3 className="font-[600] text-[1.7rem] font-[system-ui] text-[#001F3F]">Instagram Likes</h3>
                    </div>
                    <div className="flex flex-col items-start gap-2 py-4">
                        <div className="flex items-center gap-4">
                            <StarRating count={5} />
                            <span className="text-[#888] font-medium text-lg font-[system-ui]">Rated 4.9 out of 5</span>
                        </div>
                        <p className="text-lg text-[#001F3F] leading-8">
                            Our award-winning, instantly-delivered Instagram likes are sourced from real and active users. Delivered in 60 seconds.
                        </p>
                    </div>
                    <div className="w-full flex justify-start items-center gap-8">
                        <button className="px-6 py-4 bg-gradient-to-r from-[#3b7bfe] to-[#064bd4] md:text-lg text-sm font-[system-ui] text-white font-medium rounded-xl hover:opacity-80 transition duration-300">Buy Likes</button>
                        <span className="text-[#888] font-medium text-lg font-[system-ui]">Starting at $1.39 USD</span>
                    </div>
                </div>
                <div className="bg-transparent border-[#001F3F] transition duration-300 cursor-pointer border border-solid rounded-2xl p-6 md:w-[60%] w-full md:ml-[30%]">
                    <div className="flex items-center gap-4 py-4 border-b">
                        <Image src="assets/icon/view.svg" width={40} height={40} alt="Like" />
                        <h3 className="font-[600] text-[1.7rem] text-[#001F3F] font-[system-ui]">Instagram Views</h3>
                    </div>
                    <div className="flex flex-col items-start gap-2 py-4">
                        <div className="flex items-center gap-4">
                            <StarRating count={5} />
                            <span className="text-[#888] font-medium text-lg font-[system-ui]">Rated 4.9 out of 5</span>
                        </div>
                        <p className="text-lg text-[#001F3F] leading-8">
                            Our award-winning, instantly-delivered Instagram likes are sourced from real and active users. Delivered in 60 seconds.
                        </p>
                    </div>
                    <div className="w-full flex justify-start items-center gap-8">
                        <button className="px-6 py-4 bg-gradient-to-r from-[#3b7bfe] to-[#064bd4] md:text-lg text-sm font-[system-ui] text-white font-medium rounded-xl hover:opacity-80 transition duration-300">Buy Views</button>
                        <span className="text-[#888] font-medium text-lg font-[system-ui]">Starting at $1.39 USD</span>
                    </div>
                </div>
                <div className="bg-transparent border-[#001F3F] transition duration-300 cursor-pointer border border-solid rounded-2xl p-6 md:w-[60%] w-full md:mr-[30%]">
                    <div className="flex items-center gap-4 py-4 border-b">
                        <Image src="assets/icon/follower.svg" width={40} height={40} alt="Like" />
                        <h3 className="font-[600] text-[1.7rem] text-[#001F3F] font-[system-ui]">Instagram Followers</h3>
                    </div>
                    <div className="flex flex-col items-start gap-2 py-4">
                        <div className="flex items-center gap-4">
                            <StarRating count={5} />
                            <span className="text-[#888] font-medium text-lg font-[system-ui]">Rated 4.9 out of 5</span>
                        </div>
                        <p className="text-lg text-[#001F3F] leading-8">
                            Our award-winning, instantly-delivered Instagram likes are sourced from real and active users. Delivered in 60 seconds.
                        </p>
                    </div>
                    <div className="w-full flex justify-start items-center gap-8">
                        <button className="px-6 py-4 bg-gradient-to-r from-[#3b7bfe] to-[#064bd4] md:text-lg text-sm font-[system-ui] text-white font-medium rounded-xl hover:opacity-80 transition duration-300">Buy Followers</button>
                        <span className="text-[#888] font-medium text-lg font-[system-ui]">Starting at $1.39 USD</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;