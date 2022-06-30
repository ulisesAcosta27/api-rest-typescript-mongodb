import mongoose from "mongoose";

const main = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://api-pets:api-pets@cluster0.r7jyr.mongodb.net/api-pets" ||
        ""
    );
    console.log('The database is connected successfully')
  } catch (error) {
    console.log(error);
  }
};

main();
