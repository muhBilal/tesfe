'use client';
import Layouts from "@/components/Layouts";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {FaShare} from "react-icons/fa";
import axios from "axios";
import {initFlowbite} from "flowbite";
import Swal from "sweetalert2";

export default function page({params}) {
  const [provinces, setProvinces] = useState([]);
  const [provinceData, setProvinceData] = useState([]);
  const [shuffle, setShuffle] = useState([]);

  const fetchData = async () => {
    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    const res = await axios.get(process.env.NEXT_PUBLIC_API + '/provinces');
    setProvinces(res.data.data);

    const res_data = await axios.get(process.env.NEXT_PUBLIC_API + '/provinces/' + params.id);
    const data = res_data.data.data;
    data.createdAt = new Date(data.created_at).toLocaleDateString('id-ID', options);
    setProvinceData(data)
  }

  const shuffleData = async (province) => {
    if (province) {
      const shuffled = [...province]; // Create a shallow copy of the province array
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
      }
      setShuffle(shuffled.slice(0, 3));
    }
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'URL Copied!',
        text: 'The URL has been copied to the clipboard.',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }).catch((error) => {
      console.error('Error copying URL to clipboard:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An error occurred while copying the URL.',
      });
    });
  };

  useEffect(() => {
    fetchData();
    initFlowbite();
  }, []);

  useEffect(() => {
    shuffleData(provinces)
  }, [provinces, provinceData]);

  return (
      <Layouts>
        <div className="h-full">
          <div className={`pl-5 pt-0 sm:pl-24 pr-5 pb-10 mx-auto h-full`}>
            <nav className="flex mt-7" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                        className="w-3 h-3 mr-2.5"

                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                      <path
                          d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    Beranda
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                        className="w-3 h-3 text-gray-400 mx-1"

                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                      <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <a
                        href="#"
                        className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Provinsi
                    </a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                        className="w-3 h-3 text-gray-400 mx-1"

                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                      <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                        {provinceData.name}
                                    </span>
                  </div>
                </li>
              </ol>
            </nav>

            <section className={`flex flex-col md:flex-row gap-5 mt-2`}>
              <div className={`w-full md:w-[80%] pr-0 md:pr-5`}>
                <div>
                  <div className={`bg-white rounded-xl `}>
                    <img
                        src={process.env.NEXT_PUBLIC_STORAGE + provinceData.image_thumbnail}
                        alt=""
                        className={`w-full h-[300px] object-cover rounded-t-xl`}
                    />

                    <div
                        className={`bg-white pb-10 pt-5 rounded-b-xl  flex flex-col md:flex-row`}
                    >
                      <div className={`w-full pr-3 px-6`}>
                        <div className={`flex gap-5 items-center mb-3`}>
                          <h1 className={`text-primary font-medium text-md`}>
                            Provinsi
                          </h1>
                          <h1 className={`text-gray-400`}>{provinceData.createdAt}</h1>
                        </div>
                        <div className={`flex w-full justify-between gap-3`}>
                          <h1
                              className={`font-bold text-xl md:text-3xl leading-6 md:leading-10 mb-5`}
                          >
                            {provinceData.name}
                          </h1>
                          <div className={`flex gap-3 items-start`}>
                            <div className={`flex justify-center `}>
                              <div
                                  onClick={handleShare}
                                  className={`border-2 p-2 border-gray-400 rounded-full cursor-pointer mx-auto group hover:bg-primary`}
                              >
                                <FaShare
                                    className={`mx-auto  group-hover:text-white`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`text-gray-500 text-lg`}
                             dangerouslySetInnerHTML={{__html: provinceData.desc}}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                  className={`w-full md:w-[30%] border-l-0 border-r-0 md:border-l-2 md:border-r-2 px-5 md:mt-0`}
              >
                <div className={`flex justify-between mb-5 items-center`}>
                  <h1 className={`font-bold text-2xl`}>Terpopular</h1>
                  <Link href={`#`} className={`text-blue-500`}>
                    See More
                  </Link>
                </div>
                <div className={`flex flex-col gap-5`}>
                  {shuffle.map((province) => (
                      <div>
                        <img
                            src={`${process.env.NEXT_PUBLIC_STORAGE}${province.image_thumbnail}`}
                            alt="animals"
                            className={`w-full h-[150px] object-cover rounded-lg`}
                        />
                        <div>
                          <h5 className={`text-gray-900 text-xl font-bold my-2`}>
                            {province.name}
                          </h5>
                          <div className={`text-gray-500 text-sm`}
                               dangerouslySetInnerHTML={{__html: province.desc}}/>
                        </div>
                      </div>

                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layouts>
  );
}
