import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const subHeaderStyle = {
  color:"#ccc", 
  backgroundColor:"blueviolet"
}
const MainBody = function () {
  return (
    <div>
      <p>
        In this course, we will learn React by building TaskOpedia!
      </p>
      <ul>
        <li>
          Call Ben.
        </li>
        <li>
          Got to Walmart!
        </li>
      </ul>
    </div>
  );
} 

const HeaderMain = function () {
  return (
    <h1>REACT COURSE</h1>
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

