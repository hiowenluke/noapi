

# Noapi

The easiest framework for [Node](https://nodejs.org) Api app. You can define apis and test cases in a simple way, no need to care about how to manage api services, web service, routes, multi-level routing, multi-api services, test cases, etc. 

Noapi is based on [Express](https://expressjs.com/), you can use all the middleware of Express or write your own middleware and custom routes. (All of them will be executed before noapi)



## Installation

```sh
npm i noapi --save
```

Test:
```sh
git clone https://github.com/hiowenluke/noapi
cd noapi
npm test
```



## Demo

### Easy Api Definition By Array

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo1.jpg?raw=true)



### Easy Api Definition By Object

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo2.jpg?raw=true)



### Easy Api Definition By Directory

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo3.jpg?raw=true)



### Easy Api Definition By Pure Directory (Without Test)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo4.jpg?raw=true)



### Easy Api Definition Minimally (Without Test)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo5.jpg?raw=true)



### Easy Api Definition Completely (With Full Test Properties)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo6.jpg?raw=true)



### Easy Calling

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo7.jpg?raw=true)



### Easy Testing

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo8.jpg?raw=true)



### Easy Before Do And After Do In Testing

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo9.jpg?raw=true)




### Easy Multiple Test Cases For One Api

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo10.jpg?raw=true)




## Multi-Api Services

The following demo project consists of 3+ api services. Each api service is a seperate project, which is maintained by different guy and has a clear division of labor.

```
/<Demo Project root>
  /api-forms             <- seperate subproject (api service "forms" subsystem)
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

  /api-erp               <- seperate subproject (api service "erp" subsystem)
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

  /api-xxx               <- seperate subproject (api service "xxx" subsystem)
    ...

  /web                   <- seperate subproject (web service)
    /test
    app.js
    package.json

  README.md
```



## Examples

See [examples](./examples) to learn more.



## License

[MIT](LICENSE)

Copyright (c) 2019, Owen Luke

