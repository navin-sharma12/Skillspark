import db from "../config/dbSetup.js";

export const addClassesApproval = async (newDetails) => {
    const classes = new db.classes(newDetails);
    return classes.save();
}

export const getAllClassesApprovalDetails = async (query) => {
    const params = {...query};
    return db.classes.find(params).exec();
}

export const removeClassesApproval = async (id) => {
    db.classes.findByIdAndDelete(id).exec();
}