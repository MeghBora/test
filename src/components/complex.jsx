import React from 'react'
import styles from './component.module.css';
import { FaChevronDown } from "react-icons/fa";
import { GiStarShuriken } from "react-icons/gi";


const complex = () => {
  return (
    <div>
      <div className={styles.header2}>
        <h3>Event Name</h3>
        <p>(Venue Details)</p>
      </div>
      <div>
        <button className={styles.nestedButtonsS}>
          Event Details
        </button>
        <button className={styles.nestedButtons}>
          Assign Coordinator
        </button>
        <button className={styles.nestedButtons}>
          Session Management
        </button>
        <button className={styles.nestedButtonsR}>
          Generate SOW
        </button>
      </div>
      <div style={{ display: 'flex', gap: '30px' }}>
        <div>
          <p style={{
            fontSize: '20px',
            color: 'white',
            textShadow: 'none',
            marginBottom: 0,
            paddingBottom: 0,
          }}>Assign Cordinator</p>
          <div style={{ position: 'relative' }}>
            <input className={styles.AssignInput} placeholder='Search Cordinator' />
            <FaChevronDown style={{
              color: 'white',
              position: 'absolute',
              right: 20,
              top: 20
            }} />
          </div>
          <p
            style={{
              fontSize: '14px',
              textShadow: 'none',
              marginBottom: 0,
              paddingBottom: 0,
            }}>Add New Cordinator</p>
        </div>
        <div style={{ width: '50%' }}>
          <div style={{ display: 'flex', color: 'white', textShadow: 'none', gap: '10px' }}>
            <h6 style={{ fontSize: '20px', marginTop: '20px', marginBottom: 0, paddingBottom: 0 }}>Event Name</h6>
            <p style={{ marginTop: '25px' }}>(Venue Here)</p>
          </div>
          <div
            className={styles.rightDiv}>
            <span>StartDate:<span style={{ fontWeight: 'bold', marginLeft: '3px', color: 'white', textShadow: 'none' }}>12-12-2023</span></span>
            <span>EndDate:<span style={{ fontWeight: 'bold', marginLeft: '3px', color: 'white', textShadow: 'none' }}>12-12-2023</span></span>
          </div>
          <div
            className={styles.rightDiv}>
            <span>Venue Address:<span style={{ fontWeight: 'bold', marginLeft: '3px', color: 'white', textShadow: 'none' }}>Some Location 12, Name, City, State</span></span>
          </div>
        </div>
      </div>
      <div style={{ color: 'white', display: 'flex', width: '100%', gap: '20px' }}>
        <div style={{ width: '30%' }}>
          Assign Contractor
          <div className={styles.lower}>
            <div className={styles.pinkdiv}>
              <span style={{ color: 'white' }} >Meeting Room 1</span>
              <GiStarShuriken style={{ marginLeft: '10px' }} />
              <span style={{ marginLeft: '10px', color: 'white' }}>12 positions</span>
              <p style={{ color: 'white', margin: 0, marginTop: 10 }}>Starts From 12 Jan, Ends at 15 Jan 2023</p>
            </div>
            <div className={styles.pinkdiv}>
              <span style={{ color: 'white' }} >Meeting Room 1</span>
              <GiStarShuriken style={{ marginLeft: '10px' }} />
              <span style={{ marginLeft: '10px', color: 'white' }}>12 positions</span>
              <p style={{ color: 'white', margin: 0, marginTop: 10 }}>Starts From 12 Jan, Ends at 15 Jan 2023</p>
            </div>
            <div className={styles.pinkdiv}>
              <span style={{ color: 'white' }} >Meeting Room 1</span>
              <GiStarShuriken style={{ marginLeft: '10px' }} />
              <span style={{ marginLeft: '10px', color: 'white' }}>12 positions</span>
              <p style={{ color: 'white', margin: 0, marginTop: 10 }}>Starts From 12 Jan, Ends at 15 Jan 2023</p>
            </div>
          </div>
        </div>
        <table className={styles.table2}>
          <tr className={styles.row4}>
            <th className={styles.secCol}>Position</th>
            <th className={styles.secCol}>Time</th>
            <th className={styles.secCol}>Info</th>
            <th className={styles.secCol}>Quantity</th>
          </tr>
          <tr className={styles.row4}>
            <td className={styles.secCol}>Camera1(Video)</td>
            <td className={styles.secCol}>9am- 7pm</td>
            <td className={styles.secCol}>LP default</td>
            <td className={styles.secCol}>
              20
              <input className={styles.input3} placeholder='search' />
            </td>
          </tr>
          <tr className={styles.row4}>
            <td className={styles.secCol}>Camera1(Video)</td>
            <td className={styles.secCol}>9am- 7pm</td>
            <td className={styles.secCol}>LP default</td>
            <td className={styles.secCol}>
              20
              <input className={styles.input3} placeholder='search' />
            </td>
          </tr>
          <tr className={styles.row4}>
            <td className={styles.secCol}>Camera1(Video)</td>
            <td className={styles.secCol}>9am- 7pm</td>
            <td className={styles.secCol}>LP default</td>
            <td className={styles.secCol}>
              20
              <input className={styles.input3} placeholder='search' />
            </td>
          </tr>
          <tr className={styles.row4}>
            <td className={styles.secCol}>Camera1(Video)</td>
            <td className={styles.secCol}>9am- 7pm</td>
            <td className={styles.secCol}>LP default</td>
            <td className={styles.secCol}>
              20
              <input className={styles.input3} placeholder='search' />
            </td>
          </tr>
          <tr className={styles.row4}>
            <td className={styles.secCol}>Camera1(Video)</td>
            <td className={styles.secCol}>9am- 7pm</td>
            <td className={styles.secCol}>LP default</td>
            <td className={styles.secCol}>
              20
              <input className={styles.input3} placeholder='search' />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default complex;
