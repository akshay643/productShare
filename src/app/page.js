import { revalidateTag } from "next/cache";
import Button from "../../components/Button";
import AllProducts from "../../models/allProductsModel";
import { connectToDB } from "../../utils/db";
import Link from "next/link";
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
    <section className="w-screen h-screen flex flex-col justify-start gap-16 items-center py-14 rounded-lg shadow-lg">
      <div>
        <Button
          isLink
          fullwidth
          buttonText="Amazon Finds"
          isLarge
          isPrimary
          href="/ProductsSection"
        >
          Products
        </Button>
      </div>
      <div>
        <Button
          isLink
          fullwidth
          buttonText="Social Media"
          isLarge
          isPrimary
          href="/ProductsSection"
        >
          Products
        </Button>
      </div>
    </section>
  );
};

export default Home;
