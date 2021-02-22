import React from 'react';
import {connect} from 'dva';

interface IndexProps {

}
interface IndexState {

}
class Index extends React.Component<IndexProps,IndexState> {
  fetch = ()=>{
    const { dispatch } = this.props;
    dispatch({
      type:'products/list',
      payload:3,
      callback:res=>{
        console.log(res)
      }
    })
  }

  render() {
    const {products} = this.props;
    console.log(products,'这里')
    return (
      <button onClick={this.fetch}>
        {products.list}
      </button>
    );
  }
}

export default connect(({products})=>({products}))(Index);
