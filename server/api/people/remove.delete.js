import peopleModel from "@/server/model/people.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { _id } = body

  await peopleModel.deleteOne({ _id })

  return { success: true, message: '刪除成功喔!!' }
});
