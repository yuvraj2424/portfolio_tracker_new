import apple_icon from "../assets/images/apple_logo.png";
import apple_icon_line from "../assets/images/line_chart.png";
import tesla_logo from "../assets/images/tesla_logo.png";
import nvida_logo from "../assets/images/nvida_logo.png";

export const CompanyData = [
    {
        id: 1,
        label: "AAPL",
        name: "Apple Inc",
        icon: apple_icon,
        chart:apple_icon_line,
        per: "+0.66",
        value: 1,
        amount: 15215.60,
        profile: {
            industry: "Computers, Phones & Household Electronics",
            sector: "Technology",
            employees: "161000",
            equity: "ORD"
        },
        news: [
            {
                title: "TSMC shares jump on sales improvement amid chip demand surge",
                by: "portfolio.com",
                time: "22 min ago",
                description: "Shares of Taiwan Semiconductor Manufacturing Company (TSMC) surged during a heavy trading session last Friday, marking their most significant intraday rise since May"
            },
            {
                title: "Stock Market Today: Dow in 2nd weekly win as tech stocks fuel major rebound",
                by: "portfolio.com",
                time: "10 Nov 2023",
                description: "The Dow rallied to notch second-straight weekly win Friday as big tech led a rebound in stocks following a wobble a day earlier when Fed chair Jerome Powell's..."
            },
            {
                title: "TSMC shares surge on strong October sales and Japanese expansion plans",
                by: "portfolio.com",
                time: "10 Nov 2023",
                description: "Shares of Taiwan Semiconductor Manufacturing Company (TSMC) surged during a heavy trading session last Friday, marking their most significant intraday rise since May"
            },
        ]
    },
    {
        id: 2,
        label: "TSLA",
        name: "Tesla Inc",
        icon: tesla_logo,
        chart:apple_icon_line,
        per: "+0.16",
        value: 2,
        amount: 9232.40,
             profile: {
            industry: "Automobiles & Auto Parts",
            sector: "Consumer Cyclicals",
            employees: "127855",
            equity: "ORD"
        },
        news: [
            {
                title: "Hyundai Motor breaks ground on $1.5 billion EV plant in South Korea",
                by: "portfolio.com",
                time: "1h ago",
                description: "Shares of Taiwan Semiconductor Manufacturing Company (TSMC) surged during a heavy trading session last Friday, marking their most significant intraday rise since May"
            },
            {
                title: "Exclusive-US, Indonesia to discuss potential for deal on EV minerals -sources",
                by: "portfolio.com",
                time: "10h ago",
                description: "The Dow rallied to notch second-straight weekly win Friday as big tech led a rebound in stocks following a wobble a day earlier when Fed chair Jerome Powell's..."
            },
            {
                title: "Tesla's China woes; Lucid commits to NACS: This week in EVs",
                by: "portfolio.com",
                time: "23h ago",
                description: "Shares of Taiwan Semiconductor Manufacturing Company (TSMC) surged during a heavy trading session last Friday, marking their most significant intraday rise since May"
            },
        ]
    },
    {
        id: 3,
        label: "NVDA",
        name: "Nvidia Corporation",
        icon: nvida_logo,
        chart:apple_icon_line,
        per: "+0.24",
        value: 3,
        amount: 10232.40,
               profile: {
            industry: "Semiconductors & Semiconductor Equipment",
            sector: "Technology",
            employees: "22473",
            equity: "ORD"
        },
        news: [
            {
                title: "TSMC shares jump on sales improvement amid chip demand surge",
                by: "portfolio.com",
                time: "31min ago",
                description: "Shares of Taiwan Semiconductor Manufacturing Company (TSMC) surged during a heavy trading session last Friday, marking their most significant intraday rise since May"
            },
            {
                title: "U.S. in game of catch me if you can with Nvidia on rules - China media",
                by: "portfolio.com",
                time: "Nov 10,2023",
                description: "The Dow rallied to notch second-straight weekly win Friday as big tech led a rebound in stocks following a wobble a day earlier when Fed chair Jerome Powell's..."
            },
            {
                title: "Wall Street soars, fueled by tech as Treasury yields calm",
                by: "portfolio.com",
                time: "Nov 10,2023",
                description: "Shares of Taiwan Semiconductor Manufacturing Company (TSMC) surged during a heavy trading session last Friday, marking their most significant intraday rise since May"
            },
        ]
    }
]