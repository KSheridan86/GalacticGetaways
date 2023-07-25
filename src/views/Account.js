import React, { useEffect, useState } from 'react';
import { getAuth, updateProfile, onAuthStateChanged, signOut } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { FiLogOut, FiEdit3, FiCheck } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import logo from '../media/gg312.png';

const AccountPage = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);
  const [bookings, setBookings] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        setName(currentUser.displayName || '');
        setEmail(currentUser.email || '');
        setAvatar(currentUser.photoURL || '');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarFile(e.target.files[0]);
    }
  };

  const handleProfileUpdate = async () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (avatarFile) {
      const storage = getStorage();
      const storageRef = ref(storage, `avatars/${currentUser.uid}/${avatarFile.name}`);

      try {
        await uploadBytes(storageRef, avatarFile);
        const downloadURL = await getDownloadURL(storageRef);
        await updateProfile(currentUser, { displayName: name, email: email, photoURL: downloadURL });
        console.log('Profile updated successfully!');
        setIsEditMode(false);
        setAvatar(downloadURL);
      } catch (error) {
        console.error('Error uploading avatar:', error);
      }
    } else {
      try {
        await updateProfile(currentUser, { displayName: name, email: email });
        console.log('Profile updated successfully!');
        setIsEditMode(false);
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }
  };

  useEffect(() => {
    async function getBookings() {
      try {
        const nameCollectionRef = collection(db, 'bookings')
        const querySnapshot = await getDocs(nameCollectionRef)
        const data = querySnapshot.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))
        function time() {
          // Convert seconds to milliseconds
          const milliseconds = bookings.data.time.seconds * 1000;
          // Create a new Date object using the milliseconds
          const date = new Date(milliseconds);
          return date;
        }
        time()
        setBookings(data)
      } catch (error) {
        console.log('Error getting Bookings:', error)
      }
    }
    getBookings()
   
  }, [])

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log('User signed out successfully!');
        navigate('/');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="account-page">
       <div className="logo-container">
        <img src={logo} alt="logo Image" className="logo" />
      </div>
      <h1 className="intro-head">Account Page</h1>
      {user && (
        <div className="user-info">
          <div className="edit-button">
            {!isEditMode ? (
              <button onClick={() => setIsEditMode(true)}>
                <FiEdit3 />
              </button>
            ) : (
              <button onClick={handleProfileUpdate}>
                <FiCheck />
              </button>
            )}
          </div>
          <div className="avatar-container">
            {!isEditMode ? (
              <img src={avatar} alt="Avatar" className="avatar" />
            ) : (
              <>
                <label htmlFor="avatar-upload">
                  <input
                    type="file"
                    id="avatar-upload"
                    accept="image/*"
                    onChange={handleAvatarChange}
                  />
                  Upload Avatar
                </label>
                {avatarFile && (
                  <img
                    src={URL.createObjectURL(avatarFile)}
                    alt="Avatar Preview"
                    className="avatar-preview"
                  />
                )}
              </>
            )}
          </div>
          {!isEditMode ? (
            <div className="name-email">
              <p className="user-name">{name}</p>
              <p className="user-email">{email}</p>
            </div>
          ) : (
            <div className="input-container">
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="name-input"
              />
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="email-input"
              />
            </div>
          )}
          {bookings.map((b,i) => (
            <div className='booking' key={i}>
              {console.log(bookings)}
              <ul>
                <li>
                {b.data["tour-package"]}{b.data.status}
                 
                </li>
              </ul>
            </div>
          ))}
          <button className="sign-out-button" onClick={handleSignOut}>
            <FiLogOut />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
