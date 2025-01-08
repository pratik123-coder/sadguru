import {z} from "zod";

export const AdmissionSchema = z.object({
    name: z.string(),
    parent_name: z.string(),
    phone: z.string(),
    whatsapp: z.string(),
    gender: z.enum(["Male", "Female", "Other"]),
    category: z.enum(["General", "OBC", "SC_ST"]),
    email: z.string().email(),
    qualification: z.string(),
    percentage: z.number(),
    interested: z.string(),
    address: z.string(),
});
