"use client";
import AdminLayout from "@/components/AdminLayout";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newsDisplay, setNewsDisplay] = useState([]);

  const handleGetNews = async () => {
    try {
      const query = await axios.get(process.env.NEXT_PUBLIC_API + "/news");
      const res = await query.data;
      setNews(res.data);
      setNewsDisplay(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    if (loading) return;
    const isDelete = confirm("Yakin ingin menghapus data ?");

    if (isDelete) {
      try {
        await axios.post(process.env.NEXT_PUBLIC_API + `/news/delete/${id}`);
        handleGetNews();
      } catch (err) {
        console.log(err);
      }
    }

    setLoading(false);
    return;
  };

  const handleSearch = (keyword) => {
    const filteredNews = news.filter((data) =>
      data.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setNewsDisplay(filteredNews);
  };

  useEffect(() => {
    handleGetNews();
  }, []);
  return (
    <AdminLayout>
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <h6 className="dark:text-white">Tabel Berita</h6>
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
                    onChange={(e) => handleSearch(e.target.value)}
                    type="text"
                    id="table-search"
                    className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Cari data berita..."
                  />
                </div>
                <div>
                  <Link
                    href={"/admin/news/create"}
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
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        No.
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Thumbnail Berita
                      </th>
                      <th className="px-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Judul Berita
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Aksi
                      </th>
                      <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {newsDisplay?.map((item, index) => (
                      <tr key={index}>
                        <td className="p-2 align-middle text-center bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                            {index + 1}
                          </p>
                        </td>
                        <td className="p-2 align-middle text-center bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <div className="px-2 py-1">
                            <div>
                              <img
                                src={
                                  "http://localhost:8000/storage/" + item.image
                                }
                                className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                alt={item.title}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle text-center bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                            {item.title}
                          </p>
                        </td>
                        <td className="p-2 flex justify-center gap-3 bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <Link
                            href={`/admin/news/edit/${item.id}`}
                            className={`btn-primary-lite`}
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className={`btn-primary-lite`}
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    ))}
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
