import React from 'react';
import { Link } from "react-router-dom";

export function Demo() {
    return (
      <div className="container-login">
        <Link to="hola"><h1>Hola mundo!!</h1></Link>
      </div>
    );
}