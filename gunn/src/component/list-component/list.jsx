import "./list.css";
import { Profile_pic } from "./fetchlist";

function ListName() {
  return (
    <section className="user">
      <div className="your-name">
        <img src="" alt="" />
      </div>
      <div className="search-name">
        <Profile_pic />
      </div>
      <div className="user-container"></div>
    </section>
  );
}

export default ListName;
