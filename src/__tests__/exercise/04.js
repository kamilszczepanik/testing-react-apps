// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', async () => {
  const handleSubmit = jest.fn()

  render(<Login onSubmit={handleSubmit} />)

  await userEvent.type(screen.getByLabelText(/username/i), 'newUsername123')
  await userEvent.type(screen.getByLabelText(/password/i), 'newPassword!')

  await userEvent.click(screen.getByRole('button', {name: /submit/i}))

  expect(handleSubmit).toBeCalledWith({
    username: 'newUsername123',
    password: 'newPassword!',
  })
})

/*
eslint
  no-unused-vars: "off",
*/
