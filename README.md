angularjs-cart
==============

AngularJS Shopping Cart forked from [forked from kenyee/angularjs-cart](http://www.github.com/kenyee/angularjs-cart)

Changes
-------
* Removed Visual Studio

Usage
-----
Update app.js with your Paypal/Google/Stripe tokens/IDs to use this in your application.

For Stripe.js, change the chargeurl parameter so it points to a form processing handler on your web site that [commits the charge](https://stripe.com/docs/tutorials/charges).  Stripe is different than Paypal/Google in that it's a two-step process that's similar to an OAuth login.

