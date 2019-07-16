

# Noapi

The simplest framework for [Node](https://nodejs.org) Api app. You just need to focus on your great project, no need to care about how to manage web services, routes, multi-level directory routing, multi-api services, etc. 

Noapi is based on [Express](https://expressjs.com/), you can use all the middleware of Express or write your own middleware and custom routes. (All of them will be executed before noapi)
	

## Installation

```sh
npm i noapi --save
```



## Demo

The api file has no code, just with a description(e.g., the test url). Noapi saves the parameters (from url or post) to the "query" and calls the biz file for processing.

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo.jpg?raw=true)



## Multi-Api Services

The following demo project consists of 3+ api services. Each api service is an independent project, which is maintained by different people and has a clear division of labor.

```
/<Project root>
  /api-forms             <- Independent subproject (api service "forms" subsystem)
    /api
      /bill
        /form
          crud.js           http://localhost:3000/forms:/bill/form/crud
          new.js            http://localhost:3000/forms:/bill/form/new
        dropDownList.js     http://localhost:3000/forms:/bill/dropdownlist
      index.js
          
    /biz
      ...
    index.js
    package.json

  /api-erp               <- Independent subproject (api service "erp" subsystem)
    /api
      /bill
        /mms
          /mnf
            manuPlan.js     http://localhost:3000/erp:/bill/mms/mnf/manuplan
        /purchase
          plan.js           http://localhost:3000/erp:/bill/purchase/plan
          order.js          http://localhost:3000/erp:/bill/purchase/order

        /sales
          plan.js           http://localhost:3000/erp:/bill/sales/plan
          order.js          http://localhost:3000/erp:/bill/sales/order

      /report
        /mms
          /mnf
            /manuPlan
              summary.js    http://localhost:3000/erp:/report/mms/mnf/manuplan/summary
              detail.js     http://localhost:3000/erp:/report/mms/mnf/manuplan/detail
    /biz
      ...
    index.js
    package.json

  /api-xxx               <- Independent subproject (api service "xxx" subsystem)
    ...

  /web                   <- Independent subproject (web service)
    /test
    app.js
    package.json

  README.md
```



## Examples

See examples directory to learn more.

[How To Run These Examples](./examples/readme.md)



## License

[MIT](LICENSE)

Copyright (c) 2019, Owen Luke

