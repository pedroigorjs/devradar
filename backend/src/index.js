import 'dotenv/config';
import App from './App';

const config = {
  PORT: process.env.SERVER_PORT || 3333,
  HOST: process.env.SERVER_HOST || 'localhost',
};

App.listen(config.PORT, () => {
  console.log(`Server is running at https://${config.HOST}:${config.PORT}`);
  console.log(`To stop it press CTRL + C`);
});
