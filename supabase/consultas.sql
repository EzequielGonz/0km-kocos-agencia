-- ============================================================================
-- Tabla de consultas para Supabase (formulario de la home y de los artículos).
-- 1) Ejecutar este archivo en Supabase → SQL Editor.
-- 2) En apps/web/src/lib/leads.ts: LEADS_PROVIDER = 'supabase' y completar
--    SUPABASE_CONFIG con la URL del proyecto y la anon key (Settings → API).
-- El sitio solo puede INSERTAR. Ver y gestionar consultas queda para el equipo.
-- ============================================================================

create table if not exists public.consultas (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  nombre         text not null check (char_length(nombre) between 1 and 120),
  apellido       text not null check (char_length(apellido) between 1 and 120),
  telefono       text not null check (char_length(telefono) between 7 and 30),
  busqueda       text not null,   -- 0KM / Plan de ahorro / Financiación / Todavía no estoy seguro/a
  unidad         text not null check (char_length(unidad) <= 200),
  anticipo       text not null,   -- Sí / No / Estoy evaluándolo
  monto          text,
  usado          text not null,   -- Sí / No
  "detalleUsado" text,            -- marca, modelo y año del usado
  plazo          text not null,
  consulta       text check (char_length(consulta) <= 5000),
  origen         text check (char_length(origen) <= 300),  -- página desde la que llegó
  -- Seguimiento del vendedor (lo completa el equipo, no el sitio)
  estado         text not null default 'nueva' check (estado in ('nueva', 'contactada', 'cotizada', 'tasación', 'vendida', 'descartada')),
  notas          text
);

create index if not exists consultas_created_at_idx on public.consultas (created_at desc);

alter table public.consultas enable row level security;

drop policy if exists "formulario publico inserta" on public.consultas;
create policy "formulario publico inserta"
  on public.consultas for insert to anon
  with check (estado = 'nueva' and notas is null);

drop policy if exists "equipo gestiona consultas" on public.consultas;
create policy "equipo gestiona consultas"
  on public.consultas for all to authenticated
  using (true) with check (true);
