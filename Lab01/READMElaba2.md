## 🌐 Завдання 2: Веб-сторінка з анотаціями

### Опис
Створено веб-сторінку про книгу з трьома типами анотацій:
1. JSON-LD
2. Microdata
3. RDFa

### 📑 Структура анотацій

### 1️⃣ JSON-LD
```json
 <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Три товариші",
      "image": "/api/placeholder/200/300",
      "author": {
        "@type": "Person",
        "name": "Еріх Марія Ремарк"
      },
      "isbn": "978-617-12-6067-2",
      "numberOfPages": 480,
      "publisher": {
        "@type": "Organization",
        "name": "Клуб Сімейного Дозвілля"
      },
      "datePublished": "2018-05-10",
      "inLanguage": "uk",
      "genre": "Класика",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "1583"
      }
    }
    </script>
```

### 2️⃣ Microdata
```html

   <div class="container">
        <!-- Microdata анотація -->
        <article itemscope itemtype="https://schema.org/Book" class="book-card">
            <img itemprop="image" src="/api/placeholder/200/300" alt="Обкладинка книги Три товариші" class="book-image">

            <div class="book-details">
                <h1 itemprop="name">Три товариші</h1>

                <div>
                    <strong>Автор:</strong>
                    <span itemprop="author" itemscope itemtype="https://schema.org/Person">
                        <span itemprop="name">Еріх Марія Ремарк</span>
                    </span>
                </div>

                <div itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
                    <span class="rating">★★★★★</span>
                    <span itemprop="ratingValue">4.7</span>/5
                    на основі <span itemprop="reviewCount">1583</span> відгуків
                </div>
            </div>
        </article>

```

### 3️⃣ RDFa
```html

   <section vocab="https://schema.org/" typeof="Book">
            <h2>Деталі книги</h2>
            <ul>
                <li>
                    <strong>ISBN:</strong>
                    <span property="isbn">978-617-12-6067-2</span>
                </li>
                <li>
                    <strong>Кількість сторінок:</strong>
                    <span property="numberOfPages">480</span>
                </li>
                <li>
                    <strong>Видавництво:</strong>
                    <span property="publisher" typeof="Organization">
                        <span property="name">Клуб Сімейного Дозвілля</span>
                    </span>
                </li>
                <li>
                    <strong>Дата публікації:</strong>
                    <span property="datePublished">2018-05-10</span>
                </li>
                <li>
                    <strong>Жанр:</strong>
                    <span property="genre">Класика</span>
                </li>
            </ul>
        </section>
    

```

### Перевірка
Код перевірено за допомогою:
1. [Google Rich Results Test](https://search.google.com/test/rich-results)
2. [Schema.org Validator](https://validator.schema.org/)

### Файли
- 📄 [lab01_task2.html](lab01_task2.html) - HTML-сторінка з анотаціями

### Особливості реалізації
1. Використано схему "Lab01_task2" зі Schema.org
2. Додано різні типи метаданих:
   - Основна інформація про книгу
   - Дані про автора
   - Рейтинг та відгуки
   - Видавничі деталі
3. Стилізація для кращого відображення

### Результати тестування
✅ Всі три типи анотацій успішно валідовані
![image](https://github.com/user-attachments/assets/35a9bacf-f88e-4a9a-9e18-6287968590f8)
![image](https://github.com/user-attachments/assets/9ddb6540-066c-4440-a90d-e4f544b0eed7)
