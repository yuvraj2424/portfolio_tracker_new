import { Card, Col, Flex, Row, Typography } from "antd";
import React,{ useRef } from "react";
import { CompanyData } from "../../../dummyData/companyData";

const Companies = ({ handleChange, value}) => {
    const ref = useRef(null);
    const { Title, Text } = Typography;
    const onLeft =(e)=>{
        ref.current.scrollLeft=20
    }

    const onRight =(e)=>{
         console.log(ref.current.scrollRight)
         ref.current.scrollRight=40
     }

    return (
        <Row className="companies-data rowgap-vbox" gutter={[24, 0]} wrap={false} ref={ref}>
            {/* <a href="#" class="previous round" onClick={onLeft}>&#8249;</a> */}

            {CompanyData.map((c, index) => (
                <Col key={index} xs={24}
                    sm={12}
                    md={8}
                    lg={8}
                    xl={8}
                    className="mb-24"
                >
                    <Card bordered={false} className={`criclebox ${value == c.value ? 'active':""}`} onClick={() => handleChange(c)}>
                        <div className="number">
                            <Flex justify={"space-between"} align={"center"}>
                                <div className="cmp-icon">
                                    <img src={c.icon} />
                                </div>
                                <div>
                                    <Title level={5}>{c.label}</Title>
                                    <span>{c.per}%</span>
                                </div>
                            </Flex>
                            <Flex justify={"space-between"} align={"center"}>
                                <div>
                                    <h3>Portfolio</h3>
                                    <h2>{c.amount}</h2>
                                </div>
                                <div>
                                    <img src={c.chart} />
                                </div>
                            </Flex>
                        </div>
                    </Card>
                </Col>
            ))}
            {/* <a href="#" class="next round" onClick={onRight}>&#8250;</a> */}
        </Row>
    )
}

export default Companies;