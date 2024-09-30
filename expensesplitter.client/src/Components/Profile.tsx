import { Card } from 'antd'
import React from 'react'

const Profile = () => {
    //     const CustomField = ({label, value}:{label:any,value:any}) => (<div>
    //         <label className='text-info' style={{minWidth:180}}>{label}</label>
    //          <span>{value || '-'}</span>
    //  </div>)
    return (
        <div>
            <h2 className='pt-5 text-center'>Profile</h2>
        <div className='border border-dark border-3 w-50 pb-5' style={{marginLeft:'380px', marginTop:'50px'}}>
            <div className='pt-2 d-flex justify-content-evenly' >
                    <div className='pt-5'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVAIL7VyktWAJ5_aZIJZjbV368hOA0AxBbw&usqp=CAU' className='rounded-circle'></img>
                    </div>
                <div className='mt-5'>
                <input placeholder='Name' className=''></input><p className='w-50'></p>
                <input placeholder='Contact'></input><p className='w-50'></p>
                <input placeholder='Email' ></input><p className='w-50'></p>
                <input placeholder='Password' ></input><p className='w-50'></p>
                <input placeholder='Address'></input><p className='w-50'></p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Profile