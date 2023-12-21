"use client";
import React, { useMemo } from "react";
import { defaultExtensions } from "../utils/defaultExtensions";
import { generateHTML } from "@tiptap/react";
const ViewBlog = ({ data }) => {
  console.log("xxx", data);
  const output = useMemo(() => {
    return generateHTML(data, defaultExtensions);
  }, [data]);
  return (
    <div className="prose" dangerouslySetInnerHTML={{ __html: output }}>
      page
    </div>
  );
};

export default ViewBlog;
