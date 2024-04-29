import { Hero } from "../component"

const Home = () => {
  return (
    <div className="  bg-black">
      <Hero
        text={"Cake Dreams Come True: Dive Into Our Heavenly Collection"}
        url={"/src/assets/images/CmBgImage.png"}
      ></Hero>
    </div>
  );
}
export default Home