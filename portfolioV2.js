// === TEMA YÖNETİMİ ===
function temaAyarla(mod) {
    if (mod === 'koyu') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', mod);
    }
}

// === TERMİNAL TYPEWRITER EFEKTİ ===
const diller = ["HTML5", "CSS3 / Grid", "C# / .NET", "JavaScript", "Python", "C & C++", "Assembly"];
let dilIndex = 0;
const textElement = document.getElementById("typewriter-text");

function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
        textElement.innerHTML = text.substring(0, i+1);
        setTimeout(function() { typeWriter(text, i + 1, fnCallback) }, 50);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}

function silici(text, i, fnCallback) {
    if (i >= 0) {
        textElement.innerHTML = text.substring(0, i);
        setTimeout(function() { silici(text, i - 1, fnCallback) }, 30);
    } else if (typeof fnCallback == 'function') {
        fnCallback();
    }
}

function sonrakiDil() {
    const mevcutMetin = diller[dilIndex];
    silici(mevcutMetin, mevcutMetin.length, () => {
        dilIndex = (dilIndex + 1) % diller.length;
        typeWriter(diller[dilIndex], 0);
    });
}

// === YETENEK BARLARI DİNAMİK OLUŞTURMA & ANİMASYON ===
const yetenekler = [
    { ad: "HTML", yuzde: 90 },
    { ad: "CSS", yuzde: 85 },
    { ad: "C#", yuzde: 80 },
    { ad: "JS", yuzde: 70 },
    { ad: "Python", yuzde: 70 },
    { ad: "C / C++", yuzde: 60 }
];

const skillsWrapper = document.querySelector('.skills-wrapper');

// Barları HTML içine basma
yetenekler.forEach(yet => {
    skillsWrapper.innerHTML += `
        <div class="skill-item">
            <span class="skill-name">${yet.ad}</span>
            <div class="skill-bar-bg">
                <div class="skill-bar-fill" data-width="${yet.yuzde}%"></div>
            </div>
            <span class="skill-percent">%${yet.yuzde}</span>
        </div>
    `;
});

// Sayfa yüklendikten hemen sonra barları doldurma animasyonu
window.addEventListener('load', () => {
    setTimeout(() => {
        const barlar = document.querySelectorAll('.skill-bar-fill');
        barlar.forEach(bar => {
            bar.style.width = bar.getAttribute('data-width');
        });
    }, 500);
});
