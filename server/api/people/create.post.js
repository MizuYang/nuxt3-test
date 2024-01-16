import peopleModel from "@/server/model/people.model";

export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  
  const { name, email, age } = body
  
  const people = new peopleModel({ name, email, age})

  // 將資料存回 DB
  await people.save(people)

  // 回傳給前端 feedback
  return { success: true, message: '新增成功!' }
});
