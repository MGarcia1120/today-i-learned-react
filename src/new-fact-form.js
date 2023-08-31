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

function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

function NewFactForm({ setFacts, setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("http://");
  const [category, setCategory] = useState("");

  function isFormValid() {
    if (text && isValidHttpUrl(source) && category) {
      return true;
    }
  }

  function clearForm() {
    setText("");
    setSource("http://");
    setCategory("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isFormValid()) {
      console.log("here");
      const newFact = {
        id: Math.floor(Math.random() * 100),
        text,
        source,
        category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),
      };
      setFacts((facts) => [newFact, ...facts]);

      clearForm();

      setShowForm(false);
    }
  }

  return (
    <section className="form-section">
      <form className="fact-form" onSubmit={handleSubmit}>
        <input
          className="text-box"
          id="fact"
          type="text"
          name="fact"
          placeholder="Share a fact with the world..."
          maxLength="200"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <span className="text-count">{200 - text.length}</span>
        <input
          type="text"
          name="source"
          placeholder="Trustworthy source..."
          value={source}
          onChange={(event) => setSource(event.target.value)}
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Choose category:</option>
          {CATEGORIES.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name.toUpperCase()}
            </option>
          ))}
        </select>
        <button className="post btn btn-large" type="submit">
          Post
        </button>
      </form>
    </section>
  );
}

export default NewFactForm;
