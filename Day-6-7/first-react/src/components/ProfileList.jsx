import React from 'react'
import Profile from './Profile.jsx'
import { contacts } from '../data/contacts.js'
import '../styles/Profile.css'

const ProfileList = () => {
  return (
    <div className='profile-card'>
        {
        contacts.map((item)=>(
                <Profile key={item.id} person={item} />
            ))}
    </div>
  )
}

export default ProfileList