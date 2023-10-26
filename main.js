let abilities = {};
let description;
document.addEventListener("DOMContentLoaded",function(){
  let theImg;
  let count = 0;
  const dataList = document.getElementById(`pokemonList`)
  const body = document.body;const obj = {}
  const stat = {}
  let current;


  let header = document.getElementById('header')
  header.style.textAlign = 'center'
  header.style.textShadow = 'black 5px 5px'
  header.style.fontSize = 20

  let userSection = document.getElementById('user-section')
  userSection.style.textAlign = 'center'
  userSection.style.textShadow = 'black 4px 4px'

  const pokeList = $.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1292`, data => {
            for(let i = 0; i < data.results.length; i++){
          current = data.results[i].name
          obj[current] = i
          let ball=document.createElement('option')
          ball.value=`${data.results[i].name}`
         
          dataList.appendChild(ball)
        }



const options = {
  indexAxis: 'y',
  scales: {
    x: {
      ticks:{
        color: 'black',
        family: 'Helvetica',
        size: 10,
        style: 'italic',
        weight: 'bold'
      },
      beginAtZero: true
    },
    y:{
      ticks:{
        color: 'black',
        family: 'Helvetica',
        size: 12,
        style: 'italic',
        weight: 'bold'
      }
    }
  },
  plugins:{
    legend:{
      labels:{
        font:{
          color: 'black',
          family: 'Helvetica',
          size: 18,
          style: 'italic',
          weight: 'bold'
        }
      }
    }
  }
};
    

  function search(){
      count++
      let userInput = document.querySelector("#user-section input")
      let query = userInput.value.trim()
      userInput.value = ""



      $.get(`https://pokeapi.co/api/v2/pokemon/${query}/`, (data) => {
        theImg = (data.sprites[`front_default`])
        let names = {}
        for(let i = 0; i < data.stats.length; i++){
          let temp = data.stats[i]['base_stat']
          let kiy = data.stats[i].stat.name
          names[kiy] = temp

        }
        let pass = data['abilities']
        for(let j = 0; j < pass.length; j++){
          abilities[`${query}${j}`] = data['abilities'][j]['ability'].name

        }
        
        stat[`${query}`] = names
        
    })
    setTimeout(pokesprite(query),0)
    pokeball(query)
  }

function pc(){
  let div = document.createElement('div')
  div.setAttribute('id', 'pc')
  div.classList.add('carousel')
  div.style.height = '85vh'
  div.style.width = '7vw'
  div.style.position = 'absolute'
  body.appendChild(div)
}

setInterval(function (){
  let move = document.getElementById('pc')
  let windowWidth = window.innerWidth
  let containerWidth = move.offsetWidth
  let leftPosition = (windowWidth - containerWidth)/2;
  move.style.top = '57vh'
  move.style.left = leftPosition + 'px';
  move.style.transform = 'translateY(-50%)';
}, 1000);

function compareOne(){
  const container1 = document.createElement('div')
  container1.setAttribute(`id`,`container1`)
  container1.style.width = `35vw`
  container1.style.height = `90vh`
  container1.style.position = 'absolute'
  container1.style.bottom = `0`
  body.appendChild(container1)

  const container3 = document.createElement('div')
  container3.setAttribute('id', 'container3')
  container3.style.width = '35vw'
  container3.style.height = '55vh'
  container3.style.position = 'absolute'
  container3.style.bottom = '0'
  container3.style.left = '0'
  body.appendChild(container3)

  const div1 = document.createElement('div')
  div1.setAttribute('id','div1')
  container3.appendChild(div1)

  const div3 = document.createElement('div')
  div3.setAttribute('id','div3')
  container3.appendChild(div3)

  const whitewall2 = document.createElement('div')
  whitewall2.setAttribute('id','whitewall2')
  body.prepend(whitewall2)
}

function compareTwo(){
  const container2 = document.createElement('div');
  container2.setAttribute(`id`, `container2`)
  container2.style.width = `35vw`
  container2.style.height = `90vh`
  container2.style.position = 'absolute'
  container2.style.bottom = `0`
  container2.style.right = `0`
  body.appendChild(container2)

  const container4 = document.createElement('div')
  container4.setAttribute('id', 'container4')
  container4.style.width = '35vw'
  container4.style.height = '55vh'
  container4.style.position = 'absolute'
  container4.style.bottom = '0'
  container4.style.right = '0'
  body.appendChild(container4)

  const div2 = document.createElement('div')
  div2.setAttribute('id','div2')
  container4.appendChild(div2)

  const div4 = document.createElement('div')
  div4.setAttribute('id','div4')
  container4.appendChild(div4)

  const whitewall = document.createElement('div')
  whitewall.setAttribute('id','whitewall')
  body.prepend(whitewall)
}




function pokesprite(pokemons){
    const tilesContainer = document.createElement("img");
    tilesContainer.classList.add(`${pokemons}`)
    tilesContainer.setAttribute(`id`, `pokemon ${pokemons}`)
    setTimeout(()=> {
      tilesContainer.src = `${theImg}`
    document.getElementById('pc').prepend(tilesContainer);
    }, 1200)
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
    release.classList.add('release')
    release.textContent = 'Release'
    release.style.borderRadius = '8px'
    release.style.display = 'block'
    release.style.margin = 'auto'
    document.getElementById(`pokemon #${count}`).prepend(release)

    toContainerTwo = document.createElement('button')
    toContainerTwo.setAttribute('id', `toContainerTwo of ${count}`)
    toContainerTwo.classList.add('toContainerTwo')
    toContainerTwo.textContent = 'Compare in 2 ->'
    toContainerTwo.style.borderRadius = '8px'
    toContainerTwo.style.display = 'block'
    toContainerTwo.style.margin = 'auto'
    document.getElementById(`pokemon #${count}`).prepend(toContainerTwo)


    toContainerOne = document.createElement('button')
    toContainerOne.setAttribute('id', `toContainerOne of ${count}`)
    toContainerOne.classList.add('toContainerOne')
    toContainerOne.textContent = 'Compare in <- 1'
    toContainerOne.style.borderRadius = '8px'
    toContainerOne.style.display = 'block'
    toContainerOne.style.margin = 'auto'
    toContainerOne.style.fontFamily = 'Georgia, sans-serif'
    document.getElementById(`pokemon #${count}`).prepend(toContainerOne)


    release.addEventListener('click', (e) => {
      let parent = e.target.parentNode
      let parentClass = parent.classList[0]
      const elements = document.querySelectorAll(`.${parentClass}`)
      elements.forEach(element => {
        element.remove()
      })
      
    })
    toContainerOne.addEventListener('click', (e) => {
      let chart1 = document.createElement('canvas')
      chart1.setAttribute('id','chart1')
      let parent = e.target.parentNode
      let parentClass = parent.classList[0]

      $.get(`https://pokeapi.co/api/v2/pokemon-species/${parentClass}`, (data) => {
        let description = (data['flavor_text_entries'][0]['flavor_text'])
        console.log(description)

      let theLable =  [
      stat[parentClass]['hp'],
      stat[parentClass]['attack'],
      stat[parentClass]['defense'],
      stat[parentClass]['special-attack'],
      stat[parentClass]['special-defense'],
      stat[parentClass]['speed']
      ]


      const myChart = new Chart(chart1, {
        type: 'bar',
        data: {
          labels: [`HP:  ${theLable[0]}`, `attack:  ${theLable[1]}`, `defense:  ${theLable[2]}`, `special-attack:  ${theLable[3]}`, `special-defense:  ${theLable[4]}`, `speed:  ${theLable[5]}`],
          datasets: [{
            label: parentClass,
            data: theLable,
            fill: true,
            backgroundColor: ['rgba(255,0,0,0.7)','rgba(255,165,0,0.7)','rgba(255,255,0,0.7)','rgba(0,0,255,0.7)','rgba(0,255,0,0.7)','rgba(128,0,128,0.7)'],
            borderColor: 'black',
            borderWidth: 2,
          }]
        },
        options: options
      })

      container1 = document.getElementById('container1')
      if(container1.childElementCount === 1){
        container1.removeChild(container1.firstChild)
      }

      const div1 = document.getElementById('div1')
      div1.style.backgroundColor = 'rgba(255,255,255,0.6)'
      let text1 = abilities[`${parentClass}0`]
      let text2 = abilities[`${parentClass}1`]
      div1.style.textAlign = 'center'
      div1.style.fontFamily = 'sans-serif'
      div1.style.fontSize = 20
      div1.textContent = ''
      div1.textContent = `Abilities: ${text1}, ${text2}`
      container1.appendChild(chart1)

      const div3 = document.getElementById('div3')
      div3.style.backgroundColor = `rgba(255,255,255,0.6)`
      div3.style.textAlign = 'center'
      div3.style.fontSize = 20
      div3.textContent = `Description:\n${description}`

      const whitewall2 = document.getElementById('whitewall2')
      whitewall2.style.backgroundColor = 'rgba(255,255,255,0.6)'
      whitewall2.style.top = `10vh`
      whitewall2.style.left = '0'
      whitewall2.style.width = `35vw`
      whitewall2.style.height = `35vh`
      whitewall2.style.position = 'absolute'
    })

    })

    toContainerTwo.addEventListener('click', (e) => {
      let chart2 = document.createElement('canvas')
      chart2.setAttribute('id','chart2')
      let parent = e.target.parentNode
      let parentClass = parent.classList[0]

      $.get(`https://pokeapi.co/api/v2/pokemon-species/${parentClass}`, (data) => {
        let description = (data['flavor_text_entries'][0]['flavor_text'])
        console.log(description)
     

      let theLable =  [
      stat[parentClass]['hp'],
      stat[parentClass]['attack'],
      stat[parentClass]['defense'],
      stat[parentClass]['special-attack'],
      stat[parentClass]['special-defense'],
      stat[parentClass]['speed']
      ]


      const myChart = new Chart(chart2, {
        type: 'bar',
        data: {
          labels: [`HP:  ${theLable[0]}`, `attack:  ${theLable[1]}`, `defense:  ${theLable[2]}`, `special-attack:  ${theLable[3]}`, `special-defense:  ${theLable[4]}`, `speed:  ${theLable[5]}`],
          datasets: [{
            label: parentClass,
            data: theLable,
            fill: true,
            backgroundColor: ['rgba(255,0,0,0.7)','rgba(255,165,0,0.7)','rgba(255,255,0,0.7)','rgba(0,0,255,0.7)','rgba(0,255,0,0.7)','rgba(128,0,128,0.7)'],
            borderColor: 'black',
            borderWidth: 2,
          }]
        },
        options: options
      })

      container2 = document.getElementById('container2')
      if(container2.childElementCount === 1){
        container2.removeChild(container2.firstChild)
      }
      container2.appendChild(chart2)

      const div2 = document.getElementById('div2')
      div2.textContent = ''
      div2.style.backgroundColor = 'rgba(255,255,255,0.6)'
      let text1 = abilities[`${parentClass}0`]
      let text2 = abilities[`${parentClass}1`]
      div2.style.textAlign = 'center'
      div2.style.fontFamily = 'sans-serif'
      div2.style.fontSize = 20
      div2.textContent = `Abilities: ${text1}, ${text2}`

      const div4 = document.getElementById('div4')
      div4.style.backgroundColor = `rgba(255,255,255,0.6)`
      div4.style.textAlign = 'center'
      div4.style.fontSize = 20
      div4.textContent = `Description:\n${description}`

      const whitewall = document.getElementById('whitewall')
      whitewall.style.backgroundColor = 'rgba(255,255,255,0.6)'
      whitewall.style.top = `10vh`
      whitewall.style.right = '0'
      whitewall.style.width = `35vw`
      whitewall.style.height = `35vh`
      whitewall.style.position = 'absolute'

      // $.get('https://')
    })
  })
  }


})
})