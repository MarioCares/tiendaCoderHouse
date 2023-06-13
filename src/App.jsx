import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import MenuEntries from "./components/Navbar/MenuEntries.js";

function App() {
  return (
    <>
      <Navbar menu={MenuEntries} />
      <section className="hero is-info is-medium is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              sed eiusmod tempor incididunt ut labore et dolore magna aliqua
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
