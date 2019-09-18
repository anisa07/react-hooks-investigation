import React, { Component } from "react";
import Table from './components/Table';
import WrappedRegistrationForm from './components/Form';
import { TodoList } from './components/Todo';
// import TodoWrapper from './components/Todo';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import './App.css';
import { AppContextProvider } from './utils/context';

class App extends Component {
	render () {
		return (
			<AppContextProvider>
				<div className="main-container">
					<Router>
						<div>
							<ul>
								<li>
									<Link to="/">ToDo</Link>
								</li>
								<li>
									{/*<Link to="/use-state">UseState</Link>*/}
								</li>
								<li>
									<Link to="/custom">Custom</Link>
								</li>
							</ul>

							<hr/>

							<Route exact path="/" component={TodoList}/>
							{/*<Route path="/use-state" component={WrappedRegistrationForm} />*/}
							<Route path="/custom" component={Table}/>
						</div>
					</Router>
				</div>
			</AppContextProvider>
		);
	}
}

export default App;
