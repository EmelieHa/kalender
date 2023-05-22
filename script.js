function getDay () {
  const day = new Date().getDay()
  switch (day) {
    case 0:
      return 'Söndag'
      break
    case 1:
      return 'Måndag'
      break
    case 2:
      return 'Tisdag'
      break
    case 3:
      return 'Onsdag'
      break
    case 4:
      return 'Torsdag'
      break
    case 5:
      return 'Fredag'
      break
    case 6:
      return 'Lördag'
      break
    case 7:
      return 'Söndag'
      break
  }
}

function getDate () {
  const date = new Date().getUTCDate()
  return date
}

function getMonth () {
  const month = new Date().getMonth() + 1
  switch (month) {
    case 1:
      return 'januari'
      break
    case 2:
      return 'februari'
      break
    case 3:
      return 'mars'
      break
    case 4:
      return 'april'
      break
    case 5:
      return 'maj'
      break
    case 6:
      return 'juni'
      break
    case 7:
      return 'juli'
      break
    case 8:
      return 'augusti'
      break
    case 9:
      return 'september'
      break
    case 10:
      return 'oktober'
      break
    case 11:
      return 'november'
      break
    case 12:
      return 'december'
      break
  }
}

function getYear () {
  const year = new Date().getFullYear()
  return year
}

setInterval(getTime, 1000)

function getTime () {
  let now = new Date().toLocaleTimeString()
  document.getElementById('timeDiv').innerHTML = `<p>${now}</p>`
}

document.getElementById(
  'mainDiv'
).innerHTML = `<h1>${getDay()}</h1> <h2>${getDate()}</h2> <h3>${getMonth()}</h3> <h4>${getYear()}</h4>`

const monthsArr = [
  'Januari',
  'Februari',
  'Mars',
  'April',
  'Maj',
  'Juni',
  'Juli',
  'Augusti',
  'September',
  'Oktober',
  'November',
  'December'
]

function mapArr (arr) {
  let list = document.createElement('ul')
  arr.map(elem => {
    let item = document.createElement('li')
    item.innerHTML = elem
    list.append(item)
  })
  document.getElementById('months').append(list)
}

mapArr(monthsArr)

const listItems = document.querySelectorAll('li')
listItems.forEach(l => {
  l.addEventListener('click', doFunc)
})

function doFunc (event) {
  switch (event.target.innerHTML) {
    case 'Januari': {
      showMonth(objArr[0])
      break
    }
    case 'Februari': {
      showMonth(objArr[1])
      break
    }
    case 'Mars': {
      showMonth(objArr[2])
      break
    }
    case 'April': {
      showMonth(objArr[3])
      break
    }
    case 'Maj': {
      showMonth(objArr[4])
      break
    }
    case 'Juni': {
      showMonth(objArr[5])
      break
    }
    case 'Juli': {
      showMonth(objArr[6])
      break
    }
    case 'Augusti': {
      showMonth(objArr[7])
    }
    case 'September': {
      showMonth(objArr[8])
      break
    }
    case 'Oktober': {
      showMonth(objArr[9])
      break
    }
    case 'November': {
      showMonth(objArr[10])
      break
    }
    case 'December': {
      showMonth(objArr[11])
    }
  }
}

const objArr = [
  ({ id: 'jan',
    6: 'Johanna fyller år',
    7: 'Lennart fyller år'
  }),

  ({id: 'feb'}),

  ({id: 'mar'}),

  ({id: 'apr',
    4: 'Emelie fyller år'
  }),

  ({id: 'maj'}),

  ({id: 'jun'}),

  ({id: 'jul',
    17: 'Cecilia fyller år',
    26: 'Anki fyller år'
  }),

  ({id: 'aug'}),

  ({id: 'sep',
    10: 'Ragnar fyller år'
  }),

  ({id: 'okt',
    10: 'Harry fyller år'
  }),

  ({id: 'nov'}),

  ({id: 'dec'})
]

let div = document.createElement('div');
function showMonth (month) {
  div.innerHTML = '';
 let num = objArr.indexOf(month);
 let slicedArr = Object.entries(objArr[num]).slice(0, -1);
 
 slicedArr.forEach(([k, v]) => {
  div.innerHTML += `${k}:e : ${v}</br>`;
 });
 document.getElementById('date').append(div);
}


const addBtn = document.getElementById('btn');
addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let month = document.getElementById('month').value
  let dag = document.getElementById('dag').value
  let namn = document.getElementById('namn').value
  let shortMonth = month.split('').splice(0, 3);
  let result = shortMonth.join('').toLowerCase();
  objArr.filter(v => {
    if (v.id === result) {
      v[dag] = namn + ' fyller år';
    }
  })
})


