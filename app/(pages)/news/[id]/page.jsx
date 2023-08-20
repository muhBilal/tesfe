import Layouts from '@/components/Layouts'
import React from 'react'
import Link from "next/link";
import {FaShare, FaRegBookmark, FaBookmark} from "react-icons/fa";

export default function page() {
    return (
        <Layouts>
            <div className='h-full'>
                <div className={`pl-5 pt-0 sm:pl-24 pr-5 pb-10 mx-auto h-full`}>
                    <section className={`flex flex-col md:flex-row gap-5 mt-7`}>
                        <div className={`w-full md:w-[80%] pr-0 md:pr-5`}>
                            <div className={`h-[30rem]`}>
                                <div className={`relative`}>
                                    <img src="/images/food.jpg" alt=""
                                         className={`w-full h-[300px] object-cover rounded-xl`}/>
                                    <div className={`absolute -bottom-[13rem] md:-bottom-[23rem] bg-white py-10 m-5 rounded-xl flex flex-col md:flex-row`}>
                                        <div className={`w-full md:w-[15%] mt-0 md:mt-20 px-5 hidden md:flex flex-col items-center mb-4 md:mb-0`}>
                                        {/*<div className={`w-full md:w-[15%] mt-0 md:mt-20 px-5 flex flex-row md:flex-col items-center mb-4 md:mb-0`}>*/}
                                            <div className={`flex justify-center`}>
                                                <div
                                                    className={`border-2 p-3 border-gray-400 rounded-full cursor-pointer mx-auto group hover:bg-primary`}>
                                                    <FaShare className={`text-xl mx-auto  group-hover:text-white`}/>
                                                </div>
                                            </div>
                                            <div className={`flex justify-center`}>
                                                <div
                                                    className={`group mt-0 md:mt-5 border-2 p-3 border-gray-400 rounded-full cursor-pointer hover:bg-primary`}>
                                                    <FaRegBookmark
                                                        className={`block group-hover:hidden text-xl mx-auto`}/>
                                                    <FaBookmark
                                                        className={`hidden group-hover:block text-xl mx-auto text-white`}/>
                                                </div>
                                            </div>
                                            <div className={`mt-0 md:mt-20 px-3`}>
                                                <h1 className={`font-bold`}>10.000</h1>
                                                <h6 className={`text-gray-400`}>Orang Melihat</h6>
                                            </div>
                                        </div>
                                        <div className={`w-ful md:w-[85%] pr-3 md:pr-6 pl-6 md:pl-0`}>
                                            <div className={`flex gap-5 items-center mb-3`}>
                                                <h1 className={`text-primary font-medium text-md`}>Prestasi</h1>
                                                <h1 className={`text-gray-400`}>5 maret 2023</h1>
                                            </div>
                                            <h1 className={`font-bold text-xl md:text-3xl leading-6 md:leading-10 mb-5`}>Lorem ipsum dolor sit
                                                amet,
                                                consectetur adipisicing elit</h1>
                                            <p className={`text-gray-400`}>Lorem ipsum dolor sit amet, consectetur
                                                adipisicing
                                                elit. Modi, non?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`w-full md:w-[30%] border-l-0 border-r-0 md:border-l-2 md:border-r-2 px-5 mt-10 md:mt-0`}>
                            <div className={`flex justify-between mb-5 items-center`}>
                                <h1 className={`font-bold text-2xl`}>Terpopular</h1>
                                <Link href={`#`} className={`text-blue-500`}>See More</Link>
                            </div>
                            <div className={`flex flex-col gap-5`}>
                                <div>
                                    <img src="/images/tari.jpg" className="w-full rounded-xl h-[200px] object-cover"/>
                                    <div className={`flex gap-5 items-center mt-5`}>
                                        <h1 className={`text-primary font-medium text-md`}>Prestasi</h1>
                                        <h1 className={`text-gray-400`}>5 maret 2023</h1>
                                    </div>
                                    <h1 className={`font-bold text-lg my-2`}>Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit</h1>
                                    <p className={`text-gray-400`}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Doloremque, officiis.</p>
                                    <div className={`mt-3 flex items-center justify-between pr-5`}>
                                        <div>
                                            <h1 className={`font-bold`}>10.000</h1>
                                            <h6 className={`text-gray-400`}>Orang Melihat</h6>
                                        </div>
                                        <FaShare className={`text-xl cursor-pointer`}/>
                                    </div>
                                </div>
                                <div>
                                    <img src="/images/tari.jpg" className="w-full rounded-xl h-[200px] object-cover"/>
                                    <div className={`flex gap-5 items-center mt-5`}>
                                        <h1 className={`text-primary font-medium text-md`}>Prestasi</h1>
                                        <h1 className={`text-gray-400`}>5 maret 2023</h1>
                                    </div>
                                    <h1 className={`font-bold text-lg my-2`}>Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit</h1>
                                    <p className={`text-gray-400`}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Doloremque, officiis.</p>
                                    <div className={`mt-3 flex items-center justify-between pr-5`}>
                                        <div>
                                            <h1 className={`font-bold`}>10.000</h1>
                                            <h6 className={`text-gray-400`}>Orang Melihat</h6>
                                        </div>
                                        <FaShare className={`text-xl cursor-pointer`}/>
                                    </div>
                                </div>
                                <div>
                                    <img src="/images/tari.jpg" className="w-full rounded-xl h-[200px] object-cover"/>
                                    <div className={`flex gap-5 items-center mt-5`}>
                                        <h1 className={`text-primary font-medium text-md`}>Prestasi</h1>
                                        <h1 className={`text-gray-400`}>5 maret 2023</h1>
                                    </div>
                                    <h1 className={`font-bold text-lg my-2`}>Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit</h1>
                                    <p className={`text-gray-400`}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Doloremque, officiis.</p>
                                    <div className={`mt-3 flex items-center justify-between pr-5`}>
                                        <div>
                                            <h1 className={`font-bold`}>10.000</h1>
                                            <h6 className={`text-gray-400`}>Orang Melihat</h6>
                                        </div>
                                        <FaShare className={`text-xl cursor-pointer`}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layouts>
    )
}
