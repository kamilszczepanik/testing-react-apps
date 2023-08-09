// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
import faker from 'faker'

const buildLoginForm = overrides => {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ...overrides,
  }
}

test('submitting the form calls onSubmit with username and password', async () => {
  const handleSubmit = jest.fn()
  const {username, password} = buildLoginForm({password: 'abc'})

  render(<Login onSubmit={handleSubmit} />)

  await userEvent.type(screen.getByLabelText(/username/i), username)
  await userEvent.type(screen.getByLabelText(/password/i), password)
  await userEvent.click(screen.getByRole('button', {name: /submit/i}))

  expect(handleSubmit).toBeCalledWith({
    username,
    password,
  })
  expect(handleSubmit).toBeCalledTimes(1)
})

/*
eslint
  no-unused-vars: "off",
*/
