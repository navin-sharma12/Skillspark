import db from "../config/dbSetup.js";
import bcrypt from "bcrypt";

export const addUser = async (newDetails) => {
    const user = new db.User(newDetails);
    return user.save();
}

export const getAllUserDetails = async (query) => {
    const params = {...query};
    return db.User.find(params).exec();
}

export const removeUser = async (id) => {
    db.User.findByIdAndDelete(id).exec();
}

export const updateUser = async (updatedDetails) => {
    let update = {firstname: updatedDetails.firstname, lastname: updatedDetails.lastname, password: updatedDetails.password};
    return db.User.findByIdAndUpdate(updatedDetails.id, update).exec();  
}

export const authenticate = async ( email, password ) => {
    const account = await db.User.findOne({email: email}).exec();
    if (!account || !bcrypt.compareSync(password, account.password)) {
        return false;
    } else {
        return {name: account.fullname};
    }
}