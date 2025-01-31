import Cards from "./components/Cards";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="ds-main-section-container">
          <div className="ds-card-container">
            <h2>Venha nos visitar</h2>
            <Cards />
            <Cards />
          </div>
        </section>
        <section className="ds-comments-section-container">
          <Comments />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
