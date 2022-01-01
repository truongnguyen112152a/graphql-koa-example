import { gql } from 'apollo-server-koa'

// định nghĩa kiểu dữ liệu
const typeDefs = gql`
    type User {
        _id: String
        name: String
        age: Int
        course: [Course]
    }
    type Course {
        _id: String
        name: String
        price: Int
        teacher: String
        user: User
    }
    # ROOT TYPE
    type Query {
        users: [User]
        user(_id: String): User
        courses: [Course]
        course(name: String): Course
    }
    type Mutation {
        createCourse (
            name: String
            price: Int
            teacher: String
            userID: String
        ): Course
        createUser (
            name: String
            age: Int
        ): User
    }
`
export default typeDefs