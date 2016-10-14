// SoundCloud를 사용할 수 있도록 권한을 받습니다.
SC.initialize({ client_id: "d29ad0142b2cd0a47ad2e561334c8e0f" });



// "싸이"를 검색 후 나오는 album의 첫 번째 음악을 실행합니다.
var x = function(searching){
    SC.get('/tracks', { q: searching })
  .then(function(tracks) {
    SC.oEmbed(
      tracks[0].uri, {
        auto_play: true,
        element: document.querySelector('#current-sound')
      }
    );
  });
};

// // 검색 결과 음악들을 보여줍니다.
// SC.get('/tracks', { q: '싸이' })
//   .then(function(tracks) {
//     tracks.forEach(function(track) {
//       $('body')
//         .append($('<p></p>')
//         .text(track.artwork_url + track.title + track.uri));
//     });
//   });

  $("button").on('click',function(){
    var searching = $("#search").val();
    x(searching);
  })
