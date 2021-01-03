const keys = require("../../config/keys");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const Image = require('../../models/Image');
var AWS = require('aws-sdk');

// Multer ships with storage engines DiskStorage and MemoryStorage and Multer 
// adds a body object and a file or files object to the request object. The body 
// object contains the values of the text fields of the form, the file or files 
// object contains the files uploaded via the form.
var storage = multer.memoryStorage();
var upload = multer({storage: storage});

AWS.config.update({
  credentials: {
    accessKeyId: keys.AWS_ACCESS_KEY_ID,
    secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
    region: keys.AWS_REGION,
  }
});

// GET ALL IMAGES 
router.get("/", (req, res, next) => {
  Image.find()
    .then(photos => {
      if (photos) {
        return res.json(photos)
      } else {
        return res.status(404).json({noPhotosFound: 'No Photos Found'})
      }
    })
});

// GET SPECIFIC IMAGE
router.get("/:id", (req,res, next) => {
  Photo.findById(req.params.id, (err, go) => {
    if (err) {
      return next(err)
    }
    res.json(go)
  })
});


// ROUTE TO UPLOAD A IMAGE FILE
// In upload.single("file") - the name inside the single-quote is the name of 
// the field that is going to be uploaded.
router.post("/upload", upload.single("file"), function(req, res) {
  const file = req.file;
  const s3FileURL = keys.AWS_Uploaded_File_URL_LINK;
  
  let s3bucket = new AWS.S3({
    accessKeyId: keys.AWS_ACCESS_KEY_ID,
    secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
    region: keys.AWS_REGION
  })
 
  // WHERE YOU WANT TO STORE YOUR FILE

  var params = {
    Bucket: keys.AWS_BUCKET_NAME,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read"
  };

  s3bucket.upload(params, function(err, data) {
    if (err) {
      res.status(500).json({error: true, Message: err})
    } else {
      // res.send({data});
      var newFileUploaded = {
        description: req.body.description,
        fileLink: s3FileURL + file.originalname,
        s3_key: params.Key
      };
      var image = new Image(newFileUploaded);
      image.save(function(error, newFile) {
        if (error) {
          throw error
        }
      })
      let newData = Object.assign({}, data, {photoId: photo._id})
      res.send({ newData });
    }
  })
});

// Route to delete a photo file
router.delete("/:id", (req, res, next) => {
  Image.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) {
      return next(err);
    }

    // Deleting file from s3
    let s3bucket = new AWS.S3({
      accessKeyId: keys.AWS_ACCESS_KEY_ID,
      secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
      region: keys.AWS_REGION,
    });

    let params = {
      Bucket: keys.AWS_BUCKET_NAME,
      Key: result.s3_key,
    };

    s3bucket.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({
          status: "200",
          responseType: "string",
          response: "success"
        })
      }
    })
  })
});

module.exports = router;