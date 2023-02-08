import React from "react";
import './app-header.css';

const AppHeader = ({todo, done, appHeaderStyle}) => {
    return (
        <div className="app-header">            
            <h1 className="mr-2">
                Todo List
            </h1>             
            <h2 className="text-gray-400">
                {todo} more to do, {done} done
            </h2>            
        </div>
    );
};

export default AppHeader;