import React from "react";
import { Routes, Route } from "react-router-dom";
import routesConfig from "routesConfig";

const AppRoutes = ({ accessToken }) => {
  const renderRoute = (route, parentPath = "") => {
    const { path, component: Component, private: isPrivate, subRoutes } = route;

    const fullPath = parentPath + path;

    const renderComponent = () => {
      return <Component accessToken={accessToken} />;
    };

    return (
      <React.Fragment key={fullPath}>
        <Route path={fullPath} element={renderComponent()} />
        {subRoutes &&
          subRoutes.map((subRoute) => renderRoute(subRoute, fullPath))}
      </React.Fragment>
    );
  };

  return <Routes>{routesConfig.map((route) => renderRoute(route))}</Routes>;
};

export default AppRoutes;
