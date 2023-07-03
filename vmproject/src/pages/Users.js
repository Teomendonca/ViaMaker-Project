import React, { useEffect, useState } from "react";
import axios from "axios";
import './css/Users.css';
import { Layout, List } from "antd";

const { Header, Content } = Layout;



export default function Users() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUser(response.data);
            });
    }, []);
    return (
        <Layout>
            <Header className='Title'><h2>Usuários</h2></Header>
            <Content>
                <List
                    itemLayout="horizontal"
                    dataSource={user}
                    renderItem={(user)=>(
                        <List.Item className="Users">
                            <List.Item.Meta
                            title={user.name}
                            />
                        </List.Item>
                    )}
                />

            </Content>
        </Layout>
    );
}
