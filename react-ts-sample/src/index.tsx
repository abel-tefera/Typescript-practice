import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
import UserSearchWithRef from "./refs/UserSearch";

const App = () => {
  return (
    <div>
      <GuestList></GuestList>
      <UserSearchWithRef></UserSearchWithRef>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
