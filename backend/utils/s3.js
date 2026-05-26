const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  region: "ap-south-1"
});

const uploadFile = async (file) => {
  const params = {
    Bucket: "service-portal-files-krish123",
    Key: `${Date.now()}-${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  const data = await s3.upload(params).promise();
  return data.Location;
};

module.exports = uploadFile;