document.addEventListener("DOMContentLoaded",function(){

  const pokeList = $.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1292`)
  const dataList = document.getElementById(`pokemonList`)
  const obj = {}
  const objPoke = {}
  let current;
  let theImg;
  let count = 0;

  const body = document.body;

  function search(){
      count++
      let userInput = document.querySelector("#user-section input")
      let query = userInput.value.trim()
      userInput.value = ""


      $.get(`https://pokeapi.co/api/v2/pokemon-species/${query}`, (data) => {
        console.log(data)
      
    })
      $.get(`https://pokeapi.co/api/v2/pokemon/${query}`, (data) => {
        theImg = (data.sprites[`front_default`])
        console.log(theImg)
      // theImg = data
    })
    setTimeout(pokesprite,0)
    pokeball()
  }

function pc(){
  let div = document.createElement('div')
  div.setAttribute('id', 'pc')
  div.style.height = '500px'
  div.style.width = '100px'
  body.appendChild(div)
}

function pokesprite(){
    const tilesContainer = document.createElement("img");
    tilesContainer.classList.add(`b${count}`)
    tilesContainer.setAttribute(`id`, `pokemon ${count}`)
    setTimeout(()=> {
      tilesContainer.src = `${theImg}`
    document.getElementById('pc').prepend(tilesContainer);
    }, 500)
  }

  const addEventListeners = () => {
      document.querySelector("#submit").addEventListener("click", search)
      document.querySelector("#user-section input").addEventListener("keydown", (event) => {
        if(event.key === "Enter"){
          
       
        if(pokeList !== Object.keys[obj]){
          alert('Pokemon not found in Pokedex')
        } else {
          search();
        } }
      })
    }

    const start = () => {
      addEventListeners()
      pc()
    }
  start()

  function pokeball(){
    const options = document.createElement('div')
    options.classList.add(`b${count}`)
    options.setAttribute('id', `pokemon #${count}`)
    options.style.width = '80px'
    options.style.height = ''
    options.style.backgroundColor = 'rgba(0,0,0,0.3)'
    document.getElementById('pc').prepend(options)
    setTimeout(buttons, 800)
  }

  function buttons(){
    release = document.createElement('button')
    release.setAttribute('id', `release of ${count}`)
    release.textContent = 'Release'
    document.getElementById(`pokemon #${count}`).prepend(release)
    
    toContainerTwo = document.createElement('button')
    toContainerTwo.setAttribute('id', `toContainerTwo of ${count}`)
    toContainerTwo.textContent = 'Compare in 2'
    document.getElementById(`pokemon #${count}`).prepend(toContainerTwo)

    toContainerOne = document.createElement('button')
    toContainerOne.setAttribute('id', `toContainerOne of ${count}`)
    toContainerOne.textContent = 'Compare in 1'
    document.getElementById(`pokemon #${count}`).prepend(toContainerOne)
    release.addEventListener('click', (e) => {
      let parent = e.target.parentNode
      let parentClass = parent.classList[0]
      const elements = document.querySelectorAll(`.${parentClass}`)
      elements.forEach(element => {
        element.remove()
      })
      
    })
  }

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
  }
  inputList()

  
})