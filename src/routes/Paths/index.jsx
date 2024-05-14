import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/sitePages/Home";
import Login from "../../pages/sitePages/Login";
import Dashboard from "../../pages/adminPages/Dashboard";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route  path="/login" element={<Login />} />
                <Route  path="/" element={<Dashboard />} />
                <Route path="*" element={
                    <>
                        <h1>Pagina não Encontrada</h1>
                        <a href="/">Voltar</a>
                    </>
                } 
                />

            </Routes>
        </BrowserRouter>
    );
}

export default Paths;