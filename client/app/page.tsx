import { HeroSection } from "@/components/hero-section";
import { SpecialtiesSection } from "@/components/specialties-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SpecialtiesSection />
      <h1 className="text-center text-5xl font-bold mb-6 md:mb-8">
        Как выглядит терапия?
      </h1>
      <p className="flex justify-center md:text-3xl lg:text-xl text-center mb-6 md:mb-8">
        Во время первой встречи мы обсудим вашу ситуацию, определим цели терапии
        и выберем подходящие методы работы. Каждая сессия будет проходить в
        комфортной и поддерживающей атмосфере, где вы сможете открыто говорить о
        своих чувствах и переживаниях. В процессе терапии мы будем работать над
        развитием навыков саморегуляции, улучшением эмоционального состояния и
        достижением поставленных целей.
      </p>
    </>
  );
}
