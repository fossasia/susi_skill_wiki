import React from 'react';
import CodeView from '../../../../components/SkillCreator/SkillViews/CodeView';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
const mockStore = configureMockStore();
const store = mockStore({});

describe('<CodeView />', () => {
  it('render CodeView without crashing', () => {
    shallow(
      <Provider store={store}>
        <CodeView />
      </Provider>,
    );
  });
});
