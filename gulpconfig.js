var dest = "./build";
var src = './src';

module.exports = { 
  sass: {
    src: src + "/static/style/*.scss",
    dest: dest + "/static/style/"
  },
  js: {
  	src: src + "/static/script/*.js",
    dest: dest + "/static/script/"
  },
  staticfiles: {
    src: src + "/**/*.html",
    dest: dest + "/"
  }
};