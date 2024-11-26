
### Пояснення запиту
1. **Префікси**:

   - dbo: - DBpedia онтологія
   - dbr: - DBpedia ресурси
   - rdfs: - RDF Schema


2. **Структура запиту**:

   - SELECT вибирає країну, її назву та мови
   - WHERE визначає умови пошуку
   - GROUP BY групує результати за країною
   - ORDER BY сортує за назвою країни


3. **Фільтри**:

   - Вибір лише англійських назв
   - Початок назви на "A"
   - Належність до Європи або Північної Америки



### ✅ Результат
**HTML**
![image](https://github.com/user-attachments/assets/0fa83d84-4f5b-4474-bbdc-f29a68e6cb46)

### Як використати
1. Відкрийте [DBpedia SPARQL endpoint](http://dbpedia.org/sparql)
2. Вставте запит
3. Натисніть "Execute"

### Особливості
- Групування мов через символ "|"
- Перетворення назв мов у верхній регістр
- Включення країн без мов завдяки OPTIONAL

## Файли
- query2.sparql - файл з SPARQL запитом
- README.md - документація

## Завдання 3: Нобелівські лауреати

### SPARQL Запит
### 3.1 Лауреати за віком

```sparql
PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX dbr: <http://dbpedia.org/resource/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?person ?personLabel ?birthDate
WHERE {
    ?person dbo:award dbr:Nobel_Prize_in_Physics ;
            rdfs:label ?personLabel ;
            dbo:birthDate ?birthDate .
    FILTER(LANG(?personLabel) = "en")
}
ORDER BY ?birthDate
```
### 3.2 Топ-10 університетів

```sparql
PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX dbr: <http://dbpedia.org/resource/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?university ?universityLabel (COUNT(DISTINCT ?person) as ?laureateCount)
WHERE {
    ?person dbo:award dbr:Nobel_Prize_in_Physics ;
            dbo:almaMater ?university .
    ?university rdfs:label ?universityLabel .
    FILTER(LANG(?universityLabel) = "en")
}
GROUP BY ?university ?universityLabel
ORDER BY DESC(?laureateCount)
LIMIT 10
```

### 🧩 3.3 Лауреати-іммігранти

```sparql
PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX dbr: <http://dbpedia.org/resource/>

SELECT (COUNT(DISTINCT ?person) as ?immigrantCount)
WHERE {
    ?person dbo:award dbr:Nobel_Prize_in_Physics ;
            dbo:birthPlace/dbo:country ?birthCountry ;
            dbo:almaMater ?university .
    ?university dbo:country ?universityCountry .
    FILTER(?birthCountry != ?universityCountry)
}
```

### Пояснення запиту
1. **Префікси**:

   - dbo: - DBpedia онтологія
   - dbr: - DBpedia ресурси
   - rdfs: - RDF Schema


2. **Структура запитів**:

   - Запит 3.1: Сортування за віком
   - Запит 3.2: Групування за університетами
   - Запит 3.3: Підрахунок іммігрантів



### ✅ Результат
**HTML**
![image](https://github.com/user-attachments/assets/eca74825-4ac8-4ff9-9ee5-1b1196530665)
![image](https://github.com/user-attachments/assets/af108994-708b-4a6f-bbf7-411f59f60c1b)
![image](https://github.com/user-attachments/assets/7cefb2ad-48c6-4528-8dc4-a2327fb881cd)

### Як використати
1. Відкрийте [DBpedia SPARQL endpoint](http://dbpedia.org/sparql)
2. Вставте запит
3. Натисніть "Execute"

### Особливості
- Можливі пропуски в даних
- Різні формати дат
- Потрібна перевірка результатів

## Файли
- query3_1.sparql - запит лауреатів
- query3_2.sparql - запит університетів
- query3_3.sparql - запит іммігрантів
- README.md - документація
