import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import styles from './index.less';

const Index: React.FC<{}> = (props) =>{
  return (
    <div>
      <Layout>
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}
export default Index
