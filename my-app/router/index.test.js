import { test, expect } from "@jest/globals";
import request from "supertest";
import {app} from ".app.js"


//sample test
describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  })
  
test ('it should add new data to table, should return status code 200', async function(){
    const newData = {
        name: "Opal",
        project_type: "forum"
    };

    const response = await request(app).post('/projects').send(newData);
    
    expect(response.statuscode).toBe(200);
});