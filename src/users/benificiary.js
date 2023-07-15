import React, { useEffect, useState } from 'react';
import './benificiary.css';

const Benificiarydetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      ); // Replace with your API endpoint
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Benificiary Data Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>First name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Benificiarydetails;
