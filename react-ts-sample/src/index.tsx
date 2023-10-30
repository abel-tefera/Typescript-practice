import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const App = () => {
  return (
    <div>
      <GuestList></GuestList>
      <UserSearch></UserSearch>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
