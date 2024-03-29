
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

export function Categories({setCurrentCategory}) {
  let secondarySetCurrentCategory = setCurrentCategory
  return (
    <aside>
      <ul>
        <li className="category">
          <button className="btn btn-all-categories" onClick={()=> setCurrentCategory('all')}>All</button>
        </li>

        {CATEGORIES.map((category) => (
          <Category key={category.name} category={category} secondarySetCurrentCategory={secondarySetCurrentCategory}/>
        ))}
      </ul>
    </aside>
  );
}

function Category({category, secondarySetCurrentCategory}) {
  return (
    <li className="category">
      <button
        className="btn-cat btn btn-categories" onClick={()=> secondarySetCurrentCategory(category.name)}
        style={{ backgroundColor: category.color }}
      >
        {category.name}
      </button>
    </li>
  );
}

export default Categories;
