const schemaJsonPlaceholder={
  "$schema": "http://json-schema.org/draft-07/schema#",
  
    "type": "array",
    "properties": {
      "postId": {
        "type": "integer"
      },
      "id": {
        "type": "integer"
      },
      "name": {
        "type": "string"
      },
      "email": {
        "type": "string",
        
      },
      "body": {
        "type": "string"
      }
    },
    "required": ["postId", "id", "name", "email", "body"]
  
};

const schemaJsonPost={
  
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "array",
    "properties": {
      "userId": {
        "type": "integer"
      },
      "id": {
        "type": "integer"
      },
      "title": {
        "type": "string"
      },
      "body": {
        "type": "string"
      }
    },
    "required": ["userId", "id", "title", "body"]
  
}

describe('Test JsonPlaceHolder REST API', () => {
  it('passes', () => {
    cy.log("---------------------------------------")
    const url='https://jsonplaceholder.typicode.com/posts/1/comments'
    const methodRest='GET'

    cy.requestSend(methodRest,url,null,200,schemaJsonPlaceholder)
  
  })
  it('passes', () => {
    cy.log("---------------------------------------")
    const url='https://jsonplaceholder.typicode.com/posts'
    const methodRest='GET'

    cy.requestSend(methodRest,url,null,200,schemaJsonPost)
  
  })

  it('Get Users',()=>{

    const customHeaders={
      'Content-Type':'application/json; charset=utf-8',
    };
    const queryParams={
      id:1,
    }
    cy.request({
      methodRest:'GET',
      url:'https://jsonplaceholder.typicode.com/users',
      qs:queryParams,
      header:customHeaders
    })

  })

})