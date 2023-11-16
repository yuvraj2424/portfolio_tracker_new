import { useCallback, useEffect, useState } from "react";

import {
    Card,
    Col,
    Flex,
    Row,
    Typography
} from "antd";
import { getHeighPrice } from "../../utils"
import LineChart from "../../components/chart/LineChart";

import { CompanyData } from "../../dummyData/companyData";
import { LineChartData } from "../../dummyData/chartData";
import dayjs from "dayjs";
import Companies from "./Components/Companies";
import Profile from "./Components/Profile";
import News from "./Components/News";
import DateSliderPicker from "./Components/DatePicker";

function Home() {
    const { Title, Text } = Typography;

    const [selectedCmp, setSelectedCmp] = useState(0);
    const [chartData, setChartData] = useState(LineChartData);
    const [newsData, setNewsData] = useState([]);
    const [profile, setProfile] = useState({});
    const [annotation, setAnnotation] = useState(0);

    useEffect(() => {
        const data = [...CompanyData];
        const news = data.reduce((accumulator, currentValue) => [...accumulator, ...currentValue.news], []);
        setNewsData(news);
    }, [])

    const handleChangeCmp = useCallback((e) => {
        setSelectedCmp(e.value);
        if (e.value == 0) {
            setChartData(LineChartData);
            setAnnotation(0);
            const data = [...CompanyData];
            const news = data.reduce((accumulator, currentValue) => [...accumulator, ...currentValue.news], []);
            setNewsData(news)
            setProfile({})
        } else {
            //get chart data
            const data = [...LineChartData];
            const chart_data = data.filter((obj) => obj.value === e.value);
            setChartData(chart_data);
            setAnnotation(getHeighPrice(chart_data[0].data));
            //get cmp data
            const cmp_data = [...CompanyData];
            const selected_cmp = cmp_data.find((obj) => obj.value === e.value);
            setNewsData(selected_cmp?.news)
            setProfile(selected_cmp?.profile)
        }

    }, [])

    const onDatePicker = useCallback((date, dateString, id) => {
        const selectedDate = dateString;
        if (selectedDate.length > 0 && selectedDate[0] != "" && selectedDate[1] != "") {
            const fromDate = dayjs(selectedDate[0]).format("YYYY-MM-DD");
            const toDate = dayjs(selectedDate[1]).format("YYYY-MM-DD");
            const data = LineChartData.filter((obj) => obj.id == chartData[0].id);
            const result = data.map((obj) => {
                return {
                    ...obj,
                    data: obj.data.filter((date_obj) => {
                        const date1 = dayjs(date_obj.x).format("YYYY-MM-DD");
                        if (new Date(date1) > new Date(fromDate) && new Date(date1) < new Date(toDate)) {
                            return date_obj;
                        }
                    })
                }

            });
            setAnnotation(getHeighPrice(result[0].data));
            setChartData(result)
        }

    }, [chartData]);


    return (
        <>
            <div className="layout-content">
                <Companies value={selectedCmp} handleChange={handleChangeCmp}/>
                <Row gutter={[24, 0]} className="mb-25">
                    <Col xs={24} sm={24} md={18} lg={18} xl={18} className="label">
                        <h3>Stock Watchlists</h3>
                        <Card bordered={false} className="criclebox ">
                            <DateSliderPicker onPicker={onDatePicker} />
                            <LineChart data={chartData} annotation={annotation} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} className="label">
                        <h3>Details</h3>
                        <Card bordered={false} className="criclebox h-full">
                            <Profile data={profile} />
                        </Card>
                    </Col>
                </Row>
                <News data={newsData} />
            </div>
        </>
    );
}

export default Home;
