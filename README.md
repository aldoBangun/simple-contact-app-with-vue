# Contact App

> App for testing a vue app build without vue-cli & deploy to netlify

### Conclusion

if we build an app using this method we'll find an issue (at least what i found) with the router. We cannot directly visit routes other than `/` route, instead we have to switch it from `/` routes. for instance, if we mind to visit `https://our-app.com/ohter-routes` it'll be **PAGE NOT FOUND**