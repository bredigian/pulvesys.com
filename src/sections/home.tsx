import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

import ArrowIcon from "../components/icons/arrow-icon";
import DocumentIcon from "../components/icons/document-icon";
import { Link } from "react-scroll";
import PhoneIcon from "../components/icons/phone-icon";
import logo from "/logo.webp";
import { motion } from "motion/react";

export default function HomeSection() {
  const TITLE = "Organizá tus órdenes con PulveSys";
  const SUBTITLE =
    "Un sistema web dedicado a la gestión de órdenes de pulverización.";

  return (
    <section
      id="#"
      className="flex min-h-[70dvh] flex-col items-center px-4 md:min-h-dvh md:px-0"
    >
      <div className="mt-16 flex w-full grow flex-col items-center justify-center gap-4 md:mt-0">
        <motion.img
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.25,
          }}
          viewport={{ once: true, amount: 0.8 }}
          src={logo}
          className="size-16 rounded-md"
        />
        <h1 className="hidden">{TITLE}</h1>
        <h1 className="flex max-w-xl flex-wrap items-center justify-center gap-2">
          {TITLE.split(" ").map((word, index) => {
            return (
              <motion.span
                key={`animated-word__${word}`}
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
                className="text-center text-4xl leading-[1] font-thin last:font-bold md:text-5xl lg:text-6xl"
              >
                {word}
              </motion.span>
              // delay: 0.25 + (index + 1) * 0.1,
            );
          })}
        </h1>
        <h2 className="hidden">{SUBTITLE}</h2>
        <h2 className="flex max-w-sm flex-wrap items-center justify-center gap-1 opacity-50 lg:gap-2">
          {SUBTITLE.split(" ").map((word, index) => {
            return (
              <motion.span
                key={`animated-word__${word}-subtitle__${index}`}
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
                className="text-center text-sm leading-[1] font-medium md:text-base lg:text-lg"
              >
                {word}
              </motion.span>
            );
          })}
        </h2>
        <Link smooth duration={500} to="#features">
          <motion.div
            animate={{ opacity: 100, y: 0, filter: "blur(0px)" }}
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
          >
            <button className="mt-12 flex w-2xs cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-300 p-2 text-sm font-medium text-black opacity-50 hover:opacity-100 lg:text-base">
              Explorar
              <ArrowIcon size={24} to="DOWN" />
            </button>
          </motion.div>
        </Link>
      </div>
      <ul className="flex items-center justify-center gap-8 p-8 opacity-50">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <motion.li
                animate={{ opacity: 100, y: 0, filter: "blur(0px)" }}
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
                className="flex cursor-help flex-col items-center gap-1 opacity-50 hover:opacity-100"
              >
                <span className="text-2xl leading-[1] line-through">$0</span>
                <p className="text-xs md:text-sm">Prueba gratuíta</p>
              </motion.li>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-2xs rounded-lg bg-white p-1 text-center text-black">
                Utilizá el sistema sin pagar absolutamente nada durante los
                primeros 30 días
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <motion.li
                animate={{ opacity: 100, y: 0, filter: "blur(0px)" }}
                initial={{
                  opacity: 0,
                  y: 10,
                  filter: "blur(4px)",
                }}
                whileInView={{ opacity: 100, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 1.1,
                }}
                className="flex cursor-help flex-col items-center gap-1 opacity-50 hover:opacity-100"
              >
                <PhoneIcon size={24} />
                <p className="text-xs md:text-sm">Soporte PWA</p>
              </motion.li>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-2xs rounded-lg bg-white p-1 text-center text-black">
                Agregá la aplicación al inicio de tu celular como si fuese una
                app nativa
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <motion.li
                animate={{ opacity: 100, y: 0, filter: "blur(0px)" }}
                initial={{
                  opacity: 0,
                  y: 10,
                  filter: "blur(4px)",
                }}
                whileInView={{ opacity: 100, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 1.2,
                }}
                className="flex cursor-help flex-col items-center gap-1 opacity-50 hover:opacity-100"
              >
                <DocumentIcon size={24} />
                <p className="text-xs md:text-sm">Comparte info.</p>
              </motion.li>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-2xs rounded-lg bg-white p-1 text-center text-black">
                Exporta rápidamente tus órdenes en formato PDF
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </ul>
    </section>
  );
}
