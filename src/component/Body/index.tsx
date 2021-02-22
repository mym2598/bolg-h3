import styles from '@/component/Body/index.less';
import React, { FC, useLayoutEffect, useState } from 'react';
import ModuelEntrance from '@/component/ModuelEntrance/index'
import {getLite} from '@/service/getLite';
import axios from 'axios';

const Body:React.FC = ()=>{
  let [modules,setModules] = useState([])
  useLayoutEffect( async ()=>{
     let { data } = await getLite()
     setModules(data)
  },[])
  return (
    <div className={styles.home}>
      {modules.map((item,index)=>{
        if((index&1) === 0){
          return (
              <div className={styles.row} key={item._id}>
                <div className={styles.column}>
                  <img src={require(`@/public/images/Cyberpunk_${index}.png`)}></img>
                </div>
                <div className={styles.column}>
                  <ModuelEntrance content={item.name}></ModuelEntrance>
                </div>
              </div>
            )
        }else{
          return(
            <div className={styles.row} key={item._id}>
              <div className={styles.column}>
                <ModuelEntrance content={item.name} ></ModuelEntrance>
              </div>
              <div className={styles.column}>
                <img  src={require(`@/public/images/Cyberpunk_${index}.png`)}></img>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}
export default Body
