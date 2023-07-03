import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Post.css";
import { Layout, Card, Row, Col } from "antd";

const { Header, Content } = Layout;

export default function Posts() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                setPost(response.data);
            });
    }, []);
    return (
        <Layout>
            <Header className='Title'><h2>Posts</h2></Header>
            <Content>
                <Row>
                    {post.map((post) =>
                        <Col>
                            <Card id="Card">
                                <Card.Meta
                                    title={post.title}
                                    description={post.body}
                                />
                            </Card>

                        </Col>
                    )}

                </Row>
            </Content>
        </Layout>
    );
}
