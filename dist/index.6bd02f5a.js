const heading = React.createElement("h1", {}, "Namaste Everyone!");
const heading2 = React.createElement("h2", {
    style: {
        color: "green"
    }
}, "heading2");
const container = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// Passing the react element inside the root 
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
