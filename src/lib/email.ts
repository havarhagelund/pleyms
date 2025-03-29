import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function sendReservationEmail(data: {
  date: string;
  guests: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
}) {
  const { date, guests, time, name, email, phone, message } = data;

  try {
    await resend.emails.send({
      from: 'Pleyms Pizza <hei@email.havar.dev>',
      to: 'oystein@pleyms.no',
      subject: `Ny reservasjon fra ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Ny reservasjon</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
            <p><strong>Navn:</strong> ${name}</p>
            <p><strong>E-post:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            <p><strong>Dato:</strong> ${date}</p>
            <p><strong>Tid:</strong> ${time}</p>
            <p><strong>Antall gjester:</strong> ${guests}</p>
            ${message ? `<p><strong>Bestillingsønsker:</strong> ${message}</p>` : ''}
          </div>
        </div>
      `,
    });
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
} 