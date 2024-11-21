import { Card, Carousel } from "flowbite-react";
import SectionTitle from "../custom/SectionTitle";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
const Review = () => {
  const left = (
    <HiArrowLeft className="text-4xl bg-gray-300 rounded-full p-1" />
  );
  const right = (
    <HiArrowRight className="text-4xl bg-gray-300 rounded-full p-1" />
  );
  const reviews = [
    {
      product: "Wireless Bluetooth Earbuds",
      rating: 5,
      image:
        "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
      review:
        "The sound quality is exceptional, and the battery lasts all day! The earbuds are comfortable and fit perfectly. Highly recommended for anyone looking for affordable.",
      reviewer: "John Doe",
    },
    {
      product: "Stainless Steel Water Bottle",
      rating: 5,
      image:
        "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
      review:
        "Excellent build quality and keeps water cold for hours! I love the sleek design, and it's super easy to carry. Perfect for workouts and travel.",
      reviewer: "Emily Smith",
    },
    {
      product: "Organic Cotton Bedsheet Set",
      rating: 5,
      image:
        "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
      review:
        "These bedsheets are incredibly soft and luxurious. The color doesn't fade even after several washes. A great value for the price!",
      reviewer: "Sophia Johnson",
    },
    {
      product: "Fitness Tracker Watch",
      rating: 4,
      image:
        "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
      review:
        "The tracker is great for keeping up with my fitness goals. It’s accurate and stylish. The only issue is that the app interface could be more user-friendly.",
      reviewer: "Michael Brown",
    },
    {
      product: "Ceramic Non-Stick Cookware Set",
      rating: 5,
      image:
        "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
      review:
        "I`m thrilled with this cookware! The non-stick surface works like a charm, and cleanup is a breeze. The set has everything I need for my kitchen. Totally worth it!",
      reviewer: "Olivia Davis",
    },
  ];

  return (
    <div>
      <SectionTitle subHeading={"what out client says"} heading={"reviews"} />
      <div className="h-96">
        <Carousel pauseOnHover leftControl={left} rightControl={right}>
          {reviews.map((review, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <Card className="max-w-md">
                <img
                  alt={review.reviewer}
                  height="96"
                  src={review.image}
                  width="96"
                  className="mb-3 rounded-full shadow-lg self-center"
                />
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {review.product}
                  </h5>
                </a>
                <div className="rating rating-md">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <div className="flex items-center justify-between text-justify">
                  <p>{review.review}</p>
                </div>
                <div className="flex items-center justify-end font-medium">
                  <p>- {review.reviewer}</p>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
