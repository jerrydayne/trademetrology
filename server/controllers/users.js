import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: "company not found, ensure it has an account and try again" });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid company credentials" });

        
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "something went wrong. try again!" });
    }
}

export const signup = async (req, res) => {
    const {
        email,
        password,
        passwordConfirm,
    } = req.body;
    // const {
    //     userType, 
    //     companyWesite,
    //     companyName,
    //     rcNumber,
    //     representativeName,
    //     representativePhone,
    //     representativeEmail,
    //     companyAddress,
    //     companyState,
    //     companyLGA,
    //     email,
    //     password,
    //     passwordConfirm,
    //     securityQuestion,
    //     securityAnswer
    // } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(existingUser) return res.status(400).json({ message: "a company with this email already exist" });

        if(password != passwordConfirm) return res.status(400).json({ message: "a company with this email already exist" });

        const hashedPassword = await bcrypt.hash(12);
        
        const result = await User.create({
            email,
            password: hashedPassword,
        });
        // const result = await User.create({
        //     userType, 
        //     companyWesite,
        //     companyName,
        //     rcNumber,
        //     representativeName,
        //     representativePhone,
        //     representativeEmail,
        //     companyAddress,
        //     companyState,
        //     companyLGA,
        //     email,
        //     password: hashedPassword,
        //     securityQuestion,
        //     securityAnswer
        // });

        const token = jwt.sign({ email: result.email, id: result._id }, 'isDayne', { expiresIn: "1h" });

        res.status(200).json({ result, token});
    } catch (error) {
        res.status(500).json({ message: "something went wrong. try again!" });
    }
}