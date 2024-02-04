/*    Graphic Design UI/UX Apps Photography Illustrations Motion Graphics I’m Amy, and I’d love to work on your next project I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera! Free Consultation My Work Book a call with me I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there. Free Consultation Free Consultation */

export default function App() {
  return (
    <div className="wrapper">
      <section className="heading">
        <div className="logo__box">
          <img src="../public/logo.svg" className="logo" alt="logo" />
          <button className="btn btn--black">Free Consultation</button>
        </div>
        <div>
          <h1 className="header">Design solutions made easy</h1>
          <p className="text">
            With over ten years of experience in various design disciplines,
            I&apos;m your one-stop shop for your design needs.
          </p>
        </div>
      </section>
    </div>
  );
}
