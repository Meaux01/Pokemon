const React = require('react');
const pokemon = require('../models/pokemon');
class Show extends React.Component {
   render () {
      const {pokemon} = this.props
    return (
      <div>
      <h1> Gotta Catch 'Em All </h1>

      <h2>{capitalizeFirstLetter(pokemon.name)}</h2>

      <img src={pokemon.img} alt={capitalizeFirstLetter(pokemon.name)}/>

      </div>
     );
    }
 }
 function capitalizeFirstLetter(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
 }



 module.exports = Show;