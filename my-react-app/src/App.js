import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends, 
    currentScore: 0,
    topScore: 0,
    sameClick: "",


  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // We always use the setState method to update a component's state
  handleIncrement = () => {const startScore = this.state.currentScore + 1; this.setState({currentScore: startScore });

  if (startScore >= this.state.topScore) {this.setState({topScore:startScore});}

  else if (startScore === 10) {this.setState({sameClick: "woot woot"});}

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

      
      
      <Wrapper>
        <Title>Clicky-Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            handleIncrement={this.handleIncrement}
            id={friend.id}
            key={friend.id}
            image={friend.image} 
          />
        ))}
      </Wrapper>
      
    );
  }
}



export default App;
