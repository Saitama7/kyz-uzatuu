(() => {
    const MAX_LENGTH_FOR_LARGE_FONT = 10;
    
    const urlParams = new URLSearchParams(location.search);
    const backHeader = document.querySelector('.back-header');
    const name = backHeader.querySelector('#name');
    const sex = backHeader.querySelector('#sex');
    const nameValue = urlParams.get('name');
    const sexValue = urlParams.get('sex');
    const language = urlParams.get('lng');
    const isKG = language === 'kg';
    const text1 = document.getElementById('text-1');
    const text2 = document.getElementById('text-2');
    const text3 = document.getElementById('text-3');
    const footerText = document.getElementById('footer-text');
    const frontAddress = document.getElementById('front-address');
    const invite = document.getElementById('invite');
    const card = document.getElementById('card');


    if (nameValue && !isKG) {
        if (nameValue.length > MAX_LENGTH_FOR_LARGE_FONT) {
            backHeader.style.fontSize = '28px';
            backHeader.style.lineHeight = '48px'; 
        }
        name.textContent = nameValue;
    }

    if (sexValue && !isKG) {
        switch (sexValue.toLowerCase()) {
            case 'male':
                sex.textContent = 'Дорогой';
                break;
            case 'female':
                sex.textContent = 'Дорогая';
                break;
            case 'both':
                sex.textContent = 'Дорогие';
                if (name.textContent === 'Гость') {
                    name.textContent = 'Гости';
                }
                break;
        }
    }

    if (isKG) {
        card.classList.add('caveat');
        sex.textContent = 'Кымбаттуу туугандар';
        name.textContent = 'жана достор';
        text1.textContent = 'Биздин сүйүктүү Эльвира кызыбыздын “Кыз узатуу” тоюна чакырабыз. Той 2024-жылдын 30-августунда саат 16:00дө Resto Son-Kol ресторанында өтөт.';
        text2.textContent = 'Сиздердин катышууңуздар биз үчүн чоң сыймык жана кубаныч болот. Сиздер менен бул маанилүү күндү, салт-санаага толгон, кубаныч жана бакытка бөлөнгөн учурду бөлүшүү биз үчүн абдан жагымдуу болот.';
        text3.textContent = 'Дареги: 7-апрель көчөсү, 1д/1';
        frontAddress.textContent = '7-апрель көчөсү, 1д/1';
        footerText.innerHTML = '<span>Урматтоо менен, <br /> Мирзада</span>';
        invite.textContent = 'Кыз yзатууга чакыруу'
    }


    $("#card").flip();
})();

(() => {
    const song = document.getElementById('myAudio');

    function playAudio() {
        song.volume = 0.2;
        song.play();
        isPlaying = true;
    }

    $('#card').click(() => playAudio())
})();