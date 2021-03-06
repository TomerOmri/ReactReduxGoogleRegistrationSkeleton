import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurevyNew = () => <h2>SurevyNew</h2>
const Landing = () => <h2>Landing</h2>


const App = () => {
    return (
        <div>
                <BrowserRouter>
                    <div>
                    <Route exact={true} path="/" component={Landing} />
                    <Route exact={true} path="/dashboard" component={Dashboard} />
                    </div>
                </BrowserRouter>
        </div>
    );
};


export default App;