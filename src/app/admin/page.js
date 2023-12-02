"use client";
import React, { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postRequest } from "../../../utils/API_request";
import FileBase64 from "react-file-base64";
import { useRouter } from "next/navigation";
import axios from "axios";
const validationSchema = Yup.object({
  product_name: Yup.string().required("required"),
  product_description: Yup.string().required("required"),
  product_link: Yup.string().required("required"),
});
const Page = () => {
  const router = useRouter();

  const [files, setFiles] = useState([]);
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
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      handleFormSubmit(values);
    },
  });
  const handleFormSubmit = async (values) => {
    console.log("values", values);
    const res = await axios.post(`${process.env.NEXTAUTH_URL}/api/products`, {
      ...values,
      product_link: files,
      product_url: "none",
    });
    if (res?.status !== 200) {
      alert("Something Went Wrong");
    } else {
      alert("Saved SuccessFully");
      router.push("/");
    }
  };

  return (
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
              name="product_link"
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
  );
};

export default Page;
