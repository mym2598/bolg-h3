import React, { FC, useLayoutEffect, useState } from 'react';
import styles from './index.less';

const List:FC = ()=>{
  const [text,setText] = useState('')
  useLayoutEffect(()=>{
    const repeat = (t, n)=> {
      var i = 0,
        repeatable = setInterval(function () {
          setText(text+textSource[n][i] )
          console.log(text,textSource[n][i])
          i++;
          if (i >= t[n].length) {
            clearInterval(repeatable);
          }
        }, 100);
    }
    let textSource = ['很抱歉，该页面不存在或者已被删除，请返回首页或关闭这个页面','Sorry, this page does not exist or has been deleted. Please return to the home page or close this page']
    repeat(textSource, 0);
    setTimeout(function () {
      repeat(textSource, 1);
    }, textSource[0].length * 100 + 1000);
  },[])
  return (
    <div className={styles.error}>
      <div className={styles.terminal}>
        <div className={styles.title}>404</div>
        <div className={styles.text}>
          {text}
        </div>
        <div className={styles.cursor}>_</div>
        <div className={styles.c}>
          <span className={styles.heart}>返回首页</span>

        </div>
      </div>
    </div>
  )
}
export default List
