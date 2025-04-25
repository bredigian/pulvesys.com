import Autoplay from "embla-carousel-autoplay";
import { EmblaCarouselType } from "embla-carousel";
import SignupIcon from "./icons/signup-icon";
import camposScreen1 from "/screens/campos-screen_1.png";
import camposScreen2 from "/screens/campos-screen_2.png";
import cultivosScreen1 from "/screens/cultivos-screen_1.png";
import historialScreen1 from "/screens/historial-screen_1.png";
import productosScreen1 from "/screens/productos-screen_1.png";
import productosScreen2 from "/screens/productos-screen_2.png";
import pulverizacionesScreen1 from "/screens/pulverizaciones-screen_1.png";
import pulverizacionesScreen2 from "/screens/pulverizaciones-screen_2.png";
import pulverizacionesScreen3 from "/screens/pulverizaciones-screen_3.png";
import tratamientosScreen1 from "/screens/tratamientos-screen_1.png";
import tratamientosScreen2 from "/screens/tratamientos-screen_2.png";
import { useCallback } from "react";
import { useDotButton } from "../hooks/use-dots";
import useEmblaCarousel from "embla-carousel-react";

export default function FeaturesContainer() {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay()]);

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

  return (
    <section
      id="second-section"
      className="embla relative flex flex-col overflow-hidden"
      ref={emblaRef}
    >
      <div className="embla__container flex">
        <div className="embla__slide flex min-h-dvh min-w-0 flex-[0_0_100%] flex-row items-center justify-evenly gap-12 p-12">
          <div className="flex flex-col gap-2">
            <h2 className="mb-12 w-fit text-5xl font-thin">
              ¿Que se puede hacer?
            </h2>
            <h4 className="text-6xl font-bold">Pulverizaciones</h4>
            <p className="max-w-lg text-xl text-gray-300">
              Creá tus órdenes indicando{" "}
              <strong className="text-white">campo</strong>,{" "}
              <strong className="text-white">cultivo</strong>,{" "}
              <strong className="text-white">tratamiento</strong> y{" "}
              <strong className="text-white">productos</strong> a utilizar junto
              con sus respectivas dósis.
            </p>
          </div>
          <div className="flex items-center justify-center gap-12">
            <div className="mx-auto max-w-xs">
              <div className="aspect-[9/19] w-full">
                <img
                  src={pulverizacionesScreen1}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="mx-auto max-w-xs">
              <div className="aspect-[9/19] w-full">
                <img
                  src={pulverizacionesScreen2}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="mx-auto max-w-xs">
              <div className="aspect-[9/19] w-full">
                <img
                  src={pulverizacionesScreen3}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="embla__slide flex min-h-dvh min-w-0 flex-[0_0_100%] flex-row items-center justify-evenly gap-12 p-12">
          <div className="flex flex-col gap-2">
            <h4 className="text-6xl font-bold">Productos</h4>
            <p className="max-w-lg text-xl text-gray-300">
              <strong className="text-white">Agregá</strong>,{" "}
              <strong className="text-white">modificá</strong> y{" "}
              <strong className="text-white">eliminá</strong> los productos que
              uses habitualmente, indicando su{" "}
              <strong className="text-white">nombre</strong> y{" "}
              <strong className="text-white">unidad</strong> para un mejor
              control.
            </p>
          </div>
          <div className="flex items-center justify-center gap-12">
            <div className="mx-auto max-w-xs">
              <div className="aspect-[9/19] w-full">
                <img
                  src={productosScreen1}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="mx-auto max-w-xs">
              <div className="aspect-[9/19] w-full">
                <img
                  src={productosScreen2}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="embla__slide flex min-h-dvh min-w-0 flex-[0_0_100%] flex-row items-center justify-evenly gap-12 p-12">
          <div className="flex flex-col gap-2">
            <h4 className="text-6xl font-bold">
              Cultivos
              <br />& Tratamientos
            </h4>
            <p className="max-w-lg text-xl text-gray-300">
              Administrá los diferentes tipos de{" "}
              <strong className="text-white">tratamientos</strong> que se
              aplican a los <strong className="text-white">cultivos</strong> en
              las pulverizaciones.
            </p>
          </div>
          <div className="flex items-center justify-center gap-12">
            <div className="mx-auto max-w-xs">
              <div className="aspect-[9/19] w-full">
                <img
                  src={cultivosScreen1}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="mx-auto max-w-xs">
              <div className="aspect-[9/19] w-full">
                <img
                  src={tratamientosScreen1}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="mx-auto max-w-xs">
              <div className="aspect-[9/19] w-full">
                <img
                  src={tratamientosScreen2}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="embla__slide flex min-h-dvh min-w-0 flex-[0_0_100%] flex-row items-center justify-evenly gap-12 p-12">
          <div className="flex flex-col gap-2">
            <h4 className="text-6xl font-bold">Ubicaciones</h4>
            <p className="max-w-lg text-xl text-gray-300">
              Identificá los distintos{" "}
              <strong className="text-white">campos</strong> en los que se
              trabaja, indicando su nombre y marcando sus diferentes areas
              mediante puntos, formando así sus{" "}
              <strong className="text-white">lotes</strong>.
            </p>
          </div>
          <div className="flex items-center justify-center gap-12">
            <div className="mx-auto max-w-xs">
              <div className="aspect-[9/19] w-full">
                <img
                  src={camposScreen1}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="mx-auto max-w-xs">
              <div className="aspect-[9/19] w-full">
                <img
                  src={camposScreen2}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="embla__slide flex min-h-dvh min-w-0 flex-[0_0_100%] flex-row items-center justify-evenly gap-12 p-12">
          <div className="flex flex-col gap-2">
            <h4 className="text-6xl font-bold">Historial</h4>
            <p className="max-w-lg text-xl text-gray-300">
              Llevá un <strong className="text-white">registro</strong> con
              todos los cambios que hagas en el sistema para mantener un mejor
              control.
            </p>
            <h2 className="mt-12 w-fit text-5xl font-thin">
              ¿Te interesa probar todas
              <br />
              estas funcionalidades?
            </h2>
            <a href="https://portal.pulvesys.com" target="_blank">
              <button className="mt-6 flex w-2xs cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-300 p-2 font-medium text-black hover:bg-gray-200 active:bg-gray-400">
                Creá tu cuenta
                <SignupIcon size={24} />
              </button>
            </a>
          </div>
          <div className="flex items-center justify-center gap-12">
            <div className="mx-auto max-w-xs">
              <div className="aspect-[9/19] w-full">
                <img
                  src={historialScreen1}
                  alt=""
                  className="size-full rounded-lg object-cover"
                />
              </div>
            </div>
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
