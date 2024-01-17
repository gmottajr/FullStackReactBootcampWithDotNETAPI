const subHeaderStyle = {
    color:"#ccc", 
    backgroundColor:"blueviolet"
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

  export default HeaderGm;