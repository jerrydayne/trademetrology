import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },
    // userType: { type: String, required: true }, 
    // companyWesite: { type: String, required: true },
    // rcNumber: { type: String, required: true },
    // representativeName: { type: String, required: true },
    // representativePhone: { type: String, required: true },
    // representativeEmail: { type: String, required: true },
    // companyAddress: { type: String, required: true },
    // companyState: { type: String, required: true },
    // companyLGA: { type: String, required: true },
    // securityQuestion: { type: String, required: true },
    // securityAnswer: { type: String, required: true },
})

export default mongoose.model("User", userSchema);