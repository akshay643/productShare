import Button from "../../components/Button";
var responseClone; // 1

async function getData() {
  // try {
  //   const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`);
  //   // Axios doesn't use the "ok" property, so you can check for the status directly
  //   if (res.status !== 200) {
  //     // This will activate the closest `error.js` Error Boundary
  //     throw new Error("Failed to fetch data");
  //   }
  //   responseClone = response.clone(); // 2
  //   return res.json(); // Axios already parses JSON for you
  // } catch (error) {
  //   console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
  //   responseClone.text() // 5
  //   .then(function (bodyText) {
  //     console.log('Received the following instead of valid JSON:', bodyText); // 6
  // });
}

//hello
const Home = async () => {
  var data;
  var responseClone; // 1
  await fetch(`${process.env.NEXTAUTH_URL}/api/products`)
    .then(function (response) {
      responseClone = response.clone(); // 2
      console.log(responseClone);
      return response.json();
    })
    .then(
      function (val) {
        // Do something with data
        data = val;
      },
      function (rejectionReason) {
        // 3
        console.log(
          "Error parsing JSON from response:",
          rejectionReason,
          responseClone
        ); // 4
        responseClone
          .text() // 5
          .then(function (bodyText) {
            console.log(
              "Received the following instead of valid JSON:",
              bodyText
            ); // 6
          });
      }
    );
  return (
    <section className="text-gray-600  ">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data &&
            data?.map((product, index) => {
              return (
                <div className="p-4 xs:w-full sm:w-1/2 lg:w-1/5" key={index}>
                  <div className="shadow-2xl border h-full p-4 rounded-md flex flex-col items-center sm:justify-start justify-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-32 h-32 object-cover object-center sm:mb-0 mb-4"
                      src={product.product_link}
                    />
                    <div className="flex-grow">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        {product.product_name}
                      </h2>
                      <p className="mb-4">{product.product_description}</p>
                      <Button isSmall isPrimary buttonText="Buy" />
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
