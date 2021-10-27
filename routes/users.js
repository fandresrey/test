var express = require('express');
var router = express.Router();
import crtlWebService from '../controller/user.controller';




/* GET users listing. */
router.get('/',crtlWebService.test );

module.exports = router;
