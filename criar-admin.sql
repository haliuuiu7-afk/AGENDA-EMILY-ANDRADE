-- =====================================================================
-- Studio Emilly Andrade — cria o login do painel admin
-- Rode UMA vez, DEPOIS do supabase-setup.sql: SQL Editor → New query → colar → Run
--
-- ATENÇÃO: este arquivo contém a senha. Não suba para o GitHub nem para a
-- pasta do site. Rode e apague. Para trocar a senha depois:
-- Supabase → Authentication → Users → usuário → Update password
-- (ou edite a senha abaixo e rode de novo).
-- =====================================================================
do $$
declare
  v_email text := 'emilyandrade2026@gmail.com';
  v_pass  text := 'Andrade321';
  v_id    uuid;
begin
  select id into v_id from auth.users where lower(email) = lower(v_email);

  if v_id is null then
    v_id := gen_random_uuid();
    insert into auth.users (
      instance_id, id, aud, role, email, encrypted_password, email_confirmed_at,
      raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
      confirmation_token, email_change, email_change_token_new, recovery_token
    ) values (
      '00000000-0000-0000-0000-000000000000', v_id, 'authenticated', 'authenticated',
      v_email, extensions.crypt(v_pass, extensions.gen_salt('bf')), now(),
      '{"provider":"email","providers":["email"]}'::jsonb, '{}'::jsonb, now(), now(),
      '', '', '', ''
    );
    insert into auth.identities (
      id, user_id, provider_id, identity_data, provider, last_sign_in_at, created_at, updated_at
    ) values (
      gen_random_uuid(), v_id, v_id::text,
      jsonb_build_object('sub', v_id::text, 'email', v_email, 'email_verified', true, 'phone_verified', false),
      'email', now(), now(), now()
    );
  else
    update auth.users
       set encrypted_password = extensions.crypt(v_pass, extensions.gen_salt('bf')),
           email_confirmed_at = coalesce(email_confirmed_at, now()),
           updated_at = now()
     where id = v_id;
  end if;

  insert into public.admin_users (email) values (lower(v_email)) on conflict (email) do nothing;
end $$;
