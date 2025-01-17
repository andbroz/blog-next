import { act, fireEvent, render, screen } from '@testing-library/react';
import LandingNav from './LandingNav';

describe('LandingNav', () => {
  const navigationOpenStyle =
    'opacity: 1; transform: translateX(0%) translateZ(0);';
  const navigationCloseStyle =
    'opacity: 0; transform: translateX(-100%) translateZ(0);';
  const bannerOpenStyle = 'transform: translateX(0%) translateZ(0);';
  const bannerCloseStyle = 'transform: translateX(-100%) translateZ(0);';

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should render routes correctly (snapshot)', () => {
    const { container } = render(<LandingNav />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(container).toMatchSnapshot();
  });

  test('should render route with correct structure', () => {
    render(<LandingNav />);

    const nav = screen.getByRole('navigation');
    const icon = screen.getByRole('img');

    expect(nav).toBeInTheDocument();
    expect(icon).toBeInTheDocument();

    const navButton = screen.getByTestId('hamburger-button');

    expect(navButton).toBeInTheDocument();
    expect(navButton).toContainElement(icon);

    const navLinks = screen.getAllByRole('link');

    navLinks.forEach(navLink => expect(navLink).toBeInTheDocument());
    navLinks.forEach(navLink => expect(nav).toContainElement(navLink));
  });

  test('should expanded when navigation button toggled', () => {
    render(<LandingNav />);
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByRole('navigation')).toHaveStyle(navigationCloseStyle);
    expect(screen.getByRole('banner')).toHaveStyle(bannerCloseStyle);

    fireEvent.click(screen.getByTestId('hamburger-button'));
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByRole('navigation')).toHaveStyle(navigationOpenStyle);
    expect(screen.getByRole('banner')).toHaveStyle(bannerOpenStyle);

    fireEvent.keyDown(screen.getByTestId('hamburger-button'), { key: 'Enter' });
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByRole('navigation')).toHaveStyle(navigationCloseStyle);
    expect(screen.getByRole('banner')).toHaveStyle(bannerCloseStyle);
  });

  test('should expanded when navigation icon toggled', () => {
    render(<LandingNav />);
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByRole('navigation')).toHaveStyle(navigationCloseStyle);
    expect(screen.getByRole('banner')).toHaveStyle(bannerCloseStyle);

    fireEvent.click(screen.getByTestId('hamburger-icon'));
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByRole('navigation')).toHaveStyle(navigationOpenStyle);
    expect(screen.getByRole('banner')).toHaveStyle(bannerOpenStyle);

    fireEvent.keyDown(screen.getByTestId('hamburger-icon'), { key: 'Enter' });
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByRole('navigation')).toHaveStyle(navigationCloseStyle);
    expect(screen.getByRole('banner')).toHaveStyle(bannerCloseStyle);
  });
});
