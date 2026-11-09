const API_URL = import.meta.env.VITE_CHAT_API_URL;

export const WHATSAPP_URL = "https://wa.me/8801865847806";
export const CALL_URL = "tel:+8801316808506";
export const REFUSAL =
  "Ami Kaucher sir details chara onno kichu jani na, onar bepar kichu jante chaile bolo.";
// Subtle confidence lines, picked at random and never the same claim twice in a row.
const PRAISE = [
  "Real project-e prove kora, tai client-der bhorsha kore.",
  "Onar kaj production-e live, shudhu demo na.",
  "Complex problem-o clean vabe solve korte paren.",
  "Quality ar deadline duitai onar strong point.",
];
let lastPraise = -1;
const praise = () => {
  let i;
  do i = Math.floor(Math.random() * PRAISE.length);
  while (i === lastPraise);
  lastPraise = i;
  return PRAISE[i];
};

// Everything the bot knows comes from this very page.
export const readSiteText = () => {
  const parts = ["home", "about", "skills", "experience", "projects", "contact"].map((id) => {
    const el = document.getElementById(id);
    return el ? `[${id.toUpperCase()}]\n${el.innerText.replace(/\n{2,}/g, "\n").trim()}` : "";
  });
  return parts.filter(Boolean).join("\n\n").slice(0, 6000);
};

const SOFTWARE =
  /\b(code|coding|program\w*|software|web|website|app|apps|api|database|sql|mysql|postgres\w*|laravel|php|react\w*|next\.?js|flutter|javascript|js|typescript|html|css|tailwind|bootstrap|bug|error|deploy\w*|server|backend|frontend|git|github|python|java|node\w*|mongodb|ui|ux|developer|engineer\w*|development|ecommerce|cloud|hosting|domain|seo|framework|library|algorithm|mobile|android|ios)\b/i;

const has = (q, re) => re.test(q);

// Used when no AI endpoint is set or the call fails.
export const localAnswer = (question) => {
  const q = question.toLowerCase();

  if (has(q, /^\s*(hi|hello|hey|salam|assalamu\w*|hola)\b/)) {
    return { text: `Hello! Ami Kaucher sir er assistant. Onar skills, experience, projects ba contact niye jiggesh korte paren.` };
  }
  if (has(q, /(contact|phone|number|call|whatsapp|email|mail|hire|joggajog|jogajog|nibo|kaj korate|address|location)/)) {
    return {
      text: `Kaucher sir er sathe contact korun:\nPhone: 01316808506\nWhatsApp: 8801865847806\nEmail: kaucherahmed420@gmail.com\nLocation: Dhaka, Bangladesh\n${praise()}`,
      cta: true,
    };
  }
  if (has(q, /(project|portfolio|regantify|luxobd|snaptok|style ?loop|logeachi|banaise|banano)/)) {
    return {
      text: `Kaucher sir er kichu kaj:\n- Regantify (featured): multi-vendor e-commerce SaaS, Next.js + React + NestJS\n- LuxoBD: live e-commerce store\n- Style Loop: Laravel + React e-commerce\n- LogeAchi.com: full-stack Laravel\n- SnapTok: social media site\nProjects section-e details ache. ${praise()}`,
    };
  }
  if (has(q, /(skill|stack|expertise|dokkho)/)) {
    return {
      text: `Kaucher sir er skills: HTML, CSS, JavaScript, React, Next.js, Flutter, Laravel, PHP, Bootstrap, Tailwind CSS. Sathe OOP, C/C++ data structures, MongoDB/Express basic. ${praise()}`,
    };
  }
  if (has(q, /(experience|job|company|career|kothay kaj|work(ing)? at|years)/)) {
    return {
      text: `Kaucher sir ekhon Regantify IT Solution-e Software Engineer (Sep 2026 theke). Ager ta Creative Software-e Laravel Web Developer (2025 - Aug 2026). Total 1.5+ years professional experience. ${praise()}`,
    };
  }
  if (has(q, /(kaucher|kaucher sir|who|ke\b|about|bio|introduc|parichoy|tell me|onar|er bepar)/)) {
    return {
      text: `SM Kaucher Ahmed, Dhaka-r ekjon software engineer. Laravel, React, Next.js ar Flutter diye web ar mobile app baanan. Ekhon Regantify IT Solution-e kaj korchen. ${praise()}`,
    };
  }
  if (has(q, SOFTWARE)) {
    return {
      text: `Eta software/tech related prosno. Details-e jaoar age bolbo, eta te Kaucher sir expert. Apni onar sathe WhatsApp ba direct call kore kotha bolun, shorashori valo guide pabeno.`,
      cta: true,
    };
  }
  return { text: REFUSAL };
};

export const askBot = async (history) => {
  const lastUser = [...history].reverse().find((m) => m.role === "user")?.content || "";
  if (API_URL) {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history, context: readSiteText() }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.reply) {
          const cta = SOFTWARE.test(lastUser) || /wa\.me|01316808506/.test(data.reply);
          return { text: data.reply.trim(), cta };
        }
      }
    } catch {
      /* fall through to offline answer */
    }
  }
  return localAnswer(lastUser);
};
