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
            haqimizda: "Biz haqimizda",
            sertifikat: "300+ Sertifikatli o'quvchilar",
            us:"Nega aynan biz?",
            why:"Innovative approach to education",
            ustoz:"Tajribali ustozlar",
            malumot:"Bizning o‘qituvchilarimiz — yuqori malakali mutaxassislar bo‘lib, zamonaviy pedagogika usullarini qo‘llaydilar va har bir o‘quvchining rivojlanishini diqqat bilan kuzatadilar.",
            ustoz2:"Shaxsiy Yondashuv",
            malumot2:"Temurbek School har bir o‘quvchining yondashuvini alohida baholab, ularning ehtiyojlariga mos individual dasturlarni taklif etadi.",
            ustoz3:"Isbotlangan natijalar",
            malumot3:"Bizning o‘qituvchilarimiz — yuqori malakali mutaxassislar bo‘lib, zamonaviy pedagogika usullarini qo‘llaydilar va har bir o‘quvchining rivojlanishini diqqat bilan kuzatadilar.",
            ustoz4:"Vaqtida Ta'lim.",
            malumot4:"Darslar qat’iy jadval asosida, o‘z vaqtida va reja asosida o‘tkaziladi. Har bir mavzu kerakli vaqtda o‘zlashtirilishiga ishonch hosil qilamiz.",
            ustoz5:"Moslashuvchan Yechimlar",
            malumot5:"Bizda onlayn va oflayn ta’lim formatlari mavjud bo‘lib, o‘quvchilar istalgan holatda qulay tarzda bilim olishlari mumkin.",
            ustoz6:"Samarali Muloqot",
            malumot6:"Ota-onalar va o‘qituvchilar o‘rtasidagi ochiq aloqalar, fikr almashinuvi va muntazam tahlillar orqali o‘quvchilarning yutuqlari ta’minlanadi.",
            kurs:"Kurslar",
            kurst1:"Ta'rif:",
            kurst2:"Darajalar:",
            kurst3:"Davomiyligi:",
            kurst4:"Xususiyatlar:",
            kurs_ielts: "IELTS",
            desc_ielts: "Ta'rif: Xalqaro Ingliz Tili Test Tizimiga tayyorgarlik kursi.",
            levels_ielts: "Darajalar: O‘rta, Yuqori",
            duration_ielts: "Davomiyligi: 1-6 oy",
            features_ielts: "Xususiyatlar: Amaliy testlar, Yozish topshiriqlari, Gapirish mashg‘ulotlari, Tinglash texnikasi",
    
            kurs_cefr: "CEFR",
            desc_cefr: "Ta'rif: Yevropa Tillar Umumiy Tavsifiga moslashtirilgan kurs.",
            levels_cefr: "Darajalar: A1, A2, B1, B2, C1, C2",
            duration_cefr: "Davomiyligi: 3-12 oy",
            features_cefr: "Xususiyatlar: Til bilimi, Ko‘nikmalarni baholash, Imtihon tayyorlov",
    
            kurs_tkt: "TKT",
            desc_tkt: "Ta'rif: O‘qituvchilar uchun Teaching Knowledge Test tayyorlov kursi.",
            levels_tkt: "Darajalar: 1-modul, 2-modul, 3-modul",
            duration_tkt: "Davomiyligi: 1-3 oy",
            features_tkt: "Xususiyatlar: O‘qitish metodikasi, Dars rejalash, Sinfni boshqarish",
    
            kurs_aptis: "APTIS",
            desc_aptis: "Ta'rif: British Council tomonidan ishlab chiqilgan test tizimi.",
            levels_aptis: "Darajalar: A1, A2, B1, B2, C",
            duration_aptis: "Davomiyligi: 1-3 oy",
            features_aptis: "Xususiyatlar: Test formatiga tayyorlanish, O‘qish va tinglash amaliyoti, Yozish topshiriqlari, Gapirish amaliyoti",
    
            kurs_multilevel: "Multilevel",
            desc_multilevel: "Ta'rif: Har xil darajadagi talabalar uchun moslashtirilgan kurs.",
            levels_multilevel: "Darajalar: Boshlang‘ich, O‘rta, Yuqori",
            duration_multilevel: "Davomiyligi: Moslashuvchan",
            features_multilevel: "Xususiyatlar: Individual e’tibor, Guruh mashg‘ulotlari, Ko‘nikmalarni rivojlantirish",
    
            kurs_math: "Matematika kursi",
            desc_math: "Ta'rif: Matematik muammolarni hal qilishga qaratilgan.",
            levels_math: "Darajalar: Asosiy, O‘rta, Yuqori",
            duration_math: "Davomiyligi: 3-12 oy",
            features_math: "Xususiyatlar: Algebra, Geometriya, Hisoblash, Imtihon tayyorlov",
    
            kurs_russian: "Rus tili kurslari",
            desc_russian: "Ta'rif: Rus tilini darajali o‘rgatish kurslari.",
            levels_russian: "Darajalar: Boshlang‘ich, O‘rta, Yuqori",
            duration_russian: "Davomiyligi: 3-12 oy",
            features_russian: "Xususiyatlar: Grammatika, Lug‘at, Gapirish, Madaniy kontekst",
    
            kurs_korean: "TOPIK asosidagi Koreys tili kurslari",
            desc_korean: "Ta'rif: Koreys tilini bilish darajasini aniqlovchi testga tayyorlov.",
            levels_korean: "Darajalar: Boshlang‘ich, O‘rta, Yuqori",
            duration_korean: "Davomiyligi: 3-12 oy",
            features_korean: "Xususiyatlar: Grammatika, Lug‘at, Tinglash, O‘qish, Yozish",
    
            kurs_pmi: "Prezident maktabiga tayyorlov",
            desc_pmi: "Ta'rif: Prezident maktablariga kirish uchun keng qamrovli tayyorlov.",
            levels_pmi: "Darajalar: Umumiy",
            duration_pmi: "Davomiyligi: 3-12 oy",
            features_pmi: "Xususiyatlar: Matematika, Mantiq, Fan, Til ko‘nikmalari",
            oquvchi:"O'quvchilar fikri",
            date_nodir: "2022y 16-avg",
            feedback_nodir: "Bu yerda taklif etilgan kurslar ajoyib! Ayniqsa, o‘qituvchilar darslarni men uchun moslashtirganlari yoqdi. Avval grammatikada qiynalardim, hozir esa o‘zimga ishonchim ortdi.",
            
            date_ozodbek: "2023y 8-may",
            feedback_ozodbek: "Bu ingliz tili kursi men uchun juda yaxshi tajriba bo‘ldi. Darslar qiziqarli va amaliy, o‘qituvchi juda qo‘llab-quvvatlaydi. Endi o‘zimni erkinroq gapira olaman.",
            
            date_axad: "2024y 18-yanv",
            feedback_axad: "Bu kurs menga juda foydali bo‘ldi. Materiallar qiziqarli va men ingliz tilida gapirishga ko‘proq ishonch bilan yondashyapman.",
            
            date_bunyod: "2025y 23-sen",
            feedback_bunyod: "Men bu kursda qilgan taraqqiyotimdan mamnunman. Darslar amaliy bo‘lib, ingliz tilini kunlik holatlarda bemalol ishlatishim osonlashdi.",
            faq_title: "Savollar ?",
            faq_subtitle: "Eng ko'p so'ralgan savollar",
            faq_description: "Bu yerda siz bizning o'quv markazimiz haqida <br> top 10ta eng kop so'ralgan savollarni ko'rishingiz mumkin.",
            faq_q1: "Qanday yo‘nalishlarda ta’lim beriladi ?",
            faq_a1: "Ingliz tili: CEFR, IELTS. matematika, Fizika, Koreys, va SAT.",
            faq_q2: "Darslar haftada necha marta o'tiladi?",
            faq_a2: "Darslar haftada <span class='spn11'>3 marta 1 yarim soat+</span>dan o'tiladi",
            faq_q3: "Natijaga erishgan o'quvchilar nechta ?",
            faq_a3: "Bizda 700+ sertifikatli hamda o'qish kirgan o'quvchilar mavjud",
            faq_q4: "O‘quvchilarni baholash qanday olib boriladi?",
            faq_a4: "Har oy yakunida testlar va baholovchi darslar o‘tkaziladi.",
            faq_q5: "Malakali o'qituvchilar dars beradimi?",
            faq_a5: "Albatta, O'qituvchilar yo'nalishlari bo'yicha maxsus sertifikatga ega",
            faq_more_btn: "Ko'proq savollar",
            school:"Temurbek schoolda kelajagingiznibirgalikda quramiz",
            customer:"Mijozlarni qo'llab-quvvatlash bizning ustuvor vazifamizdir.",
            birga:"Temurbek School bilan doimo birga bo'ling",
            biz:"Bizni yo'qotib qoymaslik uchun kanalimizga obuna bo'ling.",
            bosh:"Bosh sahifa",
            haqimizda:"Biz haqimizda",
            kurses:"Kurslar",
            contact:"Aloqa",
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
            haqimizda: "About us",
            sertifikat: "300+ Certificated Students",
            us:"Why us?",
            why:"Innovative approach to education",
            ustoz:"Experienced teachers",
            malumot:"Our teachers are highly qualified specialists who use modern pedagogical methods and carefully monitor the development of each pupil.",
            ustoz2:"Personal approach",
            malumot2:"Temurbek School evaluates the approach of each student individually and offers individual programs tailored to their needs.",
            ustoz3:"Proven results",
            malumot3:"Our teachers are highly qualified specialists who use modern pedagogical methods and carefully monitor the development of each pupil.",
            ustoz4:"Timely education.",
            malumot4:"Classes are conducted according to a strict schedule, on time and according to a plan. We make sure that each topic is mastered at the appropriate time.",
            ustoz5:"Flexible solutions",
            malumot5:"We have both online and offline learning formats so that learners can conveniently take cognition in any situation.",
            ustoz6:"Effective communication",
            malumot6:"Student achievement is ensured through open communication between parents and teachers, exchange of ideas and systematic analysis.",
            kurs:"Courses",
            kurst1:"Description:",
            kurst2:"Levels:",
            kurst3:"Duration:",
            kurst4:"Properties:",
            kurs_ielts: "IELTS",
            desc_ielts: "Description: Preparation course for the International English Language Testing System.",
            levels_ielts: "Levels: Intermediate, Advanced",
            duration_ielts: "Duration: 1-6 months",
            features_ielts: "Features: Practice tests, Writing tasks, Speaking sessions, Listening techniques",
    
            kurs_cefr: "CEFR",
            desc_cefr: "Description: Course aligned with the Common European Framework of Reference for Languages.",
            levels_cefr: "Levels: A1, A2, B1, B2, C1, C2",
            duration_cefr: "Duration: 3-12 months",
            features_cefr: "Features: Language proficiency, Skill assessment, Exam preparation",
    
            kurs_tkt: "TKT",
            desc_tkt: "Description: Teaching Knowledge Test preparation course for teachers.",
            levels_tkt: "Levels: Module 1, 2, 3",
            duration_tkt: "Duration: 1-3 months",
            features_tkt: "Features: Teaching methods, Lesson planning, Classroom management",
    
            kurs_aptis: "APTIS",
            desc_aptis: "Description: A test system developed by the British Council.",
            levels_aptis: "Levels: A1, A2, B1, B2, C",
            duration_aptis: "Duration: 1-3 months",
            features_aptis: "Features: Test format training, Reading and listening practice, Writing tasks, Speaking practice",
    
            kurs_multilevel: "Multilevel",
            desc_multilevel: "Description: Adapted course for students of various levels.",
            levels_multilevel: "Levels: Beginner, Intermediate, Advanced",
            duration_multilevel: "Duration: Flexible",
            features_multilevel: "Features: Individual attention, Group work, Skill development",
    
            kurs_math: "Math Course",
            desc_math: "Description: Aimed at solving mathematical problems.",
            levels_math: "Levels: Basic, Intermediate, Advanced",
            duration_math: "Duration: 3-12 months",
            features_math: "Features: Algebra, Geometry, Calculations, Exam prep",
    
            kurs_russian: "Russian Language Courses",
            desc_russian: "Description: Level-based Russian language courses.",
            levels_russian: "Levels: Beginner, Intermediate, Advanced",
            duration_russian: "Duration: 3-12 months",
            features_russian: "Features: Grammar, Vocabulary, Speaking, Cultural context",
    
            kurs_korean: "TOPIK-based Korean Courses",
            desc_korean: "Description: Preparation for the Korean language proficiency test.",
            levels_korean: "Levels: Beginner, Intermediate, Advanced",
            duration_korean: "Duration: 3-12 months",
            features_korean: "Features: Grammar, Vocabulary, Listening, Reading, Writing",
    
            kurs_pmi: "Presidential School Prep",
            desc_pmi: "Description: Comprehensive preparation for admission to presidential schools.",
            levels_pmi: "Levels: General",
            duration_pmi: "Duration: 3-12 months",
            features_pmi: "Features: Math, Logic, Science, Language skills",
            oquvchi:"Students feedback",
            date_nodir: "Aug 16, 2022",
            feedback_nodir: "The courses offered here are fantastic! I especially loved how the instructors tailored lessons to suit my pace. I struggled with grammar before, but now I feel confident and ready to ace my exams.",
            
            date_ozodbek: "May 8, 2023",
            feedback_ozodbek: "This English course has been a great experience for me. The lessons are interesting and practical, and the teacher is very supportive. I’ve gained more confidence in speaking and feel real progress in my English.",
            
            date_axad: "Jan 18, 2024",
            feedback_axad: "This course has been very helpful. The material is engaging, and I feel much more confident speaking in English now. Definitely worth learning, paying and also spending time for this course.",
            
            date_bunyod: "Sep 23, 2025",
            feedback_bunyod: "I’m happy with my progress in this course. The lessons are practical, and I feel more comfortable using English in everyday situations. The teaching style is great, and I’ve learned a lot.",
            faq_title: "Questions?",
            faq_subtitle: "Most Frequently Asked Questions",
            faq_description: "Here you can find the top 10 most frequently asked questions about our educational center.",
            faq_q1: "What subjects are taught?",
            faq_a1: "English: CEFR, IELTS. Math, Physics, Korean, and SAT.",
            faq_q2: "How many times a week are the lessons held?",
            faq_a2: "Classes are held 3 times a week, 1.5 hours+ each.",
            faq_q3: "How many students have achieved results?",
            faq_a3: "We have over 700 certified students and those who have entered universities.",
            faq_q4: "How is student assessment carried out?",
            faq_a4: "Tests and evaluative lessons are conducted at the end of each month.",
            faq_q5: "Are the teachers qualified?",
            faq_a5: "Of course, the teachers have special certifications in their respective fields.",
            faq_more_btn: "More questions",
            faq_title: "Questions?",
            faq_subtitle: "Most Frequently Asked Questions",
            faq_description: "Here you can find the top 10 most frequently asked questions about our educational center.",
            faq_q1: "What subjects are taught?",
            faq_a1: "English: CEFR, IELTS. Math, Physics, Korean, and SAT.",
            faq_q2: "How many times a week are the lessons held?",
            faq_a2: "Classes are held 3 times a week, 1.5 hours+ each.",
            faq_q3: "How many students have achieved results?",
            faq_a3: "We have over 700 certified students and those who have entered universities.",
            faq_q4: "How is student assessment carried out?",
            faq_a4: "Tests and evaluative lessons are conducted at the end of each month.",
            faq_q5: "Are the teachers qualified?",
            faq_a5: "Of course, the teachers have special certifications in their respective fields.",
            faq_more_btn: "More questions",
            faq_title: "Savollar ?",
            faq_subtitle: "Eng ko'p so'ralgan savollar",
            faq_description: "Bu yerda siz bizning o'quv markazimiz haqida <br> top 10ta eng kop so'ralgan savollarni ko'rishingiz mumkin.",
            faq_q1: "Qanday yo‘nalishlarda ta’lim beriladi ?",
            faq_a1: "Ingliz tili: CEFR, IELTS. matematika, Fizika, Koreys, va SAT.",
            faq_q2: "Darslar haftada necha marta o'tiladi?",
            faq_a2: "Darslar haftada <span class='spn11'>3 marta 1 yarim soat+</span>dan o'tiladi",
            faq_q3: "Natijaga erishgan o'quvchilar nechta ?",
            faq_a3: "Bizda 700+ sertifikatli hamda o'qish kirgan o'quvchilar mavjud",
            faq_q4: "O‘quvchilarni baholash qanday olib boriladi?",
            faq_a4: "Har oy yakunida testlar va baholovchi darslar o‘tkaziladi.",
            faq_q5: "Malakali o'qituvchilar dars beradimi?",
            faq_a5: "Albatta, O'qituvchilar yo'nalishlari bo'yicha maxsus sertifikatga ega",
            faq_more_btn: "Ko'proq savollar",
            school:"At Temurbek school Build your future together",
            customer:"Customer support is our top priority. We're ready to answer all your questions.",
            birga:"Stay connected with Temurbek School",
            biz:"Stay updated — subscribe to our channel!",
            bosh:"Main page",
            haqimizda:"About us",
            kurses:"Courses",
            contact:"Contact",

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
            sertifikat: "300+ Сертифицированных студентов",
            us:"Почему именно мы?",
            why:"Инновационный подход к образованию",
            ustoz:"Проверенные учителя",
            malumot:"Наши преподаватели – высококвалифицированные специалисты, которые используют современные педагогические методы и тщательно следят за развитием каждого ученика.",
            ustoz2:"Индивидуальный подход",
            malumot2:"Школа Темурбек оценивает подход каждого ученика индивидуально и предлагает индивидуальные программы, адаптированные к его потребностям.",
            ustoz3:"Проверенные результаты",
            malumot3:"Наши преподаватели – высококвалифицированные специалисты, которые используют современные педагогические методы и тщательно следят за развитием каждого ученика.",
            ustoz4:"Своевременное обучение",
            malumot4:"Занятия проводятся строго по расписанию, в срок и по плану. Мы следим за тем, чтобы каждая тема была освоена в нужное время.",
            ustoz5:"Гибкие решения",
            malumot5:"У нас есть как онлайн, так и офлайн форматы обучения, чтобы учащиеся могли удобно воспринимать знания в любой ситуации.",
            ustoz6:"Эффективная коммуникация",
            malumot6:"Успеваемость учащихся обеспечивается за счет открытого общения между родителями и учителями, обмена идеями и систематического анализа.",
            kurs:"Месячные",
            kurst1:"Описание:",
            kurst2:"Уровней:",
            kurst3:"Длительность:",
            kurst4:"Свойства:",
            kurs_ielts: "IELTS",
            desc_ielts: "Описание: Подготовительный курс к Международной системе тестирования английского языка.",
            levels_ielts: "Уровни: Средний, Продвинутый",
            duration_ielts: "Продолжительность: 1-6 месяцев",
            features_ielts: "Особенности: Практические тесты, Письменные задания, Устные занятия, Техники аудирования",
    
            kurs_cefr: "CEFR",
            desc_cefr: "Описание: Курс, соответствующий общеевропейским рекомендациям по языкам.",
            levels_cefr: "Уровни: A1, A2, B1, B2, C1, C2",
            duration_cefr: "Продолжительность: 3-12 месяцев",
            features_cefr: "Особенности: Знание языка, Оценка навыков, Подготовка к экзамену",
    
            kurs_tkt: "TKT",
            desc_tkt: "Описание: Курс подготовки к Teaching Knowledge Test для преподавателей.",
            levels_tkt: "Уровни: Модуль 1, 2, 3",
            duration_tkt: "Продолжительность: 1-3 месяцев",
            features_tkt: "Особенности: Методика преподавания, Планирование уроков, Управление классом",
    
            kurs_aptis: "APTIS",
            desc_aptis: "Описание: Тестовая система, разработанная Британским Советом.",
            levels_aptis: "Уровни: A1, A2, B1, B2, C",
            duration_aptis: "Продолжительность: 1-3 месяцев",
            features_aptis: "Особенности: Подготовка к формату теста, Практика чтения и аудирования, Письменные задания, Устная практика",
    
            kurs_multilevel: "Многоуровневый курс",
            desc_multilevel: "Описание: Курс, адаптированный для студентов разных уровней.",
            levels_multilevel: "Уровни: Начальный, Средний, Продвинутый",
            duration_multilevel: "Продолжительность: Гибко",
            features_multilevel: "Особенности: Индивидуальное внимание, Групповые занятия, Развитие навыков",
    
            kurs_math: "Курс математики",
            desc_math: "Описание: Направлен на решение математических задач.",
            levels_math: "Уровни: Базовый, Средний, Продвинутый",
            duration_math: "Продолжительность: 3-12 месяцев",
            features_math: "Особенности: Алгебра, Геометрия, Вычисления, Подготовка к экзаменам",
    
            kurs_russian: "Курсы русского языка",
            desc_russian: "Описание: Курсы русского языка с делением по уровням.",
            levels_russian: "Уровни: Начальный, Средний, Продвинутый",
            duration_russian: "Продолжительность: 3-12 месяцев",
            features_russian: "Особенности: Грамматика, Словарный запас, Разговорная речь, Культурный контекст",
    
            kurs_korean: "Курсы корейского языка по TOPIK",
            desc_korean: "Описание: Подготовка к тесту на знание корейского языка.",
            levels_korean: "Уровни: Начальный, Средний, Продвинутый",
            duration_korean: "Продолжительность: 3-12 месяцев",
            features_korean: "Особенности: Грамматика, Лексика, Аудирование, Чтение, Письмо",
    
            kurs_pmi: "Подготовка в Президентскую школу",
            desc_pmi: "Описание: Комплексная подготовка к поступлению в президентские школы.",
            levels_pmi: "Уровни: Общий",
            duration_pmi: "Продолжительность: 3-12 месяцев",
            features_pmi: "Особенности: Математика, Логика, Наука, Языковые навыки",
            oquvchi:"Отзывы студентов",
            date_nodir: "16 авг 2022 г.",
            feedback_nodir: "Курсы здесь просто фантастические! Особенно понравилось, как преподаватели адаптировали уроки под мой уровень. Раньше у меня были проблемы с грамматикой, но теперь я уверен в себе.",
            
            date_ozodbek: "8 мая 2023 г.",
            feedback_ozodbek: "Этот курс английского языка был для меня отличным опытом. Уроки интересные и практичные, а преподаватель очень поддерживает. Я стал увереннее говорить на английском.",
            
            date_axad: "18 ян 2024 г.",
            feedback_axad: "Этот курс был очень полезным. Материал интересный, и я чувствую себя намного увереннее при разговоре на английском языке.",
            
            date_bunyod: "23 сент 2025 г.",
            feedback_bunyod: "Я доволен своим прогрессом в этом курсе. Уроки практичные, и мне стало легче использовать английский в повседневной жизни.",
            faq_title: "Вопросы?",
            faq_subtitle: "Часто задаваемые вопросы",
            faq_description: "Здесь вы можете найти топ-10 самых часто задаваемых вопросов о нашем учебном центре.",
            faq_q1: "Какие направления преподаются?",
            faq_a1: "Английский: CEFR, IELTS. Математика, Физика, Корейский и SAT.",
            faq_q2: "Сколько раз в неделю проходят занятия?",
            faq_a2: "Занятия проходят 3 раза в неделю, по 1.5 часа и более.",
            faq_q3: "Сколько студентов достигли успеха?",
            faq_a3: "У нас более 700 сертифицированных студентов и тех, кто поступил в университеты.",
            faq_q4: "Как проводится оценка студентов?",
            faq_a4: "В конце каждого месяца проводятся тесты и оценочные уроки.",
            faq_q5: "Квалифицированные ли преподаватели?",
            faq_a5: "Конечно, преподаватели имеют специальные сертификаты по своим направлениям.",
            faq_more_btn: "Больше вопросов",
            faq_title: "Вопросы?",
            faq_subtitle: "Часто задаваемые вопросы",
            faq_description: "Здесь вы можете найти топ-10 самых часто задаваемых вопросов о нашем учебном центре.",
            faq_q1: "Какие направления преподаются?",
            faq_a1: "Английский: CEFR, IELTS. Математика, Физика, Корейский и SAT.",
            faq_q2: "Сколько раз в неделю проходят занятия?",
            faq_a2: "Занятия проходят 3 раза в неделю, по 1.5 часа и более.",
            faq_q3: "Сколько студентов достигли успеха?",
            faq_a3: "У нас более 700 сертифицированных студентов и тех, кто поступил в университеты.",
            faq_q4: "Как проводится оценка студентов?",
            faq_a4: "В конце каждого месяца проводятся тесты и оценочные уроки.",
            faq_q5: "Квалифицированные ли преподаватели?",
            faq_a5: "Конечно, преподаватели имеют специальные сертификаты по своим направлениям.",
            faq_more_btn: "Больше вопросов",
            school:"В школе Темурбека Стройте свое будущее вместе",
            customer:"Поддержка клиентов — наш главный приоритет. Мы готовы ответить на все ваши вопросы.",
            birga:"Оставайтесь на связи со школой Темурбек",
            biz:"Не теряйте нас — подпишитесь на наш канал!",
            bosh:"Главная",
            haqimizda:"О нас",
            kurses:"Курсы",
            contact:"Контакты",

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