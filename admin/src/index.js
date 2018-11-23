import dva from 'dva';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

app.model(require('./models/login').default)
app.model(require('./models/bodyWeight').default)
app.model(require('./models/bloodPressure').default)

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
