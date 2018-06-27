'use strict';

import React from 'react';
import FeaturedActivityCard from '../client/src/components/landingPage/FeaturedActivityCard';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<FeaturedActivityCard
    image='http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/51/v6/p051v6vn.jpg'
    name='Fishing'
    description='Sun tanning or simply tanning is the process whereby skin color is darkened or tanned. It is most often a result of exposure to ultraviolet (UV) radiation from sunlight or from artificial sources'/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('displays a placeholder image if there is none', () =>{
  const tree = renderer
  .create(<FeaturedActivityCard
    image = ''
    name='Fishing'
    description='Sun tanning or simply tanning is the process whereby skin color is darkened or tanned. It is most often a result of exposure to ultraviolet (UV) radiation from sunlight or from artificial sources'
    />).toJSON();
    expect(tree).toMatchSnapshot();
})
