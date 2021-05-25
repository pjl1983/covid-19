const express = require('express');
const router = express.Router();
const axios = require('axios');
const moment = require('moment');

const RAPID_API_KEY = process.env.RAPID_API_KEY;
const RAPID_API_HOST = process.env.RAPID_API_HOST;
const RAPID_API_URL = process.env.RAPID_API_URL;

router.route('/statistics').get(async (req, res) => {
  const options = {
    url: `${RAPID_API_URL}/statistics`,
    method: 'get',
    headers: {
      'x-rapidapi-key': RAPID_API_KEY,
      'x-rapidapi-host': RAPID_API_HOST,
      'useQueryString': false
    }
  };
  try {
    const response = await axios(options);
    res.json(response.data.response);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Covid history request failed'})
  }
});

router.route('/history').get(async (req, res) => {
  const region = req.query.region;
  const options = {
    url: `${RAPID_API_URL}/history`,
    method: 'get',
    headers: {
      'x-rapidapi-key': RAPID_API_KEY,
      'x-rapidapi-host': RAPID_API_HOST,
      'useQueryString': true
    },
    params: {
      'country': region
    }
  };
  try {
    const response = await axios(options);
    const result = getMonth(response.data.response);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Covid statistics request failed'})
  }
});

function getMonth(data) {
  const monthData = [];
  data.forEach(res => {
    const isSameMonth = moment().isSame(res.day, 'month');
    const day = monthData.length > 0 && monthData[0].day ? monthData[0].day : -1;
    const isNewDay = day !== res.day;
    if (isSameMonth && isNewDay) {
      monthData.unshift(res);
    }
  });
  return monthData;
}

module.exports = router;


