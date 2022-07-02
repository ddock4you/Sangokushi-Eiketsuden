import React from "react";
import DosPlayer from "./DosPlayer";

import "/public/js-dos/js-dos.css";
import "/public/js-dos/js-dos.js";
import "/public/js-dos/pathPrefix.js";

interface Props {}

const App = ({}: Props) => {
    return (
        <div className="App" style={{ width: "1024px", height: "800px" }}>
            <DosPlayer bundleUrl="/public/game/romance.jsdos" />
            <img src="/public/images/download.png" alt="" />
        </div>
    );
};

export default App;
