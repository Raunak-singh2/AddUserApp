import { useState } from "react";
import "./App.css";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
const FIREBASE =
  "https://storeprojectdata-961d9-default-rtdb.europe-west1.firebasedatabase.app/contact.json";
function App() {
 
  const [contacts, setcontacts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchContactHandler = async () => {
    setisLoading(true);
    setError(null);
    try {
      const resoponse = await fetch(FIREBASE);
      if(!resoponse.ok){
        throw new Error('Somthing happend..')
      }
      const result = await resoponse.json();
      const data = result.data.map((cont) => {
        return {
          id: cont.id,
          ContactName: cont.name,
          ContactNum: cont.number,
          avatar: cont.photo,
        };
      });
      setcontacts(data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }finally{
      setisLoading(false);
    }
  };
  const addContactHandler = async(contact) => {
    const payload={
      ContactName: contact.className,
      ContactNum: contact.ContactNum,
      avatar: contact.ContactName + '.svg',
    }
    console.log(payload);
    const save=await fetch(FIREBASE,{
      method:"POST",
      body:JSON.stringify(payload),
      headers:{
        'Content-Type' :'application/json',
      },
    });
    const resut=await save.json();
    console.log(resut)
  };

  let content = <p>No contact avilable!</p>;

  if (contacts.length > 0) {
    content = <ContactList contact={contacts} />;
  }
  if (error) {
    content = <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading.....</p>;
  }

  return (
    <div className="App">
      <section>
        <button>Add Contact</button>
        <button onClick={fetchContactHandler}>Fetch Contact</button>
      </section>
      <section>
        <AddContact onAddContact={addContactHandler} />
      </section>
      <section>{content}</section>
    </div>
  );
}

export default App;
