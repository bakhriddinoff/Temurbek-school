const faqs = document.querySelectorAll(".faq");
const togglee = document.querySelectorAll(".toggle-answer");
const img1 = document.querySelectorAll('.imgs'); // misol uchun


faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle('active');

        const img = faq.querySelector('.imgs'); // har bir faq ichidagi rasmni olamiz

        if (img) {
            if (faq.classList.contains('active')) {
                img.style.transform = "rotate(180deg)";
            } else {
                img.style.transform = "rotate(0deg)";
            }
        }
    });
});



const hamMenu = document.querySelector('.ham-menu');

const offScreen = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');     
    offScreen.classList.toggle('active');
});







    const langBtn = document.getElementById('current-lang');
    const dropdown = document.querySelector('.language-dropdown');
    const items = document.querySelectorAll('.language-dropdown li');

    const translations = {
        uz: {
            home: "Bosh sahifa",
            about: "Biz haqimizda",
            courses: "Kurslar",
            contact: "Aloqa",
            quote: "Bilimga kiritilgan sarmoya eng yaxshi foydani beradi",
            desc: "Temurbek Schoolda har bir o‘quvchi shaxsiy yondashuv asosida o‘qitiladi..."
        },
        en: {
            home: "Home",
            about: "About Us",
            courses: "Courses",
            contact: "Contact",
            quote: "An investment in knowledge pays the best interest",
            desc: "At Temurbek School, each student is taught individually with a personal approach..."
        },
        ru: {
            home: "Главная",
            about: "О нас",
            courses: "Курсы",
            contact: "Контакты",
            quote: "Инвестиции в знания приносят наилучшие дивиденды",
            desc: "В Temurbek School каждый ученик обучается индивидуально по личному подходу..."
        }
    };

    langBtn.addEventListener('click', () => {
        dropdown.classList.toggle('hidden');
    });

    items.forEach(item => {
        item.addEventListener('click', () => {
            const selectedLang = item.getAttribute('data-lang');
            langBtn.textContent = item.textContent + " ⌄";
            dropdown.classList.add('hidden');
            updateLanguage(selectedLang);
        });
    });

    function updateLanguage(lang) {
        document.querySelector('a[href="#home"]').textContent = translations[lang].home;
        document.querySelector('a[href="#about"]').textContent = translations[lang].about;
        document.querySelector('a[href="#kurslar"]').textContent = translations[lang].courses;
        document.querySelector('a[href="#aloqa"]').textContent = translations[lang].contact;
        document.querySelector('.wrapper h1').textContent = translations[lang].quote;
        document.querySelector('.text2').textContent = translations[lang].desc;
    }