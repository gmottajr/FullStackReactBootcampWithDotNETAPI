import React from "react";
import Student from "./student/Student";
import StudentReview  from './student/StudentReview';

class TotalLectures extends React.Component{
    render() {
      const totalLecture = 3;
    return (<p className='text-info'>Total Lecture - {totalLecture}</p>);
    }
  }
  

class MainBody extends React.Component {
    render() {
      const whatWeWillLearn = 'React JS';
    return (
      <div style={{minHeight:"70vh"}}>
        <p>
          In this course, we will learn {whatWeWillLearn} by building TaskOpedia!
        </p>
        <TotalLectures />
        <ul>
          <li>
            Basic Foundations.
          </li>
          <li>
            Functional and Class Components!
          </li>
        </ul>
        <div className='row'>
          Students Enrolled
        </div>
        < Student experience={2} name = 'Kris Walley' headshot = "https://api.lorem.space/image/face?w=150&h=150">
          <StudentReview></StudentReview>
        </Student>
        < Student experience={5} name = 'Angel Sanderson' headshot = "https://api.lorem.space/image/face?w=150&h=292">
        <StudentReview />
        </Student>
        < Student experience={8} name = 'Rene Parker' headshot = "https://api.lorem.space/image/face?w=150&h=200"/>
        </div>
    );
    }
  }

  export default MainBody;