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
    app.get('/login', (request, response) => {
        const { email, password } = request.body;
        dbService.readUsers()
        .then(users => {
          const user = users.find(user => user.email === email && user.password === password);
          if (user) {
            // Establecer cookie con el ID del usuario
            response.cookie('userId', user.userID, { maxAge: 1000 * 60 * 60});
            response.json({ "message": "Login successful" });
          } else {
            response.status(401).json({ "message": "Invalid credentials" });
          }
        }).catch(e => {
          response.status(500).json(e);
        });
    });

    const validateCookieMiddleware = (req, res, next) => {
        const userId = req.cookies.userId;
        if (!userId) {
          return res.status(401).json({ "message": "Unauthorized" });
        }
        next(); // Si la cookie es válida, permite que la solicitud continúe
    };

    app.get('/logout', (req, res) => {
        res.clearCookie('userId');
        res.json({ "message": "Logged out successfully" });
    });

    // $COURSES

    app.get('/courses', validateCookieMiddleware, (request, response)=>{
        dbService.readCourses()
        .then(courses =>{
            response.json(courses);
        }).catch(e => {
            response.status(500).json(e);
        })
    });

    // $LESSONS 
    app.get('/lessons', validateCookieMiddleware, (request, response)=>{
        dbService.readLessons()
        .then(lessons =>{
            response.json(lessons);
        }).catch(e => {
            response.status(500).json(e);
        })
    });

    // $ USER - COURSES
    app.post('/registerCourse', validateCookieMiddleware, (request, response)=>{
        const newRegister = request.body;
        console.log(newRegister);
        dbService.registerCourse(newRegister)
        .then(() => {
            response.json({"message": "Course registered successfully"});
        }).catch(e => {
            response.status(500).json(e);
        });
    })

    app.get('/readUserCourses', validateCookieMiddleware, (request, response) =>{
        const userId = request.query.userId;
        dbService.readUserCourses(userId)
        .then(userCourses =>{
            response.json(userCourses);
        }).catch(e => {
            response.status(500).json(e);
        });
    })

    // $ USER - LESSONS
    app.post('/completeLesson', validateCookieMiddleware, (req, res) => {
        const {userId, courseId} = req.body;
        console.log(req.body)
        dbService.completeLesson(userId, courseId)
        .then(() => {
            res.json({"meessage": "Lección completada con éxito"});
        }).catch(e => {
            res.status(550).json(e);
        });
    });

    // $ COOKIES
    
    app.get('/getUserByCookie', (req,res)=>{
        const ObjUserId = req.cookies
        console.log(ObjUserId.userId)
        dbService.readAUser(ObjUserId.userId)
        .then(user =>{
            console.log(user)
            res.json(user);
        }).catch(e => {
            res.status(500).json({"message": "something went wrong"});
        });
    })
    
};