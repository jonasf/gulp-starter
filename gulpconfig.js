var dest = "./build";
var src = './src';

module.exports = { 
  sass: {
    src: src + "/static/style/*.scss",
    dest: dest + "/static/style/"
  },
  staticfiles: {
    src: src + "/**/*.html",
    dest: dest + "/"
  }
};