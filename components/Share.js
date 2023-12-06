"use client";
import React from "react";
import { WhatsappShareButton } from "react-share";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";

const Share = ({ shareurl }) => {
  const notify = (notification) => toast(notification);

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
      <div className="flex justify-between w-full mt-3">
        <WhatsappShareButton url={shareurl} className=" animate-bounce">
          <span className="myShareCountWrapper ">
            <Image
              src="/whatsapp.svg"
              height={20}
              width={20}
              alt="whatsapp share"
            />
          </span>
        </WhatsappShareButton>
        <p
          className=" animate-bounce"
          onClick={() => {
            navigator.clipboard.writeText(shareurl);
            notify("copied");
          }}
        >
          <Image src="/copy.svg" height={20} width={20} alt="copy" />
        </p>
      </div>
    </>
  );
};

export default Share;
