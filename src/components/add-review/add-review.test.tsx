import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {card} from '../../test-data';
import AddReview from './add-review';
import NameSpace from '../../reducer/name-space';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import history from '../../history';
import {PageNames, AVATAR_URL} from '../../const.js';
import {noop} from '../../utils';

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
          email: `ivanov@dmail.ru`,
          name: `Ivan`,
          avatarURL: AVATAR_URL,
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
                onSubmitClick={noop}
                onFormChange={noop}
                onRatingChange={noop}
                onReviewChange={noop}
                ratingIsValid={true}
                reviewIsValid={true}
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
