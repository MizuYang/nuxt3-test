import mongoose from "mongoose";

// 定義資料庫欄位的型別
const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: String,
  },
});

// const people = mongoose.model(<資料庫名稱>, peopleSchema, <資料表名稱>);
const people = mongoose.model("nuxt3-mizu-test", peopleSchema, "people");

// people model
export default people;