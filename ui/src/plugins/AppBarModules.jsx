import { useAuth } from '../AuthContext'
import NavLink from "../components/NavLink";
import { Button } from "@material-ui/core";

export default function AppBarModules({ classes }) {
  const { currentUser, logOut } = useAuth();

  return (
    currentUser ?  <>
                      <Button component={NavLink} path="/">
                        Executions
                      </Button>
                      <Button component={NavLink} path="/workflowDef">
                        Definitions
                      </Button>
                      <Button component={NavLink} path="/taskQueue">
                        Task Queues
                      </Button>

                      <div className={classes.toolbarRight}>
                        {currentUser.displayName}&nbsp;
                        <Button onClick={e => logOut(e)} color="primary" variant="outlined">
                            Log out
                        </Button>
                      </div>
                  </> : ""
  );
}
