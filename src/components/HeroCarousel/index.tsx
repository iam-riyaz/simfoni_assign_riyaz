
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


const mainCarouselData = [
    {
      image:
        "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg",
      path: "/women/clothing/lengha_choli",
    },
    {
      image:
        "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/2/12_4.jpg",
      path: "/women/clothing/women_dress",
    },
    {
      image:
        "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_8.jpg",
      path: "/women/clothing/women_dress",
    },
    {
      image:
        "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/2/12_4.jpg",
      path: "/women/clothing/women_dress",
    }
  ];

export const HeroCarousel = () => {

  const items = mainCarouselData.map((e) => (
    <img
      src={e.image}
      
      className="cursor-pointer"
      role="presentation"
      alt="img"
    />
  ));

  return (
    <div className="w-full">
    <AliceCarousel
      animationType="fadeout"
      animationDuration={1000}
      mouseTracking
      items={items}
      disableButtonsControls
      disableDotsControls
      autoPlay
      infinite
      controlsStrategy="alternate"
    />
    </div>
  );
};
