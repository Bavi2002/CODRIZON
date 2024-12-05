const multer = require("multer");
const GridFS = require("multer-gridfs-storage");
const path = require("path");

const storage = new GridFS({
  url: process.env.DB_URL,
  file: (req, file) => {
    return {
      bucketName: "product_images",
      filename: `product-${Date.now()}${path.extname(file.originalname)}`,
    };
  },
});

const upload = multer({ storage });
module.exports = upload;