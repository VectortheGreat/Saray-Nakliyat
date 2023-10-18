import Slider from "react-slick";

const Slide = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const images = [
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1988&q=80",
    "https://images.unsplash.com/photo-1574169207511-e21a21c8075a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
  ];

  const sliderItems = images?.map((image, index) => (
    <div key={index}>
      <div
        style={{
          backgroundImage: `url(${image})`,
          height: "650px",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  ));

  return (
    <div className="">
      <Slider {...settings}>{sliderItems}</Slider>
    </div>
  );
};

export default Slide;
