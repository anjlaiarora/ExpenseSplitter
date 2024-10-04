import { Card } from 'antd'
import React from 'react'
import UserContext from './UserContext'

const Profile = () => {
    const {user} = React.useContext<any>(UserContext)
    console.log(user)
    const CustomField = ({label, value}:{label:any,value:any}) => (<div>
        <label className='text-info' style={{minWidth:150, textAlign:'center'}}>{label}</label>
         <span>{value || '-'}</span>
 </div>)
//  const address = (user?.address ? user?.address : '') + (user?.city ? ' , ' + user?.city : '') + 
//  (user?.state ? ' , ' + user?.state : '') + (user?.pincode ?'  ' + user?.pincode : '')
return (
 <div>
     <div className='ps-5 pt-2 align-content-center' style={{fontFamily:'cursive'}}>
       <h2 className='p-2 align-content-center'>Profile</h2>
     <div style={{width:50, height:100}} >
     <img style={{borderRadius:50, width:80,height:80, backgroundColor:'grey'}}></img>
         </div>
        <CustomField label='Name' value={user?.name}></CustomField><p style={{width:'50%'}}><hr /></p>
        {/* <CustomField label='Contact' value={user?.contact}></CustomField><p style={{width:'50%'}}><hr /></p> */}
        <CustomField label='Email' value={user?.email}></CustomField><p style={{width:'50%'}}><hr /></p>
        <CustomField label='Password' value={user?.password}></CustomField><p style={{width:'50%'}}><hr /></p>
       {/* <CustomField label='Address' value={address}></CustomField><p style={{width:'50%'}}><hr /></p> */}
     </div>
</div>
    )
}

export default Profile