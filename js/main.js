(function() {
    'use strict';
    
    console.log("よみこみおっけ〜らよ");
    console.log(window.innerWidth);
    if (window.innerWidth < 750) {
        console.log("せまい");
        gomenne();
        return;
    }


    var image = document.getElementById('image');
    var text = document.getElementById('text');

    var next = document.getElementById('next');
    var prev = document.getElementById('prev');

    var currentPage;
    var lastPage = '9';

    var sentences = [
        '<p>きょうは　まちにまった　クリスマスイブのひです。</p><p>まくくまは　サンタさんにあいたくて　こっそり　うすめをあけて　まっています。</p>'
      , '​<p>しばらくまっていると　サンタさんが　やってきました。</p><p>サンタさんは　まくくまが　おきているのにきがついて<br>どうしたのかと　ききました。</p><p>まくくまは<br>「まくくま　サンタさんといっしょに　そらとぶ　そりに　のりたかったんら。」<br>と こたえました。</p><p>すると　サンタさんは　ちょっと　かんがえて、<br>「じゃあ　とくべつに　のせてあげよう。<br>そとは　さむいから　あたたかいふくをきるんだよ。」<br>といいました。</p>'
      , '​<p>そりは　もうスピードで　はしりだしました。<br>「きょうは　いろんなところに　いくからね。」</p>'
      , '​<p>まず　もりへ　いきました。<br>もりでは　とりや　くまや　うさぎや　りすのこどもたちが　ねています。</p><p>サンタさんとまくくまは　そっと　プレゼントを　おいていきました。</p>'
      , '​<p>それから　うみへ　いきました。<br>うみでは　たくさんのさかなや　くじらや　イルカ、　かにや　えび、　たこや　いか、　ペンギンや　ひとでや　イソギンチャクのこどもたちが　ねています。</p><p>サンタさんと　まくくまは　そっと　プレゼントを　おいていきました。<br>うみは　とっても　ひろいので　ひとくろうです。</p>'
      , '<p>それから　ほっきょくや　さばくや　そうげん、<br>ねったいや　こうざんなど<br>いろいろなばしょを　まわりました。</p><p>たくさんのところに　いったので、<br>まくくまは　つかれて　ねむってしまいました。</p>'
      , '​<p>サンタさんは　まくくまを　おうちにつれてかえり<br>ベッドに　ねかせてあげました。</p><p>それから　そっと　プレゼントを　おいていきました。</p>'
      , '<p>つぎのひ　まくくまは<br>じぶんが　ちゃんと　ベッドにねていたので<br>「もしかして　ゆめを　みたのかな。」と　おもいました。</p><p>ちゃんと　プレゼントも　とどいています。<br>まくくまは　うれしくなって　どきどきしながら　あけました。<br>すると・・・</p>'
      , ''
      , '<p><br><br><br><br><br><br>おしまいらよ〜</p>'
    ];


    // 次へ ボタンが押されたら中身書き換え
    next.addEventListener('click', function(){
        currentPage = image.getAttribute('class');
        setVisibillity(this);
        // 絵を入れ替える
        replaceImage(this);
        // テキストを入れ替える
        replaceText(this);
    });

    prev.addEventListener('click', function(){
        currentPage = image.getAttribute('class');
        setVisibillity(this);
        replaceImage(this);
        replaceText(this);
    });

    function setVisibillity(button) {
        if (button === next) {
            if(currentPage === lastPage) {
                next.style.visibility = 'hidden';
                return;
            }
            if (prev.style.visibility === 'hidden') {
                prev.style.visibility = 'visible';
            }
        }
        else {
            if (currentPage === '2') {
                prev.style.visibility = 'hidden';
            }
            if (next.style.visibility === 'hidden') {
                next.style.visibility = 'visible';
            }
            if (image.style.visibility === 'hidden') {
                image.style.visibility = 'visible';
            }
        }
    }

    function replaceImage(button) {
        var imgPath;
        if (button === next) {
            if(currentPage === lastPage) {
                image.style.visibility = 'hidden';
                return;
            }
            imgPath = './img/christmas_' + (parseInt(currentPage) + 1) + '.png';
            // クラスを遷移後のページ番号に
            image.setAttribute('class', (parseInt(currentPage) + 1));          
        }
        else {
            imgPath = './img/christmas_' + (parseInt(currentPage) - 1) + '.png';
            // クラスを現在のページ番号に
            image.setAttribute('class', (parseInt(currentPage) - 1));
        }
        image.setAttribute('src', imgPath);
    }

    function replaceText(button) {
        if(button === next) {
            text.innerHTML = sentences[currentPage];
        }
        else {
            text.innerHTML = sentences[(parseInt(currentPage) - 2)];
        }
    }

    function gomenne() {
        var body = document.getElementById('body');
        while (body.firstChild) body.removeChild(body.firstChild);
        
        var div = document.createElement('div');
        div.textContent = 'けいたいには　まら　たいおうして　ないんら・・・';
        div.setAttribute('class', 'gomenne');
        body.appendChild(div);
    }
    
})();