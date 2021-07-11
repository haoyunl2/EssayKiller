// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let {serviceId, majorId} = event;
  let db = cloud.database();
  const data = await db.collection('Teachers')
  .where({
    majorId: majorId
  })
  .get()
  return data
}