import { render, screen } from '@testing-library/react';
import React from 'react';

import IndexPage from 'pages/index';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

describe('Index Page', () => {
  test('render a welcome message', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <IndexPage />
      </QueryClientProvider>,
    );

    const title = screen.getByText(/Hello, all!/i);

    expect(title).toBeInTheDocument;
  });
});
