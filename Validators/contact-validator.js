const { z } = require("zod");

const contactFormSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { massage: "Name must be at least 3 characters" })
        .max(255, { massage: "Name must not be more than 255 characters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least of 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    message: z
        .string({ requireed_error: "message is required" })
        .trim()
        .min(3, { massage: "Name must be at least 8 characters" })
        .max(255, { massage: "Name must not be more than 255 characters" }),
})

module.exports = contactFormSchema