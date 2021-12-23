// const cherio = require('cherio');
// const request = require('request');
// const fs = require('fs');
// const jsonConcat = require('json-concat');
// const { data } = require('cheerio/lib/api/attributes');

// // for (let i = 2; i <=9; i++) {

// // Create a Write Stream 
// var WriteStream  = fs.createWriteStream("./COFFEE TABLE12.json", "UTF-8");

// request('https://www.acmecorp.com/losangeles/living-room/coffee-table.html?p=12', (err, resp, html)=>{

//     if(!err && resp.statusCode == 200){
//         console.log("Request was success ");
        
//         // Define Cherio or $ Object 
//         const $ = cherio.load(html);

//         $(".item-inner").each((index, card)=>{
            
//             var img = $('img',card).attr('src');
//             // var img = $(card).text().trim().replace(/\n/g,'');
          
            
//             var price = $('span[class="price"]',card).text().trim().replace(/\n/g,'');
//             var title = $('a[class="product-item-link"]',card).text().trim().replace(/\n/g,'');
           
//             // var title =$('div.card-title').text().trim().replace(/\n/g,'');
//             object={
//                 'title':title,
//                 'price':price,
//                 'Main Category':'LIVING ROOM',
//                 'Sub Category':'COFFEE TABLE',
//                 'img':img
//             }
          
//             WriteStream.write(JSON.stringify(object));
//             WriteStream.write("\n");
//         });
        


//     }else{
//         console.log("Request Failed ");
//     }

// });

    
// }


const cherio = require('cherio');
const request = require('request');
const fs = require('fs');
const jsonConcat = require('json-concat');
const { data } = require('cheerio/lib/api/attributes');
const { features } = require('process');

// for (let i = 2; i <=9; i++) {

// Create a Write Stream 
///////////////////////////

//      Gliders 1st page

///////////////////////////
var WriteStream  = fs.createWriteStream(`./elements/bedding.json`, "UTF-8");
// for(let i=1;i<=5;i++)
// {
    request(`https://www.elementsgrp.com/itembrowser.aspx?action=attributes&itemtype=furniture&fob%20point=direct%20container&category=bedroom&type=bedding`, (err, resp, html)=>{
        
        if(!err && resp.statusCode == 200)
        {
            console.log("Request was success outer");
            
            // Define Cherio or $ Object 
            const $ = cherio.load(html);
    
            $(".ProductThumbnail").each((index, card)=>{
                
                // var price = $('span[class="price"]',card).text().trim().replace(/\n/g,'');
                // var title = $('a',card).text().trim().replace(/\n\t/g,'');
                var img = $('img',card).attr('src');
                // var url = $('a',card).attr('href');
                // img="https://www.amini.com/"+img;
                // url="https://www.amini.com/"+url;
        console.log(img);
                // get_desc(url,title,img);
               
            });
            
    
    
        }else{
            console.log(err);
            console.log("Request Failed outer");
        }
    
    });
// }

    
function get_desc(url,title,img){
    request(url, (err, resp, html)=>{

        if(!err && resp.statusCode == 200){
            console.log("Request was success inner ");
            
            // Define Cherio or $ Object 
            const $ = cherio.load(html);
    
            // $("#description").each((index, card)=>{
                
              
                // var description = $('.detail-desc').text().trim().replace(/\n\t/g,''); 
                var description = $('.description').html() 
                var hd=$('.el-table__header-wrapper').html()
                var bdy=$('.el-table__body-wrapper').html()
                // description=description+" "+hd+" "+bdy 
                //   image=  $('figure').map(function(){ return $('img').attr('src'); })
                //   console.log(image)
                object={
                    'title':title,
                    'main category':'Living Room',
                    'sub category':'',
                    'img':img,
                    "description":description,
                }
                
              
                WriteStream.write(JSON.stringify(object));
                WriteStream.write("\n");
            // });
            
    
    
        }else{
            console.log("Request Failed inner");
        }
    
    });
              
}


