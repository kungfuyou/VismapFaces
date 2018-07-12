import data from './data';
import delay from './delay';

export default function fieldsRoutes(app, db) {
  app.post('/token', (req, res) => {
    setTimeout(() => {
      /* res.status(200).send({
        token: 'c29tZWNvZGVvZm1pbmU=',
        ok: true
      });*/
      res.status(404).send({
        message: 'Not Found'
      });
    }, delay);
  });

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
