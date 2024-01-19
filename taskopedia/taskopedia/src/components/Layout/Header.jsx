import logo from "../../imgs/logo512.png"

const subHeaderStyle = {
    color:"#ccc", 
    backgroundColor:"blueviolet"
  }
  

const HeaderMain = () =>  {
    return (
      <div>
        <div className="pt-3 py-1 pl-2 d-flex" style={{backgroundColor: "black"}}>
          <img src={logo} style={{height: "35px", verticalAlign: "top"}}>
          </img>
          <span className="h2 pt-4 text-white-50">
            <h1 >React Course - TaskOpedia</h1>
          </span>
        </div>
        
      </div>
      
    );
  } 
  
  const SubHeader =  () => {
    return (<h3 style={subHeaderStyle} className="text-center">It is an exiting course!</h3>);
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