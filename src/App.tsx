import React from "react";
import DosPlayer from "./DosPlayer";

interface Props {}

const App = ({}: Props) => {
    return (
        <div className="App" style={{ width: "640px", height: "400px" }}>
            <DosPlayer bundleUrl="/public/romance.jsdos" />
        </div>
    );
};

export default App;
