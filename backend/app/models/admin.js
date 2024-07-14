import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from 'validator';

const adminSchema = new mongoose.Schema({
    adminid: Number,

    fullname: { 
        type: String, 
        required: [true, "fullName is required"],
        validate: [
        (fullname) => validator.isAlpha(fullname, "en-US", { ignore: " " }),
        "Full name must be alphanumeric"],
    },

    emailid: {
        type: String, 
        required: [true, "email address is required."],
        unique: [true, "That email address is already taken."],
        lowercase: true,
        validate: [
            (emailid) => {
                let emptyEmail = validator.isEmail;
                let validEmail = /\w+\.\w+\@northeastern\.edu/.test(emailid);

                return emptyEmail && validEmail;
            },
            "Invalid email id"
        ]
    },

    password: {
        type: String, 
        required: [true, "password is required."],
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
    }
});

adminSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, 12);
    next();
});

export default adminSchema;