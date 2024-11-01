import React from 'react'
import '../styles/CreateListing.scss'
import Navbar from '../components/Navbar'

const CreateListing = () => {
  return (
    <>
      <Navbar/>
    <div className='create-listing'>
      <h1>Publish Your Place</h1>
      <form>
        <div className='create-listing_step1'></div>
        <h2>Step1: Tell us about your place </h2>
        <hr />
        <h3>Which of these categories best describes your place?</h3>
        <div className='category-list'></div>
      </form>
      </div>
    </>
  )
}

export default CreateListing
