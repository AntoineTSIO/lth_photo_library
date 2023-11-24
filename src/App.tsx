import React, { useState } from 'react';
import { Button, Input, Checkbox, Form } from 'antd';
import './App.css';

interface LoginFormProps {
    onLogin: (username: string, password: string) => void;
}
const onFinish = (values: any) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
};

const App: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    const LoginForm: React.FC<LoginFormProps> = ({onLogin}) => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const handleLogin = () => {
            // Perform any validation here before calling onLogin
            onLogin(username, password);
        };

        return (
            <div className={`container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                <div className="header">
                    <h1 className="title">LTH Photo Library</h1>
                    <p className="description">
                        Welcome to the homemade Photo Library for FamilyLand.
                    </p>
                </div>

                <div className="content">
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Se Connecter
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

                <div className="content">
                    <p>test</p>
                </div>

                <div className="footer">
                    <p>LTH Photo Library - Developed by&nbsp;
                        <a href="https://github.com/AntoineTSIO"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="link">AntoineTSIO</a>
                    </p>
                </div>
            </div>
        );
    };

    return <LoginForm onLogin={(username, password) => console.log(username, password)} />;
}

export default App;
