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
            desc: "Temurbek Schoolda har bir o‘quvchi shaxsiy yondashuv asosida o‘qitiladi...",
            hero1_title: "Biz bilan birga hammasiga erishing",
            hero1_desc: "TEMURBEK SCHOOL O'quv Markazi Temurbek Shaxobov tomonidan tashkil etilgan bo'lib, Temurbek Shakhobov yetti yildan ortiq ta'lim berish tajribasiga ega bo‘lgan o‘qituvchidir. Temurbek Shakhobov Umumiy Ingliz tili, CEFR, Multilevel testlar, IELTS, TKT va ESOL bo‘yicha dars berib keladi. Ustozning rahbarligi ostida talabalar doimiy ravishda yuqori natijalarga erishgan.",
            hero2_title: "Ustozimizdan ilhomlantiruvchi natijalar",
            hero2_desc: "Umumiy Ingliz tili va CEFR bo‘yicha C1 darajasiga erishdilar, shuningdek, 20dan ortiq talabalar 7.0 va undan yuqori IELTS ballarini olishgan. Diqqatga sazovor jihati shundaki, Temurbek Shaxobov xalqaro ingliz tili o'qituvchilari orasida nufuzli TKT Band 4 va C2 darajasini qo'lga kiritgan birinchi o'qituvchilardan biri hisoblanadilar, bu esa ustozning ta'limdagi yuqori malakalarinini tasdiqlaydi.",
            hero3_title: "Biz bilan birga hammasiga erishing",
            hero3_desc: "O'quv markazi - bu Umumiy Ingliz tili, CEFR, TKT va IELTS bo‘yicha...",
            more_info: "Ko'proq ma'lumot",
            stats_text: "300 + Sertifikatli o'quvchilar",
            haqimizda: "Biz haqimizda"
        },
        en: {
            home: "Home",
            about: "About Us",
            courses: "Courses",
            contact: "Contact",
            quote: "An investment in knowledge pays the best interest",
            desc: "At Temurbek School, each student is taught individually with a personal approach...",
            hero1_title: "Achieve everything with us",
            hero1_desc: "TEMURBEK SCHOOL Learning Center was founded by Temurbek Shakhobov, who is a teacher with more than seven years of teaching experience. Temurbek Shakhobov teaches General English, CEFR, Multilevel tests, IELTS, TKT and ESOL. Under his guidance the students achieved consistently high results.",
            hero2_title: "Inspiring results from our teacher",
            hero2_desc: "They have achieved a C1 level in General English and CEFR and over 20 students have achieved IELTS scores of 7.0 or above. It is noteworthy that Temurbek Shakhobov is considered one of the first international English language teachers to have received the prestigious TKT Band 4 and C2 levels, which confirms the teacher's high educational qualifications.s",
            hero3_title: "Achieve everything with us",
            hero3_desc: "TEMURBEK SCHOOL O'quv Markazi - bu Umumiy Ingliz tili, CEFR, TKT va IELTS bo‘yicha ta’lim berishga ixtisoslashgan ta’lim markazi. Kurslar yuqori malakali o‘qituvchilar tomonidan olib boriladi va talabalarining muloqot qilish ko‘nikmalarini oshirishga alohida e’tibor qaratiladi. Talabalar darajasini aniqroq baholash va ularning rivojlanishini kuzatib borish uchun har uch oyda bir marta darajani baholash imtihonlari o‘tkaziladi.",
            more_info: "Learn more",
            stats_text: "300+ Certified Students",
            button1: "More info",
            haqimizda: "About us"
        },
        ru: {
            home: "Главная",
            about: "О нас",
            courses: "Курсы",
            contact: "Контакты",
            quote: "Инвестиции в знания приносят наилучшие дивиденды",
            desc: "В Temurbek School каждый ученик обучается индивидуально по личному подходу...",
            hero1_title: "Достигайте всего с нами",
            hero1_desc: "Основан Темурбеком Шахобовым, опытным преподавателем...",
            hero2_title: "Вдохновляющие результаты от нашего учителя",
            hero2_desc: "Достигли уровня C1 по общему английскому и CEFR...",
            hero3_title: "Достигайте всего с нами",
            hero3_desc: "Учебный центр специализируется на General English, CEFR, TKT и IELTS...",
            more_info: "Подробнее",
            stats_text: "300+ Сертифицированных студентов"
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
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }    