function deleteTodo(id) {
  console.log(id)
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
