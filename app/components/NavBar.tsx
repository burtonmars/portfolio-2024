import React from 'react'

const NavBar = () => {
  return (
    <div className='flex w-full justify-between'>
        <p><a href="#skills">Skills</a></p>
        <p><a href='#projects'>Projects</a></p>
        <p><a href="Marshal Burton Resume 2024.pdf" target='_blank' rel="noreferrer"><button>Resume</button></a></p>
        <p><a href="#contact">Contact</a></p>
    </div>
  )
}

export default NavBar