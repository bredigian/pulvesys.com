import gianImage from "/about/gian.webp";
import matiImage from "/about/mati.webp";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section
      id="#about"
      className="flex min-h-dvh flex-col items-center justify-center gap-12 px-4 lg:flex-row lg:justify-around 2xl:gap-0 2xl:px-0"
    >
      <div className="flex flex-col items-center gap-4 2xl:items-start">
        <motion.h4
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(4px)",
          }}
          whileInView={{ opacity: 100, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.25,
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-4xl font-bold md:text-5xl xl:text-6xl"
        >
          ¿Quiénes somos?
        </motion.h4>
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(4px)",
          }}
          whileInView={{ opacity: 100, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.5,
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="max-w-2xl text-center text-lg font-extralight md:text-xl lg:text-2xl 2xl:text-start"
        >
          Detrás de esto, nos encontramos:{" "}
          <strong className="font-bold">Matías Rodríguez</strong> (ingeniero
          agrónomo) y <strong className="font-bold">Gianluca Bredice</strong>{" "}
          (desarrollador web). La complementación de ambos rubros llevo a la
          creación de este interesante proyecto, que esperamos que puedas
          disfrutarlo y experimentarlo tanto como lo hacemos nosotros.
        </motion.p>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
          filter: "blur(4px)",
        }}
        whileInView={{ opacity: 100, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.75,
        }}
        viewport={{ once: true, amount: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-8 md:gap-24"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="aspect-square size-44 md:size-64">
            <img
              src={matiImage}
              className="size-full rounded-lg object-cover"
            />
          </div>
          <p className="text-lg font-light">Matías Rodríguez</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="aspect-square size-44 md:size-64">
            <img
              src={gianImage}
              className="size-full rounded-lg object-cover"
            />
          </div>
          <p className="text-lg font-light">Gianluca Bredice</p>
        </div>
      </motion.div>
    </section>
  );
}
