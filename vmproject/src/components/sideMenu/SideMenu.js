import './SideMenu.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu,  } from 'antd';

export default function SideMenu() {
    const navigate = useNavigate();
    return (
    
            <Layout.Sider theme='dark'>
                <h2 className='Tile' onClick={() => navigate('/')}>
                    Desafio Viamaker
                </h2>
                <Menu
                    theme='dark'
                    mode="inline"
                    items={[
                        {
                            key: 0,
                            label: "Posts",
                            onClick: () => navigate('/posts')
                        },
                        {
                            key: 1,
                            label: "Usuários",
                            onClick: () => navigate('/user')
                        },
                    ]}
                />
            </Layout.Sider>

    );
}