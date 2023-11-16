
import { Menu, Button, Typography } from "antd";
import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { dashboard, profile } from "../../assets/icon";

function Sidenav({ color }) {
    const { pathname } = useLocation();
    const { Title } = Typography;
    const page = pathname.replace("/", "");
    const { setAuth } = useContext(AuthContext);


    return (
        <>
            {/* <div className="brand">
                <h2>Portfolio Tracker</h2>
            </div> */}
            {/* <hr /> */}
            <div className="menu-head">
            <span>MAIN MENU</span>
            </div>
            
            <Menu theme="light" mode="inline"  defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <NavLink to="/">
                        <span
                            className="icon"
                        >
                            {dashboard(color)}
                        </span>
                        <span className="label">Dashboard</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <NavLink to={"/profile"}>
                        <span className="icon">{profile}</span>
                        <span className="label">Profile</span>
                    </NavLink>
                </Menu.Item>
            </Menu>
        </>
    );
}

export default Sidenav;
