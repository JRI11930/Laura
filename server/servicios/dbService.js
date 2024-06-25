
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

    const getUserIdByUsername = (username) => {
        return knex('users')
         .select('userID')
         .where('username', username).first();
    };

    const readAUser = (userid) =>{
        return knex('users').select('*').where('userID', userid).first();
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

    const readUserCourses = (userId) =>{
        return knex('user_courses')
            .join('courses', 'user_courses.courseID', '=', 'courses.courseID' )
            .select('name')
            .where('userID', userId)
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
        getUserIdByUsername,
        readAUser,
        readCourses,
        readLessons, 
        registerCourse,
        readUserCourses,
        registerLesson
    }
};

module.exports = {
    dbService
}