import "./styles.css";
import NewFactForm from "./new-fact-form.js";
import FactsList from "./facts-list.js";
import Categories from "./categories";
import { useEffect, useState } from "react";
import supabase from "./supabase";
import LoadingComponent from "./loading-component";

function App() {
  let errorMessage
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    async function getFacts() {
      setIsLoading(true)
      const { data: facts, error } = await supabase.from("facts").select("*");
     if(facts){
      setFacts(facts);
      setIsLoading(false)
     }else{
      errorMessage = error.message
     }
    }
    getFacts();
  }, [reload]);

  return (
    <>
      <Header setShowForm={setShowForm} showForm={showForm} />

      {showForm ? (
        <NewFactForm setReload={setReload} setShowForm={setShowForm} />
      ) : null}

      <main className="main">
        <Categories />
        {isLoading ? (<LoadingComponent/>) : (<FactsList facts={facts} />)}
        
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
