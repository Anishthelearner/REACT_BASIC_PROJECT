import { Navbar, Search, ContactsP } from "./components"
import { useEffect, useState, } from "react";
import { collection, getDocs, onSnapshot} from "firebase/firestore";
import {db} from './config/firebase'
import AddandUpdate from "./components/AddandUpdate";
import useDisclose from "./components/Hooks/useDisclose";


function App() {
const [contacts, setContacts] = useState([]);
const {isOpen,onClose,onOpen} = useDisclose(false)

useEffect(()=>{
  const getContacts = async()=>{
    try {
      const contactsRef = collection(db,"contact");
      // const contactsSnapshot =await getDocs(contactsRef);
      onSnapshot(contactsRef,(snapshot)=>{
        const contactList = snapshot.docs.map((items) => {
          return{
           id:items.id,
           ...items.data()
          }
      })  
      setContacts(contactList)
      return contactList;
    })
     
    } catch (error) {
      console.log(error);
      // console.error('error message is:',error);
    }
  }
  getContacts();
},[])


  return (
    <>
    <div className="w-full relative m-auto ">
  <div className=" px-4 m-auto max-w-[370px]">
  <Navbar/>
  <Search onOpen={onOpen}/>
  <div className="mt-2">
  {
  contacts.map((item) => (
    <ContactsP key={item.id} data={item}/>
  ))
}
  </div>
  </div>
  <AddandUpdate  isOpen={isOpen} onClose={onClose}/>

</div>
    </>
  )
}

export default App
