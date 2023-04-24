import mongoose from "mongoose";

const myDataSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  income: String,
  city: String,
  car: String,
  quote: String,
  phone_price: String,
});

const MyData = mongoose.model("MyData", myDataSchema);

export default MyData;
