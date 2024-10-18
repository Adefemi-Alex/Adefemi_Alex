import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
    const error = useRouteError();
  return (
    <div>
      404 Page Not Found.
      <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default Error
