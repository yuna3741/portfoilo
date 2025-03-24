import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Main from "./Component/Main";

import { Route, Routes } from "react-router-dom";

function App() {
    return (

        <div>

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Project" element={<Project />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>

            

        </div>







    )
}

export default App;