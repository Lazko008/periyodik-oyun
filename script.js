// Element verileri
const elements = [
    {
        id: 1,
        name: "Hidrojen",
        symbol: "H",
        atomicNumber: 1,
        atomicMass: 1.008,
        electronegativity: 2.20,
        ionizationEnergy: 1312,
        electronAffinity: 73,
        atomicRadius: 53
    },
    {
        id: 2,
        name: "Helyum",
        symbol: "He",
        atomicNumber: 2,
        atomicMass: 4.003,
        electronegativity: null, // Soy gaz, değer yok
        ionizationEnergy: 2372,
        electronAffinity: 0,
        atomicRadius: 31
    },
    {
        id: 3,
        name: "Lityum",
        symbol: "Li",
        atomicNumber: 3,
        atomicMass: 6.941,
        electronegativity: 0.98,
        ionizationEnergy: 520,
        electronAffinity: 60,
        atomicRadius: 167
    },
    {
        id: 4,
        name: "Berilyum",
        symbol: "Be",
        atomicNumber: 4,
        atomicMass: 9.012,
        electronegativity: 1.57,
        ionizationEnergy: 899,
        electronAffinity: 0,
        atomicRadius: 112
    },
    {
        id: 5,
        name: "Bor",
        symbol: "B",
        atomicNumber: 5,
        atomicMass: 10.811,
        electronegativity: 2.04,
        ionizationEnergy: 801,
        electronAffinity: 27,
        atomicRadius: 87
    },
    {
        id: 6,
        name: "Karbon",
        symbol: "C",
        atomicNumber: 6,
        atomicMass: 12.011,
        electronegativity: 2.55,
        ionizationEnergy: 1086,
        electronAffinity: 122,
        atomicRadius: 67
    },
    {
        id: 7,
        name: "Azot",
        symbol: "N",
        atomicNumber: 7,
        atomicMass: 14.007,
        electronegativity: 3.04,
        ionizationEnergy: 1402,
        electronAffinity: 0,
        atomicRadius: 56
    },
    {
        id: 8,
        name: "Oksijen",
        symbol: "O",
        atomicNumber: 8,
        atomicMass: 15.999,
        electronegativity: 3.44,
        ionizationEnergy: 1314,
        electronAffinity: 141,
        atomicRadius: 48
    },
    {
        id: 9,
        name: "Flor",
        symbol: "F",
        atomicNumber: 9,
        atomicMass: 18.998,
        electronegativity: 3.98,
        ionizationEnergy: 1681,
        electronAffinity: 328,
        atomicRadius: 42
    },
    {
        id: 10,
        name: "Neon",
        symbol: "Ne",
        atomicNumber: 10,
        atomicMass: 20.180,
        electronegativity: null, // Soy gaz, değer yok
        ionizationEnergy: 2081,
        electronAffinity: 0,
        atomicRadius: 38
    },
    {
        id: 11,
        name: "Sodyum",
        symbol: "Na",
        atomicNumber: 11,
        atomicMass: 22.990,
        electronegativity: 0.93,
        ionizationEnergy: 496,
        electronAffinity: 53,
        atomicRadius: 190
    },
    {
        id: 12,
        name: "Magnezyum",
        symbol: "Mg",
        atomicNumber: 12,
        atomicMass: 24.305,
        electronegativity: 1.31,
        ionizationEnergy: 738,
        electronAffinity: 0,
        atomicRadius: 145
    },
    {
        id: 13,
        name: "Alüminyum",
        symbol: "Al",
        atomicNumber: 13,
        atomicMass: 26.982,
        electronegativity: 1.61,
        ionizationEnergy: 578,
        electronAffinity: 43,
        atomicRadius: 118
    },
    {
        id: 14,
        name: "Silisyum",
        symbol: "Si",
        atomicNumber: 14,
        atomicMass: 28.085,
        electronegativity: 1.90,
        ionizationEnergy: 787,
        electronAffinity: 134,
        atomicRadius: 111
    },
    {
        id: 15,
        name: "Fosfor",
        symbol: "P",
        atomicNumber: 15,
        atomicMass: 30.974,
        electronegativity: 2.19,
        ionizationEnergy: 1012,
        electronAffinity: 72,
        atomicRadius: 98
    },
    {
        id: 16,
        name: "Kükürt",
        symbol: "S",
        atomicNumber: 16,
        atomicMass: 32.06,
        electronegativity: 2.58,
        ionizationEnergy: 1000,
        electronAffinity: 200,
        atomicRadius: 88
    },
    {
        id: 17,
        name: "Klor",
        symbol: "Cl",
        atomicNumber: 17,
        atomicMass: 35.45,
        electronegativity: 3.16,
        ionizationEnergy: 1251,
        electronAffinity: 349,
        atomicRadius: 79
    },
    {
        id: 18,
        name: "Argon",
        symbol: "Ar",
        atomicNumber: 18,
        atomicMass: 39.948,
        electronegativity: null, // Soy gaz, değer yok
        ionizationEnergy: 1521,
        electronAffinity: 0,
        atomicRadius: 71
    },
    {
        id: 19,
        name: "Potasyum",
        symbol: "K",
        atomicNumber: 19,
        atomicMass: 39.098,
        electronegativity: 0.82,
        ionizationEnergy: 419,
        electronAffinity: 48,
        atomicRadius: 243
    },
    {
        id: 20,
        name: "Kalsiyum",
        symbol: "Ca",
        atomicNumber: 20,
        atomicMass: 40.078,
        electronegativity: 1.00,
        ionizationEnergy: 590,
        electronAffinity: 2,
        atomicRadius: 194
    }
];

// Özellik isimleri
const propertyNames = {
    electronegativity: "Elektronegatiflik",
    ionizationEnergy: "İyonlaşma Enerjisi",
    electronAffinity: "Elektron İlgisi",
    atomicRadius: "Atom Yarıçapı",
    atomicMass: "Atom Kütlesi"
};

// Özellik birimleri
const propertyUnits = {
    electronegativity: "Pauling",
    ionizationEnergy: "kJ/mol",
    electronAffinity: "kJ/mol",
    atomicRadius: "pm",
    atomicMass: "u"
};

// Özellik açıklamaları
const propertyDescriptions = {
    electronegativity: "Elektronegatiflik, bir atomun bağ elektronlarını kendine çekme eğiliminin ölçüsüdür. Periyodik tabloda soldan sağa artar, yukarıdan aşağıya azalır.",
    ionizationEnergy: "İyonlaşma enerjisi, bir atomdan bir elektron koparmak için gereken enerji miktarıdır. Periyodik tabloda soldan sağa artar, yukarıdan aşağıya azalır.",
    electronAffinity: "Elektron ilgisi, bir atomun elektron kazanırken açığa çıkan enerji miktarıdır. Periyodik tabloda soldan sağa artar (genellikle), yukarıdan aşağıya azalır (genellikle).",
    atomicRadius: "Atom yarıçapı, bir atomun merkezinden en dış elektronlarına olan mesafedir. Periyodik tabloda soldan sağa azalır, yukarıdan aşağıya artar.",
    atomicMass: "Atom kütlesi, bir atomun kütlesinin atom kütle birimi (u) cinsinden değeridir ve genellikle atom numarası arttıkça artar."
};

// Periyodik Oyun Sınıfı
class PeriodicGame {
    constructor() {
        this.score = 0;
        this.currentRound = 0;
        this.maxRounds = 5;
        this.correctAnswers = 0;
        this.selectedProperty = "electronegativity";
        this.element1 = null;
        this.element2 = null;
        this.selectedElementIndex = null;
        this.answerChecked = false;
    }
    
    // Yeni oyun başlat
    startNewGame() {
        this.score = 0;
        this.currentRound = 0;
        this.correctAnswers = 0;
        this.answerChecked = false;
        this.selectedElementIndex = null;
        
        // İlerleme çubuğunu sıfırla
        document.getElementById('progressFill').style.width = '0%';
        
        // Skoru sıfırla
        document.getElementById('score').innerHTML = `<i class="fas fa-star"></i> Puan: 0`;
        
        // Geri bildirimi gizle
        document.getElementById('feedback').style.display = 'none';
        
        // Feedback ikonunu gizle
        document.getElementById('feedbackIcon').style.display = 'none';
        
        // Cevabı kontrol et butonunu aktif et, sonraki soru butonunu devre dışı bırak
        document.getElementById('checkAnswerBtn').disabled = true;
        document.getElementById('nextQuestionBtn').disabled = true;
        
        // İlk turu başlat
        this.nextRound();
    }
    
    // Sonraki tur
    nextRound() {
        // Mevcut turu artır
        this.currentRound++;
        
        // Maksimum tur sayısını kontrol et
        if (this.currentRound > this.maxRounds) {
            return false;
        }
        
        // Tur bilgisini güncelle
        document.getElementById('currentRound').textContent = `Tur: ${this.currentRound}/${this.maxRounds}`;
        
        // İlerleme çubuğunu güncelle
        const progressPercentage = (this.currentRound - 1) / this.maxRounds * 100;
        document.getElementById('progressFill').style.width = `${progressPercentage}%`;
        
        // Skoru güncelle
        document.getElementById('score').innerHTML = `<i class="fas fa-star"></i> Puan: ${this.score}`;
        
        // Geri bildirimi gizle
        document.getElementById('feedback').style.display = 'none';
        
        // Feedback ikonunu gizle
        document.getElementById('feedbackIcon').style.display = 'none';
        
        // Seçim çemberlerini sıfırla
        document.getElementById('element1Circle').classList.remove('selected');
        document.getElementById('element2Circle').classList.remove('selected');
        
        // Seçili element indeksini sıfırla
        this.selectedElementIndex = null;
        
        // Cevap kontrolünü sıfırla
        this.answerChecked = false;
        
        // Cevabı kontrol et butonunu devre dışı bırak, sonraki soru butonunu devre dışı bırak
        document.getElementById('checkAnswerBtn').disabled = true;
        document.getElementById('nextQuestionBtn').disabled = true;
        
        // Rastgele iki element seç
        this.selectRandomElements();
        
        // Soruyu güncelle
        this.updateQuestion();
        
        return true;
    }
    
    // Rastgele iki element seç
    selectRandomElements() {
        // Karşılaştırılabilir elementleri filtrele
        const comparableElements = elements.filter(element => {
            // Seçilen özellik için değeri null olmayan elementleri seç
            return element[this.selectedProperty] !== null;
        });
        
        // Rastgele iki farklı element seç
        let index1 = Math.floor(Math.random() * comparableElements.length);
        let index2;
        
        do {
            index2 = Math.floor(Math.random() * comparableElements.length);
        } while (index1 === index2);
        
        this.element1 = comparableElements[index1];
        this.element2 = comparableElements[index2];
        
        // Element kartlarını güncelle
        this.updateElementCards();
    }
    
    // Element kartlarını güncelle
    updateElementCards() {
        // Element 1
        document.getElementById('element1Name').textContent = this.element1.name;
        document.getElementById('element1Symbol').textContent = this.element1.symbol;
        document.getElementById('element1AtomicNumber').textContent = `Atom Numarası: ${this.element1.atomicNumber}`;
        
        // Element 1 detayları
        let element1Details = `
            <p><strong>Atom Kütlesi:</strong> ${this.element1.atomicMass} u</p>
            <p><strong>Atom Yarıçapı:</strong> ${this.element1.atomicRadius} pm</p>
        `;
        
        if (this.element1.electronegativity !== null) {
            element1Details += `<p><strong>Elektronegatiflik:</strong> ${this.element1.electronegativity} Pauling</p>`;
        }
        
        element1Details += `
            <p><strong>İyonlaşma Enerjisi:</strong> ${this.element1.ionizationEnergy} kJ/mol</p>
            <p><strong>Elektron İlgisi:</strong> ${this.element1.electronAffinity} kJ/mol</p>
        `;
        
        document.getElementById('element1Details').innerHTML = element1Details;
        
        // Element 2
        document.getElementById('element2Name').textContent = this.element2.name;
        document.getElementById('element2Symbol').textContent = this.element2.symbol;
        document.getElementById('element2AtomicNumber').textContent = `Atom Numarası: ${this.element2.atomicNumber}`;
        
        // Element 2 detayları
        let element2Details = `
            <p><strong>Atom Kütlesi:</strong> ${this.element2.atomicMass} u</p>
            <p><strong>Atom Yarıçapı:</strong> ${this.element2.atomicRadius} pm</p>
        `;
        
        if (this.element2.electronegativity !== null) {
            element2Details += `<p><strong>Elektronegatiflik:</strong> ${this.element2.electronegativity} Pauling</p>`;
        }
        
        element2Details += `
            <p><strong>İyonlaşma Enerjisi:</strong> ${this.element2.ionizationEnergy} kJ/mol</p>
            <p><strong>Elektron İlgisi:</strong> ${this.element2.electronAffinity} kJ/mol</p>
        `;
        
        document.getElementById('element2Details').innerHTML = element2Details;
    }
    
    // Soruyu güncelle
    updateQuestion() {
        const propertyName = propertyNames[this.selectedProperty];
        document.getElementById('questionText').textContent = `Hangi elementin ${propertyName.toLowerCase()} değeri daha yüksektir?`;
    }
    
    // Element seçimi
    selectElement(index) {
        // Seçim çemberlerini güncelle
        if (index === 0) {
            document.getElementById('element1Circle').classList.add('selected');
            document.getElementById('element2Circle').classList.remove('selected');
        } else {
            document.getElementById('element1Circle').classList.remove('selected');
            document.getElementById('element2Circle').classList.add('selected');
        }
        
        // Seçili element indeksini kaydet
        this.selectedElementIndex = index;
        
        // Cevabı kontrol et butonunu aktif et
        document.getElementById('checkAnswerBtn').disabled = false;
    }
    
    // Cevabı kontrol et
    checkAnswer() {
        if (this.selectedElementIndex === null || this.answerChecked) {
            return false;
        }
        
        // Cevap kontrolünü işaretle
        this.answerChecked = true;
        
        // Doğru cevabı belirle
        let correctIndex;
        
        // Özelliğe göre karşılaştırma yap
        if (this.element1[this.selectedProperty] > this.element2[this.selectedProperty]) {
            correctIndex = 0;
        } else {
            correctIndex = 1;
        }
        
        // Kullanıcının cevabını kontrol et
        const isCorrect = this.selectedElementIndex === correctIndex;
        
        // Geri bildirim göster
        this.showFeedback(isCorrect, correctIndex);
        
        // Doğru cevap ise puan ekle
        if (isCorrect) {
            this.score += 20;
            this.correctAnswers++;
            
            // Skoru güncelle
            document.getElementById('score').innerHTML = `<i class="fas fa-star"></i> Puan: ${this.score}`;
        }
        
        // Sonraki soru butonunu aktif et
        document.getElementById('nextQuestionBtn').disabled = false;
        
        // Cevabı kontrol et butonunu devre dışı bırak
        document.getElementById('checkAnswerBtn').disabled = true;
        
        return isCorrect;
    }
    
    // Geri bildirim göster
    showFeedback(isCorrect, correctIndex) {
        const feedbackContainer = document.getElementById('feedback');
        const feedbackIcon = document.getElementById('feedbackIcon');
        const feedbackText = document.getElementById('feedbackText');
        
        // Geri bildirim metnini hazırla
        const element1Value = this.element1[this.selectedProperty];
        const element2Value = this.element2[this.selectedProperty];
        const propertyName = propertyNames[this.selectedProperty];
        const propertyUnit = propertyUnits[this.selectedProperty];
        
        let feedbackMessage = '';
        
        if (isCorrect) {
            feedbackIcon.className = 'feedback-icon correct';
            feedbackIcon.innerHTML = '<i class="fas fa-check"></i>';
            feedbackMessage = `Doğru! ${correctIndex === 0 ? this.element1.name : this.element2.name} elementinin ${propertyName.toLowerCase()} değeri (${correctIndex === 0 ? element1Value : element2Value} ${propertyUnit}) daha yüksektir.`;
        } else {
            feedbackIcon.className = 'feedback-icon incorrect';
            feedbackIcon.innerHTML = '<i class="fas fa-times"></i>';
            feedbackMessage = `Yanlış! ${correctIndex === 0 ? this.element1.name : this.element2.name} elementinin ${propertyName.toLowerCase()} değeri (${correctIndex === 0 ? element1Value : element2Value} ${propertyUnit}) daha yüksektir.`;
        }
        
        feedbackText.textContent = feedbackMessage;
        
        // Geri bildirimi göster
        feedbackContainer.style.display = 'flex';
        feedbackIcon.style.display = 'flex';
    }
    
    // Sonuçları göster
    showResults() {
        // Final skoru göster
        document.getElementById('finalScore').textContent = this.score;
        
        // Sonuç geri bildirimini hazırla
        let resultFeedback = '';
        
        if (this.score === this.maxRounds * 20) {
            resultFeedback = `<p class="result-message perfect">Mükemmel! Tüm soruları doğru cevapladınız!</p>
                             <p>Periyodik özellikleri çok iyi anlıyorsunuz. Tebrikler!</p>`;
            
            // Konfeti efekti başlat
            this.startConfetti();
        } else if (this.score >= this.maxRounds * 15) {
            resultFeedback = `<p class="result-message great">Harika! ${this.correctAnswers} soruyu doğru cevapladınız.</p>
                             <p>Periyodik özellikleri iyi anlıyorsunuz. Biraz daha pratik yaparak mükemmel olabilirsiniz.</p>`;
        } else if (this.score >= this.maxRounds * 10) {
            resultFeedback = `<p class="result-message good">İyi! ${this.correctAnswers} soruyu doğru cevapladınız.</p>
                             <p>Periyodik özellikleri anlamaya başladınız. Daha fazla pratik yaparak gelişebilirsiniz.</p>`;
        } else {
            resultFeedback = `<p class="result-message needs-improvement">Geliştirilmeli! ${this.correctAnswers} soruyu doğru cevapladınız.</p>
                             <p>Periyodik özellikleri daha iyi anlamak için bilgilendirme bölümünü tekrar okuyabilir ve daha fazla pratik yapabilirsiniz.</p>`;
        }
        
        document.getElementById('resultFeedback').innerHTML = resultFeedback;
    }
    
    // Konfeti efekti başlat
    startConfetti() {
        if (typeof ConfettiGenerator !== 'undefined') {
            const confettiSettings = { target: 'confetti', max: 80, size: 2, animate: true, props: ['circle', 'square', 'triangle', 'line'], colors: [[165,104,246], [230,61,135], [0,199,228], [253,214,126]], clock: 25 };
            const confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
            
            // 5 saniye sonra konfeti efektini durdur
            setTimeout(() => {
                confetti.clear();
            }, 5000);
        }
    }
}

// DOM yüklendikten sonra çalışacak kodlar
document.addEventListener('DOMContentLoaded', function() {
    // Particles.js başlat
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#3498db"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#3498db",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
    
    // Bilgilendirme bölümündeki tabloları doldur
    populateTables();
    
    // Navigasyon butonları
    const infoBtn = document.getElementById('infoBtn');
    const gameBtn = document.getElementById('gameBtn');
    const infoSection = document.getElementById('infoSection');
    const gameSection = document.getElementById('gameSection');
    
    infoBtn.addEventListener('click', function() {
        infoBtn.classList.add('active');
        gameBtn.classList.remove('active');
        infoSection.classList.add('active');
        gameSection.classList.remove('active');
    });
    
    gameBtn.addEventListener('click', function() {
        gameBtn.classList.add('active');
        infoBtn.classList.remove('active');
        gameSection.classList.add('active');
        infoSection.classList.remove('active');
    });
    
    // Oyun nesnesi oluştur
    const game = new PeriodicGame();
    
    // Oyun başlatma butonu
    const startGameBtn = document.getElementById('startGameBtn');
    startGameBtn.addEventListener('click', function() {
        document.getElementById('gameIntro').style.display = 'none';
        document.getElementById('gamePlay').style.display = 'block';
        document.getElementById('gameResults').style.display = 'none';
        
        game.startNewGame();
    });
    
    // Özellik seçimi değiştiğinde
    const propertySelect = document.getElementById('propertySelect');
    propertySelect.addEventListener('change', function() {
        game.selectedProperty = this.value;
        game.updateQuestion();
    });
    
    // Element 1 seçimi
    document.getElementById('element1').addEventListener('click', function() {
        game.selectElement(0);
    });
    
    // Element 1 seçim çemberi
    document.getElementById('element1Circle').addEventListener('click', function() {
        game.selectElement(0);
    });
    
    // Element 2 seçimi
    document.getElementById('element2').addEventListener('click', function() {
        game.selectElement(1);
    });
    
    // Element 2 seçim çemberi
    document.getElementById('element2Circle').addEventListener('click', function() {
        game.selectElement(1);
    });
    
    // Cevabı kontrol et butonu
    document.getElementById('checkAnswerBtn').addEventListener('click', function() {
        game.checkAnswer();
    });
    
    // Sonraki soru butonu
    document.getElementById('nextQuestionBtn').addEventListener('click', function() {
        if (game.currentRound < game.maxRounds) {
            game.nextRound();
        } else {
            // Oyun bitti, sonuçları göster
            document.getElementById('gamePlay').style.display = 'none';
            document.getElementById('gameResults').style.display = 'block';
            game.showResults();
        }
    });
    
    // Tekrar oyna butonu
    document.getElementById('playAgainBtn').addEventListener('click', function() {
        document.getElementById('gameResults').style.display = 'none';
        document.getElementById('gamePlay').style.display = 'block';
        game.startNewGame();
    });
    
    // Bilgilendirme bölümüne git butonu
    document.getElementById('goToInfoBtn').addEventListener('click', function() {
        document.getElementById('gameResults').style.display = 'none';
        document.getElementById('gameIntro').style.display = 'block';
        
        // Bilgilendirme bölümüne geç
        infoBtn.click();
    });
});

// Bilgilendirme bölümündeki tabloları doldur
function populateTables() {
    // Atom Kütlesi ve Atom Numarası Tablosu
    const atomicMassTable = document.getElementById('atomicMassTable').getElementsByTagName('tbody')[0];
    atomicMassTable.innerHTML = '';
    
    // İlk 10 elementi göster
    for (let i = 0; i < 10; i++) {
        const element = elements[i];
        const row = atomicMassTable.insertRow();
        
        const nameCell = row.insertCell(0);
        const symbolCell = row.insertCell(1);
        const atomicNumberCell = row.insertCell(2);
        const atomicMassCell = row.insertCell(3);
        
        nameCell.textContent = element.name;
        symbolCell.textContent = element.symbol;
        atomicNumberCell.textContent = element.atomicNumber;
        atomicMassCell.textContent = element.atomicMass;
    }
    
    // Elektronegatiflik Tablosu
    const electronegativityTable = document.getElementById('electronegativityTable').getElementsByTagName('tbody')[0];
    electronegativityTable.innerHTML = '';
    
    // Elektronegatiflik değeri olan elementleri filtrele ve ilk 8'ini göster
    const electronegativityElements = elements.filter(element => element.electronegativity !== null).slice(0, 8);
    
    for (const element of electronegativityElements) {
        const row = electronegativityTable.insertRow();
        
        const nameCell = row.insertCell(0);
        const symbolCell = row.insertCell(1);
        const electronegativityCell = row.insertCell(2);
        
        nameCell.textContent = element.name;
        symbolCell.textContent = element.symbol;
        electronegativityCell.textContent = element.electronegativity;
    }
    
    // Elektron İlgisi Tablosu
    const electronAffinityTable = document.getElementById('electronAffinityTable').getElementsByTagName('tbody')[0];
    electronAffinityTable.innerHTML = '';
    
    // Elektron ilgisi değeri yüksek olan elementleri seç
    const electronAffinityElements = [...elements].sort((a, b) => b.electronAffinity - a.electronAffinity).slice(0, 8);
    
    for (const element of electronAffinityElements) {
        const row = electronAffinityTable.insertRow();
        
        const nameCell = row.insertCell(0);
        const symbolCell = row.insertCell(1);
        const electronAffinityCell = row.insertCell(2);
        
        nameCell.textContent = element.name;
        symbolCell.textContent = element.symbol;
        electronAffinityCell.textContent = element.electronAffinity;
    }
    
    // İyonlaşma Enerjisi Tablosu
    const ionizationEnergyTable = document.getElementById('ionizationEnergyTable').getElementsByTagName('tbody')[0];
    ionizationEnergyTable.innerHTML = '';
    
    // İyonlaşma enerjisi değeri yüksek olan elementleri seç
    const ionizationEnergyElements = [...elements].sort((a, b) => b.ionizationEnergy - a.ionizationEnergy).slice(0, 8);
    
    for (const element of ionizationEnergyElements) {
        const row = ionizationEnergyTable.insertRow();
        
        const nameCell = row.insertCell(0);
        const symbolCell = row.insertCell(1);
        const ionizationEnergyCell = row.insertCell(2);
        
        nameCell.textContent = element.name;
        symbolCell.textContent = element.symbol;
        ionizationEnergyCell.textContent = element.ionizationEnergy;
    }
    
    // Atom Yarıçapı Tablosu
    const atomicRadiusTable = document.getElementById('atomicRadiusTable').getElementsByTagName('tbody')[0];
    atomicRadiusTable.innerHTML = '';
    
    // Atom yarıçapı değeri büyük olan elementleri seç
    const atomicRadiusElements = [...elements].sort((a, b) => b.atomicRadius - a.atomicRadius).slice(0, 8);
    
    for (const element of atomicRadiusElements) {
        const row = atomicRadiusTable.insertRow();
        
        const nameCell = row.insertCell(0);
        const symbolCell = row.insertCell(1);
        const atomicRadiusCell = row.insertCell(2);
        
        nameCell.textContent = element.name;
        symbolCell.textContent = element.symbol;
        atomicRadiusCell.textContent = element.atomicRadius;
    }
}