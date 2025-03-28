import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, rating, review } = await request.json();

    const { error } = await supabase
      .from('reviews')
      .insert([
        {
          name,
          rating,
          review,
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error saving review:', error);
    return new Response(JSON.stringify({ error: 'Failed to save review' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}; 