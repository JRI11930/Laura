
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

    const users = 'users'
    const courses = 'courses'

    const readUsers = () => {
        return knex(users).select('*')
    }

    const createUser = ({username, password, email}) =>{
        return  knex(users).insert({
                username: username,
                password: password,
                email: email,
        }); // $retorna una promesa
    };

    const readCourses = ()=>{
        return knex(courses).select('*')
    }

    return {
        createUser,
        readUsers,
        readCourses
    }
};

module.exports = {
    dbService
}