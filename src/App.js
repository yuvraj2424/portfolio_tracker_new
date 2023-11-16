
import "antd/dist/reset.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import { useAuth } from "./hooks/useAuth";
import { AuthContext } from "./context/AuthContext";
import Layout from "./Layout";

function App() {
    const { auth, setAuth } = useAuth();
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            <div className="App">
                <Layout />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
