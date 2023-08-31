import { useState } from "react";

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
  return (
    <li className="fact">
      <p className="letter">
        {fact.text}
        <a className="source" href={fact.source}>
          (Source)
        </a>
      </p>
      <span className="tag" id="tech">
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
