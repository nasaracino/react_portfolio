import {Route, Switch} from "react-router-dom";
import OverMij from "./overmij";
import Projecten from "./projecten";
import Cv from "./cv";

export default function Main() {
    return (
        <div>
            <Switch>
                <Route exact path={"/projecten"} component={Projecten}/>
                <Route exact path={"/cv"} component={Cv}/>
                <Route exact path={"/"} component={OverMij}/>
            </Switch>
        </div>
    );
}