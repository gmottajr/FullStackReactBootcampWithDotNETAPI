import React from "react";

class Student extends React.Component {
    
    render() {
      const fullName = this.props.name;
      const programingExp = this.props.experience; 
  
      return (
        <div className='col-8 p-2'>
          <div className='row border'>
            <div className='col-3'> 
              <img src={this.props.headshot} className='w-10 m-4 py-2' alt="Student picture"></img>
            </div>
            <div className="col-7">
              {fullName} <br/>
              Programing Experience: {programingExp} years
            </div>
            <div className="col-2">
              {this.props.children}
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Student;