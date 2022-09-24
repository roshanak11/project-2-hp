# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Shoe Drip ![]()
### Developers
Roshanak Ahmed and Jeanzle Albalte

### Deployed Project
https://harry-potter-characters-react-app.netlify.app/ 

## Brief
Using pair programming, we were asked to build a React application in one week and deploy it online with a git repository hosted on Github. It was required for our app to consume a public API and have a router with several pages. We were required to implement wireframes and establish core MVP features. Furthermore, our instructor asked us to use semantically clean HTML and comment on our code with explanations of what we were doing.

## Overview
This was our second project in our Software Engineering Immersive bootcamp at General Assembly. We made a React.js app involving an API. Our choice of API was the Harry Potter API because it was free to use, we had access to it, and it did not take too long to load on our app. Our multi-page app allows you to go through a library of all the characters fetched from the public API. After users click on each character’s name, they are redirected to another page on which they can view more details about the character they are interested in. 

## Technologies Used
**Technologies**
- Excalidraw for whiteboarding
- Visual Studio Code to create product
- npm-install to install dependencies
- React for frontend development
- Insomnia to test our API
- JavaScript and JSX for frontend development
- HTML for frontend development
- CSS for styling in frontend development
- Bulma to import CSS
- Google Fonts to import fonts for styling
- Netlify for frontend deployment
- Github to host git repositories and deployed project links online 
- Heroku App Harry Potter API to for our data
- Images for styling and design

**Run Project**
1. run `npm i`
2. run `npm start`


## Approach Taken
We first researched APIs that were public, accessible, free to use, and did not take too long to load. We then selected the Harry Potter API and checked for its endpoints on Insomnia. We found that http://hp-api.herokuapp.com/api/characters was the API URL we could use for our app. Using Insomnia to test the API, we learned that we could not access any other endpoints on the API URL that would lead us to viewing the character traits individually (such as what house they are in). We realized we had to find a way to map through the API to fetch the character traits individually.

Using whiteboarding on Excalidraw, we created the design and wireframes of the app after we decided to use the Harry Potter API. We wanted to create a Harry Potter Library that allowed users to search for characters and click on each character to gain more information about them.

My partner and I worked on the characters component together and fetched the data from the API and mapped through it so we could get data on each character and their specific traits. We created a useState so we could fetch and print out all the characters, and useState was undefined. We then fetched the API and console.logged the data to test if it actually fetched the API and caught the data response. 
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663975256/project%202%20readme/Image_9-24-22_at_5.20_AM_jffypb.jpg)

In the code below, we mapped through the API and passed through the character’s name in characterName={character.name} and all the information provided for the character in character={character}. We made a key with the value {character.name} because the key was a unique identifier that knew each character for updating purposes. In this code, character and characterName were props. characterName was a prop we used as a parameter in the CharacterCard component to pull the character's name from the API. Meanwhile, character passed the whole character's information from the API. This prop was used as a parameter in the CharacterCard component. In addition, we added && each time we ran the API because this allowed us to only run the code after && if it existed (after the API fetched the characters) and if it returned true. This ensured that if it did not return true, it would be undefined because react.useState(undefined) is "undefined".
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663975354/project%202%20readme/75FB0E84-7AD3-4041-B022-76E1E4001DB2_4_5005_c_wqn6f6.jpg)

I was in charge of creating the home page and navbar components. I had the responsibility of completing the CSS for the navbar, home page, and show character components. My partner created the character card component.

When creating the home component, I imported React. I then created a function called Home. I created several divs in this function with the IDs homepage-background, homepage, title, and subtitle. These IDs refer to CSS IDs I created in the main.scss file. Then, I exported Home so it could be imported and used in other .js files.
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663975445/project%202%20readme/76BC89C5-D5A1-422E-80EC-04F9CDE11180_c19myo.jpg)

Here is the CSS I created specifically for the home page design, with the IDs homepage-background, homepage, title, and subtitle. I ensured the background image would not repeat with the code background-repeat: no repeat. I also wanted the image to be faded so I gave it an opacity of 0.5. I used flexbox to justify my content and align the title and subtitle text. I also added padding and margins to organize my subtitle text on the page.
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663975535/project%202%20readme/57555E04-2DA8-49A3-B2E2-C14860AA4E00_i3negt.jpg)

Furthermore, I created the navbar component. I imported React to run react, and import Link from react-router-dom so I could use the link component later in my code to link all the components together inside the navbar. I then created the navbar function. I created the navbar in the header and added Home, Characters, Show Character, and Favourite Character tabs to link the Home, Characters, Show Character, Favourite Character components. Then, I imported the class names "navbar is-dark", "container", "navbar-brand", and "navbar-item" from bulma to create divs to design my navbar. The Link to="/" created the default page as the home page. Furthermore, the home tab imported the class name “home” from main.scss. I followed the same structure as the home tab for the characters, show character, and favourite characters tabs. The only modification I added was to the show character tab, in which the code Link to="/characters/:showcharacters" created a link params variable that changed based on which character name button the user clicked on. For example, if the user clicked on Dobby’s name, the link would become /characters/dobby. Lastly, I exported the navbar so it could be used and imported in other .js files.
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663975642/project%202%20readme/586C6986-2317-49A0-B36A-771983595694_wxthrp.jpg)

This is also the CSS I created for the navbar component. I created different tab colors and hover colors for the navbar and imported a Harry Potter themed font. This was my first time using the :hover method in CSS which I found quite fascinating and interesting to use from a creative standpoint. To keep the Harry Potter theme, I colored our four tabs after the four different Hogwarts houses themes. I created a Harry Potter theme to make the user experience more enjoyable and aesthetically pleasing.
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663975748/project%202%20readme/E04AF3F9-E4F7-4A07-89D5-F38AE243094C_lmkkf6.jpg)

I also took responsibility for creating the design for the show character component, while my partner worked on creating the function under show character. I wrote the following code:
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663975829/project%202%20readme/1ED0DDF1-062E-4FFC-810F-872AD541394F_4_5005_c_j4iwcr.jpg)

In the code above, I used CSS to style each page with a heading of the character’s name in classic Harry Potter font. Furthermore, our API was missing information for several characters but showed the same information for other characters. I did not want users to see blank fields under the character traits that were missing from the API and I had to figure out a way to write DRY code that could be applicable to each and every individual character in a few lines. I resolved this issue by using the && method. "&&" suggested if character traits were undefined, the traits would not be displayed. However, if character traits were given in the API, they would be displayed for that given character.

This is also the CSS I created for the show character component. I used flexbox to organize my div with the ID “card”. I also gave it a dashed border to make the page look fun. Furthermore, I stuck to the #946b2d shade for the div and text to stay aligned with the Harry Potter theme:
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663975958/project%202%20readme/F0A9E32D-2FB1-484C-B754-6048F5F50105_wd3w8i.jpg)


## Screenshots
**Project Pitch Deck**
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663976118/project%202%20readme/harrypotterwhiteboard1_d6vwtx.png)

**Embedded Project**
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663976177/project%202%20readme/Image_9-7-22_at_10.41_AM_atigqr.jpg)

**Project Code**
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663976247/project%202%20readme/Image_9-8-22_at_7.00_PM_au5de5.jpg)
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663976256/project%202%20readme/Image_9-8-22_at_7.02_PM_1_dxfc9h.jpg)
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663976297/project%202%20readme/Image_9-8-22_at_7.06_PM_nt7whz.jpg)

**Insomnia to check our public API endpoints**
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663976353/project%202%20readme/Image_9-8-22_at_7.04_PM_1_wp52qa.jpg)


## Bugs, Blockers, Wins
**Bugs**
 - You cannot see anything on the show character tab until you have gone to the characters tab on the navbar and clicked on a character from there. The show character tab in the navbar is redundant and should be deleted because I received feedback from my mother that it’s confusing as to why that tab exists. In addition, we could add instructions on the homepage on how to navigate the app. 
- The Harry Potter API takes a few seconds to load so one may think the website is not working. We can resolve this by choosing an API that has a faster loading rate.
- We faced a bug under the show character component because we imported useParams and didn’t use it, therefore nothing would appear on our browser when we clicked on the show character tab in the navbar. We didn’t use useParams on that component because time constraints prevented us from completing our stretch goals. Therefore, we ended up deleting useParams to fix our bug. 
Our code was originally:
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663976604/project%202%20readme/D0AE4E6B-A8DB-4D23-AF08-03739E8FAFC6_4_5005_c_gsd7eq.jpg)
We changed it to:
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663976605/project%202%20readme/AD3A3425-E6D5-4F34-8C91-4618368C821B_4_5005_c_e3wgnc.jpg)

**Blockers**
 - Due to time constraints, we did not have time to complete the Favourite (British) Characters tab. We could complete this component using useParams, which would allow us to use a variable to pass through our desired character and show a like button under the show character component for each individual character.
- Our picture sizes are not consistent across the show character component, for instance, Cedric Diggory’s image is much larger than most images. We can resolve this and modify the picture size using Bulma CSS class names to set consistent image dimensions across the board. 
- I couldn’t increase the font-size for the names in the characters tab without messing up the consistency of the buttons layout. I chose the best font-size possible to keep the layout consistent. Alternatively, I could use a different font-family for the names that would allow me to use a larger font without messing up the layout. However, I wanted to maintain the Harry Potter theme throughout each page, so I kept the largest font-size possible.
- In the home component, I had trouble modifying the opacity to prevent the text from clashing with the background image. I could resolve this by creating a graphic of the title photoshopped onto the background image.
- We wanted to modify the list of characters to look more visually appealing, however, we had limited time and we focused on getting our MVP goals out of the way first.

**Wins**
- We were able to change the URL path of the show character component to list the name of the character clicked on from the characters component:
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663976901/project%202%20readme/96245E3D-C1A4-44C8-B7C1-19BC50095433_4_5005_c_csnkw3.jpg)
- Our API is missing information in several fields for several characters but shows the same information in those fields for other characters. To address this inconsistency, we used the following code in the show character component:
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663976903/project%202%20readme/A0ABFF1A-DEDC-4771-BC18-E8D5561204EF_4_5005_c_rv3j3i.jpg)
"&&" suggests If character traits are undefined, it will not display the traits. However, if the character traits are given in the API, they will be displayed for that given character (as opposed to providing blank fields with missing information like it was originally). 
- useLocation was used to connect the navbar, app, show character, and character card components together because useLocation allows you to move information through different components. We did this by creating a state (which had all of the character’s information) and through that state, we used useLocation to fetch that information and use it in our desired component. This allowed us to create a show character component which contained all of the information of that character without needing to fetch the API.
- I ensured the fonts, colors, navbar, and images were all aligned with the Harry Potter theme. Each navbar tab is one of four Harry Potter house colors and when the user hovers over the navbar links, it turns the tabs into a different shade of the original color to add a visually pleasing hover effect.

## Future Features
- Add media queries to make it responsive to different browsers/mobiles/tablets
- Implement useStorage to create a “like” button that allows users to add characters to their Favorites List (we left the Favorites tab incomplete due to time constraints)
- Implement Harry Potter theme music in the background
- Sort characters by Hogwarts house so users can click on each house name


## Key Learnings
This was my first project in which I learned how to create a React app, use Bulma CSS, use a public API, and utilize pair programming to plan and complete our goals. I found this experience quite valuable as I learned how to communicate frequently and often with my teammate to ensure we would not override each others’ code. Furthermore, I found it valuable to have a second set of eyes when reviewing bugs and planning our project. In addition, I learned how much easier it is to style pages when using Bulma classes. Finally, I quite enjoyed using React and plan to use React again in future apps.