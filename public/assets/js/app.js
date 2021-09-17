const { axios } = window

axios.get('/api/posts', {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})
  .then(({ data: posts }) => {
    console.log(posts)
    posts.forEach(({ title, body }) => {

    })
  })
  .catch(err => {
    console.log(err)
    window.location = '/auth.html'
  })
