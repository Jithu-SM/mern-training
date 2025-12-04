import React from 'react'
import Anshul from '../assets/img/anshul.jpeg'
import Joel from '../assets/img/joel.jpeg'
import Sharon from '../assets/img/sharon.jpeg'
import Yadhu from '../assets/img/yadhu.jpeg'
import '../styles/Profile.css'

const Profile = (props) => {
    const [name, imag, phone, email] = [props.person.name, props.person.imag, props.person.phone, props.person.email]
  return (
    <div className='main'>
        <div className='profile'>
            <h2 className='name'>{name}</h2>
            <img src={imag} className="profilePic" alt="" />
            <p className='phone'>{phone}</p>
            <p className='email'>{email}</p>
        </div>
        {/* <div>
            <h2>Joel</h2>
            <img src={Joel} className="profilePic" alt="" />
            <p>+919876543210</p>
            <p>joel@yahoo.com</p>
        </div>
            <div>
            <h2>Sharon</h2>
            <img src={Sharon} className="profilePic" alt="" />
            <p>+919876543210</p>
            <p>sharon@yahoo.com</p>
        </div>
            <div>
            <h2>Yadhu</h2>
            <img src={Yadhu} className="profilePic" alt="" />
            <p>+919876543210</p>
            <p>yadhu@yahoo.com</p>
        </div> */}
    </div>
  )
}

export default Profile