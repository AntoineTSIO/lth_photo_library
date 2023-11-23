import React, { useState } from 'react';
import { Button, Input } from 'antd';
import './App.css';

interface LoginFormProps {
    onLogin: (username: string, password: string) => void;
}

const App: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

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
                    <div className="form">
                        <label>
                            Username:
                            <input
                                className="form-input"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <br/>
                        <label>
                            Password:
                            <input
                                className="form-input"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <br/>
                        <Button type="primary" onClick={handleLogin}>Login</Button>
                    </div>
                </div>

                <div className="footer">
                    <p>LTH Photo Library - Developed by&nbsp;
                        <a href="https://github.com/AntoineTSIO"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="link">AntoineTSIO</a>
                    </p>
                    <div className="light-mode-toggle">
                        <Button type="primary" onClick={toggleDarkMode}>
                            {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
                        </Button>
                    </div>
                </div>
            </div>
        );
    };

    return <LoginForm onLogin={(username, password) => console.log(username, password)} />;
}

export default App;
