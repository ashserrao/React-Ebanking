// import React from 'react';
// import './Accounts.css';

// const Accounts = () => {

//   const storedData = localStorage.getItem('allUserData');
//   const parsedData = JSON.parse(storedData);
//   // const [data, setData] = useState([]);

//   // useEffect(() => {
//   //   fetchData();
//   // }, []);

//   // const fetchData = async () => {
//   //   try {
//   //     const response = await fetch(
//   //       'https://jsonplaceholder.typicode.com/users'
//   //     ); // Replace with your API endpoint
//   //     const jsonData = await response.json();
//   //     setData(jsonData);
//   //   } catch (error) {
//   //     console.log('Error fetching data:', error);
//   //   }
//   // };

//   return (
//     <div>
//       <h1>Customer Data Table</h1>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>First name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row) => (
//             <tr key={row.id}>
//               <td>{row.id}</td>
//               <td>{row.name}</td>
//               <td>{row.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Accounts;

import React from 'react';
import './Accounts.css';

const Accounts = () => {
  // Retrieve the second data from localStorage
  const storedData = localStorage.getItem('allUserData');
  const parsedData = JSON.parse(storedData);

  return (
    <div>
      <h1>Customer Data Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {parsedData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.first_name} {row.last_name}</td>
              <td>{row.email}</td>
              <td>{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Accounts;
