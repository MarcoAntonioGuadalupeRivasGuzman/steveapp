import React from "react";
import { Route, Routes } from "react-router-dom";

function ArticlesRouter(){
    return(
        <>
            <Routes>
                <Route path="rowsandcolums" element={<></>} />
            </Routes>
        </>
    );
}

export default ArticlesRouter;