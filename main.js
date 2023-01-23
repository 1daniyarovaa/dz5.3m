// const e = require("express")

// let form = document.querySelector('.form')
// let btnDelete = document.querySelector('.btn-delete')
// let btnCreate = document.querySelector(".submit")

// btnCreate.addEventListener('submit' ,(e) =>{
//     e.preventDefault()
//     fetch('http://localhost:3000/cards',{
//         method: "POST",         
//         headers:{
//             'Content-Type':"application/json"
//         }
//         })
//     }).then((res) =>{
//         e.target[0].value = ''
//         e.target[1].value = '' 
//         e.target[2].value = ''
//     })
//     .catch((err)=> alert(err))


// btnDelete.addEventListener('click',()=>{
//     fetch('http://localhost:3000/cards/1',{
// method:"DELETE"
//     }).then(() =>( alert('dn')))


// })
// // 
// btnCreate.addEventListener('click',()=>{
//     fetch('http://localhost:3000/cards/1',{
// method:"POST"
//     }).then(() =>( alert('n')))


// })

fetch('http://localhost:3000/cards')
.then(res => res.json()).then(res => console.log(res)) 
  
 let btn = document.querySelector('#btn') 
 btn.addEventListener('click',() => { 
     fetch('http://localhost:3000/cards',{ 
         method:"POST", 
         headers: { 
             'Content-Type' : 'application/json' 
         }, 
         body: JSON.stringify( 
             {name: "Rusya" , surname: "Buralkiev" , age : 15} 
         ) 
     }).then(res => alert('Данные успешно созданы' , res)) 
     .catch(err => alert('ошибка при создании' , err )) 
 }) 
  
 const form = document.querySelector('.form') 
 form.addEventListener('submit',(e) => { 
     e.preventDefault() 
  
     fetch('http://localhost:3000/cards' , { 
         method: "POST", 
         headers: { 
             'Content-Type' : 'application/json' 
         }, 
         body: JSON.stringify({ 
             FirstName: e.target[0].value, 
             LastName: e.target[1].value, 
             Age: e.target[2].value, 
         }) 
     }).then((res) => console.log(res)) 
     .catch((err) => console.log(err)) 
 }) 
  
 let btndel = document.querySelector('.btndel') 
 btndel.addEventListener('click' , () => { 
     fetch('http://localhost:3000/cards',{ 
         method: "DELETE" 
     }).then(res => alert("Вы успешно удалили" , res)) 
     .catch(err => alert("Ошибка при удалении" , err))  
 })