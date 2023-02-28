# Formik Create Form - React APP

## Description

This Form is created by using React + Vite with Formik and Yup Validation where one needs to fill out the information to successfully submit the form to POST it to the endpoint URL. 

You can find this on the [Website](https://create-form-react-app.netlify.app/)

## Overview of the App

![overview of the form](https://user-images.githubusercontent.com/94776104/221974807-fea7c5a2-3782-482f-8a1c-336a8fb70b01.gif)

## How to Create React APP + Vite (You can get more information from this [page](https://scrimba.com/articles/create-react-app-with-vite/))

```
npm create vite@latest
```
Vite makes life easy by prompting you with questions.

First, Vite asks for your project name.

Then, Vite will want to know if you’re using React or another library

Here, I save vite-app at the my root directory and chose react. For doing that you only need to type ./ instead of the project name. Then

```
npm install

npm run dev

```
You can open the application on your browser [http://localhost:5173](http://localhost:5173)

## How to Run from GitHub Repo

Download or Fork this repository and follow the next steps

```
git clone git@github.com:JielinWang/create-form-react-app.git

npm install

npm run dev

```

Once have run all of the commands above, you can open the application on your browser [http://localhost:5173](http://localhost:5173)

## How to Deploy on Netlify (Create an account on Netlify)

```
npm run build

- go to Netlify find Add New Site - Deploy manually

- Drog and drop you dist directory 

- wait till it deploy online 
```


## Tech Specifications

- Frontend Framework: [React.js](https://reactjs.org)
- Frontend Tool: [Vite](https://vitejs.dev/)
- Styling: [Tailwindcss](https://tailwindcss.com/)
- React Form Builing Library: [Formik](https://formik.org/)
- Form Validation: [Yup](https://www.npmjs.com/package/yup)
- Hosting: [Netlify](https://www.netlify.com/)



## Furthermore for adding more featrues to this project:

- Create backend API and store it in the database 
- Create an All Data display page 
- Email Account Authentication


## Functionalities

- Fill in the Name, Email, Password, Occupation, and state validation form
- Submit button redirects to the success page
- Get request from [API](https://frontend-take-home.fetchrewards.com/form) to display Occupations and States data
- Post request from [API](https://frontend-take-home.fetchrewards.com/form) to submit form data

## Images of the App

Loading page

![loading](https://user-images.githubusercontent.com/94776104/221975765-8d934ce0-ad41-4046-9753-0fd904023ad7.gif)

Fill out the form

![fill out the form](https://user-images.githubusercontent.com/94776104/221975950-63b585e8-f77e-47ca-8d25-5695b761aa24.gif)

Succefully submitting page 

![success page](https://user-images.githubusercontent.com/94776104/221976131-26f4127b-1161-48ca-844e-462a3696a820.gif)


## Author
[Jielin Wang](https://www.linkedin.com/in/jielinwang-/)

## License

MIT License


