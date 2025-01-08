"use server"

import { db } from "@/lib/db";
import { AdmissionSchema } from "@/schema/admission.schema";
import { z } from "zod";

export const admissionEntry = async ( values: z.infer<typeof AdmissionSchema> ) => {
    const { name, parent_name, phone, whatsapp, gender, category, email,qualification, percentage, interested, address } = values;

    const createEntry = await db.admission.create({
        data: {
        name,
        parentName:parent_name,
        phone,
        whatsapp,
        gender, 
        category, 
        email,qualification, 
        percentage, 
        interested, 
        address,
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
  }

