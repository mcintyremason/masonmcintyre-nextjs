import { Card, CardMedia, Grid } from '@material-ui/core'
import classNames from 'classnames'
import * as React from 'react'
// import styles from './index.module.css'
// import cardBackground from '../../assets/images/card-background.jpg'
// import cardBackground from '../../../public/img/card-matcher/card-background.jpg'
import { GameContext } from '../HomePage'

export type MatchCardProps = {
  id: number
  value: string
  order: number
  selected?: boolean
  matched?: boolean
  imgSrc?: string
  classes?: string
  onClick?: any
}

const MatchCard = (props: MatchCardProps) => {
  const { isDarkMode } = React.useContext(GameContext)
  const { classes, imgSrc, matched, onClick, selected } = props

  return (
    <Grid container justifyContent="center" className="match-card-container">
      <Card
        className={classNames(
          'match-card',
          classes,
          isDarkMode ? 'dark' : '',
          selected ? 'selected' : '',
          matched ? 'matched' : '',
        )}
        onClick={onClick}
      >
        {props.selected || props.matched ? (
          <CardMedia className="back" image={imgSrc} />
        ) : (
          <CardMedia className="front" image={'/img/card-matcher/card-background.jpg'} />
        )}
      </Card>
    </Grid>
  )
}

export default MatchCard
