import { useState } from "react";
import supabase from "./supabase";


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


function FactsList({ facts, setFacts }) {

  if(facts.length === 0){
    return (<p className="message">There are no facts to display for this category yet, please add some</p>);
  }
  else
  return (
    <ul id="list">
      {facts.map((fact) => (
        <Fact key={fact.id} fact={fact} setFacts={setFacts} />
      ))}
    </ul>
  );
}

//can destructure inside function arg, if not the default is function Fact(props){}
function Fact({ setFacts, fact }) {
  const [isUpdating, setIsUpdating] = useState(false)



  async function handleVote(columnName){
    setIsUpdating(true)
    const {data : updatedFact, error} = await supabase
    .from('facts')
    .update({[columnName]: fact[columnName] + 1 })
    .eq('id', fact.id).select()
    console.log(updatedFact)
    setIsUpdating(false)
    if(!error){
     setFacts((facts) => facts.map((f) => f.id === fact.id ? updatedFact[0]: f ))
    }
 
  }
  
  let category = CATEGORIES.find((x) => x.name === fact.category)
  // async function updateVote(e, fact){
  //   console.log(e)
  // console.log(fact.id)
  //  let propName = e.target.id
  //  let dataObj = {}
  //  dataObj[propName] = fact[propName] + 1
  //  console.log(dataObj)
 
  // const {data : updatedFact, error} = await supabase
  //  .from('facts')
  //  .update(dataObj)
  //  .eq('id', fact.id).select()
  //  console.log(updatedFact)

  //  if(!error){
  //   setFacts((facts) => facts.map((f) => f.id === fact.id ? updatedFact: f ))
  //  }

//  }
 
  
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
        <button id="voteInteresting" disabled={isUpdating} onClick={() => handleVote('voteInteresting')}>👍 {fact.voteInteresting}</button>
        <button id="voteMindBlowing" disabled={isUpdating} onClick={() => handleVote('voteMindBlowing')}>😧 {fact.voteMindBlowing}</button>
        <button id="voteFalse" disabled={isUpdating} onClick={() => handleVote('voteFalse')}>⛔ {fact.voteFalse}</button>
      </div>
    </li>
  );
}

export default FactsList;
