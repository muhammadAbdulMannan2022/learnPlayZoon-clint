import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
const Carouserl = () => {
  const reviews = [
    {
      id: 1,
      img: "https://i.ibb.co/QJBzSsT/fbF.png",
      author: "Janifar",
      comment:
        "I love this website. It has a great selection of products for children of all ages, innovative and trendy.I will be a returning customer for ever! Especially since the shipping is so fast and comfortable!",
    },
    {
      id: 2,
      img: "https://i.ibb.co/tq1GVFH/main-qimg-3feb7bcee4b2789bc22b33abf036948d-lq.jpg",
      author: "Jane Smith",
      comment:
        "Ordered some toys for my yongest kids and was very pleased with the quick shipping time,great communication from operator's side, and cute packaging when the products arrived! I'll definitely order from them again!",
    },
    {
      id: 3,
      img: "https://i.ibb.co/F0kBSd5/Sajal-Aly.jpg",
      author: "Mike Johnson",
      comment:
        "I have been buying toys and games from this store for my kids for many many years.The guys form the shop know exactly what our children need and want.And they are always in trend. I totally recommend them!",
    },
  ];
  return (
    <div className="py-10 mt-5 bg-green-400">
      <h1 className="text-3xl text-center font-bold mb-10">
        What our Happy Clients Say
      </h1>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        showArrows={true}
        showIndicators={false}
      >
        {reviews.map((review) => (
          <div key={review.id} className="p-4">
            <div>
              <img
                style={{ maxWidth: "100px", height: "100px" }}
                className="rounded-full"
                src={review.img}
                alt=""
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{review.author}</h3>
            <p>{review.comment}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carouserl;
