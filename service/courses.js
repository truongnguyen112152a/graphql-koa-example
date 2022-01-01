export async function createCourse(ctx, data) {
    return await ctx.db.collection(`${process.env.COLLECTION_NAME1}`).insertOne(data)
}