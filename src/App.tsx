import React, { useState } from 'react';
import { Button, Input } from 'antd';
import './App.css';

const App: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
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

export default App;
