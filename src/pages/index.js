import React from "react"
import { Link } from "gatsby"
export default () => {
  return (
    <>
      Hello world!
      <p>
        <Link to="/blog">View Blog</Link>
        <Link to="/account">My account</Link>
      </p>
    </>
  )
}
