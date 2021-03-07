 //获取picid函数
      $(function () {
         $("area").click(function () {
            var picId = $(this).attr("data-id");
            var picSrc = "images/img_big/" + picId + ".jpg"
            $(".modal-content>.pic-box>img").attr("src", picSrc);
         })
         var isPlaying = function (audio) {
            return !audio.paused;
         }
         var a = document.getElementById('main_audio');
         $('#btn-play').on('click', function () {
            if ($(this).hasClass('rotate')) {
               a.pause();
               $(this).removeClass('rotate');
            } else {
               a.play();
               $(this).addClass('rotate');
            }
         });

      }