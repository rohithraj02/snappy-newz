import { React,useState } from "react";
// import ReactDOM from 'react-dom/client';
import NewsList from "./NewsList";

function MyForm() {
  const [name, setName] = useState("");
  let qsearch=''
  const handleSubmit = (event) => {
    event.preventDefault();
    qsearch=name;
    alert(`The name you entered was: ${qsearch}`);
  }
  return (
    <section>
    <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Search news"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      <input type="submit" />
    </form>
    {/* <NewsList qr={qsearch} /> */}
    </section>
  )
}

export default MyForm;