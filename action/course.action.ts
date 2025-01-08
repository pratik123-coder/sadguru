"use server"

import { db } from "@/lib/db";
import { CourseSchema } from "@/schema/course.schema";
import { z } from "zod";

export const courseEntry = async ( values: z.infer<typeof CourseSchema> ) => {
    const { name, email, course } = values;

    const createEntry = await db.courses.create({
        data: {
        name,
        email,
        course,
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

