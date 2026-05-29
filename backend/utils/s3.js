const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  region: "ap-south-1",
  signatureVersion: "v4"
});

const uploadFile = async (file) => {
  const fileKey = `${Date.now()}-${file.originalname}`;
  const params = {
    Bucket: "service-portal-files-krish123",
    Key: fileKey,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  await s3.upload(params).promise();
  return fileKey;
};

module.exports = uploadFile;

// const AWS = require("aws-sdk");

// const s3 = new AWS.S3();

// const uploadFile = async (file) => {
//   const fileName = Date.now() + "-" + file.originalname;

//   const params = {
//     Bucket: process.env.AWS_BUCKET_NAME,
//     Key: fileName,
//     Body: file.buffer,
//     ContentType: file.mimetype
//   };

//   await s3.upload(params).promise();

//   return fileName; // ✅ ONLY RETURN KEY (IMPORTANT)
// };

// module.exports = uploadFile;