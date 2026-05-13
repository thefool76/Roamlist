create extension if not exists pgcrypto;

create table if not exists waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  destination_interest text,
  created_at timestamp default now()
);
