'use server'

import { z } from 'zod'

const contactFormSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    mobile: z.string().optional(),
    company: z.string().optional(),
    message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

export type ContactFormState = {
    success?: boolean
    message?: string
    errors?: {
        name?: string[]
        email?: string[]
        mobile?: string[]
        company?: string[]
        message?: string[]
    }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const validatedFields = contactFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        mobile: formData.get('mobile'),
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

    const { name, email, mobile, company, message } = validatedFields.data

    try {
        const endpoint = process.env.CONTACT_FORM_ENDPOINT

        if (!endpoint) {
            console.error('CONTACT_FORM_ENDPOINT is not defined')
            return {
                success: false,
                message: 'Configuration error: Contact form endpoint not set.',
            }
        }

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                mobile,
                company,
                message,
                _subject: `New submission from ${name}`, // Formspree specific
            }),
        })

        if (!response.ok) {
            const data = await response.json().catch(() => ({}))
            console.error('Formspree error:', data)
            throw new Error('Failed to submit to Contact Form')
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
