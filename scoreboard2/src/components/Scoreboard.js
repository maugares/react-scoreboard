import React, { Component } from 'react'
import Player from './Player'

export default class Scoreboard extends Component {
  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          <Player name="Wouter" score={2}></Player>
          <Player name="Mimi" score={5} />
          <Player name="Milan" score={4} />
        </ul>
      </div>
    )
  }
}