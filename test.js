const nunjucks = require("nunjucks");
const res = nunjucks.render('./router.temp.js', {
    list: ['a', 'b']
});

console.log(res)
