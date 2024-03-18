const Page =  require("./page")

class LaunchURL extends Page {

    launchBrowser() {
        return super.open()
    }
}
module.exports =new LaunchURL();