import React from 'react';
import './Login.css';
import { Layout, Form, Input, Button, Checkbox } from 'antd';
const { Header, Footer, Content } = Layout;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
class Login extends React.Component {

    loginFun() {
        console.log('login',  this.props)
    
    }
    
    render() {
        const onFinish = values => {
            console.log('Success:', values);
          };
        
          const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
          };
        
        return (<Layout>
                    <Header className='top'></Header>
                    <Content className='ctx'>
                        <div className='input-box'>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            >
                            <Form.Item
                                label="用户名"
                                name="username"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="密码"
                                name="password"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit"  onClick={() => this.loginFun()}>提交</Button>
                            </Form.Item>
                        </Form>
                        </div>
                    </Content>
                    <Footer className='bottom'>Footer</Footer>
                </Layout>);
    }
}


export default Login;


