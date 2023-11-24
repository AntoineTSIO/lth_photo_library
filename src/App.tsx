import React, { useState } from 'react';
import {
    FileImageOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Breadcrumb, Button, Form, Input, Layout, Menu, theme} from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Années 1970', 'sub1970', <FileImageOutlined />, [
        getItem('1970', '1970-0'),
        getItem('1971', '1970-1'),
        getItem('1972', '1970-2'),
        getItem('1973', '1970-3'),
        getItem('1974', '1970-4'),
        getItem('1975', '1970-5'),
        getItem('1976', '1970-6'),
        getItem('1977', '1970-7'),
        getItem('1978', '1970-8'),
        getItem('1979', '1970-9'),
    ]),
    getItem('Années 1980', 'sub1980', <FileImageOutlined />, [
        getItem('1980', '1980-0'),
        getItem('1981', '1980-1'),
        getItem('1982', '1980-2'),
        getItem('1983', '1980-3'),
        getItem('1984', '1980-4'),
        getItem('1985', '1980-5'),
        getItem('1986', '1980-6'),
        getItem('1987', '1980-7'),
        getItem('1988', '1980-8'),
        getItem('1989', '1980-9'),
    ]),
    getItem('Années 1990', 'sub1990', <FileImageOutlined />, [
        getItem('1990', '1990-0'),
        getItem('1991', '1990-1'),
        getItem('1992', '1990-2'),
        getItem('1993', '1990-3'),
        getItem('1994', '1990-4'),
        getItem('1995', '1990-5'),
        getItem('1996', '1990-6'),
        getItem('1997', '1990-7'),
        getItem('1998', '1990-8'),
        getItem('1999', '1990-9'),
    ]),
    getItem('Années 2000', 'sub2000', <FileImageOutlined />, [
        getItem('2000', '2000-0'),
        getItem('2001', '2000-1'),
        getItem('2002', '2000-2'),
        getItem('2003', '2000-3'),
        getItem('2004', '2000-4'),
        getItem('2005', '2000-5'),
        getItem('2006', '2000-6'),
        getItem('2007', '2000-7'),
        getItem('2008', '2000-8'),
        getItem('2009', '2000-9'),
    ]),
    getItem('Années 2010', 'sub2010', <FileImageOutlined />, [
        getItem('2010', '2010-0'),
        getItem('2011', '2010-1'),
        getItem('2012', '2010-2'),
        getItem('2013', '2010-3'),
        getItem('2014', '2010-4'),
        getItem('2015', '2010-5'),
        getItem('2016', '2010-6'),
        getItem('2017', '2010-7'),
        getItem('2018', '2010-8'),
        getItem('2019', '2010-9'),
    ]),
    getItem('Années 2020', 'sub2020', <FileImageOutlined />, [
        getItem('2020', '2020-0'),
        getItem('2021', '2020-1'),
        getItem('2022', '2020-2'),
        getItem('2023', '2020-3'),
        getItem('2024', '2020-4'),
    ]),
];

interface LoginFormProps {
    onLogin: (username: string, password: string) => void;
}

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, textAlign: 'center', fontSize: 24, background: colorBgContainer }}>LTH Photo Library</Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Antoine</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        This is the beginning of our photo library



                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    <p>LTH Photo Library - Developed by&nbsp;
                        <a href="https://github.com/AntoineTSIO">AntoineTSIO</a>
                    </p>
                </Footer>
            </Layout>
        </Layout>
    );
};

export default App;