import React from 'react';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            name: "dummy",
            location: "dummy",
        };
    }

    async componentDidMount (){
        const data = await fetch("https://api.github.com/users/atul-me");
        const json = await data.json();

        this.setState(json);
        console.log(json);
    }

    componentDidUpdate(){
        console.log("update");
    };
    componentWillUnmount(){
        console.log("unmount");
    }
    render(){
        const {name, bio, avatar_url} = this.state;
        return(
        <div className="container">
            <img src={avatar_url} />
            <h1>{name}</h1>
            <h2>{bio}</h2>
        </div>
        )
    }
}

export default Card;