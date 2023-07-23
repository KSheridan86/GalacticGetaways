# Galactic Getaways
## Beyond the Horizon
------------------------------------

![alt text]()

### Live site available [here](). 


-----

## Table of Contents
--------------------------------------

- [Description](#description)
- [Design](#design)
- [Web Marketing](#web-marketing)
- [Features](#features)
- [Testing](#testing)
- [Technologies](#technologies)
- [Deployment](#deployment)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)
- [Author Info](#author-info)

------

## Description
---------------------------------------

#### Welcome to Galactic Getaways.
At Galactic Getaways, we believe that the stars are within reach for everyone. Our mission is to provide customers with a once-in-a-lifetime opportunity to leave the Earth behind and embark on an extraordinary journey to the cosmos. Our state-of-the-art spacecraft will take you on an awe-inspiring trip, circling the globe and docking with the International Space Station (ISS). In this report, we outline our compelling marketing plan to make space travel dreams a reality for adventurers worldwide.


[Back to the Top](#table-of-contents)

-------
## Design
-------

### Wireframe mock-ups
---
Home page: 

The home page provides the user with a clear understanding as to the purpose of the site. 

The welcome message is clearly visible to the user when they first arrive at the site regardless of the device they are using.

![Home Page Wireframe](./src/docs/home-mobile-wf.png)

Tour Page:

Users have the ability to view information on available products and Book a tour. 

The emphasis of the design is to provide a clear layout that can adapt to any size device.


![Tour Page Wireframe]()

About Page:

Users can view a page dedicated to the company and it's goals, this page includes basic information and photos.

![About Wireframe]()

Contact Page:

Users can navigate to the contact page and reach out to the company.

![Contact Wireframe]()


Account/Sign in Page:

Users can create accounts, sign in and see their saved details.

![Accounts Wireframe]()


[Back to the Top](#table-of-contents)

---
## Database Schema

Several custom models were predicted to be required when building the site. These included a User Account/Profile Model and a Tour bookings Model linked to the user account.

![Database Schema Diagram]()

[Back to the Top](#table-of-contents)

---



[Back to the Top](#table-of-contents)

## Web Marketing

#### **Marketing Strategy**

##### Soaring to New Heights - Galactic Getaways Goals.
Our marketing objectives are ambitious yet achievable. Over the next year, we aim to:

- Increase brand awareness and recognition among our target audience by 50%.
- Generate a 30% increase in website traffic through engaging content marketing and social media campaigns.
- Achieve a conversion rate of 20% on space travel package bookings.
- Secure media coverage in leading science and travel publications, reaching a potential audience of 1 million readers.


##### Exploring the Infinite Market Potential
The market for space tourism is rapidly expanding, driven by the increasing interest in space exploration and the allure of experiencing weightlessness and breathtaking views. Our research shows that adventure seekers, science enthusiasts, and affluent individuals are the primary target audience for space travel experiences. With advancements in technology and space infrastructure, the demand for these unparalleled journeys is expected to soar in the coming years. 

The global space tourism market is projected to reach $1.7 billion by 2027, growing at a CAGR of 16.6% from 2020 to 2027. The market is expected to be driven by the increasing number of space exploration missions and the growing investments in space tourism.

##### Competitor Analysis
Redefining Space Tourism, Setting Ourselves Apart
While the space tourism industry is becoming competitive, StellarVoyage stands out as a pioneer in providing comprehensive and unforgettable space travel adventures. Unlike competitors, our tours offer an extended orbit around the Earth, allowing customers to view iconic landmarks from space. Furthermore, our exclusive partnership with leading space agencies allows for a seamless docking experience with the ISS, making StellarVoyage the preferred choice for discerning travelers seeking a truly exceptional journey.
5. Unique Selling Proposition (USP):


##### Unique Selling Proposition (USP)
Galactic Getaways USP lies in its commitment to delivering unparalleled space adventures that go beyond typical space tourism. With our technologically advanced spacecraft and expertly curated itineraries, customers can immerse themselves in the wonders of space travel like never before. Our focus on safety, sustainability, and educational opportunities distinguishes us as the leading space tourism provider for the next generation of explorers.

##### **Search Engine Optimization**
SEO research is key to driving traffic from a browser based search i.e. Google to the website. The keyword research has played a crucial role in incorporating words that users typically search for when seeking to purchase art online. To help improve the search engine ranking I ensured the site carries meta tags for a description and keywords which encapsulate the general content and focus of this B2C site.

#### **XML Sitemap**
Additionally to help the search engines crawl the website, I've added an XML sitemap file to the main root directory. The file was created using the free service through XML-Sitemaps.com. A sitemap is a way of organizing a website, identifying the URLs and the data under each section. Previously, the sitemaps were primarily geared for the users of the website. However, Google's XML format was designed for the search engines, allowing them to find the data faster and more efficiently.

A robots.txt file has also be included in the build to tell the search engine crawlers which URLs the crawler can access on this site. This is used mainly to avoid overloading the site with requests.

[Back to the Top](#table-of-contents)


---


## Features

#### Home page
A welcoming homepage was built to clearly convey the sites purpose. The call to action buttons for the user to go straight to the tours or contact section is at the bottom of the main page.

![Home Page](./src/docs/home-mobile.png)

#### Navigation Bar
The main navigation bar appears at the bottom of the page, clearly displaying the main navigational links users would require.

![Nav Bar]()


#### Other Pages/Features
![About Page]()

![Tours Page]()

![Contact Page]()

![Login/Account Page]()


[Back to the Top](#table-of-contents)

---

## Testing

### Testing Strategy
We utilized a manual testing strategy for the development of the site.
Separate to the functionality testing of the site, and the testing of the code, User Story tests were implemented to ensure that the criteria of the user stories listed above were met.



#### Validator Testing
All code files were validated using suitable validators for the specific language.
HTML, CSS & JavaScript code passed the validation.

All validation screenshots are included below.

All HTML validation returned the same result so I have included only 1 screenshot here.
## HTML
![HTML Validation]()
## CSS
![CSS Validation]()
## JS
![Script JS]()
## JS
![Stripe JS]()
## JS
![Quantity Input JS]()


#### Lighthouse Testing
Below you can see the results of Googles Lighthouse Testing.


![Lighthouse Testing]()



#### React/JavaScript Testing
All Custom React & JavaScript code was manually tested multiple times during and after development.
This is reflected in the fact that all of the functionality is working.


[Back to the Top](#table-of-contents)

-----


## Technologies


* JavaScript
    * Custom JavaScript was utilized to allow Users to close site messages and increment/decrement cart items.
* React
    * React was used to create the frontend of the site.
* CSS
    * Custom css was written for a large number of areas on the site to implement custom styling and escape a bootstrap look and feel to the site.
* HTML
    * HTML was used as the base language for the templates created for the site.


#### Packages & Resources Used

* VS Code was used to develop the site
* Git was utilized for version control and transferring files between the code editor and the repository
* GitHub was utilized for storing the files for this project

"More to come"

[Back to the Top](#table-of-contents)

----

## Deployment

"To be filled in"


#### Forking the repository
By forking the GitHub Repository you can make a copy of the original repository to view or change without it effecting the original repository
This can be done by
* Log into GitHub or create an account.
* Locate the repository at https://github.com/KSheridan86/GalacticGetaways .
* At the top of the repository, on the right side of the page, select "Fork" from the buttons available.
* A copy of the repository should now be created in your own repository.

#### Create a clone of this repository
Creating a clone enables you to make a copy of the repository at that point in time - this lets you run a copy of the project locally:
This can be done by:
* Navigate to https://github.com/KSheridan86/GalacticGetaways
* click on the arrow on the green code button at the top of the list of files
* select the clone by https option and copy the URL it provides to the clipboard
* navigate to your code editor of choice and within the terminal change the directory to the location you want to clone the repository to.
* type 'git clone' and paste the https link you copied from github
* press enter and git will clone the repository to your local machine


[Back to the Top](#table-of-contents)

-----

## Credits

"To be filled in"

-----


## Author Info

Luke O'Hanlon, Full Stack Software Developer.
- [GitHub](https://github.com/luke0han)
- [Linkedin](https://www.linkedin.com)


Ken Sheridan, Full Stack Software Developer.
- [GitHub](https://github.com/KSheridan86)
- [Linkedin](https://www.linkedin.com/in/kensheridan86/)


[Back to the Top](#table-of-contents)