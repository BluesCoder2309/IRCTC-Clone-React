import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "../styles/Footer.module.css"

function Footer() {
   return (
      <>
         <footer className={styles.footer}>
            {/* Social Media Links */}
            <div className={styles.socialMedia}>
               <p>Connect with us on Social Media</p>
               <div className={styles.icons}>
                  <a
                     href="https://www.facebook.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className={styles.icon}
                  >
                     <FaFacebook />
                  </a>
                  <a
                     href="https://www.twitter.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className={styles.icon}
                  >
                     <FaTwitter />
                  </a>
                  <a
                     href="https://www.instagram.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className={styles.icon}
                  >
                     <FaInstagram />
                  </a>
               </div>
            </div>

            {/* Fotter links */}

            <div className={styles.footerLinks}>
               <div>
                  <h4>IRCTC Trains</h4>
               </div>
               <div>
                  <h4>General Informaion</h4>
               </div>
               <div>
                  <h4>Important Informaion</h4>
               </div>
               <div>
                  <h4>Agents</h4>
               </div>
               <div>
                  <h4>Enquiries</h4>
               </div>
               <div>
                  <h4>How To</h4>
               </div>
               <div>
                  <h4>IRCTC eWallet</h4>
               </div>
               <div>
                  <h4>IRCTC Official App</h4>
               </div>
               <div>
                  <h4>Advertise with us</h4>
               </div>
               <div>
                  <h4>Refund Rules & Policies</h4>
               </div>
            </div>
         </footer>
      </>
   );
}

export default Footer;
