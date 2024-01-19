import React from "react";
import Header from "./Header";
import Counter from "../Counter";

class MainBody extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Counter />
            </div>
            
        );
    }
}

export default MainBody;