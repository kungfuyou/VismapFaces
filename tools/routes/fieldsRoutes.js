import data from './data';
import delay from './delay';

export default function fieldsRoutes(app, db) {
  app.get('/fields', (req, res) => {
    setTimeout(() => {
      res.send(data.fields);
    }, delay);
  });

  app.put('/fields', (req, res) => {
    setTimeout((req) => {
      res.send({message: 'fields saved succesfully'});
    }, delay);
  });
}
