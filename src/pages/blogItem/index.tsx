import React, { FC, useEffect, useState } from 'react';
import styles from './index.less';
import CodeBlock from "@/utils/CodeBlock";
import ReactMarkdown from 'react-markdown'
const ListItem:FC = ()=>{
  const md = require('@/public/markDwon/LeetCode 435.无重叠空间.md')
  let [markdown,setMarkdown] = useState(md.default)
  useEffect( () =>{
    console.log(md)
  })
  return (
    <>
      <div className={styles.box}>
        <ReactMarkdown
          renderers={{
            code:CodeBlock,
          }}
          source={markdown}
          escapeHtml={false}
        />
      </div>

    </>
  )
}
export default ListItem
