# GraphQL Simple API

![Coverage:branches](./badges/badge-branches.svg)
![Coverage:functions](./badges/badge-functions.svg)
![Coverage:lines](./badges/badge-lines.svg)
![Coverage:statements](./badges/badge-statements.svg)

To install the NodeJS packages

```bash
npm i
```

To compile and start the project

```bash
npm run compile
npm run start
```

## GraphQL playground

## GetRequest

Query

```graphql
query GetRequest($inputData: F999_GetRequestInput!) {
  GetRequest(inputData: $inputData) {
    serviceData {
      request {
        identifier {
          id
          idScope
          idContext
        }
        title
        serviceLevel
        contactReason {
          domain
          productType
          contactReasonCode
          identifiedBy
        }
        numberOfTimesReopened
        role {
          name
          creationDate
          role
        }
        creationDate
        status{code}
      }
    }
  }
}
```

Variables

```json
{
  "inputData": { 
    "serviceData": {
    	"requestIdentifier": {
   	 		"id": "4dafda69-0b57-447c-b84c-4efabfb4283f",
   	 		"idScope": "ENT",
    		"idContext": "RQM"
  		}
  	}
  }
}
```
