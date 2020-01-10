var request = require("request");
var user_id = "kattroll";
var token = "Bearer "
var playlist_url = "https://api.spotify.com/v1/users/"+user_id+"/playlists";

request({url:palylist_url, header:{"Authorization":token}}, function(err, res){
	if (res){
		var playlist = JSON.parse(res.body);
		var palylist_url = playlist.items[0].href
		request({url:playlist_url, headers:{"Authorization":token}}, function(err, res){
		if (res){
			var playlist = JSON.parse(res.body);
			playlist.tracks.forEach(function (track){
				console.log(track.track.name);
				)};
			}
		})
	}
	
})
