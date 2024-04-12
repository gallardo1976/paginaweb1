// pages/index.js

import Card from "../componentes/Card";

const cardsData = [
  {
    title: "Tradicionales",
    description:
      "Inspirados en los estilos de tatuaje clásicos, con líneas gruesas y colores vibrantes, generalmente representan motivos náuticos, animales, corazones, entre otros.",
    imageUrl: "/tradicional01.jpg",
  },
  {
    title: "Tatuajes realistas",
    description:
      "Diseños que intentan imitar fotografías con un alto grado de detalle y realismo, utilizando sombreados y luces para crear la ilusión de profundidad y textura.",
    imageUrl: "/realista.jpeg",
  },
  {
    title: "Tatuajes de escritura o tipografía",
    description:
      "Incluyen letras, palabras o frases escritas en diversos estilos de tipografía, a menudo con significados personales o citas inspiradoras.",
    imageUrl: "/tipografia.jpg",
  },
  {
    title: " estilo japones o Irezumi",
    description:
      "Inspirados en la tradición japonesa, presentan motivos como dragones, flores de loto y koi fish, con colores llamativos y detalles intrincados.",
    imageUrl: "/japones.jpg",
  },
  {
    title: "Tatuajes minimalistas",
    description:
      "Diseños simples y sutiles, a menudo compuestos de líneas finas y formas básicas, buscando transmitir un mensaje o una idea con la menor cantidad de elementos posible",
    imageUrl: "/minimalista.jpg",
  },
  {
    title: "Tatuajes geometricos",
    description:
      "Basados en formas geométricas como triángulos, círculos y líneas, a menudo combinados para crear patrones complejos y simétricos.",
    imageUrl: "/geometrico.jpg",
  },
];

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center bg-black items-center    ">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="w-full flex justify-center md:w-1/2 lg:w-1/3  p-4 mx-auto   "
        >
          <Card
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        </div>
      ))}
    </div>
  );
}
