import { Button } from "@heroui/button";

export function HeroSection() {
  return (
    <section className="relative w-full flex flex-col md:flex-row items-center overflow-hidden py-8 md:py-16">
      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-16 overflow-y-auto order-2 md:order-1">
        <div className="max-w-3xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
            Клинический нейропсихолог
          </h1>
          <ul className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed">
            <li className="mb-2">&#x2022; Кризисные состояния</li>
            <li className="mb-2">&#x2022; Личностные расстройства</li>
            <li className="mb-2">&#x2022; Поддерживающая терапия</li>
            <li className="mb-2">&#x2022; Психологическое консультирование</li>
            <li className="mb-2">&#x2022; Диагностика и тестирование</li>
          </ul>
          <div className="flex gap-3 md:gap-4 flex-wrap justify-center md:justify-start">
            <Button size="md" className="bg-primary text-white font-semibold">
              Узнать больше
            </Button>
            <Button
              size="md"
              variant="bordered"
              className="border-primary text-primary font-semibold"
            >
              Связаться
            </Button>
          </div>
        </div>
      </div>

      <div
        className="w-full md:w-1/3 h-64 md:h-96 bg-cover bg-center rounded-lg mb-8 md:mb-0 md:mr-8"
        style={{ backgroundImage: "url('/hero.png')" }}
      />
    </section>
  );
}
