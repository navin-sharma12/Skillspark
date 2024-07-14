import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from 'validator';

const today = new Date();

const classesSchema = new mongoose.Schema({
    classesid: Number,

    fullname: { 
        type: String, 
        required: [true, "fullName is required"],
        validate: [
        (fullname) => validator.isAlpha(fullname, "en-US", { ignore: " " }),
        "Full name must be alphanumeric"],
    },

    imageUrl: {
        type: String, 
    },

    email: {
        type: String, 
        required: [true, "email address is required."],
        unique: [true, "That email address is already taken."],
        lowercase: true,
        validate: [
            (emailid) => {
                let emptyEmail = validator.isEmail;
                let validEmail = /\w+(\.\w+)?\@\w+\.\w{2,3}$/.test(emailid);

                return emptyEmail && validEmail;
            },
            "Invalid email id"
        ]
    },

    password: {
        type: String, 
        required: [true, "Password is required."],
        validate: [
            (password) => {
                let min = password.length >= 8;
                let upper = /[A-Z]/.test(password);
                let lower = /[a-z]/.test(password);
                let special = /[#?!@$%^&*-]/.test(password);
                let number = /[0-9]/.test(password);

                return min && lower && upper && special && number;
            },
            "Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one special character and one number",
        ],
    },

    confirmPassword: {
        type: String, 
        required: [true, "Confirm password is required."],
        validate: [
            function (confirmPassword) {
                return confirmPassword == this.password;
            },
            "Confirm password must be same as Password",
        ],
    },

    classesContactNumber: {
        type: Number, 
        required: [true, "Contact number is required."],
        validate: [
            (classesContactNumber) => {
                let contactString = classesContactNumber.toString();
                let contactLength = contactString.length == 10;
                let contactFormat = /^\d{10}$/.test(classesContactNumber);

                return contactLength && contactFormat;
            },
            "Contact number should contain 10 digits."
        ],
    },

    pointOfContactNumber: {
        type: Number, 
        required: [true, "Contact number is required."],
        validate: [
            (pointOfContactNumber) => {
                let contactString = pointOfContactNumber.toString();
                let contactLength = contactString.length == 10;
                let contactFormat = /^\d{10}$/.test(pointOfContactNumber);

                return contactLength && contactFormat;
            },
            "Contact number should contain 10 digits."
        ],
    },

    address: {
        street: {
            type: String, 
            required: true
        },
        city: {
            type: String, 
            required: true
        },
        state: {
            type: String, 
            required: true
        },
        zip: {
            type: String, 
            required: true,
            validate: [
                (zip) => {
                    let zipvalidation = /^\d{5}$/.test(zip);

                    return zipvalidation;
                },
                "Zip code should contain 5 digit."
            ],
        },
    },

    classesType: {
        type: String, 
        required: true,
        validate: [
            (classesType) => validator.isAlpha(classesType, "en-US", { ignore: " " }),
            "Classes type must be alphanumeric"
        ],
    },

    classesStartTime: {
        type: String, 
        required: true,
    },

    classesEndTime: {
        type: String, 
        required: true,
    },

    classesAmount: {
        type: Number, 
        required: true,
        validate: [
            (value) => {
                return /^\d+$/.test(value) && value > 0;
            },
            "Amount should be a numeric value greater than 0."
        ]
    },

    classesApprovalStatus: {
        type: String, 
        required: false,
    },

    classesRating: {
        type: Number, 
        required: false,
    },

    classesComment: {
        type: String, 
        required: false,
    }
});

classesSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, 12);
    next();
});

classesSchema.pre("save", function(next) {
    this.confirmPassword = bcrypt.hashSync(this.confirmPassword, 12);
    next();
});

export default classesSchema;