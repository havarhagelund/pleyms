import { supabase } from '../../lib/supabase';

export const GET = async () => {
    const { data: reviews, error } = await supabase.from('reviews').select('*');
  
    if (error) {
      console.error("Failed to ping Supabase", error);
      return new Response("Ping failed", { status: 500 });
    }
    return new Response("Supabase pinged", { status: 200 });
  };
  