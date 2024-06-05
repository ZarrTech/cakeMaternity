import { DeliveryCount, Hero, ThreeElementGrid, Featured, Testimonials, CTA } from "../component/home";




const Home = () => {
  return (
    <div className="">
      <Hero
        text={"Cake Dreams Come True: Dive Into Our Heavenly Collection"}
        url={"/src/assets/images/CmBgImage.png"}
      para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in fermentum sapien. Donec nec ex lacinia velit sagittis maximus ac at risus. Ut sed odio.'}
      ></Hero>
      <ThreeElementGrid />
      <DeliveryCount start={3} end={70000} duration={3000} />
      <Featured />
      <Testimonials />
      <CTA />
    </div>
  );
}
export default Home