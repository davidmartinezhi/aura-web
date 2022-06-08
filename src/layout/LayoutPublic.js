import React from "react";
import { Container, Row } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

//Navbar
import Navbar from "../components/web/NavBar/Navbar";



export default function LayoutPublic(props) {
  const { routes } = props; //Sistema de rutas que me llega por props

  return (
    <>
      <Navbar />
      <LoadRoutes routes={routes} />
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