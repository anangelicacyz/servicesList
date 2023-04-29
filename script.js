const stern = "stern -n crm XXXXXXXX --exclude-container istio-proxy"
const nameService= document.getElementById('accordionServices')
const getAllServices= document.getElementById('getAllServices')
let searchEntry= document.getElementById('searchEntry')
let searchEntryValue= searchEntry.value
let btnClear= document.getElementById('btn-clear')

const services= [  

    { 
        name: 'activities', 
        env :{  
                prod: {  url: 'activities.keybeapi.com', docs: 'activities.keybeapi.com/api/docs'  } ,
                qa: {  url: 'activities.qakbe.com', docs: 'activities.qakbe.com/api/docs'  } 
        
                },
        command: stern.replace('XXXXXXX', 'activities') ,  

    },
    {   name: 'admin' , 
        command: stern.replace('XXXXXXX', 'admin'),
        env :{  
            prod: {  url: 'admin.keybeapi.com', docs: 'admin.keybeapi.com/api/docs'  } ,
            qa: {  url: 'admin.qakbe.com', docs: 'admin.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'apps' , 
        env :{  
            prod: {  url: 'apps.keybeapi.com', docs: 'apps.keybeapi.com/api/docs'  } ,
            qa: {  url: 'apps.qakbe.com', docs: 'apps.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'auth' , 
        env :{  
            prod: {  url: 'auth.keybeapi.com', docs: 'auth.keybeapi.com/api/docs'  } ,
            qa: {  url: 'auth.qakbe.com', docs: 'auth.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'auth-scheduler' , 
        env :{  
            prod: {  url: 'auth-scheduler.keybeapi.com', docs: 'auth-scheduler.keybeapi.com/api/docs'  } ,
            qa: {  url: 'auth-scheduler.qakbe.com', docs: 'auth-scheduler.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'contacts-consumers' , 
        env :{  
            prod: {  url: 'contacts-consumers.keybeapi.com', docs: 'contacts-consumers.keybeapi.com/api/docs'  } ,
            qa: {  url: 'contacts-consumers.qakbe.com', docs: 'contacts-consumers.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'crm-contacts' , 
        env :{  
            prod: {  url: 'crm-contacts.keybeapi.com', docs: 'crm-contacts.keybeapi.com/api/docs'  } ,
            qa: {  url: 'crm-contacts.qakbe.com', docs: 'crm-contacts.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'crm-grpc' , 
        env :{  
            prod: {  url: 'crm-grpc.keybeapi.com', docs: 'crm-grpc.keybeapi.com/api/docs'  } ,
            qa: {  url: 'crm-grpc.qakbe.com', docs: 'crm-grpc.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'crm-status' , 
        env :{  
            prod: {  url: 'crm-status.keybeapi.com', docs: 'crm-status.keybeapi.com/api/docs'  } ,
            qa: {  url: 'crm-status.qakbe.com', docs: 'crm-status.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'crm-tasks' , 
        env :{  
            prod: {  url: 'crm-tasks.keybeapi.com', docs: 'crm-tasks.keybeapi.com/api/docs'  } ,
            qa: {  url: 'crm-tasks.qakbe.com', docs: 'crm-tasks.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'events' , 
        env :{  
            prod: {  url: 'events.keybeapi.com', docs: 'events.keybeapi.com/api/docs'  } ,
            qa: {  url: 'events.qakbe.com', docs: 'events.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'events-notifier' , 
        env :{  
            prod: {  url: 'events-notifier.keybeapi.com', docs: 'events-notifier.keybeapi.com/api/docs'  } ,
            qa: {  url: 'events-notifier.qakbe.com', docs: 'events-notifier.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'grpc-admin' , 
        env :{}  
    },
    {   name: 'grpc-campaigns' , 
        env :{}  
    },
    {   name: 'grpc-events' , 
        env :{}  
    },
    {   name: 'grpc-socket' , 
        env :{}  
    },
    {   name: 'grpc-token' , 
        env :{}  
    },
    {   name: 'idaas' , 
        env :{  
            prod: {  url: 'idaas.keybeapi.com', docs: 'idaas.keybeapi.com/api/docs'  } ,
            qa: {  url: 'idaas.qakbe.com', docs: 'idaas.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'keybe-channel-email' , 
        env :{  
            prod: {  url: 'keybe-channel-email.keybeapi.com', docs: 'keybe-channel-email.keybeapi.com/api/docs'  } ,
            qa: {  url: 'keybe-channel-email.qakbe.com', docs: 'keybe-channel-email.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'notification-manager' , 
        env :{  
            prod: {  url: 'notification-manager.keybeapi.com', docs: 'notification-manager.keybeapi.com/api/docs'  } ,
            qa: {  url: 'notification-manager.qakbe.com', docs: 'notification-manager.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'pipelines-api' , 
        env :{  
            prod: {  url: 'pipelines-api.keybeapi.com', docs: 'pipelines-api.keybeapi.com/api/docs'  } ,
            qa: {  url: 'pipelines-api.qakbe.com', docs: 'pipelines-api.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'pipelines-grpc' , 
        env :{  
            prod: {  url: 'pipelines-grpc.keybeapi.com', docs: 'pipelines-grpc.keybeapi.com/api/docs'  } ,
            qa: {  url: 'pipelines-grpc.qakbe.com', docs: 'pipelines-grpc.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'pubsub-triggers-form-submits' , 
        env :{  
            prod: {  url: 'pubsub-triggers-form-submits.keybeapi.com', docs: 'pubsub-triggers-form-submits.keybeapi.com/api/docs'  } ,
            qa: {  url: 'pubsub-triggers-form-submits.qakbe.com', docs: 'pubsub-triggers-form-submits.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'pubsub-triggers-user-actions' , 
        env :{  
            prod: {  url: 'pubsub-triggers-user-actions.keybeapi.com', docs: 'pubsub-triggers-user-actions.keybeapi.com/api/docs'  } ,
            qa: {  url: 'pubsub-triggers-user-actions.qakbe.com', docs: 'pubsub-triggers-user-actions.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'socket' , 
        env :{  
            prod: {  url: 'socket.keybeapi.com', docs: 'socket.keybeapi.com/api/docs'  } ,
            qa: {  url: 'socket.qakbe.com', docs: 'socket.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'sqs-app-user-changes' , 
        env :{}  
    },
    {   name: 'sqs-autolarte-invoice-notification' , 
        env :{}  
    },
    {   name: 'sqs-campaigns-channels-notifications' , 
        env :{}  
    },
    {   name: 'sqs-campaigns-conversa-messages-notifications' , 
        env :{}  
    },
    {   name: 'sqs-campaigns-conversa-rooms-notifications' , 
        env :{}  
    },
    {   name: 'sqs-campaigns-email-notifications' , 
        env :{}  
    },
    {   name: 'sqs-campaigns-list-user-importer' , 
        env :{}  
    },
    {   name: 'sqs-campaigns-opportunities' , 
        env :{}  
    },
    {   name: 'sqs-campaigns-sender' , 
        env :{}  
    },
    {   name: 'sqs-campaigns-users-sender' , 
        env :{}  
    },
    {   name: 'sqs-triggers-opportunities' , 
        env :{}  
    },
    {   name: 'sqs-triggers-tasks' , 
        env :{}  
    },
    {   name: 'sqs-triggers-user-changes' , 
        env :{}  
    },
    {   name: 'sqs-user-import-consumer' , 
        env :{}  
    },
    {   name: 'standard-user-auth' , 
        env :{  
            prod: {  url: 'standard-user-auth.keybeapi.com', docs: 'standard-user-auth.keybeapi.com/api/docs'  } ,
            qa: {  url: 'standard-user-auth.qakbe.com', docs: 'standard-user-auth.qakbe.com/api/docs'  } 
        }  
    },
    {   name: 'workjob-campaigns-scheduled' , 
        env :{} 
    }
]

// for(let i=0; i<services.length; i++){
//     if(!services[i].env.qa){
//         console.log(services[i].name + " no tiene datos")
//     }else{
//         console.log(services[i].name + " si tiene datos")
//     }
// }

const { childNodes } = nameService 

// service.env.qa.url
// service.env.qa.docs
// service.env.prod.url
// service.env.prod.docs
let x= ''
    let serviceEnvQaUrl= ''
    let auxSerEnvQaUrl
    let serviceEnvQaDocs=''
    let auxSerEnvQaDocs
    let serviceEnvProdUrl= ''
    let auxSerEnvProdUrl
    let serviceEnvProdDocs=''
    let auxSerEnvProdDocs

    function QaUrlValidation(i){
        let serviceEnv = services[i].env
        if(!serviceEnv["qa"]){
            serviceEnvQaUrl= "No hay datos"
        }else{
            auxSerEnvQaUrl= serviceEnv.qa.url
            serviceEnvQaUrl= serviceEnv.qa.url + `<button class='btnQaUrl' data-stern= '${auxSerEnvQaUrl}'><img src="./assets/link.png" width= "32px"></button>`
        }
        return serviceEnvQaUrl
    }
    function QaDocsValidation(i){
        let serviceEnv = services[i].env
        if(!serviceEnv['qa']){
            serviceEnvQaDocs = "No hay datos"
        }else{
            auxSerEnvQaDocs = serviceEnv.qa.docs
            serviceEnvQaDocs= serviceEnv.qa.docs + `<button class="btnQaDocs" data-stern= "${auxSerEnvQaDocs}"><img src="./assets/link.png" width= "32px"></button>`
        }
        return serviceEnvQaDocs
    }
    function ProdUrlValidation(i){
        let serviceEnv= services[i].env
        if(!serviceEnv['prod']){
            serviceEnvProdUrl= "No hay datos"
        }else{
            auxSerEnvProdUrl= serviceEnv.prod.url
            serviceEnvProdUrl= serviceEnv.prod.url + `<button class="btnProdUrl" data-stern= "${auxSerEnvProdUrl}"> <img src="./assets/link.png" width= "32px"> </button>`
        }
        return serviceEnvProdUrl
    }
    function ProdDocsValidation(i){
        let serviceEnv= services[i].env
        if(!serviceEnv['prod']){
            serviceEnvProdDocs= "No hay datos"
        }else{
            auxSerEnvProdDocs = serviceEnv.prod.docs
            serviceEnvProdDocs= serviceEnv.prod.docs + `<button class="btnProdDocs" data-stern= "${auxSerEnvProdDocs}"> <img src="./assets/link.png" width= "32px"> </button>`
        }
    }    

function allServices (){
   return services.forEach((service,i)=> {
        let copystern= stern.replace('XXXXXXXX', service.name)    
    
    QaUrlValidation(i)
    QaDocsValidation(i)
    ProdUrlValidation(i)
    ProdDocsValidation(i)

        nameService.innerHTML += `<div class="accordion-item">
                                    <h2 class="accordion-header" id="heading${i}">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                                        ${service.name}
                                        </button>
                                    </h2>
                                    <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}" data-bs-parent="#accordionServices">
                                        <div class="accordion-body">
                                            <div>
                                                <div  id="stern${i}">${copystern}</div>
                                                <button class="copySternBtn" data-stern= "${copystern}"><img src="./assets/icons8-copy-48.png"width="16px"></button>
                                            </div>
                                            <table class="table">
                                                <thead>
                                                    <th scope="col">Service environment</th>
                                                    <th scope="col">URL</th>
                                                    <th scope="col">Docs</th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td scope="row">QA</td>
                                                        <td>${serviceEnvQaUrl} </td>
                                                        <td>${serviceEnvQaDocs} </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">Production</td>
                                                        <td>${serviceEnvProdUrl} </td>
                                                        <td>${serviceEnvProdDocs} </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>`
            
            // childNodes.forEach(qaUrl =>{
                
            //     console.log(qaUrl.querySelector('.btnQaUrl').dataset)
            //     qaUrl.querySelector('.btnQaUrl').classList.add('invalidate')
                
            // })

                                childNodes.forEach(btncopy =>{
                                    btncopy.querySelector('.copySternBtn').addEventListener('click', (e)=>{
                                       //window.ana= e.target
                                       //console.log(e.target)
                                    navigator.clipboard.writeText(e.target.parentElement.dataset.stern)
                                    })
                                })
                                childNodes.forEach(qaUrl =>{
                                    let qaUrlExist = qaUrl.querySelector('.btnQaUrl')
                                    if(qaUrlExist){
                                        qaUrlExist.addEventListener('click', (e)=>{
                                            navigator.clipboard.writeText(e.target.parentElement.dataset.stern)
                                        })
                                    }
                                })
                                childNodes.forEach(qaDocs =>{
                                    let qaDocsExist = qaDocs.querySelector('.btnQaDocs')
                                    if(qaDocsExist){
                                        qaDocsExist.addEventListener('click', (e)=>{
                                            navigator.clipboard.writeText(e.target.parentElement.dataset.stern)
                                        })
                                    }
                                })
                                childNodes.forEach(prodUrl =>{
                                    let prodUrlExist = prodUrl.querySelector('.btnProdUrl')
                                    if(prodUrlExist){
                                        prodUrlExist.addEventListener('click', (e)=>{
                                            navigator.clipboard.writeText(e.target.parentElement.dataset.stern)
                                        })
                                    }
                                })
                                childNodes.forEach(prodDocs=>{
                                    let prodDocsExist= prodDocs.querySelector('.btnProdDocs')
                                    if(prodDocsExist){   
                                        prodDocsExist.addEventListener('click', (e)=>{
                                        navigator.clipboard.writeText(e.target.parentElement.dataset.stern)
                                        })
                                    }
                                })
    })


}


allServices()


searchEntry.addEventListener('keydown', (e)=>{
    //alert(e.target.value)
    let searchEntryValue= searchEntry.value
    nameService.innerHTML=''

    for(let j=0; j<services.length; j++){
        if(services[j].name.includes(searchEntryValue)){
            let copyStern= stern.replace('XXXXXXXX', services[j].name)

            
            nameService.innerHTML += `<div class="accordion-item">
                                <h2 class="accordion-header" id="heading${j}">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${j}" aria-expanded="true" aria-controls="collapse${j}">
                                     ${services[j].name}
                                    </button>
                                </h2>
                                <div id="collapse${j}" class="accordion-collapse collapse" aria-labelledby="heading${j}" data-bs-parent="#accordionServices">
                                    <div class="accordion-body">
                                        <div>
                                            <div  id="stern${j}">${copyStern}</div>
                                            <button class="copySternBtn" data-stern= "${copyStern}"><img src="./assets/icons8-copy-48.png"width="16px"></button>
                                        </div>
                                        <table class="table">
                                            <thead>
                                                <th scope="col">Service environment</th>
                                                <th scope="col">URL</th>
                                                <th scope="col">Docs</th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td scope="row">QA</td>
                                                    <td>${services[j].env.qa.url} <button class="btnQaUrl" data-stern= "${services[j].env.qa.url}"> <img src="./assets/link.png" width= "32px" ></button></td>
                                                    <td>${services[j].env.qa.docs} <button class="btnQaDocs" data-stern= "${services[j].env.qa.docs}"> <img src="./assets/link.png" width= "32px"> </button></td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">Production</td>
                                                    <td>${services[j].env.prod.url} <button class="btnProdUrl" data-stern= "${services[j].env.prod.url}"> <img src="./assets/link.png" width= "32px"> </button></td>
                                                    <td>${services[j].env.prod.docs} <button class="btnProdDocs" data-stern= "${services[j].env.prod.docs}"> <img src="./assets/link.png" width= "32px"> </button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>`  
        
                            
                
            }else{
            //nameService3.innerHTML = `<div class="message"> No hay coincidencias</div> + ${todos}`
        }
        
    }
            childNodes.forEach(btncopy =>{
                 btncopy.querySelector('.copySternBtn').addEventListener('click', (e)=>{
                //window.ana= e.target
                //console.log(e.target)
                    navigator.clipboard.writeText(e.target.parentElement.dataset.stern)
                })
            })
            childNodes.forEach(qaUrl =>{
                qaUrl.querySelector('.btnQaUrl').addEventListener('click', (e)=>{
                    navigator.clipboard.writeText(e.target.parentElement.dataset.stern)
                })
            })
            childNodes.forEach(qaDocs =>{
                qaDocs.querySelector('.btnQaDocs').addEventListener('click', (e)=>{
                    navigator.clipboard.writeText(e.target.parentElement.dataset.stern)
                })
            })
            childNodes.forEach(prodUrl =>{
                prodUrl.querySelector('.btnProdUrl').addEventListener('click', (e)=>{
                    navigator.clipboard.writeText(e.target.parentElement.dataset.stern)
                })
            })
            childNodes.forEach(prodDocs=>{
                prodDocs.querySelector('.btnProdDocs').addEventListener('click', (e)=>{
                    navigator.clipboard.writeText(e.target.parentElement.dataset.stern)
            })
            })
    
})


btnClear.addEventListener('click', (e)=>{
    if(searchEntry.value){
            nameService.innerHTML= ''
            searchEntry.value=''
            allServices()
    }else{
        console.log("es nulo")
    }
})

