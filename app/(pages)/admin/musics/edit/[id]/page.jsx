"use client";
import React, { Component, useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { BiCloudUpload } from "react-icons/bi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import Swal from "sweetalert2";

const schema = yup.object().shape({
  name: yup.string().required(),
  video: yup.string().required(),
});

export default function Page({ params }) {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors, dirtyFields },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [imageFile, setImageFile] = useState(null);
  const [tempImage, setTempImage] = useState(null);
  const [descDefault, setDescDefault] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleInputImage = (e) => {
    if (e.target.files[0]) {
      const src = URL.createObjectURL(e.target.files[0]);
      setTempImage(src);
      setImageFile(e.target.files[0]);
    }
  };

  const handleUpdate = async (data) => {
    if (loading) return;
    if (descDefault === "") {
      alert("Konten tidak boleh kosong!");
      return;
    }
    if (imageFile === null) {
      alert("Gambar tidak boleh kosong!");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("video", data.video);
    formData.append("city_id", 1);
    formData.append("desc", descDefault);
    formData.append("image", imageFile);

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API + "/cities/musics/update/" + params.id,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const responseData = response.data;
      console.log("Response:", responseData);

      if (responseData.status) {
        Swal.fire("Data berhasil dirubah!", "", "success");
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Adjust delay time as needed

        router.push("/admin/musics");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setLoading(false);
  };

  const handleGetMusics = async () => {
    try {
      const query = await axios.get(
        process.env.NEXT_PUBLIC_API + `/cities/musics/${params.id}`
      );
      const res = await query.data;

      setValue("name", res.data.name);
      setValue("video", res.data.video);
      setValue("image", res.data.image);
      setImageFile(res.data.image);
      setDescDefault(res.data.desc);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetMusics();
  }, []);

  return (
    <AdminLayout>
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <h6 className="text-2xl font-semibold dark:text-white mb-5">
                Tambah Data
              </h6>

              <form className={`px-10 pb-10`}>
                <div className="mb-6">
                  <label
                    htmlhtmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Judul
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Judul"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlhtmlFor="video"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Link Video
                  </label>
                  <input
                    type="text"
                    id="video"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="youtube.com"
                    {...register("video")}
                  />
                  {errors.video && (
                    <p className="text-red-500 text-sm">
                      {errors.video.message}
                    </p>
                  )}
                </div>
                <div className={`mb-6`}>
                  <label
                    htmlhtmlFor="desc"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Deskripsi
                  </label>
                  <ReactQuill
                    id={"desc"}
                    theme="snow"
                    value={descDefault}
                    onChange={setDescDefault}
                    className="h-64 mb-20"
                  />
                </div>
                <div className="mb-6">
                  <h6 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Header Gambar
                  </h6>
                  <label
                    htmlhtmlFor="header"
                    className={`border border-gray-400 h-42 w-full cursor-pointer flex items-center justify-center`}
                  >
                    {imageFile ? (
                      <img
                        src={
                          tempImage
                            ? tempImage
                            : "http://localhost:8000/storage/" + imageFile
                        }
                        alt="image"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <BiCloudUpload className={`text-gray-500 text-4xl`} />
                    )}
                    <input
                      type="file"
                      id="header"
                      className="hidden"
                      onChange={handleInputImage}
                    />
                  </label>
                </div>

                <button
                  onClick={handleSubmit(handleUpdate)}
                  className="btn-primary"
                >
                  <span className="font-2xl">Ubah Data</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
