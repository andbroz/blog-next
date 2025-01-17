import mockData from '@mocks/data';
import { render, waitFor } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
  const mockTime = mockData.time;
  const mockPosts = mockData.posts;

  test('should render correctly (snapshot)', async () => {
    const { container } = render(
      <Layout banner="layout" buildTime={mockTime} posts={mockPosts}>
        <div>Layout</div>
      </Layout>
    );

    await waitFor(() => expect(container).toMatchSnapshot());
  });
});
