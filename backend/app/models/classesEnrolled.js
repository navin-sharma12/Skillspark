import mongoose from "mongoose";
import validator from 'validator';

const classesEnrolledSchema = new mongoose.Schema({
    classesEnrolledid: Number,

    emailid: {
        type: String, 
    },

    emailid: {
        type: String, 
    },

    classesName: {
        type: String, 
    },

    classesStartDate: {
        type: String, 
    },

    classesEndDate: {
        type: String, 
    },

    classesRating: {
        type: Number, 
        validate: [
            function(v) {
              return v >= 0 && v < 6;
            },
            "Rating should be between 0 to 5"
        ]
    },

    classesComment: {
        type: String, 
        validate: [
            (classesComment) => validator.isAlpha(classesComment, "en-US", { ignore: " " }),
            "Comment must be alphanumeric"
        ]
    }
});

export default classesEnrolledSchema;