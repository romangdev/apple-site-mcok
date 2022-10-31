# Apple Homepage Replica

A responsive replica of Apple's main website homepage built using Bootsrap and React.js - fits all screen sizes including mobile.

**You can see a LIVE version of the form here:** [applehomepagereplica.netlify.app](https://applehomepagereplica.netlify.app/)

![Screen Shot 2022-10-30 at 8 37 36 PM](https://user-images.githubusercontent.com/74276666/199016868-8123c2e3-80a5-438d-91a0-398739465ffc.png)

![Screen Shot 2022-10-30 at 8 37 57 PM](https://user-images.githubusercontent.com/74276666/199016882-e5043e2c-1756-4b4b-84f3-d8d3aeab0e94.png)

<img width="487" alt="Screen Shot 2022-10-31 at 9 19 11 AM" src="https://user-images.githubusercontent.com/74276666/199017243-1ae5ce7c-5d68-4989-86b9-fd6d3e3ccb01.png">

# How It's Made:
Tech used: React.js, Bootstrap, HTML, CSS, JS

# Optimizations
Now that the overall layout and design is complete, continuing to work on the project in the future I'd like to focus on more of the 'small' details. Mainly, I'd like to make some improvements to the collapsable navbar so that it is more in line with Apple's current look. I'd also make some additional effort to organize the code as a whole. The CSS file definitely has some areas that can be cut down, and given the layout of the products on Apple's page, there's definitely some opportunity to create some additional resuable sub-components displaying the products (from the MainProducts and SubProducts sectional components.

# Lessons Learned:
This project was great practice for me getting more comfortable with Bootstrap and React.js, and more importantly, mocking up a homepage for a very large tech company. I wanted to start creating some real-world replicas and get experience creating modern, front end sites based off of existing designs. Interesting though, this replica was actually tougher to create than I originally thought it would be, mostly in terms of 'responsiveness.'

I quickly realized about 20% of the way into the project that Apple took a bit of an 'easier' route with their homepage. You see, each section of the homepage displaying a product is literally just a graphically designed image. And when screen size shrinks on the original website, they simply swap out the larger screen section image for a related, different image appropriate to fit on mobile sizes. The only 'code' in each product section on the original site are the links to 'learn more' or 'buy.'

Instead of taking this route myself (simply screenshotting the entire graphic and adding them into the page in a similar manner), I decided to make the project more difficult for myself. After all, I'm trying to get better, so why not? 

I only captured the images of the actual products themselves from Apple's site, NOT the entire product section graphics with text and white space included. All other elements of the individual product sections were coded using Bootstrap to assist with effecient responsive design. Despite the first 90% of the project being fairly straightforward to layout, I ran into minor issue after issue dealing with the last 10% of ensuring the layout was responsive. In the end though, I perservered through it, and gained a valuable lesson in paying attention to the most minor of details when debugging.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
