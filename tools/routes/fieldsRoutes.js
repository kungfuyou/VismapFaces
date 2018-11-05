import data from './data';
import delay from './delay';

export default function fieldsRoutes(app, db) {
  app.post('/token', (req, res) => {
    setTimeout(() => {
    res.status(200).send({ "access_token": "Da6OxQ9qA65X5wYUpp8xwaTW5DFzRGDEQ2WYBRspjM7hTSd0feIfNB2Za_E0IiLXI1W1874N6OEqCUwzDCYR7P55suUvdMyIPwYDyMY0Zk6W4fXXbU7NgmlWqbf5fGgbeBgAvzGWtkFcyTe2kclL3Dcjp7fPpyvCiui7Lk89Ceyc_NlnB_eXMJgjMFpCNhUz94SSpgErtsSsDAAuEjPZcZS-BnY1ENRaNMZS9WehtNy3OqVdppNkN-Hzs9y3KMI3QfK3r9FKgE1I_MtLnkxkjKGDEFBcdvNXVP_SZ2c261w57VmX4pgW-_xBQlCPCpQZi2pqFaRzO38Rqbj6Sd43KBL3len08uMGJ_LmbunLRjAVsyXQdyNetoSHT0CPRfmOSHcAZEb6HO4mgqiuf8pG15VI6hRi3vcsjVzkMyJ3whQ30xnqOxFbx0iUEoQiiSmSe3eSY00dPpRxgmxThdN0gjewz5IaOhgvzAazSh_ONnzhkciyre0Mra-27-hddw_dOsIiy99qSyzG-tEWDvgQA1Tz5eyeOLPSSon3Cba0HFo", "token_type": "bearer", "expires_in": 1209599 });

    /*   res.status(400).send({
        "error": "invalid_grant",
        "error_description": "The user name or password is incorrect."
      }); */
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
