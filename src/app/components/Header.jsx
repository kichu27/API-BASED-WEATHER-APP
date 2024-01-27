import React from 'react';
import styles from '@/app/page.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <div className={styles.h}>

<motion.div
        initial={{ opacity: 0, y: 100 , x:-70  }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <Image className={styles.cloud} src={"/cloud.png"} alt="Cloud Image 1" width={300} height={300} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y:-500 , x:650  }}
        animate={{ opacity: 1, y: -350 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <Image className={styles.cloud2} src={"/cloud.png"} alt="Cloud Image 2" width={300} height={300} />
      </motion.div>


      <motion.div
  initial={{ opacity: 0, scale: 0.6 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeIn" }}
  className={styles.h_circle}
>
  <p>SkySync</p>
</motion.div>
    </div>
  );
}
