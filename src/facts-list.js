function FactsList() {
  let facts = [
    {
      id: 1,
      text: "React is being developed by Meta (formerly facebook)",
      source: "https://opensource.fb.com/",
      category: "technology",
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: 2021,
    },
    {
      id: 2,
      text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
      source:
        "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
      category: "society",
      votesInteresting: 11,
      votesMindblowing: 2,
      votesFalse: 0,
      createdIn: 2019,
    },
    {
      id: 3,
      text: "Lisbon is the capital of Portugal",
      source: "https://en.wikipedia.org/wiki/Lisbon",
      category: "society",
      votesInteresting: 8,
      votesMindblowing: 3,
      votesFalse: 1,
      createdIn: 2015,
    },
  ];

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
