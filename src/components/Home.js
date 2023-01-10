import React , {useEffect, useState, useContext} from 'react'
import Notes from './Notes'
import noteContext from "../context/noteContext";
import Notes2 from './Notes2';



const Home = (props) => {
  const {showAlert} = props
  const [email, setemail] = useState({email:"", number1:""})
  const em = async()=>{
  const response = await fetch("http://localhost:5001/api/auth/getuseremail", {
    method: 'POST',
    headers: {
      "auth-token":sessionStorage.getItem('token'),
      // "auth-token": localStorage.getItem('token'),
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({title, description, tag})
  })
  const json = await response.json();
  setemail(json)
  let a=json
  console.log(a);
  //Harry Bhai Method to fetch notes instantly
    // const note =  {
    //     "_id": "6391d8534098b1c133b9f65g",
    //     "user": "6391d39bb6ea954cc189d75d",
    //     "title": title,
    //     "description": description,
    //     "tag": tag,
    //     "date": "1670502483505",
    //     "__v": 0
    //   };   
    // setNote(notes.concat(note))
 //my method to fetch notes instantly
    // getnotes()
}
useEffect(() => {
 em()

}, [])
const context = useContext(noteContext)

const { notes, getnotes, editNote, editorder, block, setblock } = context;




  return (
  (block) ?  <div className='px-4'><div className='mx-4 w-25'><marquee>Welcome User</marquee></div> <span className='mx-4'> {email.email} </span>


  
        {/* <br/>
        {notes.title} */}
        <Notes showAlert={showAlert} />
        {/* showAlert={showAlert} */}
    </div> 
    : <Notes2/>
  )
}

export default Home