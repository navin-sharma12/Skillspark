import db from "../config/dbSetup.js";
import bcrypt from "bcrypt";

export const addClasses = async (newDetails) => {
    const classes = new db.classes(newDetails);
    console.log("classes service",classes.save());
    return classes.save();
}

export const getAllClassesDetails = async (query) => {
    const params = {...query};
    return db.classes.find(params).exec();
}

export const removeClasses = async (id) => {
    db.classes.findByIdAndDelete(id).exec();
}

export const updateClasses = async (updatedDetails) => {
    let update = {fullname: updatedDetails.fullname, password: updatedDetails.password};
    return db.classes.findByIdAndUpdate(updatedDetails.id, update).exec();  
}

export const authenticate = async ( email, password ) => {
    const account = await db.classes.findOne({email: email}).exec();
    if (!account || !bcrypt.compareSync(password, account.password)) {
        return {name: account.fullname};
    } else {
        return false;
    }
}