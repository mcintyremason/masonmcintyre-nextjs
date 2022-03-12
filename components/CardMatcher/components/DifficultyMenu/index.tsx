import { Fab, Grid } from '@material-ui/core'
import { useContext } from 'react'
import { GameContext } from '../HomePage'

// import './index.css'

const MainMenu = () => {
  const { setDifficulty, setGameRunning } = useContext(GameContext)

  const selectMenuOption = (difficulty: number) => {
    setDifficulty(difficulty)
    setGameRunning(true)
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      className="difficulty-menu-container"
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
    </Grid>
  )
}

export default MainMenu
