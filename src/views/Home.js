import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Home = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function getInfo() {
      try {
        const nameCollectionRef = collection(db, 'Home-Info');
        const querySnapshot = await getDocs(nameCollectionRef);
        const data = querySnapshot.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setInfo(data);
      } catch (error) {
        console.log('Error getting info:', error);
      }
    }
    getInfo();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {info.map((name, index) => (
        <div className="point" key={index}>
          <div className="intro">
            <h2 className="intro-head">{name.data.Header}</h2>
            <p className="intro-content">{name.data.Body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
