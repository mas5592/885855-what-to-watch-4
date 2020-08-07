import React from 'react';
import renderer from 'react-test-renderer';
import {card} from '../../utils/test-data.js';
import AddReview from './add-review';
import NameSpace from '../../reducer/name-space';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import history from '../../history.js';
import {PageNames, AVATAR_URL} from '../../const.js';

const mockStore = configureStore([]);

describe(`AddReview`, () => {
  it(`Should render correctly`, () => {
    const store = mockStore({
      [NameSpace.STATE]: {
        currentPage: PageNames.MAIN,
        activeFilm: card,
      },
      [NameSpace.USER]: {
        userInfo: {
          id: 1,
          email: `ivan@dmail.ru`,
          name: `Ivan`,
          avatarUrl: AVATAR_URL,
        }
      },
    });

    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <AddReview
                activeFilm={card}
                isReviewSending={false}
                isDispatchError={false}
                onSubmitClick={() => {}}
                onFormChange={() => {}}
                onRatingChange={() => {}}
                onReviewChange={() => {}}
                isSubmitDisabled={false}
              />
            </Provider>
          </Router>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
