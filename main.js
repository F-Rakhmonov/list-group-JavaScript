const form=document.querySelector('#form');
const carname = document.querySelector("#carname");
const model=document.querySelector('#model');
const year=document.querySelector('#year');
const text=document.querySelector('#text');
const lists=document.querySelector('.list-group')

form.addEventListener('submit',myFunc);

function myFunc(e){
  
  e.preventDefault();
  if(carname.value==='' || model.value==='' || year.value===''){
    text.classList.add('bg-danger');
   text.innerHTML='Hamma maydonlar to\'ldirilishi shart';
   text.style.color='white';
   setTimeout(() => {text.remove()}, 3000);


  }else{
    const li = document.createElement('li');
    li.classList.add('list-group-item')
    li.appendChild(document.createTextNode(
      `${carname.value} ${model.value} ${year.value}`
    ));
    lists.appendChild(li);

    carname.value='';
    model.value='';
    year.value='';
  }
}

