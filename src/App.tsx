import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRouter from "./router/PublicRouter";

const App: React.FC = () => {
    return (
        <BrowserRouter basename="/fchincholle_BTS">
            {/*<TopMenu />*/}
            <div>
                <Routes>
                    <Route path="/*" element={<PublicRouter />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
