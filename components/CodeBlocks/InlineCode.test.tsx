import { render } from '@testing-library/react';
import InlineCode from './InlineCode';

test('should render correctly (snapshot)', () => {
  const { container } = render(<InlineCode>Inline Code</InlineCode>);

  expect(container).toMatchSnapshot();
});
