const chords = ['c', 'd', 'e', 'f', 'g', 'a', 'b']
let temp

$('#inputUser').on('change', function () {
  inputUser = this.value
  const newChords = getChords(inputUser)
  renderDisplay(newChords)
})

function getChords(input) {
  const hasil = [...chords]
  hasil.forEach((chord, i) => {
    if (input === chord) temp = hasil.splice(0, i)
  })
  temp.forEach(t => hasil.push(t))
  return hasil
}

function renderDisplay(newChords) {

  switch (newChords[0]) {
    case 'd':
      newChords[2] += '#'
      break
    case 'e':
      newChords[5] += '#'
      newChords[1] += '#'
      newChords[2] += '#'
      break
    case 'f':
      newChords[1] += "#"
      break
    case 'a':
      newChords[5] += "#"
      newChords[2] += "#"
      break
    case 'b':
      newChords[5] += "#"
      newChords[1] += "#"
      break
  }

  $('.mayor-1').html(newChords[0].toUpperCase())
  $('.mayor-2').html(newChords[3].toUpperCase())
  $('.mayor-3').html(newChords[4].toUpperCase())

  $('.minor-1').html(newChords[5].toUpperCase() + 'm')
  $('.minor-2').html(newChords[1].toUpperCase() + 'm')
  $('.minor-3').html(newChords[2].toUpperCase() + 'm')

}

