import { useState } from "react";

const data = [
  {
    src: "image-slide-1.jpg",
    alt: "pattern-1",
  },
  {
    src: "image-slide-2.jpg",
    alt: "pattern-2",
  },
  {
    src: "image-slide-3.jpg",
    alt: "pattern-3",
  },
  {
    src: "image-slide-4.jpg",
    alt: "pattern-4",
  },
  {
    src: "image-slide-5.jpg",
    alt: "pattern-5",
  },
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankyouOpen, setIsThankyouOpen] = useState(false);

  return (
    <div className="wrapper">
      <div className="main__component">
        <Heading setIsModalOpen={setIsModalOpen} />
        <Grid />
        <AboutAmy setIsModalOpen={setIsModalOpen} />
        <Slider slides={data} />
        <Cta setIsModalOpen={setIsModalOpen} />
      </div>

      {isModalOpen && (
        <Modal
          isThankyouOpen={isThankyouOpen}
          setIsModalOpen={setIsModalOpen}
          setIsThankyouOpen={setIsThankyouOpen}
        />
      )}
    </div>
  );
}

function Modal({ isThankyouOpen, setIsModalOpen, setIsThankyouOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email) return;
    console.log(name, email);

    setTimeout(() => setIsThankyouOpen(true), 3000);
  }

  return (
    <div className="overlay">
      <div className="modal__wrapper">
        <div className="modal">
          {!isThankyouOpen && (
            <>
              <button
                className="btn__closing-modal"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <form className="form__box" onSubmit={handleSubmit}>
                <input
                  className="input"
                  type="text"
                  placeholder="Your name.."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  className="input"
                  type="email"
                  placeholder="Your email.."
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button className="btn btn--orange">Submit</button>
              </form>
            </>
          )}
          {isThankyouOpen && (
            <Thankyou
              setIsModalOpen={setIsModalOpen}
              setIsThankyouOpen={setIsThankyouOpen}
              name={name}
            />
          )}
          <img src="pattern-motion-graphics.svg" className="modal__img" />
        </div>
      </div>
    </div>
  );
}

function Heading({ setIsModalOpen }) {
  return (
    <section className="heading">
      <div className="logo__box">
        <img src="logo.svg" className="logo" alt="logo" />
        <button className="btn btn--black" onClick={() => setIsModalOpen(true)}>
          Free Consultation
        </button>
      </div>
      <div className="header__box">
        <h1 className="header">Design solutions made easy</h1>
        <p className="text">
          With over ten years of experience in various design disciplines,
          I&apos;m your one-stop shop for your design needs.
        </p>
      </div>
    </section>
  );
}

function Grid() {
  return (
    <section className="grid">
      <div className="grid--el grid--1">
        <img
          className="grid__img"
          src="pattern-graphic-design.svg"
          alt="image"
        />
        <p className="grid__text">Graphic Design</p>
      </div>

      <div className="grid--el grid--2">
        <img className="grid__img" src="pattern-ui-ux.svg" alt="image" />
        <p className="grid__text">UI/UX</p>
      </div>

      <div className="grid--el grid--3">
        <img className="grid__img" src="pattern-apps.svg" alt="image" />
        <p className="grid__text">Apps</p>
      </div>

      <div className="grid--el grid--4">
        <img
          className="grid__img"
          src="pattern-illustrations.svg"
          alt="image"
        />
        <p className="grid__text">Illustrations</p>
      </div>

      <div className="grid--el grid--5">
        <img className="grid__img" src="pattern-photography.svg" alt="image" />
        <p className="grid__text">Photography</p>
      </div>

      <div className="grid--el grid--6">
        <img
          className="grid__img"
          src="pattern-motion-graphics.svg"
          alt="image"
        />
        <p className="grid__text">Motion Graphics</p>
      </div>
    </section>
  );
}

function AboutAmy({ setIsModalOpen }) {
  return (
    <section className="amy__about">
      <img src="image-amy.webp" alt="amy img" className="amy__img" />
      <div className="amy__text-box">
        <h2 className="amy__heading">
          I&apos;m Amy, and I&apos;d love to work on your next project
        </h2>
        <p className="amy__text">
          I love working with others to create beautiful design solutions.
          I&apos;ve designed everything from brand illustrations to complete
          mobile apps. I&apos;m also handy with a camera!
        </p>
        <button
          className="btn btn--orange"
          onClick={() => setIsModalOpen(true)}
        >
          Free Consultation
        </button>
      </div>
    </section>
  );
}

function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const prev = () =>
    setCurrentSlide((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurrentSlide((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <section className="slider_wrapper">
      <h2 className="slider__heading">My Work</h2>

      <div className="slider">
        {slides.map((s, i) => (
          <div
            className="slide"
            key={i}
            style={{
              transform: `translateX(${100 * (i - currentSlide)}%)`,
            }}
          >
            <img src={s.src} alt={s.alt} />
          </div>
        ))}
      </div>
      <div className="buttons__box">
        <button className="slider__btn button__previous" onClick={prev}>
          <img src="icon-arrow-left.svg" />
        </button>
        <button className="slider__btn button__next" onClick={next}>
          <img src="icon-arrow-right.svg" />
        </button>
      </div>
    </section>
  );
}

function Cta({ setIsModalOpen }) {
  return (
    <section className="cta">
      <div className="cta__box">
        <div className="cta__text-box">
          <h2 className="cta__heading">Book a call with me</h2>
          <p className="cta__text">
            I&apos;d love to have a chat to see how I can help you. The best
            first step is for us to discuss your project during a free
            consultation. Then we can move forward from there.
          </p>
        </div>
        <button
          className="btn btn--orange"
          onClick={() => setIsModalOpen(true)}
        >
          Free Consultation
        </button>
      </div>
      <div className="logo__box">
        <img src="logo.svg" className="logo" alt="logo" />
        <button className="btn btn--black" onClick={() => setIsModalOpen(true)}>
          Free Consultation
        </button>
      </div>
    </section>
  );
}

function Thankyou({ setIsModalOpen, setIsThankyouOpen, name }) {
  return (
    <div>
      <button
        className="btn__closing-modal"
        onClick={() => {
          setIsThankyouOpen(false);
          setIsModalOpen(false);
        }}
      >
        Close
      </button>
      <p className="thankyou__text">Thank You, {name}!</p>
    </div>
  );
}
