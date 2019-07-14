

## Noapi

A framework for Node.js Api app.


```
/<Project root>
    /api-forms							 <- Independent subproject (api service, api-forms subsystem)
        /aha
            ...
        /api
            /bill
                /form
                    crud.js					http://localhost:3000/forms:/bill/form/crud
                    new.js					http://localhost:3000/forms:/bill/form/new
                /list
                    getData.js				http://localhost:3000/forms:/bill/list/getdata
                    getFields.js			http://localhost:3000/forms:/bill/list/getfields
                dropDownList.js				http://localhost:3000/forms:/bill/dropdownlist
            index.js
                    
        /biz
            ...
        /doc
        /test
        index.js
        package.json

    /api-erp							 <- Independent subproject (api service, api-erp subsystem)
        /api
            /bill
                /mms
                    /mnf
                        manuPlan.js			http://localhost:3000/erp:/bill/mms/mnf/manuplan
                /purchase
                    plan.js					http://localhost:3000/erp:/bill/purchase/plan
                    order.js				http://localhost:3000/erp:/bill/purchase/order

                /sales
                    plan.js					http://localhost:3000/erp:/bill/sales/plan
                    order.js				http://localhost:3000/erp:/bill/sales/order

            /report
                /mms
                    /mnf
                        /manuPlan
                            summary.js		http://localhost:3000/erp:/report/mms/mnf/manuplan/summary
                            detail.js		http://localhost:3000/erp:/report/mms/mnf/manuplan/detail
        /biz
            ...
        /lib
        /test
        index.js
        package.json

    /api-xxx							 <- Independent subproject (api service, api-xxx subsystem)
        ...

    /web								 <- Independent subproject (web service)
        /doc
        /test
        app.js
        package.json

    README.md
```
