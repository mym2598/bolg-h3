import React, { FC, useEffect } from 'react';
import styles from './index.less';
import { history } from '@@/core/history';

const List:FC = ()=>{
  const  list = [1,2,3,4,5]
  const routerPushToBlogItem = (type:string) => {
    history.push({
      pathname: '/blogitem',
      query: {
        type
      },
    })
  }
  return (
    <div className={styles.box}>
      <div>
      </div>
      <div>
        {list.map(item=>{
          return(
           <div className={styles.item} key={item} onClick={()=>{routerPushToBlogItem('x')}}>
             <h2>标题</h2>
             <div>副标题</div>
           </div>
          )
        })}
      </div>
    </div>
  )
}
export default List
