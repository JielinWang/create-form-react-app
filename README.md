# Formik Create Form - React APP

## Description

This web application consists on a Food Ordering application where the admin can signIn  add product to the home page and track orders and products on the orderDetail page. Any custome can chosse their items to add to the cart, then make the payment by cash or Paypal.


furthermore for adding more featrues to this project I will create a user signUp and signIn page. so users can not only sign up as a regular users, but also track the food status on their own page and make a review of the food.

[Food-ordering-app Presentation](https://drive.google.com/file/d/1br3lfN7TH7YVLLE79yvOUa7RXjoapOn2/view?usp=sharing)

## Functionalities

- Admin Sign In
- Add dishes to your cart by selecting a quantity, size and extras
- Price and quantity shown in cart updates automatically
- Check out with cash or Paypal
- Create products by signing in as a restaurant admin
- Upload edit or delete your restaurant products
- Create, Edit and Delete Dishes. Including pictures, prices, size and extras

## How to Run

Fork this repository and follow the next steps

```
git clone git@github.com:JielinWang/Food-Ordering-App.git

cd Food-Ordering-APP

npm install
```

Before running `npm run dev`, you will need the following environment variables:

```
MONGO_URL = <This is your MongoDb URI>
ADMIN_USERNAME = <This is your ADMIN_USERNAME>
ADMIN_PASSWORD = <This is your ADMIN_PASSWORD>
TOKEN = <This is your TOKEN>
Paypal: client-id =  <This is your Paypal client-id>
```

Once you have set up the environment variables, you can safely run the application in your computer by running `npm run dev`. Then open [localhost:3000](http//localhost:3000) in your browser.

## Tech Specifications

- Framework: [NextJS](https://nextjs.org/)
- Database: [MongoDB](https://www.mongodb.com/)
- Secondary Storage: [cloudinary](https://imagekit.io/cloudinary-alternative/?utm_source=google&utm_medium=cpc&utm_campaign=cloudinary-alternative&gclid=Cj0KCQiAic6eBhCoARIsANlox86kTNO1sArCY3wVliofqjaKRWohCyZtsSzpvsMj2l2xeUYZDUF9nnkaAv-2EALw_wcB)
- Payment Getaway: [Paypal](https://www.paypal.com/us/home)
- Authorization and Authentication: [cookies](https://auth0.com/docs/manage-users/cookies)

## Images of the App

Home<img width="1439" alt="Screenshot 2023-01-27 at 6 42 08 PM" src="https://user-images.githubusercontent.com/94776104/215232395-e7cc4c55-84df-4054-9ed1-5963308a4a23.png">

PizzaList<img width="1426" alt="Screenshot 2023-01-27 at 6 43 28 PM" src="https://user-images.githubusercontent.com/94776104/215232423-511b82fe-5961-4555-8bd0-62c7967ddf94.png">

AdminLogin Page<img width="1405" alt="Screenshot 2023-01-27 at 6 43 50 PM" src="https://user-images.githubusercontent.com/94776104/215232495-5426ce7c-2421-4be8-805d-e344fe6ce411.png">

Admin Page<img width="1427" alt="Screenshot 2023-01-27 at 6 44 40 PM" src="https://user-images.githubusercontent.com/94776104/215232531-e424a257-0ebe-4c73-9803-13e03a14122d.png">

Pizza Odering Page<img width="1409" alt="Screenshot 2023-01-27 at 6 46 07 PM" src="https://user-images.githubusercontent.com/94776104/215232569-545718ad-c20f-4584-bda1-db9f4ac90477.png">

Pizza CheckOut Page<img width="1394" alt="Screenshot 2023-01-27 at 6 53 31 PM" src="https://user-images.githubusercontent.com/94776104/215232595-8e620a68-97ff-43dc-a1e5-dc322d0d84ce.png">

Order Detail Page<img width="1425" alt="Screenshot 2023-01-27 at 6 54 34 PM" src="https://user-images.githubusercontent.com/94776104/215232652-e3437839-62e1-41a1-85f4-c706b5dd0fc2.png">

Paypal Payment Page<img width="1363" alt="Screenshot 2023-01-27 at 6 55 15 PM" src="https://user-images.githubusercontent.com/94776104/215232690-04e56c1d-ae2f-4ced-adc7-a9e89627eb5d.png">

## Author
[Jielin Wang](https://www.linkedin.com/in/jielinwang-/)

## License

MIT License

## Images Sauce

[Robert's Pizza.com](https://www.robertspizzacompany.com)
