
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/reset.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


const AuthRoute = () => (
    <Main>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Main>
)

const NonAuthRoute = () => (
    <Routes>
        <Route path="/" element={<SignIn />} />
    </Routes>
)


function Layout() {
    const { auth, setAuth } = useContext(AuthContext);
    return (
        <>
            {
                auth ? <AuthRoute /> : <NonAuthRoute />
            }
        </>
    );
}

export default Layout;
