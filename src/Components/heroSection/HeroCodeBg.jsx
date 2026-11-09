import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// [text, tailwind colour] tokens, one array per line
const code = [
  [["const ", "text-orange"], ["dev ", "text-lightCyan"], ["= {", "text-white"]],
  [["  name: ", "text-lightCyan"], ['"Kaucher Ahmed"', "text-cyan"], [",", "text-white"]],
  [["  role: ", "text-lightCyan"], ['"Software Engineer"', "text-cyan"], [",", "text-white"]],
  [["  stack: ", "text-lightCyan"], ['["Laravel", "Next.js",', "text-cyan"]],
  [['    "React", "Flutter"],', "text-cyan"]],
  [["  coffee: ", "text-lightCyan"], ["Infinity", "text-grey"], [",", "text-white"]],
  [["};", "text-white"]],
  [["", ""]],
  [["while ", "text-orange"], ["(", "text-white"], ["alive", "text-lightCyan"], [") {", "text-white"]],
  [["  code", "text-lightOrange"], ["();", "text-white"]],
  [["  deploy", "text-lightOrange"], ["();", "text-white"]],
  [["}", "text-white"]],
];

const total = code.reduce((n, l) => n + l.reduce((m, [t]) => m + t.length, 0), 0);

const useTyping = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => (c >= total + 40 ? 0 : c + 1)); // pause, then restart
    }, 70);
    return () => clearInterval(id);
  }, []);
  return count;
};

const floaters = [
  { t: "</>", cls: "top-[2%] left-[2%] text-cyan", d: 0 },
  { t: "{ }", cls: "top-[10%] right-[0%] text-orange", d: 1 },
  { t: "=>", cls: "top-[44%] -left-[6%] text-orange", d: 2 },
  { t: "( )", cls: "top-[52%] right-[-4%] text-cyan", d: 0.5 },
  { t: ";", cls: "bottom-[16%] left-[4%] text-cyan", d: 1.5 },
  { t: "[ ]", cls: "bottom-[24%] right-[2%] text-orange", d: 2.5 },
];

// eslint-disable-next-line react/prop-types
const HeroCodeBg = ({ children }) => {
  const typed = useTyping();
  let left = typed;
  const cursorLine = (() => {
    let n = typed;
    for (let i = 0; i < code.length; i++) {
      const len = code[i].reduce((m, [t]) => m + t.length, 0);
      if (n <= len) return i;
      n -= len;
    }
    return code.length - 1;
  })();

  return (
    <div className="relative h-full w-full">
      {/* VS Code-style window, the portrait sits inside it */}
      <div className="relative flex h-full w-full flex-col overflow-hidden glass-strong rounded-2xl font-mono">
        <div className="relative z-20 flex shrink-0 items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]"></span>
          <span className="ml-3 text-[11px] text-lightGrey">developer.js</span>
        </div>

        <div className="relative flex-1 overflow-hidden">
          {/* ambient light */}
          <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/20 blur-[90px] animate-pulse"></div>

          {/* typing code */}
          <div className="absolute inset-0 px-3 py-3 text-[11px] md:text-xs leading-5 md:leading-6 whitespace-pre opacity-80">
            {code.map((line, i) => {
              const nodes = line.map(([text, cls], j) => {
                const shown = text.slice(0, Math.max(0, left));
                left -= text.length;
                return (
                  <span key={j} className={cls}>
                    {shown}
                  </span>
                );
              });
              return (
                <div key={i} className="flex">
                  <span className="w-5 shrink-0 select-none text-right pr-3 text-lightGrey/60">{i + 1}</span>
                  <span>
                    {nodes}
                    {i === cursorLine && (
                      <span className="inline-block h-3.5 w-[2px] translate-y-0.5 bg-cyan animate-pulse"></span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>

          {/* portrait, inside the editor */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex h-[88%] justify-center">{children}</div>
        </div>
      </div>

      {/* floating code symbols */}
      {floaters.map((f) => (
        <motion.span
          key={f.t + f.d}
          className={`absolute pointer-events-none font-mono text-xl md:text-2xl font-bold ${f.cls}`}
          animate={{ y: [0, -14, 0], opacity: [0.35, 0.85, 0.35] }}
          transition={{ duration: 4, repeat: Infinity, delay: f.d, ease: "easeInOut" }}
        >
          {f.t}
        </motion.span>
      ))}
    </div>
  );
};

export default HeroCodeBg;
