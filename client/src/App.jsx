import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/api/mydata");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Quote</th>
            <th>Phone Price</th>
          </tr>
        </thead>
        <tbody>
          <h1>
            {data.data1?.length
              ? `Que 1: ${data.data1.length} results`
              : "Que 1: No data found"}
          </h1>
          {data.data1?.map((item, key) => (
            <tr key={key}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.income}</td>
              <td>{item.city}</td>
              <td>{item.car}</td>
              <td>{item.quote}</td>
              <td>{item.phone_price}</td>
            </tr>
          ))}

          <h1>
            {data.data2?.length
              ? `Que 2: ${data.data2.length} results`
              : "Que 2: No data found"}
          </h1>
          {data.data2?.map((item, key) => (
            <tr key={key}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.income}</td>
              <td>{item.city}</td>
              <td>{item.car}</td>
              <td>{item.quote}</td>
              <td>{item.phone_price}</td>
            </tr>
          ))}

          <h1>
            {data.data3?.length
              ? `Que 3: ${data.data4.length} results`
              : "Que 3: No data found"}
          </h1>
          {data.data3?.map((item, key) => (
            <tr key={key}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.income}</td>
              <td>{item.city}</td>
              <td>{item.car}</td>
              <td>{item.quote}</td>
              <td>{item.phone_price}</td>
            </tr>
          ))}

          <h1>
            {data.data4?.length
              ? `Que 4: ${data.data4.length} results`
              : "Que 4: No data found"}
          </h1>
          {data.data4?.map((item, key) => (
            <tr key={key}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.income}</td>
              <td>{item.city}</td>
              <td>{item.car}</td>
              <td>{item.quote}</td>
              <td>{item.phone_price}</td>
            </tr>
          ))}

          <h1>
            {data.data5?.length
              ? `Que 5: ${data.data4.length} results`
              : "Que 5: No data found"}
          </h1>
          {data.data5?.map((item, key) => (
            <tr key={key}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.income}</td>
              <td>{item.city}</td>
              <td>{item.car}</td>
              <td>{item.quote}</td>
              <td>{item.phone_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
