import db from "../config/dbSetup.js";
import bcrypt from "bcrypt";

export const addAdmin = async (newDetails) => {
    const admin = new db.admin(newDetails);
    return admin.save();
}

export const getAllAdminDetails = async (query) => {
    const params = {...query};
    return db.admin.find(params).exec();
}

export const removeAdmin = async (id) => {
    db.admin.findByIdAndDelete(id).exec();
}

export const updateAdmin = async (updatedDetails) => {
    let update = {fullname: updatedDetails.fullname, password: updatedDetails.password};
    return db.admin.findByIdAndUpdate(updatedDetails.id, update).exec();  
}

export const authenticate = async ( email, password ) => {
    const account = await db.admin.findOne({emailid: email}).exec();
    if (!account || !bcrypt.compareSync(password, account.password)) {
        return false;
    } else {
        return {name: account.fullname};
    }
}