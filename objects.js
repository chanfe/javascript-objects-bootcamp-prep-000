var playlist = {
  someartist: 'Never Let You Go!'
};

function updatePlaylist(obj, artist, title){
  obj[artist] = title;
}

function removeFromPlaylist(obj, artis){
  delete obj.artist;
}