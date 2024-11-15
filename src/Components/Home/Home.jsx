import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles
import Title from '../Title/Title';
import ImagesPart from '../Images/ImagesPart';
import ExclusiveGallery from '../ExclusiveGallery/ExclusiveGallery';
import Login from '../LogIn/Login';
import InteractiveGallery from '../InteractiveGallery/InteractiveGallery';
import Banner from '../Banner/Banner';
import { Carousel } from 'flowbite-react';
import ProfilePictures from '../Profiles/Profiles';
import MemoryGallery from '../MemoyGalery/MemoryGalery';
import InfiniteScrollGallery from '../InfiniteScrollGallery/InfiniteScrollGallery';
import { FaTools } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import UnderMaintenance from './UnderMaintenance';

// Predefined email and password pairs
const credentials = [
  { email: 'masudulalam972@gmail.com', password: '222-15-6072' },
  { email: 'nirjon853@gmail.com', password: '222-15-6149' },
  { email: 'nurtahmimahmed@gmail.com', password: '222-15-6217' },
  { email: 'tasnianaima@gmail.com', password: '222-15-6313' },
  { email: 'kft776@gmail.com', password: '222-15-6178' },
  { email: 'rrahmanmahfuz007@gmail.com', password: '222-15-6522' },
  { email: 'shahedrumi98@gmail.com', password: '222-15-6485' },
  { email: 'ahmed15-6195@s.diu.edu.bd', password: '222-15-6195' },
  { email: 'shohelyislamsuchi@gmail.com', password: '222-15-6493' },
  { email: 'arhabjahin.b@gmail.com', password: '222-15-6452' },
  { email: 'bhowmickneeds@gmail.com', password: '222-15-6382' },
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
      window.location.reload();
    } else {
      toast.error('Invalid email or password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    setLoggedIn(false);
  };

  return (
  <UnderMaintenance/>
    // <div>
    //   <ToastContainer />
    //   {!loggedIn ? (
    //     <Login onLogin={handleLogin} />
    //   ) : (
    //     <>
    //       <Section>
    //         <Banner />
    //       </Section>
    //       <Section>
    //         <Title />
    //         <ProfilePictures />
    //       </Section>
    //       <Section>
    //         <InfiniteScrollGallery />
    //         <MemoryGallery />
    //       </Section>

    //       <Section>
    //         <ExclusiveGallery />
    //       </Section>
    //       <Section>
    //         <ImagesPart />
    //       </Section>
    //     </>
    //   )}
    // </div>
  );
}

// Wrapper component for sections without animation
function Section({ children }) {
  return <div className="mb-12">{children}</div>;
}

export default Home;
