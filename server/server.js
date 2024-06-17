const express = require("express")
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express()

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());

const port = 5000;

app.post('/api/forward-request', async (req, res) => {
    const requestData = req.body;
    console.log('datass',requestData);
    try {
      // Make a POST request to the third-party API
      const response = await axios({
        method: 'post',
        url: 'https://www.swiggy.com/dapi/restaurants/list/update',
        data: requestData,
        headers: {
          'authority':'www.swiggy.com',
          'method':'POST',
          'path':'/dapi/restaurants/list/update',
          'scheme':'https',
          '__fetch_req__':true,
          'Accept':"*/*",
          'Accept-Encoding':'gzip, deflate, br, zstd',
          'Accept-Language':'en-IN,en;q=0.9',
          'Cache-Control':'no-cache',
          'Content-Type':'application/json',
          'Cookie':'__SW=94DcRlZuMAyh2VlA_R22OU7a-A5EyOUT; _guest_tid=2d82d680-2337-49d6-9a63-9693f9178269; _device_id=661f8624-919b-821f-f453-6c694a2827ec; _sid=eg978eca-49db-49f1-8090-8c3096f3a500; userLocation={%22lat%22:%2221.18880%22%2C%22lng%22:%2272.82930%22%2C%22address%22:%22%22%2C%22area%22:%22%22%2C%22showUserDefaultAddressHint%22:false}; fontsLoaded=1; _gcl_au=1.1.2038460236.1718597422; _gid=GA1.2.12761305.1718597423; _gat_0=1; _ga_34JYJ0BCRN=GS1.1.1718597422.1.1.1718597696.0.0.0; _ga=GA1.1.1887590782.1718597423',
          'Origin':'https://www.swiggy.com',
          'Referer':'https://www.swiggy.com/',
          'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'},
          withCredentials: true
      });
  
      // Send the response from the third-party API back to the client
      res.status(response.status).json(response.data);
    } catch (error) {
      console.error('Error making POST request:', error);
      res.status(500).json({ error: 'An error occurred while making the POST request' });
    }
  });
  
app.listen(port, () => {
console.log(`Server started on port ${port}`);
});

