import Router from './route.js';  //initialized all the routes

//called the app function
const route = (app) => {
    app.use('/skillspark', Router);
}

export default route;