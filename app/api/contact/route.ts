import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const POST = async (req: Request) => {
  try {
    const { name, email, phone, checkIn, checkOut, message } = await req.json()

    console.log('Attempting to send email with:', {
      user: process.env.EMAIL_USER,
      passLength: process.env.EMAIL_APP_PASSWORD?.length
    })

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: '1979tryagain@gmail.com',
        pass: 'ymkr viqk bpms zzgs'
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    await transporter.verify()
    console.log('SMTP connection verified')

    const mailOptions = {
      from: '1979tryagain@gmail.com',
      to: '1979tryagain@gmail.com',
      subject: `New Booking Request from ${name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Check-in:</strong> ${checkIn}</p>
        <p><strong>Check-out:</strong> ${checkOut}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
      `
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Message sent: %s', info.messageId)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Detailed error:', error)
    return NextResponse.json(
      { error: 'Error sending email: ' + (error as Error).message },
      { status: 500 }
    )
  }
} 