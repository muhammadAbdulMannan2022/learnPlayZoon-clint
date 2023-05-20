import { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  useEffect(() => {
    fetch(`https://b7-a11.vercel.app/gallary`)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0 });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <>
      <h1 className="text-4xl text-center mt-10 underline">Gallery</h1>
      <div className="flex flex-wrap gap-4 items-center justify-center my-10">
        {images.map((image) => (
          <div key={image._id}>
            <img
              src={image?.src}
              alt={image?.alt}
              onClick={(e) => {
                console.log(e.target.src);
                setModalImage(e?.target?.src);
                setIsOpen(true);
              }}
              className="h-80 w-96 rounded-lg cursor-pointer"
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="flex absolute top-0 bg-black bg-opacity-50 w-full h-screen items-center justify-center">
          <div className="w-3/4 h-3/4 my-auto bg-slate-400 bg-opacity-20 backdrop-blur-sm relative">
            <div className="w-full h-full overflow-hidden">
              <div className="w-full h-full flex justify-center items-center">
                <img className="w-full" src={modalImage} />
              </div>
              <button
                className="btn text-3xl absolute top-2 right-2"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
