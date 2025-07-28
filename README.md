# Random Info Finder

**Random Info Finder** is a simple web app that lets users explore fun facts and trivia based on numbers.  
You can input a number and select a category — **year**, **date**, **math**, or **trivia** — to retrieve interesting facts, or leave it blank to get a random one.

## Features

- Input a number and select a category
- Fetches data from [numbersapi.com](http://numbersapi.com/)
- Displays trivia in an elegant UI using Ant Design
- Supports random or specific queries

## Getting Started

npm install
npm run dev

## Folder structure
```
src/
├── App.tsx
├── api/
│   └── index.ts
├── components/
│   ├── InfoForm.tsx
│   ├── TypeSelector.tsx
│   └── InfoCard.tsx
├── core/
│   └── enums.ts
├── helper/
│   └── index.ts
├── hooks/
│   └── useInfo.ts
└── App.css
```