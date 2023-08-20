"use client";
import React, { Component } from "react";
import Layouts from "components/Layouts";
import { BiSolidPencil } from "react-icons/bi";

class Page extends Component {
  render() {
    return (
      <Layouts className={``}>
        <section className={`h-full`}>
          <div className={`container`}>
            <h1 className={`title`}>Profile</h1>
            <form className={`px-3 sm:px-12 mt-14`}>
              <div
                className={`flex gap-3 items-center mb-5 text-sm font-medium text-gray-900`}
              >
                <div className={"relative"}>
                  <img
                    src="/images/man.jpg"
                    className={`w-[80px] h-[80px] object-cover rounded-xl`}
                    alt=""
                  />
                  <div
                    className={`absolute -bottom-2 -right-2 cursor-pointer border border-primary bg-white rounded-full p-1`}
                  >
                    <BiSolidPencil />
                  </div>
                </div>
                <span>Foto Profile</span>
              </div>
              <div className={`flex gap-3 w-full`}>
                <div className="mb-6 w-full">
                  <label
                    htmlhtmlFor="firstname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama Pertama
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-50dark:-lig0 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nurr"
                    required
                  />
                </div>
                <div className="mb-6 w-full">
                  <label
                    htmlhtmlFor="lastname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama Terakhir
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
                    placeholder="Choliss"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlhtmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlhtmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  No. Telp
                </label>
                <input
                  type="number"
                  id="phone"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
                  required
                />
              </div>
              <button type="submit" className="btn-primary text-sm">
                Simpan
              </button>
            </form>
          </div>
        </section>
      </Layouts>
    );
  }
}

export default Page;
