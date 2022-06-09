import classes from "./hero.module.css";
import Image from "next/image";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/image/site/california.jpg"
          alt="An image showing Frank"
          height={300}
          width={300}
        />
      </div>
      <h1>Hi, I'm Frank</h1>
      <p>
        I blog about web development- especially frontend frameworks like
        Angular or React
      </p>
    </section>
  );
};

export default Hero;
