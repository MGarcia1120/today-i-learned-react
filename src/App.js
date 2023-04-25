import "./styles.css";
import NewFactForm from "./new-fact-form.js";
import FactsList from "./facts-list.js";
import Categories from "./categories";

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Today I Learned Logo" />
          <h1>Today I Learned</h1>
        </div>
        <button className="btn-open btn btn-large">Share a Fact</button>
      </header>
      <NewFactForm />

      <main className="main">
        <Categories />
        <FactsList />
      </main>
    </>
  );
}

export default App;
