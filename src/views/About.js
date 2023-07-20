import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import logo from '../media/gg312.png';
// import '../App.css';

const About = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function getInfo() {
      try {
        const nameCollectionRef = collection(db, 'About');
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
    <div className="about-container">
      <div className="logo-container">
        <img src={logo} alt="logo Image" className="logo" />
      </div>
      <h1 className="nasa page-title">About</h1>
      <div className="glass-box">
        {info.map((name, index) => (
          <div className="point" key={index}>
            <div className="about-intro">
              <h3 className="nasa easy-white">{name.data.title}</h3>
              <p className="about-intro-content">{name.data.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
