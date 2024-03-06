import { useEffect, useLayoutEffect, useState } from 'react'
import styles from './App.module.css'
import { CiSquareInfo } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import LeftBar from './components/leftBar';
import RightBar from './components/rightBar';


function App() {
  const [list, setList] = useState(false)
  const [showLeft, setShowLeft] = useState(true);

  return (
    <>
      <div className={styles.head}>
        <CiSquareInfo onClick={() => setShowLeft(!showLeft)} />
        <GoBell style={{ fontSize: 'x-large', marginTop: '4px' }} />
      </div>
      <div className={styles.MainContainer}>
        {/* //this is the left container  */}
       {showLeft && <LeftBar setList = {setList} /> }

        {/* //this is the right container */}
        <RightBar list={list} />
      </div>
    </>
  )
}

export default App
