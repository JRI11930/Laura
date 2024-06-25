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

    // $LOGIN
    app.post('/login', (request, response) => {
        const { email, password } = request.body;
        dbService.readUsers()
        .then(users => {
            const user = users.find(user => user.email === email && user.password === password);
            if (user) {
                response.json({"message": "Login successful"});
            } else {
                response.status(401).json({"message": "Invalid credentials"});
            }
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

    app.get('/readUserCourses', (request, response) =>{
        const userId = request.query.userId;
        dbService.readUserCourses(userId)
        .then(userCourses =>{
            response.json(userCourses);
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

    // $ COOKIES

    app.get('/setUserCookie', async (req, res) => {
        const username = req.query.username;
        const userPromise = await dbService.getUserIdByUsername(username);
        const userId = userPromise.userID;

        if (userId) {
            res.cookie('userId', userId, { maxAge: 1000*10, httpOnly: true })
            res.send(`Welcome, user ${userId}!`);
        } else {
          res.status(401).send('User not found');
        }
    });
    
    app.get('/getUserByCookie', (req, res)=>{
        const userId = req.cookies.userId
        dbService.readAUser(userId)
        .then(user =>{
            res.json(user);
        }).catch(e => {
            res.status(500).json(e);
        });
    })
    
};