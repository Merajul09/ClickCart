import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useProductData from "../../hooks/useProductData";
import useAuth from "../../hooks/useAuth";
import Loader from "../Loader";
import { Link } from "react-router-dom";

const Hero = () => {
  const { products } = useProductData();
  const { loading } = useAuth();

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-3 rounded-2xl relative z-0"
      >
        {loading || products === undefined ? (
          <Loader />
        ) : (
          <>
            {products.slice(0, 5).map((product, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="hero h-[80vh]"
                  style={{
                    backgroundImage: `url(${product.imageURL})`,
                  }}
                >
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                      <h1 className="mb-5 text-5xl font-bold">
                        {product.title}
                      </h1>
                      <p className="mb-5">{product.description}</p>
                      <Link to="/products">
                        <button className="btn btn-primary">
                          Explore More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </div>
  );
};

export default Hero;
