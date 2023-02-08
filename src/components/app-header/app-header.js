import React from "react";
import './app-header.css';

const AppHeader = ({todo, done}) => {
    return (
        <div className="flex justify-between items-baseline flex-wrap">
            
            <h1 className="text-2xl font-semibold">
                Todo List
            </h1>
             
            <h2 className="font-semibold text-gray-400">
                {todo} more to do, {done} done
            </h2>            
        </div>
    );
};

export default AppHeader;