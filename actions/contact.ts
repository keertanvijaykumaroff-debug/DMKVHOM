'use server'

import { z } from 'zod'

const contactFormSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    company: z.string().optional(),
    message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

export type ContactFormState = {
    success?: boolean
    message?: string
    errors?: {
        name?: string[]
        email?: string[]
        company?: string[]
        message?: string[]
    }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const validatedFields = contactFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        message: formData.get('message'),
    })

    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Please check your inputs.',
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, email, company, message } = validatedFields.data

    try {
        const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL

        if (!webhookUrl) {
            console.error('GOOGLE_SHEETS_WEBHOOK_URL is not defined')
            return {
                success: false,
                message: 'Configuration error: Google Sheets URL not set.',
            }
        }

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                company,
                message,
                date: new Date().toISOString(),
            }),
        })

        // Apps Scripts usually return a 200 even on logical error if not handled, 
        // but we check for HTTP error status just in case.
        if (!response.ok) {
            throw new Error('Failed to submit to Google Sheets')
        }

        return {
            success: true,
            message: 'Message sent successfully! We will get back to you soon.',
        }
    } catch (error) {
        console.error('Contact form submission error:', error)
        return {
            success: false,
            message: 'Something went wrong. Please try again later.',
        }
    }
}
