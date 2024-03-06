import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import styles from '../App.module.css'

function leftBar({setList}) {
  return (
    <div className={styles.leftBar}>
          <button className={styles.button}>
            Event
            <FaChevronDown style={{ fontSize: 'large' }} />
          </button>
          {/* //small buttons */}
          {
            <div>
              <button className={styles.smallButton} onClick={() =>setList(true)}>
                New Requests
              </button>
              <button className={styles.smallButton}>
                Estimate
              </button>
              <button className={styles.smallButton} onClick={() => setList(false)}>
                Events
              </button>
              <button className={styles.smallButton}>
                Partial Requests
              </button>
            </div>
          }
          <button className={styles.button}>
            Positions
          </button>
          <button className={styles.button}>
            Contractors
          </button>
          <button className={styles.button}>
            Users
            <FaChevronDown style={{ fontSize: 'large' }} />
          </button>
          {
            <div>
              <button className={styles.smallButton}>
                Admins
              </button>
              <button className={styles.smallButton}>
                Clients
              </button>
              <button className={styles.smallButton}>
                Coordinators
              </button>
            </div>
          }
          <button className={styles.button}>
            Profile
          </button>
          <button className={styles.Logout}>
          <BiLogOut />
            Logout
          </button>
        </div>
  )
}

export default leftBar;
