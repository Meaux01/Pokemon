const React = require('react')
// const pokemon = require('../models/pokemon.js')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

class Index extends React.Component{
    render(){
        const { pokemon } = this.props
        return(
            <div>
                  <h1>Pokemon Index Page</h1>
                  <ul>
                      {pokemon.map((pokemon, i) => {
                          return (
                              <li>
                                  The{' '}
                                  <a href={`/pokemon/${i}`}>
                                      {pokemon}
                                  </a>
                              </li>
                          );
                      })}
                  </ul>
            </div>
        )
    }
}

module.exports = Index