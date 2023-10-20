import SimpleImageSlider from "react-simple-image-slider";
const Slide = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1574169207511-e21a21c8075a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto.format&fit=crop&w=1988&q=80",
    },
  ];

  return (
    <div className="mx-auto px-4">
      <SimpleImageSlider
        width={300}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        loop={true}
        autoPlay={true}
        useGPURender={true}
        navStyle={1}
        navSize={50}
        navMargin={30}
        slideDuration={0.5}
      />
      <h1 className="text-center text-2xl my-3 text-rose-600">
        Slider'ın Boyutu tekrardan düzeltilecektir..
      </h1>
      <hr />
    </div>
  );
};

export default Slide;
