import React, { Component } from 'react';

// Définition de l'interface pour le state
interface CounterState {
  count: number;  // Le count est de type number
}

// Conversion de la classe avec typage du state
class Counter extends Component<{}, CounterState> {
  // Initialisation typée du state
    state: CounterState = {
        count: 0
    };

  // Méthode increment typée comme une fonction fléchée
    increment = (): void => {
        this.setState({ count: this.state.count + 1 });
    };

  // Méthode render avec retour JSX
    render() {
        return (
            <div>
                <p>Compte : {this.state.count}</p>
                <button onClick={this.increment}>Incrément</button>
            </div>
        );
    }
}

export default Counter;