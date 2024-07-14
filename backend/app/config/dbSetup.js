import config from '../config/dbConfig.js';
import mongoose from "mongoose";
import adminSchema from '../models/admin.js';
import classesSchema from '../models/classes.js';
import classesApprovalSchema from '../models/classesApproval.js';
import classesEnrolledSchema from '../models/classesEnrolled.js';
import userSchema from '../models/user.js';

const connectDB = async () => {
    mongoose.connect(`${config.database.dialect}://${config.database.host}:${config.database.defaultport}/${config.database.database}`);
}

let db = {}
db.connectDB = connectDB;
db.admin = mongoose.model('Admin', adminSchema);
db.classes = mongoose.model('Classes', classesSchema);
db.ClassesApproval = mongoose.model('Classes Approval', classesApprovalSchema);
db.ClassesEnrolled = mongoose.model('Classes Enrolled', classesEnrolledSchema);
db.User = mongoose.model('User', userSchema);

export default db;