// function App(props) {
//     React.useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(usersObject => setUsers(usersObject))
//     }, [])

//     const [users, setUsers] = React.useState([]);



//     return(
//         <React.Fragment>
//         {
//             users.map((u) =>(
//                 <UserCard key={u.id} user={u}/>
//             ))
//         }
//         </React.Fragment>
//     )
// }

// function UserCard({user}) {
    

//     return (
//         <ul className="user-card">
//             <li>{user.name}</li>
//             <li>{user.email}</li>
//             <li>{user.company.name}</li>
//             <li>{user.phone}</li>
//             <li>{user.website}</li>
//         </ul>
//     )
// }

// ReactDOM.render(<App/>, document.querySelector('#app'))


function NameForm() {
    const [name, setName] = React.useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Le nom a été soumis: ${name}`);
    }

    return(
    <form onSubmit={handleSubmit}>
        <label>
        Nom :
        <input type="text" value={name} onChange={handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
    </form>
);
}


function EssayForm() {
    
    const [text, setText] = React.useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Le texte a été soumis: ${text}`);
    }
     
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Essay:
          <textarea value={text} onChange={handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }

  
function FlavorForm() {

    const [value, setValue] = React.useState('coconut');

    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`la valeur sélectionnée est: ${value}`);
    }

    return(
        <form onSubmit={handleSubmit}>
          <label>
            Choisissez votre parfum favori :
            <select value={value} onChange={handleChange}>
              <option value="grapefruit">Pamplemousse</option>
              <option value="lime">Citron vert</option>
              <option value="coconut">Noix de coco</option>
              <option value="mango">Mangue</option>
            </select>
          </label>
          <input type="submit" value="Envoyer" />
        </form>
    );
}



function Form() {
    const [inputs, setInputs] = React.useState({
        name: '',
        text: '',
        value: "coconut"
    });

    
    const handleChange = ({target: {name, value}}) => {
        setInputs(state => ({...state, [name]: value}), []);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        for(const name in inputs) {
            console.log(`${name}: ${inputs[name]}`)
        }
    }


    return(
        <form onSubmit={handleSubmit}>
            <label>
                Nom :
                <input type="text" name="name" value={inputs.name} onChange={handleChange} />
            </label>

            <label>
                Essay:
                <textarea name="text" value={inputs.text} onChange={handleChange} />
            </label>

            <label>
                Choisissez votre parfum favori :
                <select name="value" value={inputs.value} onChange={handleChange}>
                    <option value="grapefruit">Pamplemousse</option>
                    <option value="lime">Citron vert</option>
                    <option value="coconut">Noix de coco</option>
                    <option value="mango">Mangue</option>
                </select>
            </label>

            <input type="submit" value="Envoyer" />
        </form>
    )
}

ReactDOM.render(<Form />, document.querySelector('#app'));