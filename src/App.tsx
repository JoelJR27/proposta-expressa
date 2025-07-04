import Header from "./components/Header";
import Cta from "./components/Cta";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full bg-background">
        <Cta />
      </main>
    </>
  );
}

export default App;
