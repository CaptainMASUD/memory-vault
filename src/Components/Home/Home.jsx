import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles
import Title from '../Title/Title';
import ImagesPart from '../Images/ImagesPart';
import ExclusiveGallery from '../ExclusiveGallery/ExclusiveGallery';
import Login from '../LogIn/Login';
import Header from '../Navbar/Header';
import InteractiveGallery from '../InteractiveGallery/InteractiveGallery';

// Predefined email and password pairs
const credentials = [
  { email: 'masud.com', password: 's' },
  { email: 'user2@example.com', password: 'password2' },
  { email: 'user3@example.com', password: 'password3' },
  { email: 'user4@example.com', password: 'password4' },
  { email: 'user5@example.com', password: 'password5' },
  { email: 'user6@example.com', password: 'password6' },
  { email: 'user7@example.com', password: 'password7' },
  { email: 'user8@example.com', password: 'password8' },
  { email: 'user9@example.com', password: 'password9' },
  { email: 'user10@example.com', password: 'password10' },
  { email: 'user11@example.com', password: 'password11' },
  { email: 'user12@example.com', password: 'password12' },
  { email: 'user13@example.com', password: 'password13' },
  { email: 'user14@example.com', password: 'password14' },
  { email: 'user15@example.com', password: 'password15' },
];

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Check local storage on component mount
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail && storedPassword) {
      const user = credentials.find(
        (cred) => cred.email === storedEmail && cred.password === storedPassword
      );
      if (user) {
        setLoggedIn(true);
      } else {
        // If the stored credentials don't match, ensure we are logged out
        handleLogout();
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    const user = credentials.find(
      (cred) => cred.email === email && cred.password === password
    );

    if (user) {
      // Store credentials in local storage
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      setLoggedIn(true);
      toast.success('Login successful!'); // Replace alert with toast
    } else {
      toast.error('Invalid email or password'); // Replace alert with toast
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    setLoggedIn(false);
    toast.info('Logged out successfully'); // Optional: Show a toast on logout
  };

  return (
    <div>
      <ToastContainer /> {/* Include the ToastContainer here */}
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Header />
          <Title />
          <InteractiveGallery />
          <ExclusiveGallery />
          <ImagesPart />
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default Home;
