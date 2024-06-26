
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

    // Actualizar perfil de usuario
    const updateUserProfile = (updatedProfile) => {
        const { username, email } = updatedProfile;
        const userId = updatedProfile.userID; // Asegúrate de tener el userID en el objeto actualizado

        // Ejemplo de actualización con knex
        return knex('users')
            .where('userID', userId)
            .update({
                username: username,
                email: email,
            });
    };

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
            courseID: courseID
        });
    }

    const readUserCourses = (userId) =>{
        return knex('user_courses')
            .select('courseID')
            .where('userID','=',userId)
    }

    // $ USER - LESSONS
    
    const completeLesson = ({userId, courseId}) =>{
        return knex('user_courses')
            .where('userID', userId)
            .andWhere('courseID', courseId)
            .update({
                'Completed': true
            })
    }

    return {
        createUser,
        readUsers,
        getUserIdByUsername,
        readAUser,
        updateUserProfile,
        readCourses,
        readLessons, 
        registerCourse,
        readUserCourses,
        completeLesson
    }
};

module.exports = {
    dbService
}