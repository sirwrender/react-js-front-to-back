import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <App />,
  document.getElementById("root")
);



// function App() {
//   const date = new Date();
//   const hours = date.getHours();
//   let timeOfDay;

//   const styles = {
//     fontSize: "20"
//   }

//   if (hours < 12) {
//     timeOfDay = "morning"; 
//     styles.color = "red";
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon";
//     styles.color = "green";
//   } else {
//     timeOfDay = "night";
//     styles.color = "blue";
//   }

  

//   return (
//   <h1 style={styles}>Good {timeOfDay}!</h1>
//   )

//   // const firstname = "Bob";
//   // const lastname = "Marley";

//   // return (
//   // <h1>Hello {`${firstname} ${lastname}`}!</h1>
//   // )
// }
