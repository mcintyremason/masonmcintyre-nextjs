import React, { useContext, useState, useEffect } from 'react'

import { Grid } from '@material-ui/core'

import MatchCard, { MatchCardProps } from '../MatchCard'
import { GameContext } from '../HomePage'
import Win from '../Win'

type GameProps = {
  difficulty: number
  resetCardsDelay: number
  resetGameDelay: number
  winDelay: number
}

const Game = (props: GameProps) => {
  const { cards, gameOver, setCards, setGameOver, setGameRunning } = useContext(
    GameContext
  )
  const { difficulty, resetCardsDelay, resetGameDelay, winDelay } = props
  const [
    selectedCardFirst,
    setSelectedCardFirst,
  ] = useState<MatchCardProps | null>(null)
  const [
    selectedCardSecond,
    setSelectedCardSecond,
  ] = useState<MatchCardProps | null>(null)
  const [matchedCards, setMatchedCards] = useState<Array<String>>([])
  const [resetingCards, setResetingCards] = useState<NodeJS.Timeout | number>(0)

  const shuffleCards = () => {
    const multiplier = difficulty === 0 ? 4 : difficulty === 1 ? 8 : 12

    setCards(
      cards.map((card) => ({
        ...card,
        matched: false,
        order: Math.floor(Math.random() * multiplier),
      }))
    )
  }

  const resetGame = (): boolean => {
    setTimeout(() => {
      shuffleCards()
      setSelectedCardFirst(null)
      setSelectedCardSecond(null)
      setMatchedCards([])
      setGameRunning(false)
      setGameOver(false)
      setResetingCards(0)
    }, resetGameDelay)
    return true
  }

  const resetCards = () => {
    setSelectedCardFirst(null)
    setSelectedCardSecond(null)
    setGameOver(false)
  }

  const autoResetCards = (): void => {
    clearTimeout(resetingCards as number)
    setResetingCards(
      setTimeout(() => {
        if (
          selectedCardFirst &&
          selectedCardSecond &&
          selectedCardFirst.value !== selectedCardSecond.value
        ) {
          resetCards()
        }
      }, resetCardsDelay)
    )
  }

  const checkForWin = () => {
    matchedCards.length === cards.length / 2
      ? setTimeout(() => {
          setSelectedCardFirst(null)
          setSelectedCardSecond(null)
          setGameOver(resetGame())
        }, winDelay)
      : resetCards()
  }

  const checkForMatch = () => {
    if (
      selectedCardFirst &&
      selectedCardFirst.value === selectedCardSecond?.value
    ) {
      // if match add to list of matched cards & check for win
      setMatchedCards([...matchedCards, selectedCardSecond.value])
      return checkForWin()
    } else if (
      selectedCardFirst &&
      selectedCardFirst.value !== selectedCardSecond?.value
    ) {
      // else there's no match & the cards are flipped back over
      autoResetCards()
      return selectedCardSecond
    }
    return null
  }

  const isMatched = (card: MatchCardProps): boolean =>
    matchedCards.includes(card.value)

  const selectMatchCard = ({ card }: { card: MatchCardProps }) => {
    if (selectedCardFirst?.id === card.id) {
      // if first selected card is reselected
      // clear timeout before the cards auto reset
      clearTimeout(resetingCards as number)
      setSelectedCardFirst(selectedCardSecond)
      setSelectedCardSecond(null)
    } else if (selectedCardFirst === null && selectedCardSecond === null) {
      // if no cards are selected
      setSelectedCardFirst(card)
    } else if (selectedCardFirst && selectedCardSecond?.id === card.id) {
      // if first card is selected, and second card is reselected
      clearTimeout(resetingCards as number)
      setSelectedCardSecond(null)
    } else if (selectedCardFirst && selectedCardSecond === null) {
      // if first card is selected, and second card is not selected
      setSelectedCardSecond(card)
    } else if (
      selectedCardFirst &&
      selectedCardSecond &&
      selectedCardFirst.id !== card.id
    ) {
      // both cards are selected and a new first card is selected,
      // clear timeout before the cards auto reset
      clearTimeout(resetingCards as number)
      setSelectedCardFirst(card)
      setSelectedCardSecond(null)
    }
  }

  useEffect(() => {
    checkForMatch()
  }, [selectedCardSecond])

  useEffect(() => {
    checkForWin()
  }, [matchedCards])

  return gameOver ? (
    <Win />
  ) : (
    <div
      className={`${
        difficulty === 0 ? 'easy' : difficulty === 1 ? 'medium' : 'hard'
      }`}
    >
      <Grid container>
        {cards
          .sort((a, b) => a.order - b.order)
          .map((card) => (
            <Grid
              item
              xs={6}
              sm={difficulty === 0 ? 6 : difficulty === 1 ? 3 : 4}
              md={difficulty < 2 ? 3 : 2}
              key={card.id}
            >
              <MatchCard
                {...{
                  ...card,
                  classes: `${
                    difficulty === 0
                      ? 'large'
                      : difficulty === 1
                      ? 'medium'
                      : 'small'
                  }`,
                  selected:
                    selectedCardFirst === card || selectedCardSecond === card,
                  matched: matchedCards.find((x) => x === card.value)
                    ? true
                    : false,
                }}
                onClick={() => !isMatched(card) && selectMatchCard({ card })}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}

export default Game
