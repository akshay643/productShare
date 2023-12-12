import { revalidateTag } from "next/cache";
import AllProducts from "../../models/allProductsModel";
import { connectToDB } from "../../utils/db";
import AnimatedBackground from "../../components/AnimatedBG";
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
      <AnimatedBackground />
      <section className="w-screen h-screen flex flex-col justify-start gap-10 items-center py-14 shadow-lg">
        <a
          className="text-center buttonstyle border bg-white p-3 lg:w-1/2  rounded-3xl font-medium text-black hover:bg-black hover:text-white hover:shadow-xl transition-all duration-300"
          href="/ProductsSection"
        >
          Products
        </a>
        <a
          className="text-center buttonstyle bg-white p-3 lg:w-1/2 rounded-3xl text-dark font-medium border hover:bg-black hover:shadow-xl hover:text-white transition-all duration-300"
          href="/social"
        >
          Social Links
        </a>
      </section>
    </>
  );
};

export default Home;
