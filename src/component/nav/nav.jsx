import React from "react";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/task">Task</Link>
        </li>
        <li>
          <Link to="/recipe">Recipe</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
