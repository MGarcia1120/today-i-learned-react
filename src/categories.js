export function Categories() {
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

  return (
    <aside>
      <ul>
        <li className="category">
          <button id="test" className="btn btn-all-categories">
            All
          </button>
        </li>

        {CATEGORIES.map((category) => (
          <li key={category.name} className="category">
            <button
              id="test"
              className="btn-cat btn btn-categories"
              style={{ backgroundColor: category.color }}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Categories;
