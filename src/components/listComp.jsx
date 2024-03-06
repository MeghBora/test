import React from 'react'
import styles from './component.module.css';
import { IoSearch } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const listComp = () => {
  const arr3 = Array(15).fill(1);
  return (
    <>
      <div className={styles.header}>
        <h1>Event Requests</h1>
        <div className={styles.search}>
          <input style={{
            background: 'transparent',
            position: 'relative',
            height: '1.5rem',
            border: '2px solid white',
            paddingLeft: '32px',
            color: 'white',
            borderRadius: '5px'
          }} placeholder='Search here' />
          <IoSearch style={{
            position: 'absolute',
            paddingTop: '7px',
            paddingLeft: '7px',
            color: 'white',
          }} />
          <button className={styles.plusButton}>+</button>
        </div>
      </div>
      <div className={styles.table}>
      <table>
        <thead style={{backgroundColor: "#d175b6"}}>
          <th className={styles.firstCol}>Event Name</th>
          <th className={styles.normalCols}>Event Start</th>
          <th className={styles.normalCols}>Event End</th>
          <th className={styles.normalCols}>Client Name</th>
          <th className={styles.normalCols}>Contact Info</th>
          <th className={styles.normalCols}>Venue</th>
          <th className={styles.normalCols}>City</th>
          <th className={styles.normalCols}>State</th>
          <th className={styles.normalCols}>Zip Code</th>
        </thead>
       {
       arr3.map(() => <tr className={styles.trow}>
          <td className={styles.firstCol}><MdOutlineRemoveRedEye /> Filled Name</td>
          <td className={styles.normalCols}>Jan 12, 2024</td>
          <td className={styles.normalCols}>Jan 14, 2024</td>
          <td className={styles.normalCols}>Muhammad Asad</td>
          <td className={styles.normalCols}>+12345667890</td>
          <td className={styles.normalCols}>Lorem Ipsum Dolor Sit Amet</td>
          <td className={styles.normalCols}>-</td>
          <td className={styles.normalCols}>-</td>
          <td className={styles.normalCols}>-</td>
        </tr>
        )}
      </table>
      </div>
    </>
  )
}

export default listComp;
