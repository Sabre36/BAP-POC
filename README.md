# Best Aquaculture Practices - Proof of Concept

## Prerequisites

1. Install latest version of node
2. Install Github Desktop -- or Git command line tools

## Getting Started

1. Clone this project
2. From the command line:

```
cd <this directory>
npm install
npm start
```

## Development

It's a good idea in a separate command window to watch for JavaScript and SASS issues:

```
npm run lint:check
```

## Production Builds

```

npm run build

```

## File Structure
Within the download you'll find the following directories and files:

```
material-kit-react
.
├── README.md
├── package.json
├── public
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo.svg
    ├── routes
    │   └── index.jsx
    ├── assets
    │   ├── img
    │   ├── jss
    │   │   ├── site-styles
    │   │   │   ├── components
    │   │   │   └── views
    │   │   │       └── landingPageSections
    │   │   │       └── landingPage
    │   │   │       └── loginPage        
    │   │   └── global-styles.jsx
    │   └── scss
    │       ├── core
    │       │   ├── mixins    
    │       │   ├── misc
    │       │   └── variables
    │       ├── plugins
    │       └── site-styles.scss
    ├── components
    │   ├── Badge
    │   │   └── Badge.jsx
    │   ├── Card
    │   │   ├── Card.jsx
    │   │   ├── CardBody.jsx
    │   │   ├── CardFooter.jsx
    │   │   └── CardHeader.jsx
    │   ├── Clearfix
    │   │   └── Clearfix.jsx
    │   ├── CustomButtons
    │   │   ├── Button.jsx
    │   │   └── IconButton.jsx
    │   ├── CustomDropdown
    │   │   └── CustomDropdown.jsx
    │   ├── CustomInput
    │   │   └── CustomInput.jsx
    │   ├── CustomLinearProgress
    │   │   └── CustomLinearProgress.jsx
    │   ├── CustomTabs
    │   │   └── CustomTabs.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── Grid
    │   │   ├── GridContainer.jsx
    │   │   └── ItemGrid.jsx
    │   ├── Header
    │   │   ├── Header.jsx
    │   │   └── HeaderLinks.jsx
    │   ├── InfoArea
    │   │   └── InfoArea.jsx
    │   ├── NavPills
    │   │   └── NavPills.jsx
    │   ├── Pagination
    │   │   └── Pagination.jsx
    │   ├── Snackbar
    │   │   └── SnackbarContent.jsx
    │   └── Typography
    │       ├── Danger.jsx
    │       ├── Info.jsx
    │       ├── Muted.jsx
    │       ├── Primary.jsx
    │       ├── Quote.jsx
    │       ├── Small.jsx
    │       ├── Success.jsx
    │       └── Warning.jsx
    └── views
        ├── LandingPage
        │   ├── LandingPage.jsx
        │   └── Sections
        │       ├── AboutBAPSection.jsx
        │       ├── CarouselSection.jsx
        │       └── ContactSection.jsx
        │       └── StarRatingSection.jsx
        │       └── TeamSection.jsx
        │       └── WorkSection.jsx        
        └── LoginPage
            └── LoginPage.jsx
```


## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="32" height="32"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="32" height="32"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="32" height="32"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="32" height="32"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="32" height="32">
