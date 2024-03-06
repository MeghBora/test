import React from 'react'
import styles from '../App.module.css';
import ListComp from './listComp';
import Complex from './complex'
const rightBar = ({list}) => {
    return (
        <div className={styles.rightBar}>
         { list?   <ListComp />:
            <Complex /> }
        </div>
    )
}

export default rightBar;
