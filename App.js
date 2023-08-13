 
/* Parcel 
*Created a Server
*The HMR(Hot Module Replacement)
*File watcher Algorithm - c++
*Bundling 
*Minify 
*Clean our code 
*dev and production build 
*super fast build algorithm 
*Image optimization
*Caching while development 
*compression
*compatible with older version of browsers
*Https on dev
*Port number
*Consistent Hashing algorithm 
*Zero Config
*
*
*
*Transitive dependency (The dependecies will depend on other dependency is known as transitive dependency )



*/


import React from 'react'
import  ReactDOM  from 'react-dom/client'

    const heading =React.createElement("h1",{
        key:'h1'
    },"Namaste Everyone!")
    const heading2 = React.createElement('h2',
    {
        style:{color:'green'},
        key:'h2 '

},"heading2")
    const container =React.createElement("div",{
        id:"container",
        style:{backgroundColor:"yellow"}
   
    },[heading,heading2])

    const root =ReactDOM.createRoot(document.getElementById("root"));
    // Passing the react element inside the root 

    root.render(container)
