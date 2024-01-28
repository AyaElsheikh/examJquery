// *************************nav*********************
let lis=document.querySelector('.links ul li');
$(".openNav").click(function(){
    $(".nav-tab").animate({ width:'270px'},50);
   $(".links ul li").addClass('animate__animated animate__backInUp');

   // $("#one").addClass('animate__animated animate__backInUp');
     //$("#two").delay(9000).addClass('animate__animated animate__backInUp');
    // $("#three").addClass('animate__animated animate__backInUp');
  // $("#four").delay(7000).addClass('animate__animated animate__backInUp');
  //  $("#five").addClass('animate__animated animate__backInUp');

 $("#open").addClass('d-none');
 $("#close").removeClass('d-none');
})


$(".closeNav").click(function(){
    closeSideNav();

})

 function closeSideNav(){
    $(".nav-tab").animate({ width:'0px'},50);
    $(".links ul li").removeClass('animate__animated animate__backInUp');
   
     $("#open").removeClass('d-none');
     $("#close").addClass('d-none');
 
 }



// *********************************home*******************************************

// let response;
// let api;
// async function Getmeals(meal) {
//     const options = {
//       method: "GET",
   
//     };
//      api = await fetch(
//       (url =
//         `https://free-to-play-games-database.p.rapidapi.com/api/games?category`),
//       options
//     );
//      response = await api.json();
//     console.log(response);
 
//   }

//   *****************search page*****************
function showSearchInputs(){
   
    $("#searchContainer").removeClass('d-none');
    $("#home").addClass('d-none');
    $("#category").addClass('d-none'); 
    $("#area").addClass('d-none'); 
 $("#ingredient").addClass('d-none'); 
 $("#contacts").addClass('d-none'); 
 searchByName()

}

// searchBar.addEventListener("keyup", function () {
//     currentCity = searchBar.value;
//     console.log(currentCity);
//     getWeatherData(currentCity);
//   });
let mealinput=document.getElementById("mealinput");
function  searchByName(){
    console.log("hghghg");
    currentMeal=mealinput.value;
    getMeal(currentMeal);

  }
  


// *************************categories***********************************

function getCategories(){
    $("#category").removeClass('d-none'); 
    $("#home").addClass('d-none');
    $("#searchContainer").addClass('d-none');
    $("#area").addClass('d-none');  
 $("#ingredient").addClass('d-none'); 
 $("#contacts").addClass('d-none'); 
 Categories();

}


let response;
let api;
async function Categories() {
    const options = {
      method: "GET",
   
    };
     api = await fetch(
      (url =
        `https://www.themealdb.com/api/json/v1/1/categories.php`),
      options
    );
     response = await api.json();
    console.log(response);
    console.log(response.categories);
   
    displaycategories(response.categories);
 
  }
  async function displaycategories(arr) {
    let cartoona=``;
   
    for (let i = 0; i < response.categories.length; i++) {
    cartoona += `<div class="col-md-3">
    <div onclick="getCategoryMeals('beef')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
        <img class="w-100" src="${response.categories[i].strCategoryThumb}" alt="" srcset="">
        <div class="meal-layer position-absolute text-center text-black p-2">
            <h3>${ response.categories[i].strCategory}</h3>
            <p>${ response.categories[i].strCategoryDescription}</p>
        </div>
    </div>
</div>`;
    }
     
     document.querySelector("#cat").innerHTML = cartoona;
  console.log(categories[i].strCategoryThumb);
  console.log(categories[i].strCategory);
  console.log(categories[i].strCategoryDescription);
  
   }


   async function  getCategoryMeals(meal){
    
    const options = {
      method: "GET",
   
    };
     api = await fetch(
      (url =
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`),
      options
    );
     response = await api.json();
  
    console.log(response.meals);
   
    displayMeal(response.meals);
 
  }
  function displayMeal(arr){
    let cartoona=``;
   
    for (let i = 0; i < response.meals.length; i++) {
    cartoona += ` <div class="col-md-3">
    <div onclick="getMealDetails('52874')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
        <img class="w-100" src="${response.meals[i].strMealThumb}" alt="" srcset="">
        <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
            <h3>${ response.meals[i].strMeal}</h3>
        </div>
    </div>`;
    }
     
     document.querySelector("#cat").innerHTML = cartoona;
   
  }
  function getMealDetails(id){
    
    
     let   cartoon= `
        <div class="col-md-4">
                    <img class="w-100 rounded-3" src="https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg" alt="">
                        <h2>Beef and Mustard Pie</h2>
                </div>
                <div class="col-md-8">
                    <h2>Instructions</h2>
                    <p>Preheat the oven to 150C/300F/Gas 2.
    Toss the beef and flour together in a bowl with some salt and black pepper.
    Heat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole.
    Fry until browned on each side, then remove and set aside. Repeat with the remaining oil and beef.
    Return the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper.
    Cover with a lid and place in the oven for two hours.
    Remove from the oven, check the seasoning and set aside to cool. Remove the thyme.
    When the beef is cool and you're ready to assemble the pie, preheat the oven to 200C/400F/Gas 6.
    Transfer the beef to a pie dish, brush the rim with the beaten egg yolks and lay the pastry over the top. Brush the top of the pastry with more beaten egg.
    Trim the pastry so there is just enough excess to crimp the edges, then place in the oven and bake for 30 minutes, or until the pastry is golden-brown and cooked through.
    For the green beans, bring a saucepan of salted water to the boil, add the beans and cook for 4-5 minutes, or until just tender.
    Drain and toss with the butter, then season with black pepper.
    To serve, place a large spoonful of pie onto each plate with some green beans alongside.</p>
                    <h3><span class="fw-bolder">Area : </span>British</h3>
                    <h3><span class="fw-bolder">Category : </span>Beef</h3>
                    <h3>Recipes :</h3>
                    <ul class="list-unstyled d-flex g-3 flex-wrap">
                        <li class="alert alert-info m-2 p-1">1kg Beef</li><li class="alert alert-info m-2 p-1">2 tbs Plain Flour</li><li class="alert alert-info m-2 p-1">2 tbs Rapeseed Oil</li><li class="alert alert-info m-2 p-1">200ml Red Wine</li><li class="alert alert-info m-2 p-1">400ml Beef Stock</li><li class="alert alert-info m-2 p-1">1 finely sliced Onion</li><li class="alert alert-info m-2 p-1">2 chopped Carrots</li><li class="alert alert-info m-2 p-1">3 sprigs Thyme</li><li class="alert alert-info m-2 p-1">2 tbs Mustard</li><li class="alert alert-info m-2 p-1">2 free-range Egg Yolks</li><li class="alert alert-info m-2 p-1">400g Puff Pastry</li><li class="alert alert-info m-2 p-1">300g Green Beans</li><li class="alert alert-info m-2 p-1">25g Butter</li><li class="alert alert-info m-2 p-1">pinch Salt</li><li class="alert alert-info m-2 p-1">pinch Pepper</li>
                    </ul>
    
                    <h3>Tags :</h3>
                    <ul class="list-unstyled d-flex g-3 flex-wrap">
                        
            <li class="alert alert-danger m-2 p-1">Meat</li>
            <li class="alert alert-danger m-2 p-1">Pie</li>
                    </ul>
    
                    <a target="_blank" href="https://www.bbc.co.uk/food/recipes/beef_and_mustard_pie_58002" class="btn btn-success">Source</a>
                    <a target="_blank" href="https://www.youtube.com/watch?v=nMyBC9staMU" class="btn btn-danger">Youtube</a>
                </div> `;


  

    document.querySelector("#cat").innerHTML = cartoon;
    console.log('hhhhhhhhh')
}

// *************************




// *************************Area****************************
function getArea(){
  $("#area").removeClass('d-none'); 
    $("#category").addClass('d-none'); 
    $("#home").addClass('d-none');
    $("#searchContainer").addClass('d-none'); 
 $("#ingredient").addClass('d-none'); 
 $("#contacts").addClass('d-none'); 
areas();
}


async function  areas(){
    
    const options = {
      method: "GET",
   
    };
     api = await fetch(
      (url =
        `https://www.themealdb.com/api/json/v1/1/list.php?a=list`),
      options
    );
     response = await api.json();
  
    console.log(response.meals);
   displayarea(response.meals)
   
 
  } 

  async function displayarea(arr) {
    let cartoona=``;
   
    for (let i = 0; i < response.meals.length; i++) {
    cartoona += `
    <div class="col-md-3">
            <div onclick="getAreaMeals('${response.meals[i].strArea}')" class="rounded-2 text-center cursor-pointer">
                    <i class=" fa-twitter fa-4x"></i><br><br>
                    <h3 class="py-5">${response.meals[i].strArea}</h3>
            </div>
    </div>`;
    }
     
     document.querySelector("#Areameal").innerHTML = cartoona;


  
   }


 

   

// ************************ingredient***********************
function getIngredients(){

 $("#ingredient").removeClass('d-none'); 
    $("#area").addClass('d-none'); 
      $("#category").addClass('d-none'); 
      $("#home").addClass('d-none');
      $("#searchContainer").addClass('d-none'); 
    $("#contacts").addClass('d-none'); 
    Categories();
  }


//   ****************contact********************************************************************

function showContacts(){
    $("#contacts").removeClass('d-none'); 
    $("#ingredient").addClass('d-none'); 
       $("#area").addClass('d-none'); 
         $("#category").addClass('d-none'); 
         $("#home").addClass('d-none');
         $("#searchContainer").addClass('d-none');   
     }

// *****************************contact us*****************************
 

let nameInput=document.getElementById("nameInput").value ;

function inputsValidation(){
    let regex=/\D/;
    if(regex.test(nameInput)){
        console.log("tmam");
    
        // $("#nameAlert").addClass('d-none'); 
        return true;
    }
    else{

//    $("#nameAlert").removeClass('d-none');   
   console.log("nooooo");
   return false;
    }
    
}


let phoneInput=document.getElementById("phoneInput").value ;
function inputsValidation(){
    let reg=/[a-z]/;
    if (reg.test(phoneInput)){
        console.log('ttttttttttttttttttt');
        
    }
    else{
        console.log('ffffffffffff');  
    }
    
}
// **************************************************************