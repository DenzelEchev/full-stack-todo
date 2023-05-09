function deleteTodo(id) {
  fetch('/delete', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'id': id
    })
  }).then(function (response) {

    window.location.reload()
  })
}

function toggleCompleted(i){
  let element = document.body.querySelector(`.todo[data-number="${i}"]`)
  element.classList.toggle('completed')
}