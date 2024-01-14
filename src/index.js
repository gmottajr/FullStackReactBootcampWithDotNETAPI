import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
const subHeaderStyle = {
  color:"#ccc", 
  backgroundColor:"blueviolet"
}

const TotalLectures = function () {
  const totalLecture = 3;
  return (<p className='text-info'>Total Lecture - {totalLecture}</p>);
}

const MainBody = function () {
  const whatWeWillLearn = 'React JS';
  return (
    <div>
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
    </div>
  );
} 

const HeaderMain = function () {
  return (
    <h1 className='heading1'>REACT COURSE</h1>
  );
} 

const SubHeader = function () {
  return (<h3 style={subHeaderStyle}>It is an exiting course!</h3>);
}

const HeaderGm = function () {
  return (
    <header>
      <HeaderMain />
      <SubHeader />
    </header>
  );
}

const FooterGm = function () {
  return (
    <footer>
      <p style={{color:"#1200FF", fontStyle:"italic", backgroundColor:"#ddd"}}>Happy coding!</p>
    </footer>
  );
}

root.render(<div>
  <HeaderGm />
  <MainBody />
  <FooterGm />
</div>);

