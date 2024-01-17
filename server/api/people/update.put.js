import peopleModel from "@/server/model/people.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // 從 body 取出資料
  const { _id, name } = body

  // 透過 _id 找到該筆資料
  const oldData = await peopleModel.findOne({ _id })

  // 更新 DB 該筆資料
  await peopleModel.updateOne(oldData, { name })

  // 儲存 DB 資料
  await oldData.save()

  return { success: true, message: '更新成功喔!!'}
});
