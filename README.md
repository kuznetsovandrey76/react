`npm install -g create-react-app`  

`create-react-app app`  

`cd app`  

`npm install --save gh-pages`  

update `package.json`  
```json
{
  ...,
  "homepage": "http://kuznetsovandrey76.ru/react/",
  "dependencies": {
	  ...,
  },
  "scripts": {
    "start": ...,
    "build": ...,
    "test": ...,
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "eject": ...
  },
  	...
}
```

После изменений запускаем `npm run deploy`

`Settings -> GitHub Pages -> Source -> gh-pages branch`