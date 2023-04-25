function FactsList() {
  return (
    <ul id="list">
      <li className="fact">
        <p className="letter">
          React is being developed by Meta (formerly facebook)
          <a
            className="source"
            href="
                    https://opensource.fb.com/"
            target="_blank"
          >
            (Source)
          </a>
        </p>
        <span className="tag" id="tech">
          technology
        </span>
        <div className="btn-group">
          <button>👍 24</button>
          <button>😧 9</button>
          <button>⛔ 4</button>
        </div>
      </li>
      <li className="fact">
        <p className="letter">
          Millennial dads spend 3 times as much time with their kids than their
          fathers spent with them. in 1982, 43% of fathers had never changed a
          diaper. Today, that numbers is down to 3%
          <a
            className="source"
            href="https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids"
            target="_blank"
            rel="noreferrer"
          >
            (Source)
          </a>
        </p>
        <span className="tag" id="society">
          society
        </span>
        <div className="btn-group">
          <button>👍 11</button>
          <button>😧 2</button>
          <button>⛔ 0</button>
        </div>
      </li>
    </ul>
  );
}

export default FactsList;
