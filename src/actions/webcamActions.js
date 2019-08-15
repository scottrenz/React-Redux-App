import axios from 'axios';

export const FETCH_WEBCAM_DATA_START = 'FETCH_WEBCAM_DATA_START';
export const FETCH_WEBCAM_DATA_SUCCESS = 'FETCH_WEBCAM_DATA_SUCCESS';
export const FETCH_WEBCAM_DATA_FAILURE = 'FETCH_WEBCAM_DATA_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_WEBCAM_DATA_START });
    const API_KEY = '13326342-ae04c86d323cd34e4044e0556'
    axios
    
    // https://pixabay.com/api/?key="+API_KEY+"&q="
    // .get('https://api.oceandrivers.com:443/v1.0/getWebCams/')
    .get('https://api.nasa.gov/planetary/apod?api_key=awlI2QgBkvZtjasfaTqkmYUtoyGU6vfQLcsgQVmH&date=2019-08-14')
    .then(res => {
        // res.data.data
        console.log('res is',res.data);
        dispatch({ type: FETCH_WEBCAM_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_WEBCAM_DATA_FAILURE, payload: err.response });
      });
  };
};
