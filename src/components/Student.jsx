const Student = function (props) {
    const fullName = props.name;
    const programingExp = props.experience; 
  
    return (
      <div className='container p-4'>
        <div className='row border'>
          <div className='col-2'> 
            <img src={`https://ui-avatars.com/api/?name=${fullName}`} className='w-30' alt="Student picture"></img>
          </div>
          <div className="col-10">
            {fullName} <br/>
            Programing Experience: {programingExp} years
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Student;