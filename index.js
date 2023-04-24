import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import MyData from "./sample_dataSchema.js";
import sample_data from "./sample_data.js";
const app = express();
app.use(cors());

(async () => {
  try {
    // Add it to .env file
    await mongoose.connect(
      "mongodb+srv://harsh:harsh@cluster0.gmyhikc.mongodb.net/test"
    );
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("Server listening on port 5000");
    });
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
})();

(async () => {
  try {
    await MyData.deleteMany({});
    await MyData.insertMany(sample_data);
    console.log("Data inserted");
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
})();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/mydata", async (req, res) => {
  const data1 = await MyData.find({
    $and: [{ income: { $lt: "$5" } }, { car: { $in: ["BMW", "Mercedes"] } }],
  });
  const data2 = await MyData.find({
    $and: [{ gender: "Male" }, { phone_price: { $gt: "10000" } }],
  });
  const data3 = await MyData.find({
    $and: [
      { last_name: { $regex: "^M" } },
      { quote: { $exists: true, $gt: { $strLenCP: 15 } } },
      { email: { $regex: /M/ } },
    ],
  });
  const data4 = await MyData.find({
    $and: [
      { car: { $in: ["BMW", "Mercedes", "Audi"] } },
      { email: { $not: { $regex: /\d/ } } },
    ],
  });
  const data5 = await MyData.aggregate([
    {
      $group: {
        _id: "$city",
        count: { $sum: 1 },
        totalIncome: { $sum: { $toDouble: "$income" } },
      },
    },
    { $sort: { count: -1 } },
    { $limit: 10 },
    {
      $project: {
        _id: 1,
        count: 1,
        avgIncome: { $divide: ["$totalIncome", "$count"] },
      },
    },
  ]);

  res.send({ data1, data2, data3, data4, data5 });
  // res.send({ data1, data2, data4 });
});
