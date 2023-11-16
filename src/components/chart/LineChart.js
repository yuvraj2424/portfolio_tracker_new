
import { ResponsiveLine } from '@nivo/line';
import dayjs from "dayjs";

const getRequiredDateFormat = (timeStamp, format = "MM-DD-YYYY") => {
    return dayjs(timeStamp).format(format);
};

function LineChart({ annotation, data }) {
    return (
        <>
            <div className="height-60">
                <ResponsiveLine
                    data={data}
                    margin={{ top: 50, right: 10, bottom: 85, left: 50 }}
                    xScale={{
                        type: "time",
                        format: "%Y-%m-%d",
                        precision: "day"
                    }}
                    yScale={{
                        type: 'linear',
                        min: 'auto',
                        max: 'auto',
                        stacked: true,
                        reverse: false,
                        // min: 50, 
                        // max: 500
                    }}
                    xFormat="time:%Y-%m-%d"
                    yFormat=" >-.2f"
                    axisTop={null}
                    axisRight={null}
                    theme={{
                        textColor: "#fff",

                    }}
                    enableGridY={false}
                    enableGridX={false}
                    markers={[
                        {
                            axis: 'y',
                            value: annotation,
                            legend: annotation != 0?data[0]['id']:"",

                            lineStyle: {
                                stroke: 'red',
                                opacity: annotation
                            },
                            textStyle: {
                                fill: 'red',
                            },
                        }
                    ]}
                    gridYValues={1}
                    curve="monotoneX"
                    enableSlices="x"
                    sliceTooltip={({ slice }) => {
                        const date = slice.points[0].data.xFormatted;
                        return (
                            <div>
                                <strong style={{ color: "#000" }}>
                                    {`Date: ${getRequiredDateFormat(date, "MMMM-DD")}`}
                                </strong>
                                {slice.points.map(point => (
                                    <div key={point.id}>
                                        <strong style={{ color: "#000" }}>
                                            {`${point.serieId} ${point.data.yFormatted}`}
                                        </strong>
                                    </div>
                                ))}
                            </div>
                        );
                    }}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: -90,
                        // tickValues: "every month",
                        legend: 'Date',
                        //  format: "%m-%d-%y",
                        format: '%b %d',
                        legendOffset: 50,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        tickSize: 5,
                        ticksPosition: 0,
                        tickPadding: 5,
                        tickRotation: 0,
                        tickValues: 5,
                        legend: 'Price',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    enablePoints={false}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}

                    layers={[
                        'grid',
                        'markers',
                        'axes',
                        'areas',
                        'crosshair',
                        'lines',
                        'points',
                        'slices',
                        'mesh',
                        'legends',
                    ]}
                    
                    legends={[]}
                />
            </div>
        </>
    );
}

export default LineChart;
