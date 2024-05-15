import { DeliveryCount, Hero, ThreeElementGrid } from "../component"

const Home = () => {
  return (
    <div className="">
      <Hero
        text={"Cake Dreams Come True: Dive Into Our Heavenly Collection"}
        url={"/src/assets/images/CmBgImage.png"}
      ></Hero>
      <ThreeElementGrid />
      <DeliveryCount/>
    </div>
  );
}
export default Home