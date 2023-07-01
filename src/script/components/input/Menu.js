import "stylesheets/components/input/menu.scss";

function Menu({ onClick, menuActive }) {
  return (
    <div className="menu-button-container">
      <div className="menu-button-wrapper">
        <div className="line-container" onClick={() => onClick()}>
          <div className={"bar1 " + (menuActive ? "change1" : null)}></div>
          <div className={"bar2 " + (menuActive ? "change2" : null)}></div>
          <div className={"bar3 " + (menuActive ? "change3" : null)}></div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
