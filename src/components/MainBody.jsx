
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

  export default MainBody;