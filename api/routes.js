module.exports = function(app, dbService){

    // $INICIO

    app.get('/', (request, response)=>{
        response.json({'message': 'Allright'});
    });

    // $USERS

    app.get('/users', (request, response)=>{
        dbService.readUsers()
        .then(users =>{
            response.json(users);
        }).catch(e => {
            response.status(500).json(e);
        })
    });
    
    app.post('/users', (request, response)=>{
        const newUser = request.body;
        console.log(newUser);
        dbService.createUser(newUser)
            .then(() => {
                response.json({"message": "user created"});
            }).catch(e => {
                response.status(500).json(e);
            });
    });

    // $COURSES

    app.get('/courses', (request, response)=>{
        dbService.readCourses()
        .then(courses =>{
            response.json(courses);
        }).catch(e => {
            response.status(500).json(e);
        })
    });

};