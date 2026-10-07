/* Studio Emilly Andrade — configuração única do site (index.html) e do painel (admin.html).
   Preencha aqui e suba este arquivo na MESMA pasta dos dois. É ele que liga um ao outro.
   Nunca coloque senha aqui: a chave "anon" é pública por natureza e a senha fica só no Supabase. */
window.SEA_CONFIG = {
  SUPABASE_URL: "https://mhiitwgbndqxrunfenjb.supabase.co",        // Supabase → Settings → API → Project URL (ex.: https://xxxx.supabase.co)
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oaWl0d2dibmRxeHJ1bmZlbmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk2NTQwNjIsImV4cCI6MjEwNTIzMDA2Mn0.FSiKlv5Tc58RO9-eK_UbJjkAAbUx7bJ_3VddIwEVWrc",   // Supabase → Settings → API → chave "anon public"
  WHATSAPP: "+55 79 9139-8074",            // número do studio com DDI + DDD, só números (ex.: 5579999999999)
  // Agenda: horário de abertura e fechamento, duração de cada atendimento em minutos,
  // dias de atendimento (0 = domingo … 6 = sábado) e quantos dias à frente a cliente pode agendar
  AGENDA: { abre: "09:00", fecha: "18:30", duracao: 70, dias: [1, 2, 3, 4, 5, 6], janelaDias: 60 }
};
