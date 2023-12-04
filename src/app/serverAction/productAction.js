"use server";

import { connectToDB } from "../../../utils/db";
const AllProducts = require("../../../models/allProductsModel"); // Adjust the path accordingly

export async function postProduct(formData) {
  try {
    connectToDB();
    const { product_description, product_link, product_name, product_url } =
      formData;
    // Create a new instance of the product model
    const NewProducts = new AllProducts({
      product_description,
      product_link,
      product_name,
      product_url,
    });

    await NewProducts.save();

    return { message: "Success", data: NewProducts, status: 200 };
  } catch (error) {
    return { message: "failed to fetch" };
  }
}
