import React,{Component}  from "react";
import { CardList } from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from './components/scroll';
import ErrorBoundary from './components/ErrorBoundary';
import './containers/App.css';


class App extends Component {
    constructor(){
        super()
        this.state={
            robots: [],
            searchField: ''
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
           .then(Response => Response.json())
           .then(users => this.setState({robots:users}));
    }

    onSearchChange= (event) => {
        this.setState({searchField: event.target.value})
    }

    render(){
        const{robots,searchField}=this.state;
        const filterRobots=robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if(!robots.length){
            return <h1 className="tc center">Loading</h1>
        }else{
            return(
                <div className="tc">   
                    <h1 className='f2'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                           <CardList robots={filterRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
};

export default App;