const lastname = "gomas";
const firstname = "christopher";

const fullname = <h1> <span>{firstname[0].toUpperCase() + firstname.slice(1)}</span> <span className="red">{lastname.toUpperCase()}</span> </h1>

ReactDOM.render(fullname, document.querySelector('#app'));
