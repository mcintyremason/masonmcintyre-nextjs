import { Card, CardMedia, Grid } from '@material-ui/core'
import classNames from 'classnames'
import * as React from 'react'
import styles from './matchCard.module.css'
// import cardBackground from '../../assets/images/card-background.jpg'
// import cardBackground from '../../../public/img/card-matcher/card-background.jpg'
import { GameContext } from '../HomePage'

export type MatchCardProps = {
  id: number
  value: string
  order: number
  difficulty?: number
  selected?: boolean
  matched?: boolean
  imgSrc?: string
  onClick?: any
}

const MatchCard = (props: MatchCardProps) => {
  const { isDarkMode } = React.useContext(GameContext)
  const { difficulty, imgSrc, matched, onClick, selected } = props

  return (
    <Grid container justifyContent="center" className={styles['match-card-container']}>
      <Card
        className={classNames(
          styles['match-card'],
          styles[`${difficulty === 0 ? 'large' : difficulty === 1 ? 'medium' : 'small'}`],
          isDarkMode ? styles['dark'] : '',
          selected ? styles['selected'] : '',
          matched ? styles['matched'] : '',
        )}
        onClick={onClick}
      >
        {props.selected || props.matched ? (
          <CardMedia className={styles['back']} image={imgSrc} />
        ) : (
          <CardMedia className={styles['front']} image={'/img/card-matcher/card-background.jpg'} />
        )}
      </Card>
    </Grid>
  )
}

export default MatchCard
