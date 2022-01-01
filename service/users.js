import mongo from 'koa-mongo'

export async function createUser(ctx, data) {
    return await ctx.db.collection(`${process.env.COLLECTION_NAME2}`).insertOne(data)
}
export async function getAllData(ctx) {
    return await ctx.db.collection(`${process.env.COLLECTION_NAME2}`).find().toArray()
}
export async function getDataById(ctx, id) {
    return await ctx.db.collection(`${process.env.COLLECTION_NAME2}`).findOne({_id: mongo.ObjectId(id)})
}