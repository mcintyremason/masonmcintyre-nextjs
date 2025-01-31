import { Fab, Grid2 } from '@mui/material'
import { useContext } from 'react'
import { GameContext } from '../HomePage'

import styles from './difficultyMenu.module.css'

const MainMenu = () => {
  const { setDifficulty, setGameRunning } = useContext(GameContext)

  const selectMenuOption = (difficulty: number) => {
    setDifficulty(difficulty)
    setGameRunning(true)
  }

  return (
    <Grid2
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      className={styles['difficulty-menu-container']}
    >
      <Fab variant="extended" color="primary" aria-label="add" onClick={() => selectMenuOption(0)}>
        Easy
      </Fab>
      <Fab variant="extended" color="primary" aria-label="add" onClick={() => selectMenuOption(1)}>
        Medium
      </Fab>
      <Fab variant="extended" color="primary" aria-label="add" onClick={() => selectMenuOption(2)}>
        Hard
      </Fab>
    </Grid2>
  )
}

export default MainMenu
