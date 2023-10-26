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
  const [isUploading, setIsUploading] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('all')

  useEffect(() => {
    async function getFacts() {
      setIsLoading(true)
      let query = supabase.from("facts").select('*')

      if(currentCategory !== 'all'){
        query = query.eq("category", currentCategory)
      }

      const { data: facts, error } = await query;
     if(facts){
      setFacts(facts);
      setIsLoading(false)
     }else{
      errorMessage = error.message
     }
    }

    
    getFacts();

  }, [reload, currentCategory]);

  return (
    <>
      <div className="root">
      <Header setShowForm={setShowForm} showForm={showForm} />

      {showForm ? (
        <NewFactForm isUploading={isUploading} setIsUploading={setIsUploading} setFacts={setFacts} setReload={setReload} setShowForm={setShowForm} />
      ) : null}

      <main className="main">
        <Categories setCurrentCategory={setCurrentCategory}/>
        {isLoading ? (<LoadingComponent/>) : (<FactsList setFacts={setFacts} facts={facts} currentCategory={currentCategory}/>)}
        
      </main>
      </div>
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
