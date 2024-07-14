import * as detailsService from "../services/serviceAdmin.js";

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

//created a function of post which acceptes request and response for creating a new admin
export const post = async(request, response) => {
    try{
        const newDetails = request.body;
        const savedDetails = await detailsService.addAdmin(newDetails);
        setSuccessResponse(savedDetails, response);
    }catch(error){
        setErrorResponse(error,response);
    }
}

//get all admins
export const getAllAdminDetails = async (request, response) => {
    try{
        const query = {};
        const details = await detailsService.getAllAdminDetails(query);
        setSuccessResponse(details,response);
    }catch(error){
        setErrorResponse(error,response);
    }
    
}

//update admin details
export const updatedDetails = async (request,response) => {
    try{
        const id = request.params.id;
        const updated = {...request.body};
        updated.id = id;
        const details = await detailsService.updateAdmin(updated);
        setSuccessResponse(details,response);
    }catch(error){
        setErrorResponse(error,response);
    }
}

//remove admin
export const removeDetails = async (request, response) => {
    try{
        const id = request.params.id;
        const details = await detailsService.removeAdmin(id);
        setSuccessResponse(details,response);
    }catch(error){
        setErrorResponse(error,response);
    }
}

export const authenticateAdmin = async (request, response) => {
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