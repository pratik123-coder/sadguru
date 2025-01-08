"use server"

import { db } from "@/lib/db"
import bcrypt from "bcrypt"


export const passwordCheck = async (pass: string) => {
	try {
		const passwordRetrieved = await db.password.findFirst();
    if (!passwordRetrieved) {
      return {
        success: false,
        message: "Password not found"
      }
    }
    const { password: retrievedPassword } = passwordRetrieved;
    const isPasswordCorrect = await bcrypt.compare(pass, retrievedPassword);
    
		if (!isPasswordCorrect) {
      return {
        success: false,
        message: "Incorrect Password"
      }
    }
    return {
      success: true,
      message: "Password Correct"
    }
	} catch (error) {
		return {
      success: false,
      message: error
	}
}}
