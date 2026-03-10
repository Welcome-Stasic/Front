import "./App.css";
import FirstTask from "./Tasks/FirstTasks/1";
import SecondTask from "./Tasks/FirstTasks/2";
import ThirdTask from "./Tasks/FirstTasks/3";
import FirstTask2 from "./Tasks/SecondTasks/1";
import SecondTask2 from "./Tasks/SecondTasks/2";
import ThirdTask2 from "./Tasks/SecondTasks/3";
import FTask2 from "./Tasks/SecondTasks/4";

function App() {
  return (
    <>
      <h1>Первое задание 1:</h1>
      <FirstTask />
      <SecondTask />
      <ThirdTask />
      <h1>Второе задание 2:</h1>
      <FirstTask2 />
      <SecondTask2 />
      <ThirdTask2 />
      <FTask2 />
    </>
  );
}

export default App;
