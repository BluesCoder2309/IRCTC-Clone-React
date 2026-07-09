import React from "react";
import trainImg from "../assets/train-banner.jpg";
import {
   FaCalendarAlt,
   FaExchangeAlt,
   FaSuitcase,
   FaTrain,
} from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import styles from "../styles/Home.module.css";


function Home() {
   return (
      <>
         {/* Banner Img */}
         <div className={styles.background}>
            <img
               src={trainImg}
               alt="train image"
               className={styles.trainImage}
            />
         </div>

         <div className={styles.container}>
            <div className={styles.bookingForm}>
               <h2>Book Ticket</h2>
               <form>
                  <div className={styles.inputGroup}>
                     <div className={styles.inputWrapper}>
                        <FaTrain className={styles.icon} />
                        <input
                           type="text"
                           id="source"
                           name="source"
                           placeholder="Enter source station"
                           required
                           className={styles.input}
                        />
                     </div>

                     <button className={styles.swapButton}>
                        <FaExchangeAlt />
                     </button>

                     <div className={styles.inputWrapper}>
                        <FaTrain className={styles.icon} />
                        <input
                           type="text"
                           id="destination"
                           name="destination"
                           placeholder="Enter destination station"
                           required
                           className={styles.input}
                        />
                     </div>
                  </div>

                  <div className={styles.inputGroup}>
                     <div className={styles.inputWrapper}>
                        <FaCalendarAlt className={styles.icon} />
                        <input
                           type="date"
                           id="date"
                           name="date"
                           placeholder="Date of journey"
                           required
                           className={styles.input}
                        />
                     </div>

                     <div className={styles.inputWrapper}>
                        <FaSuitcase className={styles.icon} />
                        <select
                           className={styles.select}
                           name="class"
                           id="class"
                        >
                           <option value="">All Class</option>
                           <option value="sleeper">Sleeper</option>
                           <option value="ac3">AC 3 Tier</option>
                           <option value="ac2">AC 2 Tier</option>
                           <option value="ac1">AC 1 Tier</option>
                        </select>
                     </div>
                  </div>

                  <div className={styles.inputGroup}>
                     <div className={styles.inputWrapper}>
                        <BiSolidCategory className={styles.icon} />
                        <select className={styles.select} name="quota">
                           <option value="general">General</option>
                           <option value="ladies">Ladies</option>
                           <option value="tatkal">Tatkal</option>
                           <option value="ac1">Premium Tatkal</option>
                           <option value="ac1">Duty Pass</option>
                        </select>
                     </div>
                  </div>

                  <div className={styles.checkboxGroup}>
                     <label>
                        <input type="checkbox" />
                        Person with Disability (PwD)
                     </label>
                     <label>
                        <input type="checkbox" />
                        Flexible with Date
                     </label>
                     <label>
                        <input type="checkbox" />
                        Railway Pass Concession
                     </label>
                  </div>

                  <div className={styles.buttonGroup}>
                     <button className={styles.searchButton} type="submit">
                        Search Train
                     </button>
                     <button className={styles.showTrain} type="submit">
                        Show All Train
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
}

export default Home;
