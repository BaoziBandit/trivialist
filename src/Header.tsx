import style from "./Header.module.css";
import Help from "./assets/Icons/help";
import Settings from "./assets/Icons/settings";

const Header = () => {
  return (
    <nav className={style.navi}>
      <Settings className={style["svg-icon"]}/>
      <section className={style.header}>Trivialist</section>
      <Help className={style["svg-icon"]}/>
    </nav>
  );
};

export default Header;