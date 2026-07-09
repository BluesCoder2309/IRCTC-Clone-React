import { IoIosNotifications, IoMdHelp } from "react-icons/io";
import styles from "../styles/Navbar.module.css";
import { BsFillTrainFreightFrontFill } from "react-icons/bs";
import { useState } from "react";

function Navbar() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   // Handle login
   const handleLogin = () => {
      setIsLoggedIn(true);
   };

   return (
      <>
         <nav className={styles.navbar}>
            {/* Logo & Name */}
            <div className={styles.logoContainer}>
               {/* <img src={logo} alt="IRCTC Logo" className={styles.logo} /> */}
               <BsFillTrainFreightFrontFill className={styles.logo} />
               <span className={styles.logoText}>IRCTC</span>
            </div>

            {/* Navigation Links */}
            <div className={styles.navLinks}>
               <a href="/bookings" className={styles.navLink}>
                  Bookings
               </a>
               <a href="/contact" className={styles.navLink}>
                  Contact Us
               </a>
            </div>

            {/* Date & Time */}
            <div className={styles.dateTime}>
               <span>{new Date().toLocaleDateString()} </span>
               <span>{new Date().toLocaleTimeString()}</span>
            </div>

            {/* Notification & Help */}
            <div className={styles.icons}>
               <span className={styles.icon}>
                  <IoIosNotifications />
               </span>
               <span className={styles.icon}>
                  <IoMdHelp />
               </span>
            </div>

            {/* Login/Logout and Register button */}
            {isLoggedIn ? (
               <>
                  <span>Hello, User</span>
                  <button className={styles.authButton}>Logout</button>
               </>
            ) : (
               <>
                  <button className={styles.authButton}>Login</button>
                  <button className={styles.registerButton}>Register</button>
               </>
            )}
         </nav>
      </>
   );
}

export default Navbar;
