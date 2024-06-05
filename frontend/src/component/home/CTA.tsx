import Button from "../Button";

const CTA = () => {
  return (
    <section className=" flex flex-col items-center justify-center text-center pt-[3rem] gap-y-6">
      <h1 className=" text-orange font-medium text-3xl uppercase">
        ready to order?
      </h1>
      <p className=" text-black/70">
        Just look through our pictures and prices and select a cake.
      </p>
      <p className=" text-black/70">We will deliver very fast!</p>
      <Button url="/store" name="choose a cake now" />
    </section>
  );
};
export default CTA;
