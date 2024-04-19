import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import PhoneBookContainer from "../PhoneBookContainer/PhoneBookContainer.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";


function App() {
  return (

    <PhoneBookContainer >
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      </PhoneBookContainer>
  
  );
}

export default App;
