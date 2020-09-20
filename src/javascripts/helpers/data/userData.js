import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getUser = (userObj) => {
  axios
    .get(`${baseUrl}/farmers.json?orderBy="uid"&equalTo="${userObj.uid}"`)
    .then((resp) => {
      if (Object.values(resp.data).length === 0) {
        // POST OBJECT TO FARMERS
        // {
        //   image:
        //   uid:
        //   displayName:
        //   email:
        //   lastSignInTime:
        // }

        // use axios.post
        // pass it the url ${baseUrl}/farmers.json
        // pass it an object
        axios({
          method: 'post',
          url: `${baseUrl}/farmers.json`,
          data: {
            image: userObj.photoURL,
            uid: userObj.uid,
            displayName: userObj.displayName,
            email: userObj.email,
            lastSignInTime: userObj.metadata.lastSignInTime,
          },
        }).then(console.warn('user created'));
      } else {
        console.warn('User Exists');
      }
    });
};

export default { getUser };
