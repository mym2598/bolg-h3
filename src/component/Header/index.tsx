import React, { FC } from 'react';
import styles from './index.less';
const Header: FC = props => {
  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.h1}>Hello.
        </h2>
        <p className={styles.h2}>My name is Hansan Hu.</p>
        <p className={styles.subtitle}>
          I am a software developer. This is my blog, where I can see the confusion and struggle in the process of growing up, as well as feel my joy and determination. I hope the articles recorded can help you.
        </p>
      </div>
    </>
  );

}
export default Header
