import Image from "next/image";
const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded   overflow-hidden shadow-lg border-b text-[#D9D9D9]">
      <Image
        className=" w-full h-80 object-cover"
        src={imageUrl}
        alt="no-fount"
        height={400}
        width={400}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 ">
          {title}
          <p className="text-gray-500 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
