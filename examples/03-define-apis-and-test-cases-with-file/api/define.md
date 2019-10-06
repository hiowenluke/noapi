
A file path corresponds to an api path.
E.g., the file path "/bill/form/check.js" corresponds to the api path "/bill/form/check".

Note:
    1. The api definition object in js file must has a "url" or a "params", and a "result" or a "test" property.
    2. The "api" property in api definition object will be ignored ('cause it will be parsed from the file path).
    3. Use an array to define multiple test cases for one api.
    
Learn more:
* 01-define-apis-and-test-cases-with-array
* 02-define-apis-and-test-cases-with-object
* 06-define-apis-with-empty-file
* 05-define-apis-[minimally]
* 04-define-apis-and-test-cases-[completely]