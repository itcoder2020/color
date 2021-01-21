# color api
## How to use 
call `Url` localhost:3000/api/color method POST bp
## Body
```json 
{"color":"#CC0099"}
```
## Response
```json 
{
    "statusCode": 200,
    "message": "success",
    "error": null,
    "data": {
        "default": "#CC0099",
        "rgb": "204,0,153",
        "contrast": "#ffffff",
        "contrastRgb": "255,255,255",
        "shade": "#b40087",
        "tint": "#ec00b1"
    }
}
```



