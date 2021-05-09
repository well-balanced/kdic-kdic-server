import mongoose, { Document, Schema } from 'mongoose'

const buzzwordSchema = new Schema({
  buzzwordId: String,
  name: String,
  meaning: String,
})

export interface IBuzzword {
  buzzwordId: string
  name: string
  meaning: string
}

interface IBuzzwordModel extends IBuzzword, Document {}

export const buzzwordModel = mongoose.model<IBuzzwordModel>(
  'buzzwords',
  buzzwordSchema,
)
