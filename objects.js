var playlist={mcr:"helena"}

function updatePlaylist(object,artist,song){
  object[artist]=song
  return object
}

function removeFromPlaylist(object,artist){
  delete object[artist]
  return object
}