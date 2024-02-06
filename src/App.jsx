import { useState } from "react";

export default function App() {
  // let curSlide = 0;

  // function nextSlide() {
  //   curSlide++;
  // }

  // function previousSlide() {
  //   curSlide--;
  // }

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="wrapper">
      <div className="main__component">
        <section className="heading">
          <div className="logo__box">
            <img src="../public/logo.svg" className="logo" alt="logo" />
            <button
              className="btn btn--black"
              onClick={() => setIsModalOpen(true)}
            >
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

        <section className="grid">
          <div className="grid--el grid--1">
            <img
              className="grid__img"
              src="../public/pattern-graphic-design.svg"
              alt="image"
            />
            <p className="grid__text">Graphic Design</p>
          </div>

          <div className="grid--el grid--2">
            <img
              className="grid__img"
              src="../public/pattern-ui-ux.svg"
              alt="image"
            />
            <p className="grid__text">UI/UX</p>
          </div>

          <div className="grid--el grid--3">
            <img
              className="grid__img"
              src="../public/pattern-apps.svg"
              alt="image"
            />
            <p className="grid__text">Apps</p>
          </div>

          <div className="grid--el grid--4">
            <img
              className="grid__img"
              src="../public/pattern-illustrations.svg"
              alt="image"
            />
            <p className="grid__text">Illustrations</p>
          </div>

          <div className="grid--el grid--5">
            <img
              className="grid__img"
              src="../public/pattern-photography.svg"
              alt="image"
            />
            <p className="grid__text">Photography</p>
          </div>

          <div className="grid--el grid--6">
            <img
              className="grid__img"
              src="../public/pattern-motion-graphics.svg"
              alt="image"
            />
            <p className="grid__text">Motion Graphics</p>
          </div>
        </section>

        <section className="amy__about">
          <img
            src="../public/image-amy.webp"
            alt="amy img"
            className="amy__img"
          />
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

        <section className="slider">
          <h2 className="slider__heading">My Work</h2>

          <div className="slider__box">
            <img
              src="../public/image-slide-1.jpg"
              alt="slide 1"
              className="slider__img"
            />

            <img
              src="../public/image-slide-2.jpg"
              alt="slide 2"
              className="slider__img"
            />

            <img
              src="../public/image-slide-3.jpg"
              alt="slide 3"
              className="slider__img"
            />
          </div>

          <div className="buttons__box">
            <button className="slider__btn button__previous">
              <img src="../public/icon-arrow-left.svg" />
            </button>
            <button className="slider__btn button__next">
              <img src="../public/icon-arrow-right.svg" />
            </button>
          </div>
        </section>

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
            <img src="../public/logo.svg" className="logo" alt="logo" />
            <button className="btn btn--black">Free Consultation</button>
          </div>
        </section>
      </div>

      {isModalOpen && (
        <div className="overlay">
          <div className="modal__wrapper">
            <div className="modal">
              <form className="form__box">
                <input
                  className="input"
                  type="text"
                  placeholder="Your name.."
                />

                <input
                  className="input"
                  type="email"
                  placeholder="Your email.."
                />

                <button className="btn btn--orange">Submit</button>
              </form>
              <img
                src="../public/pattern-motion-graphics.svg"
                className="modal__img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
