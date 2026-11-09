import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuMessageCircle, LuX, LuSend, LuPhone, LuBot } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { askBot, CALL_URL, WHATSAPP_URL } from "../../lib/chatbot";

const suggestions = [
  "Kaucher sir ke?",
  "Skills ki ki?",
  "Projects dekhao",
  "Contact number?",
  "Laravel vs Node?",
];

const greeting = {
  role: "assistant",
  content:
    "Hi! Ami Kaucher sir er assistant. Onar skills, experience, projects ba contact niye jiggesh korun.",
};

const linkify = (text) =>
  text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a key={i} href={part} target="_blank" rel="noreferrer" className="underline text-cyan break-all">
        {part}
      </a>
    ) : (
      part
    )
  );

const ContactButtons = () => (
  <div className="mt-2 flex gap-2">
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1.5 rounded-full bg-orange px-3 py-1.5 text-xs font-semibold text-[#ffffff] hover:bg-lightOrange transition-colors"
    >
      <FaWhatsapp /> WhatsApp
    </a>
    <a
      href={CALL_URL}
      className="glass flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-cyan hover:text-orange transition-colors"
    >
      <LuPhone /> Call
    </a>
  </div>
);

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([greeting]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading, open]);

  const send = async (raw) => {
    const text = raw.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    const history = next.filter((m) => m !== greeting).map(({ role, content }) => ({ role, content }));
    const answer = await askBot(history);
    setMessages((m) => [...m, { role: "assistant", content: answer.text, cta: answer.cta }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="glass-strong flex h-[min(560px,75vh)] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-orange text-lg text-[#ffffff]">
                <LuBot />
              </span>
              <div className="flex-1 leading-tight">
                <p className="font-bold text-white">Kaucher&apos;s Assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-lightGrey">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse"></span> Online
                </p>
              </div>
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="text-xl text-lightGrey hover:text-cyan transition-colors cursor-pointer"
              >
                <LuX />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
                  <div
                    className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm ${
                      m.role === "user" ? "bg-orange text-[#ffffff] rounded-br-md" : "glass rounded-bl-md text-white"
                    }`}
                  >
                    {linkify(m.content)}
                  </div>
                  {m.cta && <ContactButtons />}
                </div>
              ))}
              {loading && (
                <div className="glass inline-flex gap-1 rounded-2xl rounded-bl-md px-4 py-3">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 rounded-full bg-cyan animate-bounce"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    ></span>
                  ))}
                </div>
              )}
              <div ref={endRef}></div>
            </div>

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 px-4 pb-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="glass rounded-full px-3 py-1 text-xs text-lightCyan hover:text-cyan transition-colors cursor-pointer"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                maxLength={300}
                className="glass h-10 flex-1 rounded-full px-4 text-base text-white placeholder:text-lightGrey outline-none focus:!border-cyan"
              />
              <button
                type="submit"
                aria-label="Send"
                disabled={loading || !input.trim()}
                className="grid h-10 w-10 place-items-center rounded-full bg-orange text-lg text-[#ffffff] transition-all hover:bg-lightOrange disabled:opacity-40 cursor-pointer"
              >
                <LuSend />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label={open ? "Close chat" : "Chat with Kaucher's assistant"}
        onClick={() => setOpen((o) => !o)}
        className="grid h-14 w-14 place-items-center rounded-full bg-orange text-2xl text-[#ffffff] shadow-cyanShadow transition-all duration-300 hover:scale-110 hover:bg-lightOrange cursor-pointer"
      >
        {open ? <LuX /> : <LuMessageCircle />}
      </button>
    </div>
  );
};

export default ChatBot;
