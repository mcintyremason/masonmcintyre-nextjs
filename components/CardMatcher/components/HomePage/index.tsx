import { FormControl, FormControlLabel, FormGroup, Grid2, Switch } from '@mui/material'
import classnames from 'classnames'
import React, { useEffect, useState } from 'react'
import ToyStoryDeck from '../../decks/ToyStoryDeck'
import MainMenu from '../DifficultyMenu'
import Fireworks from '../Fireworks'
import Game from '../Game'
import { MatchCardProps } from '../MatchCard'
import styles from './homePage.module.css'

type GameContextType = {
  cards: Array<MatchCardProps>
  difficulty: number
  gameOver: boolean
  gameRunning: boolean
  isDarkMode: boolean
  setCards: React.Dispatch<React.SetStateAction<MatchCardProps[]>>
  setDifficulty: React.Dispatch<React.SetStateAction<number>>
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>
  setGameRunning: React.Dispatch<React.SetStateAction<boolean>>
}

const RESET_CARDS_DELAY = 1500
const RESET_GAME_DELAY = 8000
const WIN_DELAY = 1000

export const GameContext = React.createContext<GameContextType>({
  cards: [],
  difficulty: 0,
  gameOver: false,
  gameRunning: false,
  isDarkMode: false,
  setCards: () => null,
  setDifficulty: () => null,
  setGameOver: () => null,
  setGameRunning: () => null,
})

const HomePage = () => {
  const [cards, setCards] = useState<MatchCardProps[]>(ToyStoryDeck)
  const [difficulty, setDifficulty] = useState<number>(0)
  const [gameRunning, setGameRunning] = useState<boolean>(false)
  const [gameOver, setGameOver] = useState<boolean>(false)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const cardsFromDifficulty = () => {
    return difficulty === 0
      ? setCards(ToyStoryDeck.filter((card) => card.id <= 8))
      : difficulty === 1
      ? setCards(ToyStoryDeck.filter((card) => card.id <= 16))
      : setCards(ToyStoryDeck.filter((card) => card.id <= 24))
  }

  const selectGameDifficulty = (): any => {
    setDifficulty(difficulty)
    return cardsFromDifficulty()
  }

  const toggleIsDarkMode = () => setIsDarkMode(!isDarkMode)

  useEffect(() => {
    selectGameDifficulty()
  }, [difficulty])

  return (
    <Grid2
      className={classnames([
        styles['home-page-container'],
        isDarkMode ? styles['dark'] : styles['light'],
      ])}
    >
      {gameOver && <Fireworks />}
      <Grid2 container justifyContent="center" alignItems="center">
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="top"
              control={
                <Switch checked={isDarkMode} onChange={toggleIsDarkMode} name="darkModeToggle" />
              }
              label="Dark Mode"
              labelPlacement="start"
            />
          </FormGroup>
        </FormControl>
      </Grid2>
      <Grid2
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={styles['game-container']}
      >
        <GameContext.Provider
          value={{
            cards: cards,
            difficulty: difficulty,
            gameOver: gameOver,
            gameRunning: gameRunning,
            isDarkMode: isDarkMode,
            setCards: setCards,
            setDifficulty: setDifficulty,
            setGameOver: setGameOver,
            setGameRunning: setGameRunning,
          }}
        >
          {gameRunning ? (
            <Game
              difficulty={difficulty}
              resetCardsDelay={RESET_CARDS_DELAY}
              resetGameDelay={RESET_GAME_DELAY}
              winDelay={WIN_DELAY}
            />
          ) : (
            <MainMenu />
          )}
        </GameContext.Provider>
      </Grid2>
    </Grid2>
  )
}
export default HomePage
