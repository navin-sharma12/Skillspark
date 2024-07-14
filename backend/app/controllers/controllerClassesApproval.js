import * as detailsService from "../services/serviceClassesApproval.js";

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
        const savedDetails = await detailsService.addClassesApproval(newDetails);
        setSuccessResponse(savedDetails, response);
    }catch(error){
        setErrorResponse(error,response);
    }
}

//get all users
export const getAllClassesApprovalDetails = async (request, response) => {
    try{
        const query = {};
        const details = await detailsService.getAllClassesApprovalDetails(query);
        setSuccessResponse(details,response);
    }catch(error){
        setErrorResponse(error,response);
    }
}

//remove user
export const removeDetails = async (request, response) => {
    try{
        const id = request.params.id;
        const details = await detailsService.removeClassesApproval(id);
        setSuccessResponse(details,response);
    }catch(error){
        setErrorResponse(error,response);
    }
}