/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
  const toggleBtn = document.getElementById(headerToggle),
  nav = document.getElementById(navbarId)
  
  // Validate that variables exist
  if(headerToggle && navbarId){
      toggleBtn.addEventListener('click', ()=>{
          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle('show-menu')
          // change icon
          toggleBtn.classList.toggle('bx-x')
      })
  }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
  linkColor.forEach(l => l.classList.remove('active'))
  this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))

//data single page var
const section = document.querySelector('.section')
const tabelBtn = document.querySelector('.dataBtn')


//geting all data 
tabelBtn.addEventListener("click",()=>{
  callTable()
})
// search users
const search = document.querySelector(".header__input")


async function callTable(){
  section.innerHTML = `
  
<h1 class="Ttitle" >HPP-DATABASE</h1>

<table id="customers">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Number</th>
      </tr>
    </thead>

    <tbody class="tBody">

    </tbody>
  </table>
  `
      //main body var
      const tbody = document.querySelector('.tBody')
      const api_url = `js`
      const data = await fetch(api_url)
      const prediction = await data.json()
      //creating users table
      prediction.forEach(e => {

        const tr = document.createElement("tr");
        const th = document.createElement("th");
        const name = document.createElement("td");
        const lastname = document.createElement("td");
        const Pnumber = document.createElement("td");

        tr.className += "element";
        tr.id=e.id

        th.innerText = e.id;
        name.innerText = e.fname;
        lastname.innerText = e.lname;
        Pnumber.innerText = e.number;

        tr.appendChild(th);
        tr.appendChild(name);
        tr.appendChild(lastname);
        tr.appendChild(Pnumber);
        tbody.appendChild(tr)

  
      });
        //membres info FUNCT
         clickMember()
      //search
      search.addEventListener("input",(e)=>{
        const input = e.target.value
        tbody.innerHTML = ` `
        prediction.forEach(user=>{
          if(user.fname.includes(input) || user.lname.includes(input)){
            const tr = document.createElement("tr");
            const th = document.createElement("th");
            const name = document.createElement("td");
            const lastname = document.createElement("td");
            const Pnumber = document.createElement("td");
    
            tr.className += "element";
            tr.id=user.id
    
            th.innerText = user.id;
            name.innerText = user.fname;
            lastname.innerText = user.lname;
            Pnumber.innerText = user.number;
    
            tr.appendChild(th);
            tr.appendChild(name);
            tr.appendChild(lastname);
            tr.appendChild(Pnumber);
            tbody.appendChild(tr)
          }
        })
        //membres info FUNCT
          clickMember()
      })

}


//posting data 
const Sform = document.querySelector('.subform')

Sform.addEventListener('submit' , e =>{
  e.preventDefault()
  const formdata = new FormData(Sform)
  
  fetch('pass',{
    method : 'POST',
    body : formdata
  })

})

//geting members info

function clickMember(){
       //geting member info by click
       const pers = document.querySelectorAll(".element")

       pers.forEach(e => {
         e.addEventListener("click",(e)=>{
           elementId = e.currentTarget.id
           //geting the member info 
           Memberinf(elementId)
         })
 
   
       });
}

async function Memberinf(x){
  const Memberid = x
  const data = await fetch(Memberid)
  const Udata = await data.json()

  section.innerHTML = `
  <div class="user_container">

  <div class="user_info_one">
      <div class="user_card">
          <img src="images/logo.jpg" alt="">
          <h1 contenteditable="true" >${Udata.fname} ${Udata.lname}  </h1>
           <small>STILL IN BETA</small>
      </div>
      <div class="user_card_info">
          <div contenteditable="true" class="user_card_details">
              <i class='bx bx-phone' ></i>
              ${Udata.number}
          </div>
          <div class="user_card_details">
              <i class='bx bx-location-plus' ></i>
              ${Udata.adresse}
          </div>
          <div class="user_card_details">
              <i class='bx bx-user nav__icon' ></i>
              ${Udata.id}
          </div>
      </div>
      <div class="user_card_info note">
          <div class="user_card_details">
              <i class='bx bxs-notepad' ></i>
              Remarque du médecin
          </div>
          <p> <small>1/5/2022</small> :  ${Udata.medcinNote}.</p>
      </div>
  </div> 

  <div class="user_info_two">
      <div class="user_details_two">
          <div class="user_card_details">
              <h5>type de cancer</h5>
              <p>${Udata.cancerType}</p>
          </div>
          <div class="user_card_details">
              <h5>date du diagnostic</h5>
              <p>${Udata.cancerType}</p>
          </div>
          <div class="user_card_details">
              <h5>Lieu de naissance</h5>
              <p>${Udata.DateDiag}</p>
          </div>
          <div class="user_card_details">
              <h5>Date  de naissance</h5>
              <p>${Udata.Dbirthday}</p>
          </div>
          <div class="user_card_details">
              <h5>état civil</h5>
              <p>${Udata.etatCivil}</p>
          </div>
          <div class="user_card_details">
              <h5>état de santé</h5>
              <p>${Udata.Ssante}</p>
          </div>
          <div class="user_card_details">
              <h5>situation financière</h5>
              <p>${Udata.Sfin}</p>
          </div>
          <div class="user_card_details">
              <h5>Emploi</h5>
              <p>${Udata.job}</p>
          </div>
          <div class="user_card_details">
              <h5>poids</h5>
              <p>${Udata.poids}</p>
          </div>
          <div class="user_card_details">
              <h5>membre de la famille</h5>
              <p>${Udata.MdeFam}</p>
          </div>
          <div class="user_card_details">
              <h5>Numéro</h5>
              <p>${Udata.NumMdeFam}</p>
          </div>
      </div>
  </div> 

  <div class="patient_btns">
      <button class="btn back"><i class='bx bx-arrow-back'></i></button>
      <button class="btn delete"><i class='bx bx-message-square-x'></i></button>
      <button class="btn update"><i class='bx bx-edit-alt' ></i></button>
  </div> 
</div
  `
//updating
  const updateBtn = document.querySelector('.update')
  updateBtn.addEventListener("click",()=>{
    console.log(x);
    let url = x
let update  = {
  "id": x,
  "fname": "OOOOOOO",
  "lname": "OOOOOOO",
  "Dbirthday": "1956/05/02",
  "number": "OOOOOOO",
  "Pbirthday": "annaba",
  "adresse": "annaba ouad heb",
  "poids": "98 kg",
  "Ssante": "moyenne",
  "job": "non",
  "cancerType": "sang",
  "DateDiag": "15/8/2015",
  "medcinNote": "null",
  "MdeFam": "toumi reda",
  "NumMdeFam": "05124877",
  "Sfin": "bonne",
  "etatCivil": "marie"

}


fetch(url, {
  method: 'PUT',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(update)
})
  })
}