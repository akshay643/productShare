import Button from "../../components/Button";
import axios from "axios";
// async function getData() {
//   try {
//     const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`);

//     // Axios doesn't use the "ok" property, so you can check for the status directly
//     if (res.status !== 200) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error("Failed to fetch data");
//     }

//     return res.json(); // Axios already parses JSON for you
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw new Error("Failed to fetch data");
//   }
// }

//hello
const Home = async () => {
  const options = {
    method: "GET", // HTTP method
    headers: {
      "Content-Type": "application/json", // Request headers
      // Add any other headers as needed
    },
  };
  const value = await fetch(`${process.env.BASE_URL}api/products`, options)
    .then((response) => {
      console.log("1", response);
      // Check if the request was successful (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Parse the response data (assuming it's JSON)
      return response.json();
    })
    .then((datas) => {
      console.log("2", datas);

      // Handle the data from the successful response

      return datas;
    })
    .catch((error) => {
      console.log("3", error);

      // Handle errors during the request
      console.error("Fetch error:", error.message);
    });
  // options.body = JSON.stringify(body);

  console.log("ssssssss", value);
  // const dataRsult = await fetch(`${process.env.BASE_URL}api/products`);
  // const data_data = await dataRsult.json();
  // //d
  const data = value?.data;
  // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", data);
  return (
    <section className="text-gray-600  ">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-wrap -m-4">Hello Kunal</div>
      </div>
    </section>
  );
};

export default Home;
