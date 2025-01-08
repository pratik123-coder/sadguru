import {z} from "zod";

export const CourseSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    course: z.string(),
});