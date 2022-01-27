
// Partie 2
/* function App(props) {
  const [base, setBase] = React.useState('none')
  const [decimal, setDecimal] = React.useState('');
  const [binary, setBinary] = React.useState('');

  const handleChange = (value, base) => {    
    switch(base) {
      case "binary":
        setBinary(parseInt(value, 10).toString(2))
        setDecimal(value);
        break;

      case "decimal":
        setDecimal(parseInt(value, 2).toString(10))
        setBinary(value);
        break;
    }

  }


  return (
    <React.Fragment>
      <BaseNumberInput 
        number={decimal} 
        onChangeBase={handleChange} 
        base="binary" 
        text="décimale"  />
      <BaseNumberInput 
        number={binary} 
        onChangeBase={handleChange} 
        base ="decimal" 
        text="binaire" />
    </React.Fragment>
  )
} */

// Bonus

function App() {
  const [base, setBase] = React.useState('none')
  const [decimal, setDecimal] = React.useState('');
  const [convertedNumber, setConvertedNumber] = React.useState('');

  React.useEffect(() => {
    checkBaseAndConvertValue(decimal);
  }, [base])

  const checkBaseAndConvertValue = (value, baseFromInput = base) => {
    switch(baseFromInput) {
      case "none":
        setDecimal(value);
        break;
      case "binary":
        setConvertedNumber(parseInt(value, 10).toString(2));
        setDecimal(value);
        break;
      case "ternary":
        setConvertedNumber(parseInt(value, 10).toString(3));
        setDecimal(value);
        break;
      case "septenary":
        setConvertedNumber(parseInt(value, 10).toString(7));
        setDecimal(value);
        break;
      case "hexadecimal":
        setConvertedNumber(parseInt(value, 10).toString(16));
        setDecimal(value);
        break;
    }

  }

  const handleChange = (value, base) => {
    checkBaseAndConvertValue(value, base);  
  }

  const handleSelect = (value) => {
    setBase(value);
    checkBaseAndConvertValue(decimal);
  }


  return(
    <React.Fragment>
      <BaseNumberInput 
        number={decimal} 
        onChangeBase={handleChange} 
        base={base} 
        text="decimal"  />
      <SelectBaseInput selectedBase={base} onBaseSelect={handleSelect}/>
      {base != 'none' && !isNaN(convertedNumber) ? <BaseNumberInput number={convertedNumber} base={base} text={base} OnChangeBase={null}/> : null}
    </React.Fragment>
  )
}

function SelectBaseInput({onBaseSelect, selectedBase}) {

  const handleChange = ({target: {value}}) => {
    onBaseSelect(value)
  }


  return(
    <label>
      <select value={selectedBase} onChange={handleChange}>
        <option value="none">choisir une option</option>
        <option value="binary">Binaire</option>
        <option value="ternary">Ternaire</option>
        <option value="septenary">Septénaire</option>
        <option value="hexadecimal">Hexadécimal</option>
      </select>
    </label>
  )
}


function BaseNumberInput({base, text, number, onChangeBase}) {
  const handleChange = ({target: {value}}) => {
    onChangeBase(value, base);
  }

  return(
      <React.Fragment>
        <p>Base {text} </p>
        <input value={number} onChange={handleChange} />
      </React.Fragment>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);

// const App = () => {
//     const [selectedBase, setSelectedBase] = React.useState();
//     const [numbers, setNumbers] = React.useState({
//       decimal: "",
//       convertednumber: "",
//     });
  
//     const handleChange = (value, name) => {
//       if (value == " ") {
//         return;
//       }
//       setNumbers((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     };
  
//     const handleBaseSelect = (e) => {
//       setSelectedBase(e.target.value);
//     };
  
//     React.useEffect(() => {
//       if (numbers.decimal === "" || isNaN(numbers.decimal)) {
//         setNumbers((prevState) => ({
//           ...prevState,
//           convertednumber: "",
//         }));
//         return;
//       }
//       setNumbers((prevState) => ({
//         ...prevState,
//         convertednumber: parseInt(numbers.decimal, 10).toString(selectedBase),
//       }));
//     }, [selectedBase, numbers.decimal]);
  
//     return (
//       <React.Fragment>
//         <div>
//           <NumberInput
//             name="decimal"
//             number={numbers.decimal}
//             handleChange={handleChange}
//           />
//         </div>
//         <div>
//           <SelectBaseInput
//             base={selectedBase}
//             handleBaseSelect={handleBaseSelect}
//           />
//         </div>
//         {selectedBase && <div>
//           <NumberInput
//             name="convertednumber"
//             number={numbers.convertednumber}
//             handleChange={handleChange}
//           />
//         </div>}
//       </React.Fragment>
//     );
//   };
  
//   const NumberInput = ({ number, handleChange, name }) => {
//     return (
//       <input
//         name={name}
//         value={number}
//         type="text"
//         onChange={({ target: { value, name } }) => handleChange(value, name)}
//       />
//     );
//   };
  
//   const SelectBaseInput = ({ base, handleBaseSelect }) => {
//     return (
//       <select value={base} defaultValue='none' onChange={handleBaseSelect}>
//         <option value='none' disabled={true}>choisi une option</option>
//         <option value="2">Binaire</option>
//         <option value="3">Ternaire</option>
//         <option value="7">Septénaire</option>
//         <option value="16">Hexadécimal</option>
//       </select>
//     );
//   };
  
//   ReactDOM.render(<App />, document.querySelector("#app"));
