import React, { useEffect, useState } from "react";
import './css/Users.css';
import { Layout, List } from "antd";

const { Header, Content } = Layout;



export default function Users() {
    const [user, setUser] = useState([]);

    async function fetchData(){
       await fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(response=>setUser([response]))
       .finally(()=>console.log(user))
    }

    useEffect(() => {fetchData() },[]);
    return (
        <Layout>
            <Header className='Title'><h2>Usuários</h2></Header>
            <Content>
                <List
                    itemLayout="horizontal"
                    dataSource={user}
                    renderItem={(id,name)=>(
                        <List.Item>
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
