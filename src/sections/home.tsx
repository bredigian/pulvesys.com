import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

import ArrowIcon from "../components/icons/arrow-icon";
import DocumentIcon from "../components/icons/document-icon";
import PhoneIcon from "../components/icons/phone-icon";
import logo from "/logo.webp";
import { motion } from "motion/react";

export default function HomeSection() {
  const TITLE = "Organizá tus órdenes con PulveSys";
  const SUBTITLE =
    "Un sistema web dedicado a la gestión de órdenes de pulverización.";

  return (
    <section id="home" className="flex min-h-dvh flex-col items-center">
      <div className="flex w-full grow flex-col items-center justify-center gap-4">
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          src={logo}
          className="size-16 rounded-md"
        />
        <h1 className="hidden">{TITLE}</h1>
        <h1 className="flex max-w-xl flex-wrap items-center justify-center gap-2">
          {TITLE.split(" ").map((word, index) => {
            return (
              <motion.span
                key={`animated-word__${word}`}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 100, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.25 + (index + 1) * 0.1,
                }}
                className="text-center text-6xl leading-[1] text-neutral-300"
              >
                {word}
              </motion.span>
            );
          })}
        </h1>
        <h2 className="hidden">{SUBTITLE}</h2>
        <h2 className="flex max-w-sm flex-wrap items-center justify-center gap-2 opacity-50">
          {SUBTITLE.split(" ").map((word, index) => {
            return (
              <motion.span
                key={`animated-word__${word}-subtitle__${index}`}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 50, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.25 + (index + 1) * 0.1,
                }}
                className="text-center text-lg leading-[1] font-medium"
              >
                {word}
              </motion.span>
            );
          })}
        </h2>
        <motion.a
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 100, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 1,
          }}
          href="#features"
        >
          <button className="mt-12 flex w-2xs cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-300 p-2 font-medium text-black opacity-50 hover:opacity-100">
            Explorar
            <ArrowIcon size={24} to="DOWN" />
          </button>
        </motion.a>
      </div>
      <ul className="flex items-center justify-center gap-8 p-8 opacity-50">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <motion.li
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 50, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 1,
                }}
                className="flex cursor-help flex-col items-center gap-1 opacity-50 hover:opacity-100"
              >
                <span className="text-2xl leading-[1] line-through">$0</span>
                <p className="text-sm">30 días gratis</p>
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
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 50, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 1.1,
                }}
                className="flex cursor-help flex-col items-center gap-1 opacity-50 hover:opacity-100"
              >
                <PhoneIcon size={24} />
                <p className="text-sm">Soporte PWA</p>
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
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 50, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 1.2,
                }}
                className="flex cursor-help flex-col items-center gap-1 opacity-50 hover:opacity-100"
              >
                <DocumentIcon size={24} />
                <p className="text-sm">Comparte tus órdenes</p>
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
