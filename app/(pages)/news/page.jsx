import Layouts from '@/components/Layouts'
import React from 'react'
import Link from "next/link";
import {FaShare} from "react-icons/fa";

export default function page() {
    return (
        <Layouts>
            <div className='h-full'>
                <div className={`container`}>
                    {/*<section>*/}
                    {/*    <h1 className={`title`}>Berita</h1>*/}
                    {/*</section>*/}
                    <section className={`flex gap-5 mt-7`}>
                        <div className={`w-[40%] pr-5`}>
                            <div className={`flex justify-between mb-5 items-center`}>
                                <h1 className={`font-bold text-2xl`}>Hari ini</h1>
                                <Link href={`#`} className={`text-blue-500`}>See More</Link>
                            </div>
                            <div className={`flex flex-col gap-10`}>
                                <div className={`h-[30rem]`}>
                                    <div className={`relative`}>
                                        <img src="/images/food.jpg" alt=""
                                             className={`w-full h-[300px] object-cover rounded-xl`}/>
                                        <div className={`absolute -bottom-52 bg-white p-6 m-5 rounded-xl`}>
                                            <div className={`flex gap-5 items-center mb-3`}>
                                                <h1 className={`text-primary font-medium text-md`}>Prestasi</h1>
                                                <h1 className={`text-gray-400`}>5 maret 2023</h1>
                                            </div>
                                            <h1 className={`font-bold text-2xl leading-8 mb-5`}>Lorem ipsum dolor sit
                                                amet,
                                                consectetur adipisicing elit</h1>
                                            <p className={`text-gray-400`}>Lorem ipsum dolor sit amet, consectetur
                                                adipisicing
                                                elit. Modi, non?</p>
                                            <div className={`mt-5 flex items-center justify-between pr-5`}>
                                                <div>
                                                    <h1 className={`font-bold`}>10.000</h1>
                                                    <h6 className={`text-gray-400`}>Orang Melihat</h6>
                                                </div>
                                                <FaShare className={`text-xl cursor-pointer`}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`h-[30rem]`}>
                                    <div className={`relative`}>
                                        <img src="/images/food.jpg" alt=""
                                             className={`w-full h-[300px] object-cover rounded-xl`}/>
                                        <div className={`absolute -bottom-52 bg-white p-6 m-5 rounded-xl`}>
                                            <div className={`flex gap-5 items-center mb-3`}>
                                                <h1 className={`text-primary font-medium text-md`}>Prestasi</h1>
                                                <h1 className={`text-gray-400`}>5 maret 2023</h1>
                                            </div>
                                            <h1 className={`font-bold text-2xl leading-8 mb-5`}>Lorem ipsum dolor sit
                                                amet,
                                                consectetur adipisicing elit</h1>
                                            <p className={`text-gray-400`}>Lorem ipsum dolor sit amet, consectetur
                                                adipisicing
                                                elit. Modi, non?</p>
                                            <div className={`mt-5 flex items-center justify-between pr-5`}>
                                                <div>
                                                    <h1 className={`font-bold`}>10.000</h1>
                                                    <h6 className={`text-gray-400`}>Orang Melihat</h6>
                                                </div>
                                                <FaShare className={`text-xl cursor-pointer`}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`w-[30%] border-l-2 border-r-2 px-5`}>
                            <div className={`flex justify-between mb-5 items-center`}>
                                <h1 className={`font-bold text-2xl`}>Kategori</h1>
                                <Link href={`#`} className={`text-blue-500`}>See More</Link>
                            </div>
                            <div className={`flex flex-col gap-3 border-b-2 pb-4`}>
                                <div>
                                    <div className={`flex gap-4 mt-2 text-sm `}>
                                        <h1 className={`font-semibold text-blue-500 text-md`}>Kesehatan</h1>
                                        <h6 className={`text-gray-400`}>12 Maret 2003</h6>
                                    </div>
                                    <div className={`flex justify-between`}>
                                        <h1 className={`font-bold text-lg w-[80%]`}>Lorem ipsum dolor sit amet,
                                            consectetur</h1>
                                        <img src="/images/man.jpg" alt=""
                                             className={`w-[40px] h-[40px] rounded-full object-cover`}/>
                                    </div>
                                </div>
                                <div>
                                    <div className={`flex gap-4 mt-2 text-sm `}>
                                        <h1 className={`font-semibold text-blue-500 text-md`}>Kesehatan</h1>
                                        <h6 className={`text-gray-400`}>12 Maret 2003</h6>
                                    </div>
                                    <div className={`flex justify-between`}>
                                        <h1 className={`font-bold text-lg w-[80%]`}>Lorem ipsum dolor sit amet,
                                            consectetur</h1>
                                        <img src="/images/man.jpg" alt=""
                                             className={`w-[40px] h-[40px] rounded-full object-cover`}/>
                                    </div>
                                </div>
                                <div>
                                    <div className={`flex gap-4 mt-2 text-sm `}>
                                        <h1 className={`font-semibold text-blue-500 text-md`}>Kesehatan</h1>
                                        <h6 className={`text-gray-400`}>12 Maret 2003</h6>
                                    </div>
                                    <div className={`flex justify-between`}>
                                        <h1 className={`font-bold text-lg w-[80%]`}>Lorem ipsum dolor sit amet,
                                            consectetur</h1>
                                        <img src="/images/man.jpg" alt=""
                                             className={`w-[40px] h-[40px] rounded-full object-cover`}/>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex justify-between items-center py-5`}>
                                <h1 className={`font-bold text-2xl`}>Kategori</h1>
                                <Link href={`#`} className={`text-blue-500`}>See More</Link>
                            </div>
                            <div className={`flex flex-col gap-3 border-b-2 pb-4`}>
                                <div>
                                    <div className={`flex gap-4 mt-2 text-sm `}>
                                        <h1 className={`font-semibold text-blue-500 text-md`}>Kesehatan</h1>
                                        <h6 className={`text-gray-400`}>12 Maret 2003</h6>
                                    </div>
                                    <div className={`flex justify-between`}>
                                        <h1 className={`font-bold text-lg w-[80%]`}>Lorem ipsum dolor sit amet,
                                            consectetur</h1>
                                        <img src="/images/man.jpg" alt=""
                                             className={`w-[40px] h-[40px] rounded-full object-cover`}/>
                                    </div>
                                </div>
                                <div>
                                    <div className={`flex gap-4 mt-2 text-sm `}>
                                        <h1 className={`font-semibold text-blue-500 text-md`}>Kesehatan</h1>
                                        <h6 className={`text-gray-400`}>12 Maret 2003</h6>
                                    </div>
                                    <div className={`flex justify-between`}>
                                        <h1 className={`font-bold text-lg w-[80%]`}>Lorem ipsum dolor sit amet,
                                            consectetur</h1>
                                        <img src="/images/man.jpg" alt=""
                                             className={`w-[40px] h-[40px] rounded-full object-cover`}/>
                                    </div>
                                </div>
                                <div>
                                    <div className={`flex gap-4 mt-2 text-sm `}>
                                        <h1 className={`font-semibold text-blue-500 text-md`}>Kesehatan</h1>
                                        <h6 className={`text-gray-400`}>12 Maret 2003</h6>
                                    </div>
                                    <div className={`flex justify-between`}>
                                        <h1 className={`font-bold text-lg w-[80%]`}>Lorem ipsum dolor sit amet,
                                            consectetur</h1>
                                        <img src="/images/man.jpg" alt=""
                                             className={`w-[40px] h-[40px] rounded-full object-cover`}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`w-[30%] border-l-2 border-r-2 px-5`}>
                            <div className={`flex justify-between mb-5 items-center`}>
                                <h1 className={`font-bold text-2xl`}>Sering Dikunjungi</h1>
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
