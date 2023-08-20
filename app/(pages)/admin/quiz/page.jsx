"use client";
import AdminLayout from "@/components/AdminLayout";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";

const page = () => {
  const [rewards, setRewards] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API + "/rewads");
      setRewards(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Kamu Yakin?",
        text: "Kamu akan Menghapus Data!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya. Hapus!",
      });

      if (result.isConfirmed) {
        const res = await axios.post(
          process.env.NEXT_PUBLIC_API + "/rewards/delete/" + id
        );
        console.log(res);
        fetchData();
        Swal.fire("Deleted!", "Data Berhasil dihapus", "success");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      Swal.fire("Error!", "An error occurred while deleting data", "error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(rewards);
  }, [rewards]);

  return (
    <AdminLayout>
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <h6 className="dark:text-white">Tabel Soal</h6>
              <div className="flex items-center justify-between pb-4 pt-4">
                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Cari data hadiah..."
                  />
                </div>
                <div>
                  <Link
                    href={"/admin/rewards/create"}
                    className="btn-outline"
                    type="button"
                  >
                    Tambah Data
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-auto px-0 pt-0 pb-2">
              <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Author
                      </th>
                      <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Function
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Status
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Employed
                      </th>
                      <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img
                              src="../assets/img/team-2.jpg"
                              className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                              alt="user1"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              John Michael
                            </h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                              john@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                          Manager
                        </p>
                        <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                          Organization
                        </p>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                          Online
                        </span>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                          23/04/18
                        </span>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <a
                          href="javascript:;"
                          className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"
                        >
                          {" "}
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img
                              src="../assets/img/team-3.jpg"
                              className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                              alt="user2"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              Alexa Liras
                            </h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                              alexa@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                          Programator
                        </p>
                        <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                          Developer
                        </p>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                          Offline
                        </span>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                          11/01/19
                        </span>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <a
                          href="javascript:;"
                          className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"
                        >
                          {" "}
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img
                              src="../assets/img/team-4.jpg"
                              className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                              alt="user3"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              Laurent Perrier
                            </h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                              laurent@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                          Executive
                        </p>
                        <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                          Projects
                        </p>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                          Online
                        </span>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                          19/09/17
                        </span>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <a
                          href="javascript:;"
                          className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"
                        >
                          {" "}
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img
                              src="../assets/img/team-3.jpg"
                              className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                              alt="user4"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              Michael Levi
                            </h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                              michael@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                          Programator
                        </p>
                        <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                          Developer
                        </p>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                          Online
                        </span>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                          24/12/08
                        </span>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <a
                          href="javascript:;"
                          className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"
                        >
                          {" "}
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img
                              src="../assets/img/team-2.jpg"
                              className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                              alt="user5"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              Richard Gran
                            </h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                              richard@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                          Manager
                        </p>
                        <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                          Executive
                        </p>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                          Offline
                        </span>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                          04/10/21
                        </span>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <a
                          href="javascript:;"
                          className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"
                        >
                          {" "}
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img
                              src="../assets/img/team-4.jpg"
                              className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                              alt="user6"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              Miriam Eric
                            </h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                              miriam@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                          Programtor
                        </p>
                        <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                          Developer
                        </p>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                          Offline
                        </span>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                          14/09/20
                        </span>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                        <a
                          href="javascript:;"
                          className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"
                        >
                          {" "}
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default page;
