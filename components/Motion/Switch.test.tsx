import { render } from '@testing-library/react';
import Switch from './Switch';

describe('Switch', () => {
  test('should render correctly (snapshot)', () => {
    const { container } = render(<Switch />);

    expect(container).toMatchSnapshot();
  });
});
