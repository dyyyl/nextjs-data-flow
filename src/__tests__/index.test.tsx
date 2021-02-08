import { render, screen } from '@testing-library/react';
import React from 'react';

import IndexPage from 'pages/index';

describe('Index Page', () => {
  test('render a welcome message', () => {
    render(<IndexPage />);

    const title = screen.getByText(/Hello, all!/i);

    expect(title).toBeInTheDocument;
  });
});
