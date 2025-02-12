import React from 'react';

// Définition d'une interface pour les props
interface GreetingProps {
    name: string; // La prop 'name' est de type string
}

// Conversion du composant avec typage
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Bonjour, {name}!</div>;
};

export default Greeting;