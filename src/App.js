import ButtonClick from "./components/ButtonClick";
import CountClicks from "./components/CountClicks";
import CreateList from "./components/CreateList";
import HelloWorld from "./components/HelloWorld";
import List from "./components/List";
import UserClick from "./components/UserClick";

function App() {
  return (
    <div>
      <HelloWorld/>
      <UserClick/>
      <ButtonClick/> 
      <CountClicks/>
      <CreateList/>
      <List/>
    </div>
  );
}

export default App;
