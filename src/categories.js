export function Categories() {
  return (
    <aside>
      <ul>
        <li className="category">
          <button id="test" className="btn btn-all-categories">
            All
          </button>
        </li>
        <li className="category">
          <button
            id="test"
            className="btn-cat btn btn-categories"
            style={{ backgroundColor: "blue" }}
          >
            Technology
          </button>
        </li>
        <li className="category">
          <button
            id="test"
            className="btn-cat btn btn-categories"
            style={{ backgroundColor: "green" }}
          >
            Science
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Categories;
