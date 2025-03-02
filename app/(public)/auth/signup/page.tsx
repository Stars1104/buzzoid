"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsFacebook, BsGoogle } from "react-icons/bs";

const Signup = () => {

    const router = useRouter();

    const Login = () => {
        router.push("/auth/signin");
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-8 transition-all duration-500 hover:shadow-xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-[system-ui]">Sign Up</h2>
                        <p className="text-gray-500 mt-2 font-[system-ui]">Please sign up to login</p>
                    </div>

                    <form className="space-y-6">
                        <div className="relative">
                            <label className="block text-gray-700 text-sm font-medium mb-2 font-[system-ui]" htmlFor="email">
                                Email Address
                            </label>
                            <div className="relative">
                                <i data-lucide="mail" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                                <input
                                    className="w-full font-[system-ui] pl-4 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="w-full flex md:flex-row flex-col justify-center items-center gap-3">
                            <div className="relative">
                                <label className="block text-gray-700 text-sm font-medium mb-2 font-[system-ui]" htmlFor="firstname">
                                    First Name
                                </label>
                                <div className="relative">
                                    <i data-lucide="mail" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                                    <input
                                        className="w-full font-[system-ui] pl-4 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                                        type="text"
                                        id="firstname"
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label className="block text-gray-700 text-sm font-medium mb-2 font-[system-ui]" htmlFor="secondname">
                                    Last Name
                                </label>
                                <div className="relative">
                                    <i data-lucide="mail" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                                    <input
                                        className="w-full font-[system-ui] pl-4 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                                        type="text"
                                        id="secondname"
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <label className="block font-[system-ui] text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                                Password
                            </label>
                            <div className="relative">
                                <i data-lucide="lock" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                                <input
                                    className="w-full font-[system-ui] pl-4 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <label className="block font-[system-ui] text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                                Confirm
                            </label>
                            <div className="relative">
                                <i data-lucide="lock" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                                <input
                                    className="w-full font-[system-ui] pl-4 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                                    type="password"
                                    id="confirm"
                                    placeholder="Confirm"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label className="ml-2 text-gray-600 font-[system-ui] text-sm" htmlFor="remember">
                                    Remember me
                                </label>
                            </div>
                            <Link href="#" className="text-sm text-blue-600 hover:text-blue-800 font-[system-ui] font-medium transition-colors duration-200">Forgot password?</Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full font-[system-ui] bg-gradient-to-r text-white from-blue-600 to-purple-600 tex4white py-3 rounded-lg hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                        >
                            Sign Up
                        </button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 font-[system-ui] bg-white/80 text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="w-full flex justify-center items-center gap-3">
                            <button
                                type="button"
                                className="w-1/2 flex items-center justify-center gap-3 py-3 bg-white border bor4r-gray-200 rounded-lg hover:bg-gray-50 transition duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg group"
                            >
                                <BsGoogle className="text-indigo-500" />
                                <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200 font-[system-ui]">Google</span>
                            </button>
                            <button
                                type="button"
                                className="w-1/2 flex items-center justify-center gap-3 py-3 bg-white border bor4r-gray-200 rounded-lg hover:bg-gray-50 transition duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg group"
                            >
                                <BsFacebook className="text-indigo-500" />
                                <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200 font-[system-ui]">Facebook</span>
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-sm text-gray-600 font-[system-ui]" onClick={() => Login()}>
                        Already do you have account?
                        <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 font-[system-ui]">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup;