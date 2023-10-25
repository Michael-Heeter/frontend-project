document.addEventListener("DOMContentLoaded",function(){

  const pokemon = $.get(`https://pokeapi.co/api/v2/pokemon/`)
  const pokeList = $.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1292`)
  const dataList = document.getElementById(`pokemonList`)
  const obj = {}
  let current;

  const body = document.body;
  body.style.backgroundImage = 'images/wallpaper-pika.jpeg'
  body.style.backgroundColor = 'rgb(100,200,100)'

  
  function pokeball(){
    const tilesContainer = document.createElement("div");
    tilesContainer.classList.add = "pokeball";
    tilesContainer.style.display = "flex";
    tilesContainer.style.flexWrap = "wrap";
    tilesContainer.style.width = "60px";
    tilesContainer.style.height = "60px";
    tilesContainer.style.backgroundColor='white';
    body.appendChild(tilesContainer);
  }
  pokeball()
  


  function search(){
      userInput = document.querySelector("#user-section input")
      let query = userInput.value.trim()
      userInput.value = ""

      $.get(`https://pokeapi.co/api/v2/pokemon-species/${query}`, (data) => {

      console.log(data)
  })

    
      
  }



  const addEventListeners = () => {
      document.querySelector("#submit").addEventListener("click", search)
      document.querySelector("#user-section input").addEventListener("keydown", (event) => {
        if(event.key === "Enter"){
          
       
        if(pokeList !== Object.keys[obj] || ""){
          alert('Pokemon not found in Pokedex')
        } else {
            search()
        } }
      })
    }

    const start = () => {
      addEventListeners()
    }
  start()


  function inputList(){
      let data = document.createElement('option')
      $.get(`https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=1292`, (data) => {
        for(let i = 0; i < data.results.length; i++){
          current = data.results[i].name
          obj[current] = i
          let ball=document.createElement('option')
          ball.value=`${data.results[i].name}`
          
          dataList.appendChild(ball)
        }
        console.log(obj)
  })
  //     // for(let i = 0; i < pokeList.length; i++){
  //     //     data.pokemon['name'][i]
  //     // }
  //     // data.value = pok
  }
  inputList()

  
})