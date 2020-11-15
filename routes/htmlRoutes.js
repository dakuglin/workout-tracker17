var router = require('express').Router()
const path = require("path");


// router.get renders the exercise.html whenever the continue workout button or new workout button are clicked
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;