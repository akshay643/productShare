import Image from "next/image";
import Button from "../../components/Button";
import Gallery from "../../components/Gallery";
import { BaseURL } from "../../utils/axiosRoute";

async function getData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  const blogData = data;
  return <Gallery data={blogData} />;
}
