import 'mocha';
import { expect } from 'chai';
import * as request from 'supertest';
import Server from '../server';

describe('All', () => {
  it('should get all fetch data', () =>
    request(Server)
      .get('/api/assets')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('array')
          .of.length(2);
      }));

  it('should add a new data', () =>
    request(Server)
      .post('/api/assets')
      .send({ name: 'test' })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('name')
          .equal('test');
      }));

  it('should get an object by id', () =>
    request(Server)
      .get('/api/assets/2')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('name')
          .equal('test');
      }));
});
