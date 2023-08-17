let form = document.querySelector("#form")

form.addEventListener("submit", function(e){
  e.preventDefault()

  let queryString = this.createQueryString()
  // make your request!
})
HTMLElement.prototype.createQueryString = function () {
  let inputs = this.querySelectorAll('input, textarea, select')

  let queryString = ''
  inputs.forEach(input => queryString += `${input.name}=${input.value}&`)

  queryString = queryString.substring(0, queryString.length -1)

  return queryString
}