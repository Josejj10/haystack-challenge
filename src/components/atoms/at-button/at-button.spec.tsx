import { render } from '@testing-library/react';
import { AtButton } from './at-button';
import '@testing-library/jest-dom';

const BUTTON_TEXT = 'Button test';

describe('at-button', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<AtButton text={BUTTON_TEXT} />);

    expect(getByRole('button'));
  });

  it('renders a text', () => {
    const { getByRole } = render(<AtButton text={BUTTON_TEXT} />);

    expect(getByRole('button')).toHaveTextContent(BUTTON_TEXT);
  });
});
