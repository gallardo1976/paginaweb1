"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const Galeria = () => {
  const images = [
    {
      original: "/galeria01.jpg",
      thumbnail: "/galeria01.jpg",
      description: "BlackTattoo",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
      description: "Descripción de la imagen 1",
    },
  ];

  return (
    <div className="w-64 bg-black m-5">
      <ImageGallery
        items={images}
        showPlayButton={false}
        autoPlay={true}
        showFullscreenButton={false}
        showNav={false}
        slideInterval={3000}
      />
    </div>
  );
};

export default Galeria;
