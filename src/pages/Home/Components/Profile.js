import { Flex } from "antd";
import React from "react";

const Profile = ({ data }) => {
    const value = data ? Object.keys(data).length > 0 : null;
    return (
        <Flex vertical>
            <Flex vertical  className="mb-10 profile-details">
                <span>{'Industry: '} </span>
                <span>{value ? data.industry : "NA"}</span>
            </Flex>
            <Flex vertical className="mb-10 profile-details">
                <span>Sector: </span>
                <span>{value ? data.sector : "NA"}</span>
            </Flex>
            <Flex vertical className="mb-10 profile-details">
                <span>Employees: </span>
                <span>{value ? data.employees : "NA"}</span>
            </Flex>
            <Flex vertical className="mb-10 profile-details">
                <span>Equity: </span>
                <span>{value ? data.equity : "NA"}</span>
            </Flex>
        </Flex>
    )
}

export default React.memo(Profile);