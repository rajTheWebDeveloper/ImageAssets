import express from 'express'
import portfolio from '../controllers/portfolio.js'
import multer from 'multer';
import shortid from 'shortid';
import getto from '../controllers/getto.js';

let router=express.Router()


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./port-uploads");
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate()+file.originalname);
  },
});

const upload = multer({ storage: storage });



router.post("/upload", upload.single('image'),portfolio);
router.get('/gimme',getto)


export default router