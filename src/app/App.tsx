import {Outlet} from "react-router-dom";
import "./styles/index.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {Suspense} from "react";
import {Navbar} from "widgets/Navbar";

function App() {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={toggleTheme}>TOGGLE</button>
      <Navbar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
