import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from 'validator';

const userSchema = new mongoose.Schema({
    adminid: Number,

    firstName: {
        type: String, 
        required: [false, "First name is required"],
    },

    lastName: {
        type: String, 
        required: [false, "Last name is required"],
    },

    emailid: {
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

    dob: {
        type: String, 
        required: [true, "Date of birth is required."],
    },

    contactNumber: {
        type: Number, 
        required: [true, "Contact number is required."],
        validate: [
            (contactNumber) => {
                let contactString = contactNumber.toString();
                let contactLength = contactString.length == 10;
                let contactFormat = /^\d{10}$/.test(contactNumber);

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

    emergencyContact: {
        type: Number, 
        required: [true, "Emergency contact is required."],
        validate: [
            (emergencyContact) => {
                let contactString = emergencyContact.toString();
                let contactLength = contactString.length == 10;
                let contactFormat = /^\d{10}$/.test(emergencyContact);

                return contactLength && contactFormat;
            },
            "Emergency contact number should contain 10 digits."
        ],
    },
});

userSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, 12);
    next();
});

userSchema.pre("save", function(next) {
    this.confirmPassword = bcrypt.hashSync(this.confirmPassword, 12);
    next();
});

export default userSchema;