import "./styles.css";
import NewFactForm from "./new-fact-form.js";
import FactsList from "./facts-list.js";
import Categories from "./categories";
import { useState } from "react";
import { initiaFacts } from "./initial-facts";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState(initiaFacts);

  return (
    <>
      <Header setShowForm={setShowForm} showForm={showForm} />

      {showForm ? (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      ) : null}

      <main className="main">
        <Categories />
        <FactsList facts={facts} />
      </main>
    </>
  );
}

function Header({ setShowForm, showForm }) {
  const appTitle = "Today I Learned";
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Today I Learned Logo" />
          <h1>{appTitle}</h1>
        </div>
        <button
          className="btn-open btn btn-large"
          onClick={() => setShowForm((show) => !show)}
        >
          {!showForm ? "Share a Fact" : "Close"}
        </button>
      </header>
    </>
  );
}

export default App;
