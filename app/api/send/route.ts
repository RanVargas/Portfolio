import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../email-components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        
        return NextResponse.json({message: 'Method not allowed'},
            {
                status: 405,
                headers: {"content-type": "application/json"}
            })
    }
    
    const { name, email, message } =await req.json();

    if (!name || !email || !message || !(name.length > 0 && email.length > 0 && message.length > 0)) {
        return NextResponse.json({message: 'Missing required fields: name, email, and message'},
            {
                status: 400,
                headers: {"content-type": "application/json"}
            });
    }
  

  try {
    const { data, error } = await resend.emails.send({
        from: 'Ran <info@resend.dev>',
        to: ['ren-elias@hotmail.com'],
        subject: 'Porfolio Message Submition',
        react: EmailTemplate({ name: name, email: email, message: message}),
      });

    if (error) {
        console.log(error);
        return NextResponse.json(
            {message: error},
            {
                status: 400,
                headers: {"content-type": "application/json"}
            }
        )
        
    }

    
    return NextResponse.json({message: "Success"},
        {
            status: 200,
            headers: {"content-type": "application/json"}
        }
    );
    
  } catch (err) {
    console.log(err)
    return NextResponse.json({message: err},
        {
            status: 500,
            headers: {"content-type": "application/json"}
        }
    );
    
  }
}