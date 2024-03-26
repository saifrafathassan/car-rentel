import { Link } from "react-router-dom";

function  Hero2 ({ name }) {
  return (
    <>
      <section className="hero-pages">
        <div className="hero-pages__overlay"></div>
        <div className="container">
          <div className="hero-pages__text">
            <h3 className="text-[36px] mb-[5px] font-bold">{name}</h3>
            <p className="text-[16px] font-semibold">
              <Link className="link" to="/">Home</Link> / {name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero2
