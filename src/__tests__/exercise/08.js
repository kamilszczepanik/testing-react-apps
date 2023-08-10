// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

// 🐨 create a simple function component that uses the useCounter hook
// and then exposes some UI that our test can interact with to test the
// capabilities of this hook
// 💰 here's how to use the hook:
// const {count, increment, decrement} = useCounter()

const Counter = () => {
  const {count, increment, decrement} = useCounter()

  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <span>{count}</span>
    </div>
  )
}

test('exposes the count and increment/decrement functions', async () => {
  render(<Counter />)

  await userEvent.click(screen.getByRole('button', {name: /increment/i}))
  expect(screen.getByText('1')).toBeVisible()

  await userEvent.click(screen.getByRole('button', {name: /decrement/i}))
  expect(screen.getByText('0')).toBeVisible()
})

/* eslint no-unused-vars:0 */
