(function(){

  var param = 'data-onchange'
  var elements = document.querySelectorAll('iframe[collection][document_id]')
  // elements.forEach(element=>{
  //   let dataset = Object.assign({}, element.dataset);
  //   let name = element.getAttribute('name') || '';
  //   if (name != ''){
  //       dataset["data"] = [{name:name}];
  //       switch (element.nodeName.toLowerCase()) {
  //         case 'iframe':
  //             let name = element.getAttrr
  //             CoCreate.readDocument(dataset);
  //         break;
  //       }
  //   }
  // });
  // //alert(elements.length)
  
  // function setData(data,update){
    
  //   let collection = data["collection"] || '';
  //   let document_id = data["document_id"] || '';
  //   if (document_id != '' && collection != ''){
  //     var elements = document.querySelectorAll('iframe[collection = "'+collection+'"][document_id = "'+document_id+'"]')
  //     if (elements){
  //         elements.forEach(element=>{
  //           if (update){
  //             if ( element.dataset.hasOwnProperty('onchange') && element.dataset['onchange']=='false'){
  //             return false;
  //             }
  //           }
  //           let name = element.getAttribute('name') || '';
  //           if (name != '') 
  //             switch (element.nodeName.toLowerCase()) {
  //               case 'iframe':
  //                 let  value = data.data[name];
  //                 element.srcdoc = value;
  //               break;
  //             }
  //         });//en forEach elements
  //       }
  //   }
  // }
  
  // CoCreateSocket.listen('readDocument', function(data) {
  //     setData(data,false);
  // })//end socket on
  
  // CoCreateSocket.listen('updateDocument', function(data) {
  //     setData(data,true);
  // });
  
  
  elements.forEach (el => {
    console.log(el)
    el.addEventListener('load', function(){
      CoCreateHtmlTags.saveHtml(el);
    })
  })
  
})()
