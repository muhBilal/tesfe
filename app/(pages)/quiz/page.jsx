"use client";
import React, { Component } from "react";
import Layouts from "@/components/Layouts";

class Page extends Component {
  render() {
    return (
      <Layouts>
        <div className="container-center font-poppins">
          <img
            src="/images/question.svg"
            alt="question"
            className={`w-52 mx-auto`}
          />
          <div className={`flex justify-center items-center gap-3`}>
            <h1 className={`text-3xl mt-5`}>List Pertanyaan</h1>
            <div className={`bg-gray-800 rounded-full px-2 text-gray-200`}>
              <h6>1</h6>
            </div>
          </div>

          <section className={`flex flex-col gap-5 mt-12 px-28`}>
            <div
              className={`p-8 border-2 border-gray-200 rounded-xl hover:border-gray-600`}
            >
              <div className={`flex justify-between`}>
                <label htmlFor="name" className={`text-xl`}>
                  Lorem .
                </label>
                <h1>5 poin</h1>
              </div>
              <input
                id="name"
                type="text"
                placeholder="Jawab"
                className={`border-0 border-b border-gray-500 mt-5 bg-gray-100 w-1/2 focus:ring-0`}
              />
            </div>
            <div
              className={`p-8 border-2 border-gray-200 rounded-xl hover:border-gray-600`}
            >
              <div className={`flex justify-between`}>
                <label htmlFor="name" className={`text-xl`}>
                  Lorem .
                </label>
                <h1>5 poin</h1>
              </div>
              <div className="mt-5">
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 font-medium text-gray-900 dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    checked
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 font-medium text-gray-900 dark:text-gray-300"
                  >
                    Checked state
                  </label>
                </div>
              </div>
            </div>
            <div
              className={`p-8 border-2 border-gray-200 rounded-xl hover:border-gray-600`}
            >
              <div className={`flex justify-between`}>
                <label htmlFor="name" className={`text-xl`}>
                  Lorem .
                </label>
                <h1>5 poin</h1>
              </div>
              <div className="mt-5">
                <div className="flex items-center mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Default radio
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Checked state
                  </label>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layouts>
    );
  }
}

export default Page;
