# BuyCoins | GitHub Repositories Page Clone

This project is a re-creation my github repositories page leveraging the GitHub Graphql API. This
[project](https://somtoamaugo-buycoins-assessment.netlify.app/) is hosted on netlify.

## Motivation

I saw this as an opportunity to learn something new and ofcourse the possibility of working with Ire and Timigod was a massive boost :smiley:

## Code Style

![code style](https://img.shields.io/badge/code%20style-standard-brightgreen)

## Built with

- HTML5
- CSS3
- JavaScript
- GitHub Graphql API

## How to use

- copy code below and paste into bash and run to see my repositories page

```git
git clone https://github.com/amaugosomto/BuyCoins-Assesment
```

- Or click on the **code** button above and select an option that best suite you
- Generate a **READONLY** token in your developer settings / access tokens page
- Break token into four places and replace following variables in `config.js`

```javascript
const ACCESS_TOKEN1
const ACCESS_TOKEN2
const ACCESS_TOKEN3
const ACCESS_TOKEN4
```

> Token is splitted into four places because github would try to match against tokens created in public repos and delete the token for safety reasons, hence need to create **READONLY** tokens

- Change `const USERNAME` in `config.js` to your github username
- Run the application and see the first 20 of your repository

## Contribute

Yes, sure. Would love to see how you can do it better. :smirk:

## Credits

[Apollo GraphQl](https://www.youtube.com/watch?v=6xO87LlijoQ&t=382s)

[Dev Sense](https://www.youtube.com/watch?v=B9PwBp_V0WA)

[A-beginners-guide-to-writing-a-kickass-readme](https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)

[Javascript standard code style](https://google.github.io/styleguide/jsguide.html)
