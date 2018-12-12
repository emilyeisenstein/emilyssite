$(document).ready(function() {
  var mapping = {
    "Digital Art": 'digital-art',
    "Lighting and Projections": 'lighting-and-projections',
    "Installations": 'Installations'
  }

  $('.portfolio-filter a').click(function() {
    var selected = $(this).text()
    if ( selected == 'all') {
      $('.portfolio').fadeIn(200)
      $('.portfolio').parent('a').fadeIn(200)
    } else {
      $('.portfolio').filter('.' + mapping[selected]).fadeIn(200).parent('a').fadeIn(200)
      $('.portfolio').not('.' + mapping[selected]).fadeOut(200).parent('a').fadeOut(200)
    }
  })
})
