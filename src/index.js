import App from './app'


let state = {}


const app = new App({
  state: state
})


const appNode = document.createElement('section')
document.body.appendChild(appNode)

app.render(appNode)
