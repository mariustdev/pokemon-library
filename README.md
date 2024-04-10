# Pokemon's Library

This project was generated using Vite + React + Typescript + TailwindCSS

## Library dependencies
- [Pokenode](https://pokenode-ts.vercel.app/) as API for receiving Pokémon's data
- [Tailwind](https://tailwindcss.com/) for UI development
- [TailwindIcons](https://heroicons.com/)

Steps that was followed:

- Read documentation on TailwindCSS and Pokenode.
- Based on existing setup added basic structure (cleared unnecessary stuff).
- Defined routes configuration (ex: index/404 pages etc.).
- Created Context for storing/manipulating data for Pokémon's data.
- Created custom hooks to fetch/cache data (used them in PokemonContext to expose data).
- Created List container and list Items.
- Added few common reusable components (ex. Each/LoadingContainer/ErrorContainer etc.).
- Created filter header and added custom function to filter Pokémon's data.
- Added detail page with some Pokémon specifications.
- Documentation.
- Testing/Pagination to implement (pagination in my opinion is redundant because API don't provide implementation for search/filter).
- To finish this project I spent approximately 10-12 hours.

## Project Setup

1. Clone the repository

```bash
git clone https://github.com/mariustdev/pokemon-library.git
```

2. Install dependencies
```bash
yarn 
```

3. Run development server
```bash
yarn dev
```
## Build


```bash
yarn build
```
### Answers

- What part of building the project was the most difficult? Why?
    - There is no difficult parts in the project. Some parts where more time costing.
- How long did it take to have this test completed ? Which part of the test took you longer? Could you specify roughly the amount of time it took you to do the following:
    - Understand requirements - ~30m
    - Read documentation / Planing implementation steps - ~ 2h
    - Global State Management and Routing - ~1h
    - Custom hooks - ~ 1h (understanding API and how to receive all the data)
    - Search / Filter implementation - ~1h
    - Listing of the results - ~1h
    - Detail page - ~1h (with custom hooks)
    - Common UI components - ~1h
    - Common functions / Small refactorings - ~1h
    - Documentation - ~1h
