"use client";
import React, { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import FileBase64 from "react-file-base64";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postProduct } from "../serverAction/productAction";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";

// const validationSchema = Yup.object({
//   product_name: Yup.string().required("required"),
//   product_description: Yup.string().required("required"),
//   product_link: Yup.string().required("required"),
// });

const Page = () => {
  const notify = (notification) => toast(notification);

  const router = useRouter();
  const [isAuthorise, setIsAuthorise] = useState(false);
  const [files, setFiles] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);
  const getFiles = (files) => {
    setFiles(files[0].base64);
  };
  const [productData, setProductData] = useState({
    product_name: "",
    product_description: "",
    product_link: "",
    product_url: "",
  });

  const formik = useFormik({
    initialValues: productData,
    // validationSchema,
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
  });

  const handleFormSubmit = async (values) => {
    const result = await postProduct({
      ...values,
      product_link: files,
    });
    if (!result.status === 200) {
      alert("Something went wrong");
    }
    setUpdatedData(result.data);
    alert("Saved Successfully");
    // router.push("/");
  };
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (password !== process.env.PASSWORD) {
      notify("Not Authorise");
      setIsAuthorise(false);
    } else {
      notify("Authorise");

      setIsAuthorise(true);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        transition={Flip}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {!isAuthorise ? (
        <>
          <div className="flex flex-center justify-start lg:h-screen xs:h-max  ">
            <div className="m-auto flex flex-col p-20 border rounded-lg shadow-2xl">
              <Input
                label="Enter your password"
                name="password"
                className="rounded-lg shadow-lg"
                type="password"
                onChange={handleChange}
              />
              <Button isPrimary buttonText="Login" handleClick={handleClick} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-screen flex justify-center  bg-center bg-white  px-4 sm:px-6 bg bg-no-repeat bg-cover relative items-start p-4">
            <div className="form w-full h-full p-12 border rounded-2xl shadow-xl">
              <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                <div className="mb-3 space-y-2 w-full text-xs">
                  <Input
                    placeholder="Product Name"
                    label="Product Name"
                    onChange={formik.handleChange}
                    required="required"
                    type="text"
                    name="product_name"
                  />
                  <p className="text-red text-xs hidden">
                    Please fill out this field.
                  </p>
                </div>
                <div className="mb-3 space-y-2 w-full text-xs">
                  <Input
                    label="Product Link"
                    onChange={formik.handleChange}
                    required="required"
                    type="text"
                    name="product_url"
                  />
                  <p className="text-red text-xs hidden">
                    Please fill out this field.
                  </p>
                </div>
              </div>
              <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                <div className="mb-3 space-y-2 w-full text-xs">
                  <Input
                    placeholder="Product Description"
                    label="Product Description"
                    required="required"
                    onChange={formik.handleChange}
                    type="text"
                    name="product_description"
                  />
                  <p className="text-red text-xs hidden">
                    Please fill out this field.
                  </p>
                </div>
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label>File Upload</label>
                  <br />
                  <FileBase64
                    className="bg-dark border"
                    multiple={true}
                    onDone={(e) => getFiles(e)}
                  />{" "}
                  <p className="text-red text-xs hidden">
                    Please fill out this field.
                  </p>
                </div>
              </div>
              <p className="text-xs text-red-500 text-right my-3">
                Required fields are marked with an asterisk{" "}
                <abbr title="Required field">*</abbr>
              </p>
              <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                <Button buttonText="cancel" isSecondary isSmall />

                <Button
                  type="submit"
                  handleClick={formik.handleSubmit}
                  buttonText="Save"
                  isPrimary
                  isSmall
                />
              </div>
            </div>
          </div>
          <section className="text-gray-600">
            <div className="container px-5 py-20 mx-auto">
              <div className="flex flex-wrap -m-2 justify-center">
                {updatedData &&
                  updatedData?.map((product, index) => {
                    return (
                      <div
                        className="p-4 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/5"
                        key={index}
                      >
                        <div className="shadow-2xl border h-full p-4 rounded-md flex flex-col items-center sm:justify-start justify-center text-center">
                          <img
                            alt="team"
                            className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4"
                            src={product.product_link}
                          />
                          <div className="flex-grow">
                            <h2 className="title-font font-medium text-lg text-gray-900">
                              {product.product_name}
                            </h2>
                            <p className="mb-4">
                              {product.product_description}
                            </p>

                            <a
                              href={product.product_url}
                              target="_blank"
                              className="px-5 py-2 text-white shadow-lg tracking-wider rounded-full hover:shadow-lg bg-green-600 focus:outline-none hover:bg-green-500 text-sm"
                            >
                              Buy
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Page;
