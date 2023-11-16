import { Card, Col, Row } from "antd";
import React from "react";

const News = ({data}) => {
    return (
        <Row gutter={[24, 0]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="label">
                <h3>News</h3>
                <Card bordered={false} className="criclebox">
                    {
                        data && data.length > 0 && data.map((item, index) => (
                            <div key={index} className="news">
                                <h2>{item.title}</h2>
                                <span>{item.by} <span className="single-dot">.</span> {item.time}</span><br />
                                <span className="desc">{item.description}</span>
                                <hr />
                            </div>
                        ))
                    }
                </Card>
            </Col>
        </Row>
    )
}

export default News;