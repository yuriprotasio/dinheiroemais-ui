function checkExternal () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const token = urlParams.get('token')
  if (!token) {
    window.location.href = 'index.html'
  }
  var video = document.getElementById('videoPlayer')
  var source = document.createElement('source');
  
  source.setAttribute('src', token)
  source.setAttribute('type', 'video/mp4');
  video.appendChild(source)
}

checkExternal()