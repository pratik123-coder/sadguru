"use server"

import { db } from "@/lib/db";
import { ContactSchema } from "@/schema/contact.schema";
import { z } from "zod";


export const contactEntry = async ( values: z.infer<typeof ContactSchema> ) => {
    const { name, email, phone, message } = values;

    const createEntry = await db.contact.create({
        data: {
        name,
        email,
        phone,
        message,
        },
    });
    if(!createEntry) {
        return {
            success: false,
            message: "Failed to create entry",
        };
    }
    return {
        success: true,
        data: values,
    };
  };