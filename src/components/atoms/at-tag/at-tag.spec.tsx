import { render } from '@testing-library/react';
import { AtTag } from './at-tag';
import '@testing-library/jest-dom';

const testId = 'test-tag';
const TAG_TEXT = 'Tag test';

describe('at-tag', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <AtTag data-testid={testId} title={TAG_TEXT} />,
    );

    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it('renders a text', () => {
    const { getByTestId } = render(
      <AtTag data-testid={testId} title={TAG_TEXT} />,
    );

    expect(getByTestId(testId)).toHaveTextContent(TAG_TEXT);
  });
});
