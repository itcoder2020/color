const { Colors, hexToRgb } = require("./service/color")
const express = require("express")
const { json } = require("./service/fmtJson")

const app = express()
var router = express.Router()
const bodyParser = require("body-parser")
let PORT = 3000 || process.env.PORT
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use("/api", router)
router.post("/color", (req, res, next) => {
    //console.log(req.body)
    let body = req.body
    
    try {
        if (Object.keys(body).length === 0) throw new Error("Body is null.")
        let color = req.body.color
        if(typeof color == "undefined") throw new Error("body color is null.")
        let name = req.body.name
        if (typeof name == "undefined")name  = 'primary'
        //console.log(color.indexOf("#"))
        if (color.indexOf("#") == -1) throw new Error("# color is null.")
        let colorShade = Colors(color, -11.5)
        let colorTint = Colors(color, 16)
        let rgb = hexToRgb(color)
        let data = {
            default: color,
            rgb: rgb.toString(),
            contrast: "#ffffff",
            contrastRgb: "255,255,255",
            shade: colorShade,
            tint: colorTint

        }
        return res.status(200).json(json(200, "success", null, data))
    } catch (error) {
        console.log(error.message)
        return res.status(400).json(json(400, "error", error.message, null))

    }
})

app.listen(PORT, () => {
    console.log("start PORT " + PORT)
})