import React, { useContext} from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';
import { InfoContext } from '../contexts/infoContext';
import Loader from '../components/Loader';

const Pages = () => {

    const { info } = useContext(InfoContext);
    if (!info) {
        return <Loader />;
    }
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/">
                    <Me/>
                </Route>
                <Route path="/projects">
                    <Projects/>
                </Route>
                <Route path="/work">
                    <Work/>
                </Route>
                <Route path="/education">
                    <Education/>
                </Route>
            </Switch>
        </HashRouter>

    );

};

export default Pages;