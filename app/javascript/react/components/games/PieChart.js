
import * as React from "react";
import { useEffect, useState } from "react"
import { Chart } from "react-google-charts"

const PieChart = (props) => {


  let shooter = 0
  let strategy = 0
  let racing = 0
  let sports = 0
  let social = 0
  let sandbox = 0
  let openWorld = 0
  let survival = 0
  let pvp = 0
  let pve = 0
  let pixel = 0
  let voxel = 0
  let zombie = 0
  let turnBased = 0
  let firstPerson = 0
  let thirdPerson = 0
  let tank = 0
  let space = 0
  let superhero = 0
  let card = 0
  let battleRoyale = 0
  let mmo = 0
  let mmofps = 0
  let mmotps = 0
  let anime = 0
  let fantasy = 0
  let action = 0
  let mmorpg = 0
  let moba = 0
  let fighting = 0

  const genreTitle = props.genre.map((game => {
    if (game.game.genre === 'Shooter') {
      shooter += 1
    }
    if (game.game.genre === 'Fighting') {
      fighting += 1
    }
    if (game.game.genre === 'MMORPG') {
      mmorpg += 1
    }
    if (game.game.genre === 'MOBA') {
      moba += 1
    }
    if (game.game.genre === 'Shooter') {
      shooter += 1
    }
    if (game.game.genre == 'Strategy') {
      strategy += 1
    }
    if (game.game.genre == 'Racing') {
      racing += 1
    }
    if (game.game.genre == 'Sports') {
      sports += 1
    }
    if (game.game.genre == 'Social') {
      social += 1
    }
    if (game.game.genre == 'Sand Box') {
      sandbox += 1
    }
    if (game.game.genre == 'Open World') {
      openWorld += 1
    }
    if (game.game.genre == 'Survival') {
      survival += 1
    }
    if (game.game.genre == 'PVP') {
      pvp += 1
    }
    if (game.game.genre == 'PVE') {
      pve += 1
    }
    if (game.game.genre == 'Pixel') {
      pixel += 1
    }
    if (game.game.genre == 'Voxel') {
      voxel += 1
    }
    if (game.game.genre == 'Zombie') {
      zombie += 1
    }
    if (game.game.genre == 'Turn Based') {
      turnBased += 1
    }
    if (game.game.genre == 'First Person') {
      firstPerson += 1
    }
    if (game.game.genre == 'Third Person') {
      thirdPerson += 1
    }
    if (game.game.genre == 'Tank') {
      tank += 1
    }
    if (game.game.genre == 'Space') {
      space += 1
    }
    if (game.game.genre == 'Superhero') {
      superhero += 1
    }
    if (game.game.genre == 'Card') {
      card += 1
    }
    if (game.game.genre == 'Battle Royale') {
      battleRoyale += 1
    }
    if (game.game.genre == 'MMO') {
      mmo += 1
    }
    if (game.game.genre == 'MMOFPS') {
      mmofps += 1
    }
    if (game.game.genre == 'Anime') {
      anime += 1
    }
    if (game.game.genre == 'Fantacy') {
      fantasy += 1
    }
    if (game.game.genre == 'Action') {
      action += 1
    }
    if (game.game.genre == 'MMORPG') {
      mmorpg += 1
    }
  }))

  console.log(shooter)
  return (
    <div className={'my-pretty-chart-container'}>
      <div>
          <Chart
            width={'500px'}
            background-color= {'red'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Genre', 'Liked'],
              ['Shooter', shooter],
              ['MMORPG', mmorpg],
              ['Strategy', strategy],
              ['MOBA', moba],
              ['Racing', racing],

              ['Sports', sports],
              ['Social', social],
              ['Sand Box', sandbox],
              ['Open World', openWorld],
              ['Survival', survival],

              ['PVP', pvp],
              ['PVE', pve],
              ['Pixel', pixel],
              ['Voxel', voxel],
              ['Zombie', zombie],

              ['Turn Based', turnBased],
              ['First Person', firstPerson],
              ['Thirld Person', thirdPerson],
              ['Tanks', tank],

              ['Space', space],
              ['Super Hero', superhero],
              ['Card', card],
              ['Battle Royale', battleRoyale],

              ['MMO', mmo],
              ['MMOFPS', mmorpg],
              ['MMOTPS', strategy],
              ['Anime', anime],
              ['Fantacy', fantasy],
              

              ['Fighting', fighting],
              ['Action', action],
              ['MMOTPS', mmotps],
              ['MMOFPS', mmofps],
              ['Tanks', tank],
              ['Moba', moba],
            ]}
            options={{
              title: 'Your Game Analytics',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
      </div>
    </div>
  );
}

export default PieChart
