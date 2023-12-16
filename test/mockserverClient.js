var mockServerClient = require('mockserver-client').mockServerClient;

mockServerClient("localhost", 1080).reset();

mockServerClient("localhost", 1080)
    .mockAnyResponse({
        "httpRequest": {
            "method": "GET",
            "path": "/assetImportJob"
        },
        "httpResponse": {
            "statusCode": 203,
            "body": JSON.stringify({
                "status": "running"
            })
        }
    });

mockServerClient("localhost", 1080)
    .mockAnyResponse(
        {
            "httpRequest": {
                "method": "GET",
                "path": "/assetImportJobSlow"
            },
            "httpResponse": {
                "delay": {
                    "timeUnit": "SECONDS",
                    "value": 10
                },
                "statusCode": 200,
                "body": JSON.stringify({
                    "status": "completed"
                })
            }
        }
    );
