const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// router.configure(function(){
//     // router.use('/charting_library', express.static(__dirname + '/charting_library'));
//     router.use(express.static(__dirname + '/charting_library'));
// });
router.use(express.static(__dirname));
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(8125, "0.0.0.0");

console.log('Running at Port 3000');