import { useState } from "react";

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <li key={item.suid}>{item.name} {item.year} {item.major}</li>
    ))}
  </ul>
);

function App() {

  // moved out of the global scope
  const students = [
    {suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}, 
    {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'}, 
    {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}
  ];

  let [filteredStudents, setFilteredStudents] = useState(students);
   
  const handleChange = (event) => {
    setFilteredStudents(
      students.filter(student => 
        student.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );}
  
  return (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={handleChange} />
    <h1>Students</h1>
    {/* passing the students object to the list component */}
    <List list={filteredStudents} />
  </div>
      );
    };  

export default App;