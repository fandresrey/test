var express = require ('express');
var router = express.Router ();
import crtlWebService from '../controller/filedata.controller';

/* GET users listing. */
router.post ('/', crtlWebService.setCreate);

module.exports = router;
