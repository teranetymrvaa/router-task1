import React, { useEffect, useState } from "react";
import axios from "axios";

function Books() {
  const url = "http://localhost:3001/books";
  const [data, setdata] = useState([]);
  const [isloading, setisloading] = useState(true);

  async function getData() {
    try {
      const res = await axios.get(url);
      setdata(res.data);
      setisloading(false);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isloading ? (
        <div>loading...</div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto", 
            gap: "20px", 
            justifyContent: "center",
            margin: "20px auto",
          }}
        >
          {data.map((book) => (
            <div
              key={book.id}
              style={{
                width: "15rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                fontFamily: "sans-serif",
                margin: "20px auto",
              }}
            >
              <img
                src={book.img}
                alt="Card"
                style={{ width: "100%", height: "auto" }}
              />
              <div style={{ padding: "16px" }}>
                <h5 style={{ margin: "0 0 10px" }}>{book.name}</h5>
                <p style={{ fontSize: "14px", color: "#333" }}>
                  {book.name}
                </p>
              </div>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  borderTop: "1px solid #eee",
                }}
              >
                <li
                  style={{
                    padding: "10px 16px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {book.author}
                </li>
                <li
                  style={{
                    padding: "10px 16px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {book.price}
                </li>
                <li style={{ padding: "10px 16px" }}>{book.type}</li>
              </ul>
              <div
                style={{
                  padding: "16px",
                  borderTop: "1px solid #eee",
                  textAlign: "center",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  Bookdetail
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Books;
