import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#2f3450]">
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
