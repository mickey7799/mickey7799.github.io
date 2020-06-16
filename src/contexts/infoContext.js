import React, { createContext, useState, useEffect } from "react";
export const InfoContext = createContext();

const InfoContextProvider = props => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        fetch('https://gitconnected.com/v1/portfolio/mickey7799')
            .then(res => res.json())
            .then(user => {
                console.log(user);
                setInfo(user);
            });
    }, []);
    
    return (
        <InfoContext.Provider value={{info}}>
            {props.children}
        </InfoContext.Provider>
    );
};

export default InfoContextProvider;