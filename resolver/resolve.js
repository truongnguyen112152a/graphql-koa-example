import fs from 'fs'
import { createCourse } from "../service/courses.js"
import { createUser, getAllData, getDataById } from "../service/users.js"
const user = fs.readFileSync("data/db-user.json", "utf-8")
const course = fs.readFileSync("data/db-course.json", "utf-8")

const resolvers = {
    Query: {
        users: async (parent, args, context) => {
            let data = await getAllData(context)
            return data
        },
        user: async (parent, args, context) => {
            let data = await getDataById(context, args._id)
            return data
        },
        courses: () => {
            let data = JSON.parse(course)
            console.log(data);
            return data
        } ,
        course: (parent, args) => JSON.parse(course).find(course => course.name === args.name)
    },
    User: {
        course: (parent, args) => JSON.parse(course).filter(course => course.userID === parent.id)
    },
    Course: {
        user: (parent, args) => JSON.parse(user).find(user => user.id === parent.userID)
    },
    Mutation: {
        createCourse: async (parent, args, context) => {
            let data = await createCourse(context, args)
        },
        createUser: async (parent, args, context) => {
            let data = await createUser(context, args)
        }
    }
}
export default resolvers