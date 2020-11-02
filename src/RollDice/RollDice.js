import React, { Component } from 'react';
import Die from '../Die/Die';
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two","three", "four" , "five" , "six"],
      };

    constructor(props){
        super(props);
        console.log(this.props.sides)
        this.state = {
            die1 : "one",
            die2 : "two",
            rolling: false
        };
        this.roll = this.roll.bind(this);
    }

    roll(event){
        this.setState({rolling: true});
        console.log("clicked");
        setTimeout( () => {
            const newDie1 = this.props.sides[
                Math.floor(Math.random() * this.props.sides.length)
            ];
            const newDie2 = this.props.sides[
                Math.floor(Math.random() * this.props.sides.length)
            ];
            this.setState({die1: newDie1, die2: newDie2 , rolling: false});
            
        },1000)
        
    }

    render() {
        return(
        <div>
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die dieFace={this.state.die1} rolling={this.state.rolling}/>
                    <Die dieFace={this.state.die2} rolling={this.state.rolling}/>
                </div>
            <button onClick={this.roll} disabled={this.state.rolling}> {this.state.rolling ? 'Rolling' : 'Roll Dice'}</button>
            </div>
        </div>
        );
    }
}
export default RollDice;