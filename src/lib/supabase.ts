import { createClient } from "@supabase/supabase-js";

export interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  keywords: string[];
  author: string;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

// Cliente público (anon key) — só vê posts com published = true, por força da policy de RLS.
export const supabasePublic = createClient(import.meta.env.SUPABASE_URL, import.meta.env.SUPABASE_ANON_KEY, {
  auth: { persistSession: false },
});

// Cliente do painel /admin (service role key) — ignora RLS, enxerga rascunhos. Nunca expor ao client-side.
export const supabaseAdmin = createClient(import.meta.env.SUPABASE_URL, import.meta.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});
