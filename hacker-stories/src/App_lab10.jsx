const students = [{suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}, {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'}, {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}];

function App() { 
  return (
      <div>
          <h1>Map to Loop Lists</h1>
          <Students />
          <Message />
      </div>
  );
  }

  function Students() {
    return (
      <div>
        <ul>
            {
              students.map(function(student, suid) {
                return <li key={suid}>Name: {student.name} <br/>Year: {student.year} <br/>Major: {student.major}</li>;
              })
            }
          </ul>
      </div>
    );
  }

  function Message() {
    const text = () => {
      console.log("Hello this is Lex!");
    }
    return (
      <button onClick={text}>Hello?</button>
    )
  }

  const filteredStudents = students.filter(student => student.name === "Sue Flay");
  console.log(filteredStudents);

  export default App;

