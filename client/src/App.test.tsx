import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders welcome heading', () => {
  render(<App />)
  const heading = screen.getByText((content, element) => {
    return element?.tagName.toLowerCase() === 'h1' && content.includes('Welcome to the Vite + React + TypeScript App')
  })
  expect(heading).toBeInTheDocument()
})