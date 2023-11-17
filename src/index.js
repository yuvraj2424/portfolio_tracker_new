import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));

const APP_THEME = {
    colorPrimary:"#001529", 
    
    borderRadius: 10,
    colorBgContainer:'#001529',

}

root.render(
    <BrowserRouter basename='/portfolio_tracker_new'>
        <ConfigProvider>
            <App />
        </ConfigProvider>
    </BrowserRouter>
);
