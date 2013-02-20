$(function () {

  $('#frequency-select').chameleonSelectList({
    title: 'Update Frequency',
    list: [
      { name: '10 minutes', value: 10 * 60 },
      { name: '30 minutes', value: 30 * 60 },
      { name: '1 hour', value: 1 * 60 * 60 },
      { name: '2 hours', value: 2 * 60 * 60 },
      { name: '12 hours', value: 12 * 60 * 60 },
      { name: 'Never (Manual Refresh)', value: -1 }
    ]
  })

  $('#close-button').click(function(e){
    chameleon.close(true)
    return false
  })

})