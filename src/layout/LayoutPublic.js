import React from "react";
import { Route, Switch } from "react-router-dom";

//Navbar
import Navbar from "../components/web/NavBar/Navbar";

//Footer
import Footer from "../components/web/Footer/Footer";



export default function LayoutPublic(props) {
  const { routes } = props; //Sistema de rutas que me llega por props

  return (
    <>
      <Navbar />
      <LoadRoutes routes={routes} />
      <Footer/>
    </>
  );
}

function LoadRoutes({ routes }) {
  //Carga las rutas
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
