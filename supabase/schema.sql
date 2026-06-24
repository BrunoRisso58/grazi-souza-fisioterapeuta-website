-- Roda isso uma vez no SQL Editor do projeto Supabase (https://supabase.com/dashboard -> seu projeto -> SQL Editor).

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text not null,
  content text not null,
  keywords text[] not null default '{}',
  author text not null default 'Grazi Souza',
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table posts enable row level security;

-- Leitura pública só dos posts publicados (usada pelo blog do site, com a anon key)
create policy "Public can read published posts"
  on posts for select
  using (published = true);

-- O painel /admin usa a service role key, que ignora RLS e enxerga tudo (inclusive rascunhos).

create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists posts_set_updated_at on posts;
create trigger posts_set_updated_at
before update on posts
for each row
execute function set_updated_at();
