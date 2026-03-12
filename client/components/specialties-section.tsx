import { Card, CardBody } from "@heroui/card";

export function SpecialtiesSection() {
  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-16 bg-content">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            С чем работаю
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            quibusdam eum sequi, vitae nostrum odio cupiditate architecto
            dolorem perspiciatis minus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Card className="bg-content1 transition-colors border border-divider">
            <CardBody className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary">
                Клиническая нейропсихология
              </h3>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                quia officia? Perspiciatis cum architecto facilis illo
                consectetur.
              </p>
            </CardBody>
          </Card>
          <Card className="bg-content1 transition-colors border border-divider">
            <CardBody className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary">
                Психологическое консультирование
              </h3>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                quia officia? Perspiciatis cum architecto facilis illo
                consectetur.
              </p>
            </CardBody>
          </Card>
          <Card className="bg-content1 transition-colors border border-divider">
            <CardBody className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary">
                Нейрореабилитация
              </h3>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                quia officia? Perspiciatis cum architecto facilis illo
                consectetur.
              </p>
            </CardBody>
          </Card>
          <Card className="bg-content1 transition-colors border border-divider">
            <CardBody className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary">
                Диагностика и тестирование
              </h3>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                quia officia? Perspiciatis cum architecto facilis illo
                consectetur.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
