import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const FirestoreView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const firestore = firebase.firestore();
      const snapshot = await firestore.collection("nombre_de_tu_coleccion").get();
      const items = snapshot.docs.map(doc => doc.data());
      setData(items);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Datos de Firestore en formato JSON</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default FirestoreView;
