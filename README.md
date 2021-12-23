# How to run this project

First clone the repository form GitHub:
```
git clone https://github.com/JoseLuria/random-quotes-generator.git
```

Then install the dependencies:
```
npm install
```

Finally, start the server with the following command:
```
npm start
```

# Running this project with Docker

1. Build Container Image
```
docker build -t random-quotes-generator:1.0 .
```
2. Run Container and expose port 80
```
docker run --rm -it -p 80:80 --name random-quotes-generator random-quotes-generator:1.0
```
## Built with
- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [React Div 100vh (To fix the 100vh mobile Screen Bug)](https://github.com/mvasin/react-div-100vh)
- [React Copy to clipboard](https://github.com/nkbt/react-copy-to-clipboard)
- [React Hot Toast (For notifications)](https://react-hot-toast.com/)

## ScreenShots
![ScreenShot](./public/random-quotes-screenshot.png)
