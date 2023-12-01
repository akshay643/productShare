import Image from "next/image";
import Button from "../../components/Button";
import Gallery from "../../components/Gallery";
import { BaseURL } from "../../utils/axiosRoute";
async function getData(id) {
  const res = await fetch(`${BaseURL}/api/products`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  console.log("dadadadadad", res);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return <Gallery data={data} />;
}
