import { React, useState } from "react";

var q=''
function MyForm() {
  const [name, setName] = useState("");
  let qsearch = ''
  const handleSubmit = (event) => {
    event.preventDefault();
    // <SearchNews qr={name} />
    q=name
    console.log(q)
    // var articles = [];
    // var jsondata = fetch('https://newsapi.org/v2/everything?q=' + name + '&sortBy=publishedAt&apiKey=cda5af4d037e43a8860b350a2ae6439d').then(
    //   function (u) { return u.json(); }
    // ).then(
    //   function (json) {
    //     console.log(json.articles);
    //     articles = json.articles;
    //   }
    // )
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="input-group">
          <div id="search-autocomplete" >
            <input  type="search" placeholder="Search news" id="form1" class="form-control" onChange={(e) => setName(e.target.value)} />
            {/* <label class="form-label" for="form1">Search</label> */}
          </div>
          <button id="search-button" type="submit" class="btn btn-primary">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form>
      {/* <NewsList qr={qsearch} /> */}
      {/* <SearchNews qr={q} /> */}
    </>
  )
}

export default MyForm;