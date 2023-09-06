import { useState } from "react";

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];


function FactsList({ facts }) {
  return (
    <ul id="list">
      {facts.map((fact) => (
        <Fact key={fact.id} fact={fact} />
      ))}
    </ul>
  );
}

//can destructure inside function arg, if not the default is function Fact(props){}
function Fact({ fact }) {
  let category = CATEGORIES.find((x) => x.name === fact.category)
  
  return (
    <li className="fact">
      <p className="letter">
        {fact.text}
        <a className="source" href={fact.source}>
          (Source)
        </a>
      </p>
      <span className="tag" style={{backgroundColor:category.color}}>
        {fact.category}
      </span>
      <div className="btn-group">
        <button>👍 {fact.votesInteresting}</button>
        <button>😧 {fact.votesMindblowing}</button>
        <button>⛔ {fact.votesFalse}</button>
      </div>
    </li>
  );
}

export default FactsList;
