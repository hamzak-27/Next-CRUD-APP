import React from 'react'
import styles from '@/ui/navbar/navbar.module.css'
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainTopic}>
        <h1>Tournamax</h1>
      </div>
      <div className={styles.button}>
        <Link href={"/addTopic"}>
        <button>Add Task</button>
          
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
