$.ajax({
  url: '/username',
  type: 'POST',
  data: {
    code: 'code'
  },
  success: function(res) {
    if (res.status === 0) {
      $('.name').text(res.data.name);
    }
  },
  error: function(err) {

  }
})