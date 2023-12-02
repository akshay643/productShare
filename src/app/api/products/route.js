const AllProducts = require("../../../../models/allProductsModel"); // Adjust the path accordingly
import { connectToDB } from "../../../../utils/db";
import multer from "multer";
const fs = require("fs");

const path = require("path");
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../Uploads/"),
  filename: function (req, file, cb) {
    const originalName = path.parse(file.originalname).name;
    const extname = path.extname(file.originalname);
    const uniqueId = uuidv4();
    const uniqueFilename = originalName + "-" + uniqueId + extname;
    cb(null, uniqueFilename);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fieldNameSize: 52428800,
    fileSize: 52428800, // 10 Mb
  },
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|pdf|png|raw/;
    const extname = path.extname(file.originalname).toLowerCase();
    const isAllowed = allowedFileTypes.test(extname);
    if (isAllowed) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpg, .png, .jpeg, and .pdf files are allowed"));
    }
  },
});
export const GET = async (req, res) => {
  try {
    await connectToDB();
    const allProductData = await AllProducts.find({});
    return new Response(JSON.stringify(allProductData), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch product data:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch product data" }),
      { status: 500 }
    );
  }
};

export const POST = async (req, res) => {
  try {
    await connectToDB();

    // Extract non-file fields from the request body
    const { product_description, product_link, product_name, product_url } =
      await req.json();

    // Create a new instance of the product model
    const NewProducts = new AllProducts({
      product_description,
      product_link,
      product_name,
      product_url,
    });
    console.log(NewProducts);

    // Save the product data to the database
    await NewProducts.save();

    // Call the file upload middleware
    return new Response(JSON.stringify(NewProducts), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response({ message: "Error" }, { status: 400 });
  }
};
