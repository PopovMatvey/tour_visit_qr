/*Libs*/
const cors = require('cors')                                // allow api requests/response
const fs = require('fs');                                   // for work with file/dirrectory
const express = require('express');                         // api requests lib
const path = require('path');                               // for init static directory
const { v4 } = require('uuid');                             // generate id
const app = express();                                      // app iniy
app.use(express.json());                                    // use json for requests
app.use(cors());

/*Varibles*/
const PORT_APP = 2002;                      // app port
const urlRequest = '/api/contacts';         // url request api
const arrayPartnersSlider = getFiles('./static/images/Slider/Parnters/');
// const arrayImageSlayderPortfolio = getFiles('./static/media/images/');
// const arrayVideosSlayderPortfolio =  getFiles('./static/media/videos/');
// const arrayAllMedia = getFiles('./static/media/');
const arrayPortfolioSlider = [
    'http://z92017tk.beget.tech/static/images/Slider/Portfolio/collection.jpg',
    'http://z92017tk.beget.tech/static/images/Slider/Portfolio/double_headed_eagle.jpg',
    'http://z92017tk.beget.tech/static/images/Slider/Portfolio/helmet.jpg',
    'http://z92017tk.beget.tech/static/images/Slider/Portfolio/military_helmet.jpg',
    'http://z92017tk.beget.tech/static/images/Slider/Portfolio/pony.jpg',
    'http://z92017tk.beget.tech/static/images/Slider/Portfolio/swan.jpg',
    'http://z92017tk.beget.tech/static/images/Slider/Portfolio/trunk.jpg',
];
//getFiles('./static/images/Slider/Portfolio/');
const arrayStudentsSlider = getFiles('./static/images/Slider/Students/');
const arrayVideos = [
    'http://z92017tk.beget.tech/static/videos/Slider/Portfolio/flower.mp4',
    'http://z92017tk.beget.tech/static/videos/Slider/Portfolio/helmet.mp4',
    'http://z92017tk.beget.tech/static/videos/Slider/Portfolio/shoe.mp4',
    'http://z92017tk.beget.tech/static/videos/Slider/Portfolio/wheel_rim.mp4',
];
//getFiles('./static/videos/Slider/Portfolio/')
const arrayYouTubeVideos = [
    "QqgBzPfBkj0",
    "QqgBzPfBkj1",
    "QqgBzPfBkj0",
    "QqgBzPfBkj0",
];

// console.log(arrayAllMedia);

/*Methods*/
// get all files in determ directory
function getFiles(dir, files_) {
    files_ = files_ || [];
    var files = fs.readdirSync(dir);

    for (var i in files) {
        var name = dir + '/' + files[i];

        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }

    return deletePartString(files_);
};

function deletePartString(array) {
    let returnedArray = [];

    for (let i = 0; i < array.length; i++) {
        returnedArray.push(array[i].replace("./static", ''))
    }

    return returnedArray;
}

/*Requests*/
//GET
// Получить массив путей до изображений партнёров
app.get('/api/slider/image/partners', (req, res) => {
    res.status(200).json(arrayPartnersSlider);
});

// Получить массив путей до изображений "Портфолио"
app.get('/api/slider/image/protfolio', (req, res) => {
    res.status(200).json(arrayPortfolioSlider);
});

// app.get('api/portfolio/images', (req,res)=>{
//     res.status(200).json(arrayImageSlayderPortfolio);
// })

// app.get('api/portfolio/videos', (req,res)=>{
//     res.status(200).json(arrayVideosSlayderPortfolio);
// })


// Получить массив путей до изображений "Учеников"
app.get('/api/slider/image/students', (req, res) => {
    res.status(200).json(arrayStudentsSlider);
});

// Получить массив путей до ютуб-видео "Портфолио"
app.get('/api/slider/video-youtube/portfolio', (req, res) => {
    res.status(200).json(arrayYouTubeVideos);
})

// Получить массив путей до ютуб-видео "Портфолио"
app.get('/api/slider/video/portfolio', (req, res) => {
    res.status(200).json(arrayVideos);
})

//POST "CREATE"
app.post(`${urlRequest}`, (req, res) => {
    const contact = { ...req.body, id: v4(), marked: false }
    CONTACTS.push(contact);
    res.status(201).json(contact);
});

//DELETE
app.delete(`${urlRequest}/:id`, (req, res) => {
    CONTACTS = CONTACTS.filter(c =>
        c.id != req.params.id
    );
    res.status(200).json({ message: "Контакт был удалён" });
});

//PUT
app.put(`${urlRequest}/:id`, (req, res) => {
    const idx = CONTACTS.findIndex(c => c.id === req.params.id);
    CONTACTS[idx] = req.body;
    res.json(CONTACTS[idx]);
});

/*Directory*/
// init statics
app.use(express.static(path.resolve(__dirname, 'client')));
app.use(express.static(path.resolve(__dirname, '.static')));

// lisening all get requests
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", 'index.html'));
});

// default massage
app.listen(PORT_APP, () => console.log(`Server has been started on port ${PORT_APP}`));

