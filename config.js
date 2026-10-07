/* Studio Emilly Andrade — endereço do banco, lido pelo site (index.html) e pelo painel (admin.html).
   Suba este arquivo na MESMA pasta dos dois: é ele que liga um ao outro.
   Nunca coloque senha aqui: a chave "anon" é pública por natureza.
   O painel (admin.html) abre direto, sem login: quem tiver o link dele vê e altera a agenda.

   WhatsApp, horários, dias de atendimento, aviso e preços agora são editados no painel (aba "Site").
   Os valores abaixo de WHATSAPP e AGENDA só valem enquanto nada foi salvo lá, ou se o banco estiver fora do ar. */
window.SEA_CONFIG = {
  SUPABASE_URL: "https://mhiitwgbndqxrunfenjb.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oaWl0d2dibmRxeHJ1bmZlbmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk2NTQwNjIsImV4cCI6MjEwNTIzMDA2Mn0.FSiKlv5Tc58RO9-eK_UbJjkAAbUx7bJ_3VddIwEVWrc",
  WHATSAPP: "557991398074",   // +55 79 9139-8074 · número do studio com DDI + DDD, só números
  AGENDA: { abre: "09:00", fecha: "18:30", duracao: 70, dias: [1, 2, 3, 4, 5, 6], janelaDias: 60 }   // reserva. dias: 0=domingo … 6=sábado
};
