
Sometimes we need to preprocess the apis of different paths, for example:

* Add lowercase for all query parameters. E.g., query.formname for query.formName;
* If the api path is starting with "/bill/*", set query.isbill to true;
* If the api path is starting with "/info/*", set query.infoname to some string;


Noapi uses [kdo](https://github.com/hiowenluke/kdo) to require the entire aha directory, and execute each of function files in it with order.
