const API_URL = import.meta.env.VITE_CHAT_API_URL;

export const WHATSAPP_URL = "https://wa.me/8801865847806";
export const CALL_URL = "tel:+8801316808506";
export const REFUSAL =
  "Ami Kaucher sir details chara onno kichu jani na, onar bepar kichu jante chaile bolo.";

const pick = (list) => list[Math.floor(Math.random() * list.length)];

// Subtle confidence lines, never the same claim twice in a row.
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
  /\b(code|coding|program\w*|software|web|website|app|apps|api|database|sql|mysql|postgres\w*|laravel|php|react\w*|next\.?js|flutter|javascript|js|typescript|html|css|tailwind|bootstrap|bug|error|deploy\w*|server|backend|frontend|git|github|python|java|node\w*|mongodb|ui|ux|developer|engineer\w*|development|ecommerce|cloud|hosting|domain|seo|framework|library|algorithm|mobile|android|ios|password|login|auth\w*|install\w*|npm|script|function|variable|query)\b/i;

// "uni / onar / sir ..." means the user is asking about Kaucher.
const ABOUT_HIM =
  /(\buni\b|\bonar\b|\bonake\b|\bonare\b|kaucher|\bsir\b|\bhe\b|\bhis\b|\bhim\b|উনি|ওনার|কাউছার)/i;

const has = (q, re) => re.test(q);

const CONTACT_LINES =
  "Phone: 01316808506\nWhatsApp: 8801865847806\nEmail: kaucherahmed420@gmail.com";

const LIFESTYLE = [
  "Kaucher sir er routine ekdom disciplined: shokale focus kore deep work, tarpor code review, raate notun kichu shekha. Coffee ar clean code, duitai chai.",
  "Onar life-style ekjon senior developer-er moto: kaj gucheye kora, protidin kichu notun shekha, ar problem solve korar moddhe moja pawa.",
  "Free time-eo onar mathay tech ghure, notun tool dekhen, side project nie vabben. Kaj ar shekha duita-i onar life-er part.",
];

// Used when no AI endpoint is set or the call fails.
export const localAnswer = (question) => {
  const q = question.toLowerCase();

  if (has(q, /^\s*(hi|hello|hey|salam|assalamu\w*|hola|good (morning|evening|afternoon))\b/)) {
    return {
      text: "Hello! Ami Kaucher sir er assistant. Onar skills, education, experience, projects ba contact niye jiggesh korte paren.",
    };
  }
  if (has(q, /(kemon acho|kemon achen|how are you|ki khobor|kemon ase)/)) {
    return { text: "Ami valo achi, dhonnobad! Kaucher sir er bepare ki jante chan?" };
  }
  if (has(q, /(tumi ke|apni ke|who are you|your name|tomar naam|apnar naam|are you a bot|are you ai)/)) {
    return { text: "Ami Kaucher sir er portfolio assistant. Onar bepare jekono kichu jiggesh korte paren." };
  }
  if (has(q, /^\s*(thanks|thank you|thx|dhonnobad|shukriya)\b/)) {
    return { text: "Welcome! Aro kichu jante chaile bolben." };
  }
  if (has(q, /^\s*(bye|goodbye|allah hafez|khoda hafez|see you)\b/)) {
    return { text: "Bye! Kaucher sir er sathe kaj korte chaile WhatsApp-e message dite paren.", cta: true };
  }

  // personal
  if (
    has(q, /(married|marriage|biye|biya|bibaho|বিয়ে|বিবাহ|wife|\bbou\b|girlfriend|\bgf\b|relationship|single|\bprem\b|bhalobasha)/)
  ) {
    return {
      text: pick([
        "Kaucher sir ekhono single. Apnar kache valo mye ase naki? 😄",
        "Uni single! Valo mye thakle bolen, kaj-er pashapashi eta-o dekha jay. 😄",
      ]),
    };
  }
  if (has(q, /(\bage\b|boyos|boyosh|birthday|janmo|bayos)/)) {
    return {
      text: "Boyosh-er theke boro kotha onar kaj ar shekhar gotir. Kom shomoyei production-level project-e kaj koreche. " + praise(),
    };
  }
  if (has(q, /(salary|\brate\b|charge|\bcost\b|price|budget|koto taka|\btaka\b|\bfee\b|quote)/)) {
    return {
      text:
        "Rate project-er scope, timeline ar technology-r upor nirbhor kore. Requirement bolun, Kaucher sir nijei ekta clear quote dibe.\n" +
        CONTACT_LINES,
      cta: true,
    };
  }
  if (
    has(q, /(client|review|feedback|testimonial|satisf|trust|reliable|vorosha|bhorsha|valo kaj kore|kemon kaj|kaj kemon|behavior|behaviour)/)
  ) {
    return {
      text:
        "Client-ra onar kaj-e satisfied. Requirement valo bujhen, kaj shomoy moto deliver koren, ar communication shob shomoy clear thake. " +
        praise(),
      cta: true,
    };
  }
  if (
    has(q, /(availab|free achen|freelance|remote|open to work|\bhire\b|kaj korate|kaj korano|nibo|niye kaj|jogajog|joggajog)/)
  ) {
    return {
      text: "Notun project-er jonno Kaucher sir sathe kotha bola jay. Requirement shoho WhatsApp-e message din.\n" + CONTACT_LINES,
      cta: true,
    };
  }
  if (
    has(q, /(hobby|hobbies|lifestyle|life style|routine|free time|shokh|sokh|\bfood\b|coffee|\bgym\b|travel|ghura|movie|\bgame\b|football|cricket|music)/)
  ) {
    return { text: pick(LIFESTYLE) };
  }

  // about Kaucher
  if (has(q, /(contact|phone|number|\bcall\b|whatsapp|email|\bmail\b|address|location|kothay thake|thake kothay|জোগাযোগ)/)) {
    return { text: `Kaucher sir er sathe contact korun:\n${CONTACT_LINES}\nLocation: Dhaka, Bangladesh`, cta: true };
  }
  if (
    has(q, /(educat|degree|graduat|universit|college|\bssc\b|\bhsc\b|school|study|studied|porashona|\bpora\b|porse|porsi|porechen|porten|lekha|\bclass\b|porjonto|batch|\bcse\b|computer science|self.?taught|intern|পড়াশোনা|শিক্ষা)/)
  ) {
    return {
      text: `Kaucher sir CSE te graduation complete korechen (Sep 2026). HSC 2021 (Science), SSC 2019. Software niye online ar Google course diye deep self-study korechen, tarpor Creative Software-e 6 mash intern. ${praise()}`,
    };
  }
  if (has(q, /(project|portfolio|regantify|luxobd|snaptok|style ?loop|logeachi|banaise|banano|প্রজেক্ট)/)) {
    return {
      text: `Kaucher sir er kichu kaj:\n- Regantify (featured): multi-vendor e-commerce SaaS, Next.js + React + NestJS\n- LuxoBD: live e-commerce store\n- Style Loop: Laravel + React e-commerce\n- LogeAchi.com: full-stack Laravel\n- SnapTok: social media site\nProjects section-e details ache. ${praise()}`,
    };
  }
  if (has(q, /(skill|stack|expertise|dokkho|দক্ষতা)/)) {
    return {
      text: `Kaucher sir er skills: HTML, CSS, JavaScript, React, Next.js, Flutter, Laravel, PHP, Bootstrap, Tailwind CSS. Sathe OOP, C/C++ data structures, MongoDB/Express basic. ${praise()}`,
    };
  }
  if (has(q, /(experience|\bjob\b|company|career|kothay kaj|work(ing)? at|\byears\b|kaj kore|chakri)/)) {
    return {
      text: `Kaucher sir ekhon Reganto IT Solution-e Software Engineer (Sep 2026 theke). Ager ta Creative Software-e Laravel Web Developer. Total 1.5+ years professional experience. ${praise()}`,
    };
  }
  if (has(q, /(\bwho\b|\bke\b|about|\bbio\b|introduc|parichoy|tell me|er bepar|kemon manush|কে)/) || has(q, /^\s*kaucher/)) {
    return {
      text: `SM Kaucher Ahmed, Dhaka-r ekjon software engineer. Online course ar self-study diye shuru, tarpor CSE degree ar professional kaj. Laravel, React, Next.js ar Flutter diye web ar mobile app baanen. Ekhon Reganto IT Solution-e kaj korchen. ${praise()}`,
    };
  }

  if (has(q, SOFTWARE)) {
    return {
      text: "Eta software/tech related prosno. Details-e jaoar age bolbo, eta te Kaucher sir expert. Apni onar sathe WhatsApp ba direct call kore kotha bolun, shorashori valo guide pabeno.",
      cta: true,
    };
  }

  // Anything else about him that we have no fact for: stay in character.
  if (has(q, ABOUT_HIM)) {
    return {
      text: "Eta nie Kaucher sir er sathe shorashori kotha bolle valo hobe. Tobe ektu bolte pari: uni kajer khetre ekdom focused, shekhar moddhe thaken, ar nijer kaj-e proud. Aro jante chaile ask korun.",
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
