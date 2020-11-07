const nunjucks = require("nunjucks");
const res = nunjucks.render('./temp/router.temp.js', {
    List: [{
        name:'test',
        path:'test.jsx'
    }]
});

console.log(res)
