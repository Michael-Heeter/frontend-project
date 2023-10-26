document.addEventListener("DOMContentLoaded",function(){
  let theImg;
  let count = 0;
  const dataList = document.getElementById(`pokemonList`)
  const body = document.body;const obj = {}
  const stat = {}
  let current;
  let abilities = {};

  const pokeList = $.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1292`, data => {
    console.log(data.results)
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
      beginAtZero: true
    }
  }
};
    

  function search(){
      count++
      let userInput = document.querySelector("#user-section input")
      let query = userInput.value.trim()
      userInput.value = ""



      $.get(`https://pokeapi.co/api/v2/pokemon/${query}`, (data) => {
        theImg = (data.sprites[`front_default`])
        let names = {}
        console.log(data['abilities'][0])
        for(let i = 0; i < data.stats.length; i++){
          let temp = data.stats[i]['base_stat']
          let kiy = data.stats[i].stat.name
          names[kiy] = temp

        }
        // for(let j = 0; j < data['ablilities']; j++){
        //   console.log(data['abilities'][j])['ability']
        // }
        stat[`${query}`] = names
        // console.log(stat)
    })
    setTimeout(pokesprite(query),0)
    pokeball(query)
  }

function pc(){
  let div = document.createElement('div')
  div.setAttribute('id', 'pc')
  div.classList.add('carousel')
  div.style.height = '100vh'
  div.style.width = '7vw'
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
}, 1000);

function compareOne(){
  const container1 = document.createElement('div')
  container1.setAttribute(`id`,`container1`)
  container1.style.width = `40vw`
  container1.style.height = `90vh`
  container1.style.position = 'absolute'
  container1.style.bottom = `0`
  body.appendChild(container1)

}

function compareTwo(){
  const container2 = document.createElement('div');
  container2.setAttribute(`id`, `container2`)
  container2.style.width = `40vw`
  container2.style.height = `90vh`
  container2.style.position = 'absolute'
  container2.style.bottom = `0`
  container2.style.right = `0`
  body.appendChild(container2)
}



function pokesprite(pokemons){
    const tilesContainer = document.createElement("img");
    tilesContainer.classList.add(`${pokemons}`)
    console.log(pokemons)
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
    toContainerOne.addEventListener('click', (e) => {
      let chart1 = document.createElement('canvas')
      chart1.setAttribute('id','chart1')
      let parent = e.target.parentNode
      let parentClass = parent.classList[0]

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
      container1.appendChild(chart1)
    })

    toContainerTwo.addEventListener('click', (e) => {
      let chart2 = document.createElement('canvas')
      chart2.setAttribute('id','chart2')
      let parent = e.target.parentNode
      let parentClass = parent.classList[0]

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



    })
  }

  $(document).ready(function(){
    $('.carousel').slick({
      vertical: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      verticalSwiping: true,
      infinite: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  });

  
})
})