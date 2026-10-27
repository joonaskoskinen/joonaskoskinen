# Joonas Koskinen - portfolio

Henkilokohtainen portfoliosivusto. Kaytossa oleva sovellus on Vue 3 + Vite, ja sen lahdekoodi sijaitsee src-hakemistossa.

## Kehitys

Edellytykset: Node.js 22.12+ ja pnpm 10.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Tuotantoversio

```sh
pnpm build
pnpm preview
```

Vite kirjoittaa tuotantotiedostot dist-hakemistoon. Preview on paikallinen tarkistuspalvelin, ei tuotantopalvelin. Vercelin asetukset ovat vercel.json-tiedostossa.

## Rakenne

- src/App.vue: sivun sisalto ja navigaatio
- src/style.css: nykyinen visuaalinen tyyli
- src/accessibility.css: responsiivisuuden ja nappaimistokayton korjaukset
- public/: staattiset resurssit
- .github/workflows/build.yml: riippuvuuksien asennus ja tuotantobuild push- ja pull request -tapahtumissa

Repositoriossa on myos aiemman Next.js-toteutuksen tiedostoja. Nykyiset package.json-komennot eivat kayta niita. Niita ei ole poistettu tassa korjauksessa.

## Tarkistukset

CI tarkistaa asennuksen ja tuotantobuildin. Se ei korvaa selaimessa tehtavia toiminnallisuus- tai saavutettavuustesteja. Tarkista erityisesti mobiilinavigaatio, nappaimistofokus, ankkurilinkit ja kapeiden nayttojen taitto.

Dist on gitignoressa, mutta jo versionhallinnassa olevat dist-tiedostot eivat poistu silla. Niiden erillinen poistaminen versionhallinnasta ja vanhan Next.js-rakenteen siivous ovat jatkotoita.
