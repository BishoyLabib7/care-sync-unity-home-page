import PageLayout from "./components/PageLayout";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="h-screen">
        <PageLayout />
      </main>
    </>
  );
}

export default App;
