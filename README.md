

# Noapi

The simplest framework for Node.js Api app. You just need to focus on business logic, no need to care about how to manage web services, routes, multi-level directory routing, multi-api services, etc. 



## Demo

The files in the api directory have no code, just a description of the api (e.g., the test url). Noapi saves the parameters (from url or post) to the "query" and calls the files in the biz directory for processing.

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

See examples directory for more details.

[How To Run These Examples](./examples/readme.md)



## License

[MIT](LICENSE)

Copyright (c) 2019, Owen Luke

