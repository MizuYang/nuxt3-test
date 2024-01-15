import mongoose from "mongoose";

export default async (_nitroApp) => {
 try {
   mongoose.set("strictQuery", true);  // 嚴格模式
   await mongoose.connect(
     process.env.MONGOOSE_CONNECT_LINK
   );
   console.log("連接 MongoDB");
 } catch (e) {
   console.error("Error MongoDB =>", e);
 }
};
