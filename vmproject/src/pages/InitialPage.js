import './css/InitialPage.css'
import { Layout } from "antd";
import React, { useEffect } from "react";

const { Header, Content } = Layout;



export default function InitialPage() {
    useEffect(() => { });
    return (
        <div>
            <Layout>
                <Header className='Title'><h2>Página inicial</h2></Header>
                <Content>
                    <video src="./video/sample.mp4" controls></video>
                </Content>
            </Layout>
        </div>

    );
}