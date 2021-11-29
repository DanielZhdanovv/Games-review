import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GamesIndexPage from "./games/GamesIndexPage"
export const App = (props) => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path ="/" component={GamesIndexPage} />
      <Route exact path ="/games" component ={GamesIndexPage} />
    </Switch>
    </BrowserRouter>
  )
}

export default App