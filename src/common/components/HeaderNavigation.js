import React from 'react';
import {Link} from "react-router-dom";

export function HeaderNavigation() {
  return (
    <div className="flex-row justify-between" style={{width: "200px"}}>
      <Link to="/">Home Page</Link>
      <Link to="/books">Books</Link>
    </div>
  )
}
