const task1 = (
    <h1>Hello world!</h1>
  );
const task2 = (
    <div>
      <h3>Hello, kitty</h3>
      <img src={img1}></img>
    </div>
  )
  const lesson1 = (
    <ol>
      <li>{task1}</li>
      <li>{task2}</li>
    </ol>
  )
  
  ReactDOM.render(
    lesson1
    ,
    document.getElementById('root')
  );
export default lesson1;