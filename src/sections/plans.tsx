import {
  ENTERPRISE_PLAN_FEATURES,
  INDIVIDUAL_PLAN_FEATURES,
} from "../data/plans";

import ArrowLargeIcon from "../components/icons/arrow-large-icon";
import DotIcon from "../components/icons/dot-icon";
import { motion } from "motion/react";

export default function PlansSection() {
  return (
    <section
      id="plans"
      className="flex min-h-dvh flex-col items-center justify-center gap-12"
    >
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
        className="text-6xl font-bold"
      >
        Planes
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
        className="text-center text-2xl font-extralight"
      >
        Contamos con 2 planes de suscripción.
        <br />
        Ambos con{" "}
        <strong className="font-bold">30 días de prueba gratuíta</strong>, sin
        necesidad de pagar nada.
      </motion.p>
      <div className="flex w-full items-center justify-center gap-24">
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
          className="flex min-h-[30rem] max-w-[420px] flex-col items-center gap-4 rounded-lg border-2 border-white/10 bg-black/50 px-3 py-6"
        >
          <span className="text-2xl font-medium">Plan Individual</span>
          <h5 className="text-4xl font-bold">
            {Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
              minimumFractionDigits: 0,
            })
              .format(12500)
              .toString()}
            /mes
          </h5>
          <ul className="flex flex-col gap-1">
            {INDIVIDUAL_PLAN_FEATURES.map((value) => (
              <li
                key={`${value}_feature`}
                className="flex items-start gap-1 opacity-75"
              >
                <DotIcon size={24} />
                <p className="max-w-2xs pr-3 text-sm lg:text-base">{value}</p>
              </li>
            ))}
          </ul>
        </motion.div>
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
            delay: 1,
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="flex min-h-[30rem] max-w-[420px] flex-col items-center gap-4 rounded-lg border-2 border-white/10 bg-black/50 px-3 py-6"
        >
          <span className="text-2xl font-medium">Plan Empresa</span>
          <h5 className="text-4xl font-bold">
            {Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
              minimumFractionDigits: 0,
            })
              .format(30000)
              .toString()}
            /mes
          </h5>
          <ul className="flex flex-col gap-1">
            {ENTERPRISE_PLAN_FEATURES.map((value) => (
              <li
                key={`${value}_feature`}
                className="flex items-start gap-1 opacity-75"
              >
                <DotIcon size={24} />
                <p className="max-w-2xs pr-3 text-sm lg:text-base">{value}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <div className="flex w-full items-center justify-center gap-24">
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
            delay: 1.25,
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-4xl font-thin"
        >
          ¿Te interesa alguno?
        </motion.p>
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
            delay: 1.5,
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <ArrowLargeIcon size={48} to="RIGHT" />
        </motion.div>
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
            delay: 1.5,
          }}
          viewport={{ once: true, amount: 0.8 }}
          href="https://myaccount.pulvesys.com"
          target="_blank"
        >
          <button className="flex w-2xs cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-300 p-2 font-medium text-black hover:bg-gray-200 active:bg-gray-400">
            Registrate
          </button>
        </motion.a>
      </div>
    </section>
  );
}
