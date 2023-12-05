import { revalidateTag } from "next/cache";
import Button from "../../components/Button";
import AllProducts from "../../models/allProductsModel";
import { connectToDB } from "../../utils/db";
import Link from "next/link";
import Loader from "../../components/Loader";
async function getData() {
  try {
    connectToDB();
    const data = await AllProducts.find({});
    if (!data) {
      throw new Error("couldn't find the data");
    }
    revalidateTag("getData");
    return data;
  } catch (error) {
    console.log("error");
  }
}

const Home = async () => {
  const data = await getData();
  return (
    <>
      <section className="w-screen h-screen flex flex-col justify-start gap-10 items-center py-14 shadow-lg">
        <a
          className="text-center buttonstyle bg-green-600 p-3 lg:w-1/2  rounded-3xl text-white hover:bg-green-800 hover:shadow-xl transition-all duration-300"
          href="/ProductsSection"
        >
          Products
        </a>
        <a
          className="text-center buttonstyle bg-green-600 p-3 lg:w-1/2 rounded-3xl text-white hover:bg-green-800 hover:shadow-xl transition-all duration-300"
          href="/ProductsSection"
        >
          Social Links
        </a>
      </section>
    </>
  );
};

export default Home;
