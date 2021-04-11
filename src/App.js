import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateCard from "./components/CreateCard/CreateCard";
import HeroCard from "./components/HeroCard/HeroCard";
import Header from "./components/Header/Header";
import CreateNewHero from "./components/CreateNewHero/CreateNewHero";

import "./App.css";

function App() {
    return (
        <Router>
            <Header />
            <div className="wrapper">
                <Switch>
                    <Route exact path="/" component={CreateCard} />
                    <Route path="/hero/:id" component={HeroCard} />
                    <Route path="/create" component={CreateNewHero} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
