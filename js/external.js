function checkExternal () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const token = urlParams.get('token')
  const expires = urlParams.get('Expires')
  const signature = urlParams.get('Signature')
  if (!token) {
    window.location.href = 'index.html'
  }
  var video = document.getElementById('videoPlayer')
  var source = document.createElement('source');
  
  source.setAttribute('src', token + `&Expires=${expires}&Signature=${signature}`)
  source.setAttribute('type', 'video/mp4');
  video.appendChild(source)
}

checkExternal()