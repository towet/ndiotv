// sign up button UI element



function Cards() {
    return (
const openSignUpButton = document.getElementById('js-openSignUp');
// sign in button UI element
const openSignInButton = document.getElementById('js-openSignIn');
// overall container UI element
const container = document.getElementById('js-container');
// create account form UI element
const createAccountForm = document.querySelector('.js-createAccountForm');
// sign in form UI element
const signInForm = document.querySelector('.js-signInForm');
// sign up UI button
const signUpButton = document.querySelector('.js-signUp');
// sign in UI button
const signInButton = document.querySelector('.js-signIn');
// sign-up container UI element
const signUpContainer = document.querySelector('.sign-up-container');
// sign-in container UI element
const signInContainer = document.querySelector('.sign-in-container');
// overlay-left container UI element
const overlayLeftContainer = document.querySelector('.overlay-left');
// overlay-right container UI element
const overlayRightContainer = document.querySelector('.overlay-right');

// click event listener for sign up button UI
openSignUpButton.addEventListener('click', () => {
  container.classList.add('js-right-panel-active');
              signUpContainer.focus();
});

// click event listener for sign in button UI
openSignInButton.addEventListener('click', () => {
  container.classList.remove('js-right-panel-active');
  signInContainer.focus();
});

// focus event listener for create account form
// openSignUpButton.addEventListener('focus', () => {
//   createAccountForm.focus();
// });

// focus event listener for open sign up form
// openSignInButton.addEventListener('focus', () => {
//   signInForm.focus();
// });

// focus out event listener for sign in button
signInButton.addEventListener('focusout', () => {
  overlayRightContainer.focus();
});

// focus out event listener for sign up button
signUpButton.addEventListener('focusout', () => {
  overlayLeftContainer.focus();
});

// To Do:
/*
1. Fix focus states and make more accessible
2. Make responsive
*/
);
}

export default Cards;
