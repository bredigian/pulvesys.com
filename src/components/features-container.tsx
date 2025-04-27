import { useCallback, useEffect, useRef } from "react";

import Autoplay from "embla-carousel-autoplay";
import { EmblaCarouselType } from "embla-carousel";
import SignupIcon from "./icons/signup-icon";
import camposScreen1 from "/screens/campos-screen_1.png";
import camposScreen2 from "/screens/campos-screen_2.png";
import cultivosScreen1 from "/screens/cultivos-screen_1.png";
import historialScreen1 from "/screens/historial-screen_1.png";
import { motion } from "motion/react";
import productosScreen1 from "/screens/productos-screen_1.png";
import productosScreen2 from "/screens/productos-screen_2.png";
import pulverizacionesScreen1 from "/screens/pulverizaciones-screen_1.png";
import pulverizacionesScreen2 from "/screens/pulverizaciones-screen_2.png";
import pulverizacionesScreen3 from "/screens/pulverizaciones-screen_3.png";
import tratamientosScreen1 from "/screens/tratamientos-screen_1.png";
import tratamientosScreen2 from "/screens/tratamientos-screen_2.png";
import { useDotButton } from "../hooks/use-dots";
import useEmblaCarousel from "embla-carousel-react";

export default function FeaturesContainer() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, playOnInit: false }),
  ]);

  const autoplayRef = useRef(emblaApi?.plugins().autoplay);
  const emblaRefTyped = emblaRef as unknown as React.RefObject<HTMLDivElement>;

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick,
  );
  useEffect(() => {
    if (!emblaApi || !emblaRefTyped.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          autoplayRef.current?.play();
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(emblaRefTyped?.current);
    return () => observer.disconnect();
  }, [emblaApi]);

  return (
    <section
      id="#features"
      className="embla relative flex flex-col overflow-hidden"
      ref={emblaRef}
    >
      <div className="embla__container flex">
        <div className="embla__slide flex min-h-dvh min-w-0 flex-[0_0_100%] cursor-grab flex-col items-center justify-evenly gap-0 p-12 select-none active:cursor-grabbing lg:gap-12 xl:flex-row">
          <div className="flex flex-col gap-2">
            <motion.h2
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
              className="mb-6 hidden w-fit text-3xl font-thin md:block md:text-4xl xl:mb-8 xl:text-5xl 2xl:mb-12"
            >
              ¿Que se puede hacer?
            </motion.h2>
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
                delay: 0.5,
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              Pulverizaciones
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
                delay: 0.75,
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="max-w-lg text-base font-extralight md:text-lg lg:text-xl"
            >
              Creá tus órdenes indicando{" "}
              <strong className="font-bold">campo</strong>,{" "}
              <strong className="font-bold">cultivo</strong>,{" "}
              <strong className="font-bold">tratamiento</strong> y{" "}
              <strong className="font-bold">productos</strong> a utilizar junto
              con sus respectivas dósis.
            </motion.p>
          </div>
          <div className="flex max-w-[860px] items-center justify-center gap-12 xl:max-w-max">
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
                delay: 0.5,
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="mx-auto max-w-xs"
            >
              <div className="aspect-[9/19] w-full">
                <img
                  src={pulverizacionesScreen1}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
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
                delay: 0.75,
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="mx-auto hidden max-w-xs md:block"
            >
              <div className="aspect-[9/19] w-full">
                <img
                  src={pulverizacionesScreen2}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
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
              className="mx-auto hidden max-w-xs md:block"
            >
              <div className="aspect-[9/19] w-full">
                <img
                  src={pulverizacionesScreen3}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="embla__slide flex min-h-dvh min-w-0 flex-[0_0_100%] cursor-grab flex-col items-center justify-evenly gap-0 p-12 select-none active:cursor-grabbing lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-2">
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
              className="text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              Productos
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
              className="max-w-lg text-base font-extralight md:text-lg lg:text-xl"
            >
              <strong className="font-bold">Agregá</strong>,{" "}
              <strong className="font-bold">modificá</strong> y{" "}
              <strong className="font-bold">eliminá</strong> los productos que
              uses habitualmente, indicando su{" "}
              <strong className="font-bold">nombre</strong> y{" "}
              <strong className="font-bold">unidad</strong> para un mejor
              control.
            </motion.p>
          </div>
          <div className="flex items-center justify-center gap-12">
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
                delay: 0.5,
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="mx-auto hidden max-w-xs md:block"
            >
              <div className="mx-auto aspect-[9/19] w-full md:w-[75%] lg:w-full">
                <img
                  src={productosScreen1}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
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
                delay: 0.75,
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="mx-auto max-w-xs"
            >
              <div className="mx-auto aspect-[9/19] w-full md:w-[75%] lg:w-full">
                <img
                  src={productosScreen2}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="embla__slide flex min-h-dvh min-w-0 flex-[0_0_100%] cursor-grab flex-col items-center justify-evenly gap-0 p-12 select-none active:cursor-grabbing lg:gap-12 xl:flex-row">
          <div className="flex flex-col gap-2">
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
              className="text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              Cultivos
              <br />& Tratamientos
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
              className="max-w-lg text-base font-extralight md:text-lg lg:text-xl"
            >
              Administrá los diferentes tipos de{" "}
              <strong className="font-bold">tratamientos</strong> que se aplican
              a los <strong className="font-bold">cultivos</strong> en las
              pulverizaciones.
            </motion.p>
          </div>
          <div className="flex max-w-[890px] items-center justify-center gap-12 xl:max-w-max">
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
                delay: 0.5,
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="mx-auto max-w-xs"
            >
              <div className="aspect-[9/19] w-full">
                <img
                  src={cultivosScreen1}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
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
                delay: 0.75,
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="mx-auto hidden max-w-xs md:block"
            >
              <div className="aspect-[9/19] w-full">
                <img
                  src={tratamientosScreen1}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
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
              className="mx-auto hidden max-w-xs md:block"
            >
              <div className="aspect-[9/19] w-full">
                <img
                  src={tratamientosScreen2}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="embla__slide flex min-h-dvh min-w-0 flex-[0_0_100%] cursor-grab flex-col items-center justify-evenly gap-0 p-12 select-none active:cursor-grabbing lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-2">
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
              className="text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              Ubicaciones
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
              className="max-w-lg text-base font-extralight md:text-lg lg:text-xl"
            >
              Identificá los distintos{" "}
              <strong className="font-bold">campos</strong> en los que se
              trabaja, indicando su nombre y marcando sus diferentes areas
              mediante puntos, formando así sus{" "}
              <strong className="font-bold">lotes</strong>.
            </motion.p>
          </div>
          <div className="flex items-center justify-center gap-12">
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
                delay: 0.5,
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="mx-auto hidden max-w-xs md:block"
            >
              <div className="mx-auto aspect-[9/19] w-full md:w-[75%] lg:w-full">
                <img
                  src={camposScreen1}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
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
                delay: 0.75,
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="mx-auto max-w-xs"
            >
              <div className="mx-auto aspect-[9/19] w-full md:w-[75%] lg:w-full">
                <img
                  src={camposScreen2}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="embla__slide flex min-h-dvh min-w-0 flex-[0_0_100%] cursor-grab flex-col items-center justify-evenly gap-0 p-12 select-none active:cursor-grabbing md:flex-row md:gap-12">
          <div className="flex flex-col gap-2">
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
              className="text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              Historial
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
              className="max-w-lg text-base font-extralight md:text-lg lg:text-xl"
            >
              Llevá un <strong className="font-bold">registro</strong> con todos
              los cambios que hagas en el sistema para mantener un mejor
              control.
            </motion.p>
            <motion.h2
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
              className="mt-12 hidden w-fit font-thin md:block md:text-4xl lg:text-5xl"
            >
              ¿Querés probar todas
              <br />
              estas funcionalidades?
            </motion.h2>
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
                delay: 1,
              }}
              viewport={{ once: true, amount: 0.8 }}
              href="https://myaccount.pulvesys.com"
              target="_blank"
              className="hidden md:block"
            >
              <button className="mt-6 flex w-2xs cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-300 p-2 text-sm font-medium text-black hover:bg-gray-200 active:bg-gray-400 lg:text-base">
                Creá tu cuenta
                <SignupIcon size={24} />
              </button>
            </motion.a>
          </div>
          <div className="flex items-center justify-center gap-12">
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
                delay: 0.5,
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="mx-auto max-w-xs"
            >
              <div className="aspect-[9/19] w-full">
                <img
                  src={historialScreen1}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="embla__controls absolute bottom-6 flex flex-row items-center gap-4 self-center">
        <div className="embla__dots flex flex-row items-center gap-2">
          {scrollSnaps.map((_, index) => {
            const isActive = index === selectedIndex;

            return (
              <button
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`size-6 cursor-pointer rounded-full border-2 border-white ${!isActive ? "bg-transparent opacity-25" : "bg-white opacity-100"}`}
              ></button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
