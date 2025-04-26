import { motion } from "motion/react";

export default function SuscribeNow() {
  const ANIMATED_TEXT = "¿Qué estás esperando?";

  return (
    <section className="grid h-64 place-items-center bg-zinc-950">
      <p className="flex items-center gap-2 text-4xl font-thin">
        {ANIMATED_TEXT.split(" ").map((word, index) => (
          <motion.span
            initial={{
              opacity: 0,
              y: 10,
              filter: "blur(4px)",
            }}
            whileInView={{ opacity: 100, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.25 + (index + 1) * 0.1,
            }}
            viewport={{ once: true, amount: 0.8 }}
            key={word}
          >
            {word}
          </motion.span>
        ))}
        <motion.a
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(4px)",
          }}
          whileInView={{ opacity: 100, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.5 + ANIMATED_TEXT.split(" ").length * 0.1,
          }}
          viewport={{ once: true, amount: 0.8 }}
          href="https://myaccount.pulvesys.com"
          target="_blank"
          className="font-semibold underline"
        >
          ¡Comenzá a utilizar PulveSys ya!
        </motion.a>
      </p>
    </section>
  );
}
