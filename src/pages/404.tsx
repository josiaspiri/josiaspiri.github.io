import * as React from 'react'
import { Link, PageProps } from 'gatsby'

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <span>
      Nothing is here. <Link to="/">Go back.</Link>
    </span>
  )
}

export default NotFoundPage
