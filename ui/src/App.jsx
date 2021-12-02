import React from "react";

import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, AppBar, Toolbar } from "@material-ui/core";
import AppLogo from "./plugins/AppLogo";
import NavLink from "./components/NavLink";

import WorkflowSearch from "./pages/executions/WorkflowSearch";
import TaskSearch from "./pages/executions/TaskSearch";

import Execution from "./pages/execution/Execution";
import WorkflowDefinitions from "./pages/definitions/Workflow";
import WorkflowDefinition from "./pages/definition/Workflow";
import TaskDefinitions from "./pages/definitions/Task";
import TaskDefinition from "./pages/definition/Task";
import EventHandlerDefinitions from "./pages/definitions/EventHandler";
import EventHandlerDefinition from "./pages/definition/EventHandler";
import TaskQueue from "./pages/misc/TaskQueue";
import KitchenSink from "./pages/kitchensink/KitchenSink";
import DiagramTest from "./pages/kitchensink/DiagramTest";
import Examples from "./pages/kitchensink/Examples";
import Gantt from "./pages/kitchensink/Gantt";

import AppBarModules from "./plugins/AppBarModules";
import Login from "./pages/auth/Login";
import { AuthProvider } from './AuthContext';
import PrivateRoute from './components/auth/PriavteRoute'


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#efefef", // TODO: Use theme var
    display: "flex",
  },
  body: {
    width: "100vw",
    height: "100vh",
    paddingTop: theme.mixins.toolbar.minHeight,
  },
  toolbarRight: {
    marginLeft: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    // Provide context for backward compatibility with class components
    <AuthProvider>
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <AppLogo />
            <AppBarModules classes={classes} />
          </Toolbar>
        </AppBar>
        <div className={classes.body}>
          <Switch>
            <PrivateRoute exact path="/">
              <WorkflowSearch />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/search/by-tasks">
              <TaskSearch />
            </PrivateRoute>
            <PrivateRoute path="/execution/:id/:taskId?">
              <Execution />
            </PrivateRoute>
            <PrivateRoute exact path="/workflowDef">
              <WorkflowDefinitions />
            </PrivateRoute>
            <PrivateRoute exact path="/workflowDef/:name/:version?">
              <WorkflowDefinition />
            </PrivateRoute>
            <PrivateRoute exact path="/taskDef">
              <TaskDefinitions />
            </PrivateRoute>
            <PrivateRoute exact path="/taskDef/:name">
              <TaskDefinition />
            </PrivateRoute>
            <PrivateRoute exact path="/eventHandlerDef">
              <EventHandlerDefinitions />
            </PrivateRoute>
            <PrivateRoute exact path="/eventHandlerDef/:name">
              <EventHandlerDefinition />
            </PrivateRoute>
            <PrivateRoute exact path="/taskQueue/:name?">
              <TaskQueue />
            </PrivateRoute>
            <PrivateRoute exact path="/kitchen">
              <KitchenSink />
            </PrivateRoute>
            <PrivateRoute exact path="/kitchen/diagram">
              <DiagramTest />
            </PrivateRoute>
            <PrivateRoute exact path="/kitchen/examples">
              <Examples />
            </PrivateRoute>
            <PrivateRoute exact path="/kitchen/gantt">
              <Gantt />
            </PrivateRoute>
          </Switch>
        </div>
      </div>
    </AuthProvider>
  );
}
