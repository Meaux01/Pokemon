const React = require('react');
const pokemon = require('../models/pokemon');


class Index extends React.Component{
    render() {

        return(
            <div>
                <h1>Pokemon</h1>
                <ul>
                   {pokemon.map((pokemon, idx) => (
                     <li><a href={`pokemon/${idx}`}>{capitalizeFirstLetter(pokemon.name)}</a>{" "}<img src={pokemon.img} /></li>
                   ))} 
                </ul>
            </div>
        )
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
module.exports = Index