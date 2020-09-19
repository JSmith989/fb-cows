import firebase from 'firebase/app';
import 'firebase/auth';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      console.warn(user);
      $('#auth').addClass('hide');
      $('#pasture').removeClass('hide');
      $('#pasture').html(`<img src="${user.photoURL}" alt="${user.displayName}">`);
      $('#navbar-logout-button').removeClass('hide');
    } else {
      $('#navbar-logout-button').addClass('hide');
      $('#auth').removeClass('hide');
      $('#pasture').addClass('hide');
    }
  });
};

export default { checkLoginStatus };
