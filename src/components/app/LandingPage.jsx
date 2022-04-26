import React from 'react'
import { getTerms } from './Utils/Utils'

export default function LandingPage() {

const handleSubmit = async () => {
    let terms = await getTerms();
    console.log(terms)
}

  return (
    <>
    <div>WELCOME IN SUCKER</div>
    <button onClick={handleSubmit}>Click for test</button>
    </>
  )
}
