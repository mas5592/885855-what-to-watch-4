import React from "react";
import renderer from "react-test-renderer";
import MovieNavTabs from "./movie-nav-tabs.jsx";

const Settings = {
  currentTab: `overview`
};

it(`Should MovieNavTabs render correctly`, () => {
  const tree = renderer
    .create(<MovieNavTabs
      onLinkClickHandler={() => {}}
      currentTab={Settings.currentTab}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
