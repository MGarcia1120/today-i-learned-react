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


function FactsList({ facts }) {

  if(facts.length === 0){
    return(<p>There are no facts to display, please add some</p>)
  }
  else
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
  async function updateVote(e, fact){
    console.log(e)
  console.log(fact.id)
   let propName = e.target.id
   let dataObj = {}
   dataObj[propName] = fact[propName] + 1
   console.log(dataObj)
 
  const {data : updatedFact, error} = await supabase
   .from('facts')
   .update(dataObj)
   .eq('id', fact.id).select()
   console.log(updatedFact)

 }
 
  
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
        <button id="voteInteresting" onClick={(event) => updateVote(event, fact)}>👍 {fact.voteInteresting}</button>
        <button id="voteMindBlowing">😧 {fact.voteMindBlowing}</button>
        <button id="voteFalse">⛔ {fact.voteFalse}</button>
      </div>
    </li>
  );
}

export default FactsList;
