import { z } from "zod"

export const addEmployeeSchema = z.object({
    name: z.string().min(3),
    email: z.string().min(3),
    role: z.string(),
    password: z.string().min(6)
}).refine(data => data.role !== 'Select Role', {
    message: "Please select!",
    path: ["role"]
})

export type TAddEmployeeSchema = z.infer<typeof addEmployeeSchema>