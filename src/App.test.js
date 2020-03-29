import React from 'react';
import App from './App';
import {fireEvent, render, wait} from '@testing-library/react-native';

test('examples of some things', async () => {
  const {getByTestId, getByText, queryByTestId, baseElement} = render(<App />);
  const famousWomanInHistory = 'Ada Lovelace';

  const input = getByTestId('input');
  fireEvent.changeText(input, famousWomanInHistory);

  const button = getByText('Print Username');
  fireEvent.press(button);

  await wait(() => expect(queryByTestId('printed-username')).toBeTruthy());

  expect(getByTestId('printed-username').props.children).toBe(
    famousWomanInHistory,
  );
  expect(baseElement).toMatchSnapshot();
});
