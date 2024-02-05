/*    I’m Amy, and I’d love to work on your next project I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera! Free Consultation My Work Book a call with me I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there. Free Consultation Free Consultation */

export default function App() {
  return (
    <div className="wrapper">
      <section className="heading">
        <div className="logo__box">
          <img src="../public/logo.svg" className="logo" alt="logo" />
          <button className="btn btn--black">Free Consultation</button>
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
    </div>
  );
}
