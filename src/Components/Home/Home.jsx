import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles
import Title from '../Title/Title';
import ImagesPart from '../Images/ImagesPart';
import ExclusiveGallery from '../ExclusiveGallery/ExclusiveGallery';
import Login from '../LogIn/Login';
import InteractiveGallery from '../InteractiveGallery/InteractiveGallery';
import Banner from '../Banner/Banner';
import { Carousel } from 'flowbite-react';
import { FaCog } from 'react-icons/fa'
import { Alert } from 'flowbite-react'

// Predefined email and password pairs
const credentials = [
  { email: 'masud.com', password: 's' },
  { email: 'ayan@gmail.com', password: '6149' },
  { email: 'user3@example.com', password: 'password3' },
  // ... more credentials
];

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const user = credentials.find(
      (cred) => cred.email === storedEmail && cred.password === storedPassword
    );
    if (user) {
      setLoggedIn(true);
     
    } else {
      handleLogout();
    }
  }, []);

  const handleLogin = (email, password) => {
    const user = credentials.find(
      (cred) => cred.email === email && cred.password === password
    );
    if (user) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      setLoggedIn(true);
      toast.success('Login successful!');
      window.location.reload()
    } else {
      toast.error('Invalid email or password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    setLoggedIn(false);
    // toast.info('Logged out successfully from home');
  };

  

  // return (
  //   <div>
  //     <ToastContainer />
  //     {!loggedIn ? (
  //       <Login onLogin={handleLogin} />
  //     ) : (
  //       <>
  //         <ScrollSection>
  //           <Banner />
  //         </ScrollSection>
  //         <ScrollSection>
  //           <Title />
  //         </ScrollSection>
  //         <ScrollSection>
  //           <InteractiveGallery />
  //         </ScrollSection>
  //         <ScrollSection>
  //           <ExclusiveGallery />
  //         </ScrollSection>
  //         <ScrollSection>
  //           <ImagesPart />
  //         </ScrollSection>
  //         <button onClick={handleLogout} className="logout-button">
  //           Logout
  //         </button>
  //       </>
  //     )}
  //   </div>
  // );
  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="inline-block text-blue-600 mb-4"
      >
        <FaCog className="w-24 h-24" />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Site Under Maintenance</h1>
      </motion.div>
      <Alert color="warning" className="mb-4" >
        <span className="font-medium text-center">Pore Ay akhono kaj hoy nai</span>  Kaj ses hoile website calu hoya jaibo -Ayoooooooooonn :)
      </Alert>
      
    </div>
  </div>
  )
}

// Wrapper component for scroll-triggered animations
function ScrollSection({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="mb-12"
    >
      {children}
    </motion.div>
  );
}

export default Home;
