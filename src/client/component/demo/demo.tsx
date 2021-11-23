import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export function Demo() {
  const [data, dataSet] = useState<any>(null);

  useEffect(() => {
    async function fetchMyAPI() {
      const res: any = await axios.get('https://jsonplaceholder.typicode.com/users');
      dataSet(res);
    }
    
    fetchMyAPI();
  }, []);

  return (
    <div className="container-login">
      <Link to="hola"><h1>Hola mundo!!</h1></Link>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}