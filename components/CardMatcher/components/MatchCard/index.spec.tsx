import { expect } from 'chai'
import { shallow } from 'enzyme'
import * as React from 'react'

import MatchCard from '.'

const cardProps = {
  id: '1',
  value: 'Woody',
  order: Math.floor(Math.random() * 4),
}

const wrapper = shallow(<MatchCard {...cardProps} />)

describe('MatchCard Component', () => {
  it('The MatchCard with a value', () => {
    expect(wrapper.find('.match-card').text()).to.equal(cardProps.value)
  })
})
