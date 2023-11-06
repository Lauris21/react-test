//import FirstComponent from "./FirstComponent";

import  PropTypes  from "prop-types";

const person = {
    name: "Laura",
    age: 30
}

const getPerson = (person) => {
    return JSON.stringify(person)
}
export const App = ({title}) => {
   
  return (
    <>
      <h1>💜{title}</h1>
      <h2>{getPerson(person)}</h2>
      {/* <FirstComponent /> */}
    </>
  );
};

App.propTypes = {
    title: PropTypes.string.isRequired
}

// App.defaultProps = {
    
// }
