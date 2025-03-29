import type { APIRoute } from 'astro';
import { sendReservationEmail } from '../../lib/email';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        
        // Validate required fields
        if (!data.date || !data.guests || !data.time || !data.name || !data.email || !data.phone) {
            return new Response(JSON.stringify({
                message: 'Alle påkrevde felt må fylles ut'
            }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        // Send email notification
        const emailSent = await sendReservationEmail(data);
        
        if (!emailSent) {
            console.error('Failed to send email notification');
            return new Response(JSON.stringify({
                message: 'Reservasjon mottatt, men det oppstod en feil ved sending av e-post. Vi tar kontakt snart.'
            }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        
        return new Response(JSON.stringify({
            message: 'Reservasjon mottatt! Vi tar kontakt snart.'
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Reservasjonsfeil:', error);
        return new Response(JSON.stringify({
            message: 'Beklager, noe gikk galt. Vennligst prøv igjen senere.'
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
} 