import { z } from "zod";

export const studentRegisterSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required" }),
  email: z.string().email(),
  phone: z.string().min(10, { message: "Invalid phone number" }),
  language: z.enum(["nepali", "english", "both"]),
  experience: z.enum(["beginner", "intermediate", "advanced"]),
  techStacks: z.array(z.string()).min(1, { message: "Select at least one" }),
  socialLinks: z.string().optional().refine((s) => !s || s.includes("http"), { message: "Provide full URL if any" }),
  wantsCertificate: z.boolean(),
  profilePhoto: z.any().optional(),
});
export type StudentRegisterData = z.infer<typeof studentRegisterSchema>;
