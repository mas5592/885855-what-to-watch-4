import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MovieNavTabs from './movie-nav-tabs';
import {noop} from '../../utils';

const Settings = {
  currentTab: `overview`
};

it(`Should MovieNavTabs render correctly`, () => {
  const tree = renderer
    .create(<MovieNavTabs
      onTabClick={noop}
      activeTab={Settings.currentTab}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
