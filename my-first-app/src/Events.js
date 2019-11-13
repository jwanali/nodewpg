import React, { Component } from 'react';
import {fragmentStyle} from './App1.js';

class Events extends Component {
    state = {
      social: [],
      srts: [],
      music: [],
      sports: [],
      education: [],
      movies: [],
      showContent : false, 
      clickButton:"",
    }
    
    componentDidMount(){
        const apiUrl = 'https://ghibliapi.herokuapp.com/films'
        fetch(apiUrl)
        .then(answer => answer.json())
        .then(answer => {
            const result = answer;
            this.setState({social: result,
            })
        })
        const apiUrl1 = 'https://swapi.co/api/films/'
        fetch(apiUrl1)
        .then(answer => answer.json())
        .then(answer => {
            const result = answer.results;
            this.setState({movies: result,
            })
        })
    }
    onClickHandler = event=> {
        
        const {className} = event.target;
        console.log('eee',className)
        this.setState(prevState => ({showContent: !prevState.showContent}));
        this.setState(() => ({clickButton:className}))
    }
    render() {
        const {social,movies} = this.state
        //console.log(social)
        const result = social.map((film,index) => {
            return(<div>
                <ul className = "eventName" name= "name" style = {{fontWeight:"bold"}}>Name{index}
                <li className ="eventTitle"name= "name"><span style = {{fontWeight:"bold"}}>title: </span>{film.title}</li>
                <li className ="eventDate"name= "name"><span style = {{fontWeight:"bold"}}>description : </span>{film.description}</li>
                <li className ="eventSummery"name= "name"><span style = {{fontWeight:"bold"}}>release_date : </span> {film.release_date}</li>
                <li className = "eventAddress"name= "name"><span style = {{fontWeight:"bold"}}>producer: </span>{film.producer} </li>
                <li className = "eventAddress"name= "name"> <span style = {{fontWeight:"bold"}}>director:  </span>{film.director} </li>
                <li className = "eventAddress"name= "name"> <span style = {{fontWeight:"bold"}}>rt_score:  </span>{film.rt_score} </li>
                </ul>
                <hr />
               
            </div>
            )  
        })
        const result1 = movies.map((film,index) => {
            return(<div>
                <ul className = "eventName" name= "name" style = {{fontWeight:"bold"}}>Name{index}
                <li className ="eventTitle"name= "name"><span style = {{fontWeight:"bold"}}>title: </span>{film.title}</li>
                <li className ="eventDate"name= "name"><span style = {{fontWeight:"bold"}}>description : </span>{film.description}</li>
                <li className ="eventSummery"name= "name"><span style = {{fontWeight:"bold"}}>release_date : </span> {film.release_date}</li>
                <li className = "eventAddress"name= "name"><span style = {{fontWeight:"bold"}}>producer: </span>{film.producer} </li>
                <li className = "eventAddress"name= "name"> <span style = {{fontWeight:"bold"}}>director:  </span>{film.director} </li>
                <li className = "eventAddress"name= "name"> <span style = {{fontWeight:"bold"}}>rt_score:  </span>{film.rt_score} </li>
                </ul>
                <hr />
               
            </div>
            )  
        })
        return (
            <div>
            
            <div className = "eventsButton">
                <span><button onClick = {this.onClickHandler} className= "social">Social</button></span>
                <span><button onClick = {this.onClickHandler}classNamee= "arts">Arts</button></span>
                <span><button onClick = {this.onClickHandler}className= "music">Music</button></span>
                <span><button onClick = {this.onClickHandler}className= "sports">Sports</button></span>
                <span><button onClick = {this.onClickHandler}className= "education">Education</button></span>
                <span><button onClick = {this.onClickHandler}className= "movies">movies</button></span>
                <div>
                    {this.state.showContent
                    ?<div>{this.state.clickButton ==="movies"?result:result1}</div>
                :null}
                </div>
            </div>
            </div>
        )
    }
}
export default Events;