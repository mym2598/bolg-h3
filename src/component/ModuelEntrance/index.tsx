import React from 'react';
import { history } from 'umi';
import styles from './index.less';

const ModuelEntrance :React.FC<{content: string}> = (props)=>{

  const routerPushToList = (type:string) => {
    history.push({
      pathname: '/list',
      query: {
       type
      },
    })
  }

  return (
      <>
        <div className={styles.moduel} onClick={()=>routerPushToList(props.content)}>
          <p className={styles.t1}>{props.content}</p>
          <p className={styles.t2}>{props.content}</p>
        </div>
      </>
    );
}
export default ModuelEntrance
