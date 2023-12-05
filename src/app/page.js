import { revalidateTag } from "next/cache";
import Button from "../../components/Button";
import AllProducts from "../../models/allProductsModel";
import { connectToDB } from "../../utils/db";
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
    <section className="text-gray-600">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-wrap -m-2 justify-center">
          {data &&
            data?.map((product, index) => {
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
                      <p className="mb-4">{product.product_description}</p>

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
  );
};

export default Home;
