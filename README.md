# SplitWise

SplitWise is an application simplify your daily life by tracking your daily expenses and helps to split bills among friends easily.

## Functionalities

- User can sign up and sign in to an account
- User can create expense history or can split bills among friends
- User can create friends by sending a request to a registered user

## Installation

- clone this repository with the following url into your local machine in any folder

```bash
  git clone https://github.com/uttamakwana/expensemate-frontend.git
```

- open your code editor

- open the terminal

- install all the necessary dependencies

```bash
npm install
```

- run the development server

```bash
npm run dev
```

## Overview

This project includes serveral folders. Let's deep dive into into

### main.jsx

origin (root directory) of the project

### App.jsx

placed all the routing and components inside it

### components

This components includes all the static components and can be reusable such as Loader, Header, Footer and some UI components like button, headings

### pages

It contains all the pages which are navigable like login, register, home (dashboard), friends, friend-requests, create-transaction, all users.

## store

Redux store for state management of client and other information such as loading, client's friend details and all users details

## hooks

It includes custom hooks for more code readability and lesser redundancy

## constants

It includes static/constants files necessary for projects such as icons, images [import/export]

## firebase

It includes firebase configuration for sign in & sign up with google accounts

## styles

It includes utility, colors, fonts and all index stylesheet necessary for the frontend

## utils

It includes utility functions

## assets

It includes all the static files such as images, svg and logos

## api

It includes API configuration to access backend services


## netlify.toml 

Basic netlify configuration for routing related to the deployment

## public

It includes all the static files needed in the application

## package.json

Contains metadata and information related to the project and store all the dependencies

## index.html

Root of the application which will be visible to the client at the last

## .gitignore
To ignore some files not needed to push in the git repository

## vite.config.js
Some basic configuration related to the vite