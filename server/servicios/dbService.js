
const dbService = () => {

    const knex = require('knex')({
        client: 'mysql',
        connection: {
            database: process.env.DB,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        }
    })

    // $ USERS 
    const createUser = ({username, password, email}) =>{
        return  knex('users').insert({
            username: username,
            password: password,
            email: email,
        }); // $retorna una promesa
    };
    
    const readUsers = () => {
        return knex('users').select('*')
    }

    // $ COURSES 
    const readCourses = ()=>{
        return knex('courses').select('*')
    }

     // $ LESSONS
    const readLessons = ()=>{
        return knex('lessons').select('*')
    }
    
    // $ USER - COURSES

    const registerCourse = ({userID, courseID}) =>{
        return knex('user_courses').insert({
            userID: userID,
            courseID: courseID,
        });
    }

    // $ USER - LESSONS
    const registerLesson = ({userID, lessonID, completed}) =>{
        return knex('user_lessons').insert({
            userID: userID,
            lessonID: lessonID,
            completed: completed,
        });
    }

    return {
        createUser,
        readUsers,
        readCourses,
        readLessons, 
        registerCourse,
        registerLesson
    }
};

module.exports = {
    dbService
}