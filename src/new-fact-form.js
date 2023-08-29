function NewFactForm() {
  return (
    <section className="form-section">
      <form className="fact-form">
        <input
          className="text-box"
          id="fact"
          type="text"
          name="fact"
          placeholder="Share a fact with the world..."
        />
        <span className="text-count"></span>
        <input type="text" name="source" placeholder="Trustworthy source..." />
        <select>
          <option value="">Choose category:</option>
          <option value="">Technology</option>
          <option value="">Science</option>
          <option value="">Finance</option>
        </select>
        <button className="post btn btn-large" type="submit">
          Post
        </button>
      </form>
    </section>
  );
}

export default NewFactForm;
