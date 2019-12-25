
const form = document.querySelector('#contact-form');
const namein  = document.querySelector('ul.collection');
const phonein=document.querySelector('#c1');
const datein=document.querySelector('#c2');

const nameinput = document.querySelector('#name1');
const phoneinput=document.querySelector('#phoneno');
const dateinput=document.querySelector('#date');


loadEventListeners();


function loadEventListeners() {

  form.addEventListener('submit', clist);
}

// Add Task
function clist(e) {
  if(nameinput.value === '') {
    alert('Enter name');
  }
  if (phoneinput.value === '')
  {
    alert('Enter phone no');
  }
  if(dateinput.value ==='')
  {
    alert('Enter date');
  }


  const li= document.createElement('li');
  const li1= document.createElement('li');
  const li2= document.createElement('li');

  li.className = 'collection-item';
  li1.className = 'collection-item';
  li2.className='collection-item';
  
  li.appendChild(document.createTextNode(nameinput.value));
  li1.appendChild(document.createTextNode(phoneinput.value));
  li2.appendChild(document.createTextNode(dateinput.value));
  
  
  namein.appendChild(li);
  phonein.appendChild(li1);
  datein.appendChild(li2);

 
  nameinput.value = '';
  phoneinput.value='';
  dateinput.value='';

  e.preventDefault();
}









