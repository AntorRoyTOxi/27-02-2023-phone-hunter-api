 const dataLoad=async()=>{ 
     const res=await fetch('https://openapi.programming-hero.com/api/phones?search=iphone'); 
      const data= await res.json(); 
       const phones=data.data; 
        // console.log(phones);   
         displayPhone(phones);
 };  

  const displayPhone=phones=>{ 
    //  console.log(phones); 
    //   for(const phone of phones){ 
    //      console.log(phone);
    //   };  
     const phoneContainer=document.getElementById('phone-container')
     phones.forEach(phone => { 
         console.log(phone);  

         const phoneCart=document.createElement('div'); 
          phoneCart.classlist='card w-96 bg-base-100 shadow-xl'; 
          phoneCart.innerHTML=`
          <figure class="px-10 pt-10">
          <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
          `;  

          phoneContainer.appendChild(phoneCart);
        
     });
  }
  
  dataLoad();