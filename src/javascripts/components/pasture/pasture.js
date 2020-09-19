import cowData from '../../helpers/data/cowData';

const cowsOnDom = (obj) => {
  $('#pasture').html('');
  Object.keys(obj).forEach((item) => {
    $('#pasture').append(`<h3>${obj[item].name}</h3>`);
  });
};

const buildCows = () => {
  cowData
    .getCows()
    .then((resp) => cowsOnDom(resp.data))
    .catch((error) => console.error('get cows broke', error));
};

export default { buildCows };
