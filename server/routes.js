module.exports = function(app, dbService){

    // $INICIO

    app.get('/', (request, response)=>{
        response.json({'message': 'Allright'});
    });

    app.get("/landingpage", (request, response)=>{
        response.json({'messages': 'Back connected'});
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

    // $LESSONS 
    app.get('/lessons', (request, response)=>{
        dbService.readLessons()
        .then(lessons =>{
            response.json(lessons);
        }).catch(e => {
            response.status(500).json(e);
        })
    });

    // $ USER - COURSES
    app.post('/registerCourse', (request, response)=>{
        const newRegister = request.body;
        console.log(newRegister);
        dbService.registerCourse(newRegister)
        .then(() => {
            response.json({"message": "Course registered successfully"});
        }).catch(e => {
            response.status(500).json(e);
        });
    })

    // $ USER - LESSONS
    app.post('/registerLesson', (request, response)=>{
        const newRegister = request.body;
        console.log(newRegister);
        dbService.registerLesson(newRegister)
        .then(() => {
            response.json({"message": "Lesson registered successfully"});
        }).catch(e =>{
            response.status(500).json(e);
        });
    })
};