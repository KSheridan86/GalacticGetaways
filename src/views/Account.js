import React, { useEffect, useState } from 'react'
import {
  getAuth,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db } from '../firebase'
import {
  addDoc,
  serverTimestamp,
  collection,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  getDocs,
} from 'firebase/firestore'
import { FiLogOut, FiEdit3, FiCheck, FiTrash, FiX  } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import logo from '../media/gg312.png'

const AccountPage = () => {
  const [user, setUser] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState('')
  const [isEditMode, setIsEditMode] = useState(false)
  const [currentBooking, setCurrentBooking] = useState(null)
  const [editPackage, setEditPackage] = useState('')
  const [editMessage, setEditMessage] = useState('')
  const [avatarFile, setAvatarFile] = useState(null)
  const [editingBookingId, setEditingBookingId] = useState(null);
  const [bookings, setBookings] = useState([])
  const navigate = useNavigate()

  async function getBookings() {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      console.log('Current User:', user);

      if (user) {
        const bookingsRef = collection(db, 'bookings');
        const querySnapshot = await getDocs(
          query(bookingsRef, where('userId', '==', user.uid))
        );
        const data = querySnapshot.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setBookings(data);
      }
    } catch (error) {
      console.log('Error getting Bookings:', error);
    }
  }

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
    getBookings();

    return () => {
      unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //   async function getBookings() {
  //     try {
  //       const auth = getAuth()
  //       const user = auth.currentUser

  //       console.log('Current User:', user)

  //       if (user) {
  //         const bookingsRef = collection(db, 'bookings')
  //         const querySnapshot = await getDocs(
  //           query(bookingsRef, where('userId', '==', user.uid))
  //         )
  //         const data = querySnapshot.docs.map(doc => ({
  //           data: doc.data(),
  //           id: doc.id,
  //         }))
  //         setBookings(data)
  //       }
  //     } catch (error) {
  //       console.log('Error getting Bookings:', error)
  //     }
  //   }

  //   getBookings()
  // }, [])

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handleAvatarChange = e => {
    if (e.target.files && e.target.files[0]) {
      setAvatarFile(e.target.files[0])
    }
  }

  const handleProfileUpdate = async () => {
    const auth = getAuth()
    const currentUser = auth.currentUser

    if (avatarFile) {
      const storage = getStorage()
      const storageRef = ref(
        storage,
        `avatars/${currentUser.uid}/${avatarFile.name}`
      )

      try {
        await uploadBytes(storageRef, avatarFile)
        const downloadURL = await getDownloadURL(storageRef)
        await updateProfile(currentUser, {
          displayName: name,
          email: email,
          photoURL: downloadURL,
        })
        console.log('Profile updated successfully!')
        setIsEditMode(false)
        setAvatar(downloadURL)
      } catch (error) {
        console.error('Error uploading avatar:', error)
      }
    } else {
      try {
        await updateProfile(currentUser, { displayName: name, email: email })
        console.log('Profile updated successfully!')
        setIsEditMode(false)
      } catch (error) {
        console.error('Error updating profile:', error)
      }
    }
  }
  const handleEditBooking = (bookingId) => {
    setEditingBookingId(bookingId);
  };

  const handleCancelEdit = () => {
    setEditingBookingId(null);
  };

  const handleUpdateBooking = async (bookingId) => {
    try {
      const bookingsRef = collection(db, "bookings");
      await updateDoc(doc(bookingsRef, bookingId), {
        package: editPackage,
        message: editMessage,
      });
      getBookings(); // Fetch the updated bookings
      setEditingBookingId(null); // Exit edit mode
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };

  const handleDeleteBooking = async (bookingId) => {
    try {
      const bookingsRef = collection(db, "bookings");
      await deleteDoc(doc(bookingsRef, bookingId));
      getBookings(); // Fetch the updated bookings
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const handleSignOut = () => {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        console.log('User signed out successfully!')
        navigate('/')
      })
      .catch(error => {
        console.error('Error signing out:', error)
      })
  }

  if (!user) {
    return <div>Loading...</div>
  }

  const formatDate = date => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }
    return date.toLocaleDateString(undefined, options)
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
          <h3 className="nasa">Bookings</h3>
          {bookings.map((b, i) => (
        <div className="booking" key={i}>
          {editingBookingId === b.id ? (
        
            <div className="booking-edit">
              <input
                type="text"
                value={editPackage}
                onChange={(e) => setEditPackage(e.target.value)}
              />
              <textarea
                rows="5"
                value={editMessage}
                onChange={(e) => setEditMessage(e.target.value)}
              />
              <div className="edit-btn-book">
              <button onClick={() => handleUpdateBooking(b.id)}>
                <FiCheck />
              </button>
              <button onClick={handleCancelEdit}>
                <FiX  />
              </button>
              </div>
             
            </div>
          ) : (
            <ul>
              <li>
                <p>
                  <strong>Package: </strong> {b.data.package}
                </p>
              </li>
              <li>
                <p>
                  <strong>Status: </strong> {b.data.status}
                </p>
              </li>
              <li>
                <p>
                  <strong>Date: </strong>{" "}
                  {b.data.date?.seconds
                    ? formatDate(new Date(b.data.date.seconds * 1000))
                    : "N/A"}
                </p>
              </li>
              <li>
                <p>
                  <strong>Message: </strong> {b.data.message}
                </p>
              </li>
              <div className="booking-buttons">
                <button onClick={() => handleEditBooking(b.id)}>
                  <FiEdit3 />
                </button>
                <button onClick={() => handleDeleteBooking(b.id)}>
                  <FiTrash />
                </button>
              </div>
            </ul>
              )}
              </div>
            ))}
          <button className="sign-out-button" onClick={handleSignOut}>
            <FiLogOut />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default AccountPage
