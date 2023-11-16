import { Card, Row, Col, DatePicker, Flex } from "antd";
import React from "react";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;
const DateSliderPicker = ({ onPicker }) => {
    const disabledDate = (current) => {
        return current && current > dayjs().endOf('day');
    };
    return (
        <Row justify="end">
            <Col >
                <RangePicker
                    prevIcon
                    disabledDate={disabledDate}
                    onChange={onPicker} />
            </Col>
        </Row>
    )
}

export default DateSliderPicker;