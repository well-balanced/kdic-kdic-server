import { buzzwordModel, IBuzzword } from './model'
import { isEmpty } from 'lodash'

async function getBuzzword(buzzwordId: string) {
  return await buzzwordModel.findOne({ buzzwordId })
}

async function getBuzzwordList() {
  return await buzzwordModel.find()
}

async function createBuzzword(buzzword: IBuzzword) {
  const exist = await getBuzzword(buzzword.buzzwordId)
  return isEmpty(exist) ? await buzzwordModel.create(buzzword) : exist
}

async function updateBuzzword(buzzword: IBuzzword) {
  return await buzzwordModel.findOneAndUpdate(
    { buzzordId: buzzword.buzzwordId },
    buzzword,
    { new: true },
  )
}

async function deleteBuzzword(buzzwordId: string) {
  const result = await buzzwordModel.deleteOne({ buzzwordId })
  return Boolean(Number(result.ok))
}

export {
  getBuzzword,
  getBuzzwordList,
  createBuzzword,
  updateBuzzword,
  deleteBuzzword,
}
