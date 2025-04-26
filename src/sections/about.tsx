import gianImage from "/about/gian.jpg";
import matiImage from "/about/mati.jpg";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="about" className="flex min-h-dvh items-center justify-around">
      <div className="flex flex-col gap-4">
        <motion.h4
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 50, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.25,
          }}
          className="text-6xl font-bold"
        >
          ¿Quiénes somos?
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 50, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="max-w-2xl text-2xl font-extralight"
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
        initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
        animate={{ opacity: 50, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.75,
        }}
        className="flex items-center gap-24"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="aspect-square size-64">
            <img
              src={matiImage}
              className="size-full rounded-lg object-cover"
            />
          </div>
          <p className="text-lg font-light">Matías Rodríguez</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="aspect-square size-64">
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
