document.addEventListener("DOMContentLoaded",function(){
  let theImg;
  let count = 0;
  const dataList = document.getElementById(`pokemonList`)
  const body = document.body;const obj = {}
  const stat = {}
  let current;
  let labels;

  const pokeList = $.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1292`, data => {
    console.log(data.results)
            for(let i = 0; i < data.results.length; i++){
          current = data.results[i].name
          obj[current] = i
          let ball=document.createElement('option')
          ball.value=`${data.results[i].name}`
         
          dataList.appendChild(ball)
        }

  const aChart = document.createElement('canvas')
  aChart.setAttribute('id','chart1')
  
  const bChart = document.createElement('canvas')
  bChart.setAttribute('id','chart2')

const dataChart = {
  labels: ['hp','attack','defense','special-attack','special-defense','speed'],
  datasets: [{
    label: 'Base Stats',
    data: labels,
    fill: true,
    backgroundColor: 'rgba(255,0,0,0.3)',
    borderColor: 'black',
    borderWidth: 1,
  }]
}



    

  function search(){
      count++
      let userInput = document.querySelector("#user-section input")
      let query = userInput.value.trim()
      userInput.value = ""



      $.get(`https://pokeapi.co/api/v2/pokemon/${query}`, (data) => {
        theImg = (data.sprites[`front_default`])
        let names = {}
        for(let i = 0; i < data.stats.length; i++){
          let temp = data.stats[i]['base_stat']
          let kiy = data.stats[i].stat.name
          names[kiy] = temp

        }
        stat[`${query}`] = names
        console.log(stat)
    })
    setTimeout(pokesprite(query),0)
    pokeball(query)
  }

function pc(){
  let div = document.createElement('div')
  div.setAttribute('id', 'pc')
  div.style.height = '100vh'
  div.style.width = '7vw'
  div.style.backgroundColor = 'blue'
  div.style.position = 'absolute'
  body.appendChild(div)
}

setInterval(function (){
  let move = document.getElementById('pc')
  let windowWidth = window.innerWidth
  let containerWidth = move.offsetWidth
  let leftPosition = (windowWidth - containerWidth)/2;
  move.style.top = '50%'
  move.style.left = leftPosition + 'px';
  move.style.transform = 'translateY(-50%)';
}, 2000);

function compareOne(){
  const container1 = document.createElement('div')
  container1.setAttribute(`id`,`container1`)
  container1.style.width = `40vw`
  container1.style.height = `90vh`
  container1.style.backgroundColor = 'rgba(0,0,0,0.3)'
  container1.style.position = 'absolute'
  container1.style.bottom = `0`
  body.appendChild(container1)

}

function compareTwo(){
  const container2 = document.createElement('div');
  container2.setAttribute(`id`, `container2`)
  container2.style.width = `40vw`
  container2.style.height = `90vh`
  container2.style.backgroundColor = 'rgba(0,0,0,0.3)'
  container2.style.position = 'absolute'
  container2.style.bottom = `0`
  container2.style.right = `0`
  body.appendChild(container2)
}



function pokesprite(pokemons){
    const tilesContainer = document.createElement("img");
    tilesContainer.classList.add(`${pokemons}`)
    console.log(pokemons)
    tilesContainer.setAttribute(`id`, `pokemon ${count}`)
    setTimeout(()=> {
      tilesContainer.src = `${theImg}`
    document.getElementById('pc').prepend(tilesContainer);
    }, 1000)
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
      compareOne()
      compareTwo()
    }
  start()

  function pokeball(pokemons){
    const options = document.createElement('div')
    options.classList.add(`${pokemons}`)
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
    toContainerTwo.textContent = 'Compare in 2 ->'
    document.getElementById(`pokemon #${count}`).prepend(toContainerTwo)
    toContainerTwo.addEventListener('click', (e) => {

    })

    toContainerOne = document.createElement('button')
    toContainerOne.setAttribute('id', `toContainerOne of ${count}`)
    toContainerOne.textContent = 'Compare in <- 1'
    document.getElementById(`pokemon #${count}`).prepend(toContainerOne)


    release.addEventListener('click', (e) => {
      let parent = e.target.parentNode
      let parentClass = parent.classList[0]
      const elements = document.querySelectorAll(`.${parentClass}`)
      elements.forEach(element => {
        element.remove()
      })
      
    })

    toContainerTwo.addEventListener('click', (e) => {
      let parent = e.target.parentNode
      let parentClass = parent.classList[0]

      labels =  [
      stat[parentClass]['hp'],
      stat[parentClass]['attack'],
      stat[parentClass]['defense'],
      stat[parentClass]['special-attack'],
      stat[parentClass]['special-defense'],
      stat[parentClass]['speed']
      ]

      const myChart = new CharacterData(aChart, {
        type: 'bar',
        data: dataChart,
        options: {
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true
            }
          }
        }
      })
      container1.appendChild(myChart)

    })
  }


  
})
})