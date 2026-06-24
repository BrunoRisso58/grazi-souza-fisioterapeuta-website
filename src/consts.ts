export const SITE_NAME = "Grazi Souza Fisioterapia";
export const SITE_DESCRIPTION =
  "Fisioterapia domiciliar (home care) em Campinas e região, para todas as idades, e pilates, com Grazielle de Souza. CREFITO-3 453195-F.";

export const WHATSAPP_NUMBER = "5519971120852";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, Grazi! Vi seu site e gostaria de saber mais sobre o atendimento domiciliar.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_DEFAULT_MESSAGE
)}`;

export const PHONE_DISPLAY = "(19) 97112-0852";
export const INSTAGRAM_HANDLE = "@fisio.grazisouza";
export const INSTAGRAM_URL = "https://instagram.com/fisio.grazisouza";
export const CREFITO = "CREFITO-3 / 453195-F";

export const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export const FAQ_ITEMS = [
  {
    q: "Em quais regiões você atende?",
    a: "Atendo em Campinas e região. Me manda uma mensagem contando seu bairro que eu confirmo se chego até você.",
  },
  {
    q: "Como funciona a primeira visita?",
    a: "Na primeira visita eu avalio o quadro, converso sobre o histórico da pessoa e já te explico como seria o plano de tratamento, sem compromisso.",
  },
  {
    q: "Preciso ter equipamentos em casa?",
    a: "Não. Eu levo o que for necessário para a sessão. Se algo específico for preciso, te aviso com antecedência.",
  },
  {
    q: "O atendimento é particular ou pelo convênio?",
    a: "No momento atendo apenas particular, sem convênio.",
  },
  {
    q: "Dá para agendar fora do horário comercial?",
    a: "Sim. Atendo em horários combinados, conforme a sua disponibilidade e a minha agenda.",
  },
  {
    q: "Posso incluir pilates junto com a fisioterapia?",
    a: "Posso, sim. Se fizer sentido para o seu objetivo, incluo sessões de pilates dentro do plano de acompanhamento.",
  },
];
