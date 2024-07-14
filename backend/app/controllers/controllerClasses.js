import * as detailsService from "../services/serviceClasses.js";

//to set error message 
const setErrorResponse = (error, response) => {
    response.status(400);
    response.json(error);
}

//to set success message
const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

//created a function of post which acceptes request and response for creating a new user
export const post = async(request, response) => {
    try{
        const newDetails = request.body;
        const savedDetails = await detailsService.addClasses(newDetails);
        setSuccessResponse(savedDetails, response);
    }catch(error){
        setErrorResponse(error,response);
    }
}

//get all users
export const getAllClassesDetails = async (request, response) => {
    try{
        const query = {};
        const details = await detailsService.getAllClassesDetails(query);
        setSuccessResponse(details,response);
    }catch(error){
        setErrorResponse(error,response);
    }
    
}

//update user details
export const updatedDetails = async (request,response) => {
    try{
        const id = request.params.id;
        const updated = {...request.body};
        updated.id = id;
        const details = await detailsService.updateClasses(updated);
        setSuccessResponse(details,response);
    }catch(error){
        setErrorResponse(error,response);
    }
}

//remove user
export const removeDetails = async (request, response) => {
    try{
        const id = request.params.id;
        const details = await detailsService.removeClasses(id);
        setSuccessResponse(details,response);
    }catch(error){
        setErrorResponse(error,response);
    }
}

export const authenticateClasses = async (request, response) => {
    try{
        const email = request.body.emailid;
        const password = request.body.password;
        const details = await detailsService.authenticate(email, password);
        if(details){
            setSuccessResponse({name: details.name},response);
        } else {
            return response.status(400).json({ message: "Passwords do not match." });
        }
    }catch(error){
        setErrorResponse(error,response);
    }
}