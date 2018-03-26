function MenuChoice()
{
 if (document.getElementById("menu").value == "Show Area 1")
 {
 document.getElementById("allcustomers").style.visibility = "visible";
 document.getElementById("orderhistory").style.visibility = "hidden";
 document.getElementById("customerorder").style.visibility = "hidden"; 
 }
 else if (document.getElementById("menu").value == "Show Area 2")
 {
 document.getElementById("allcustomers").style.visibility = "hidden";
 document.getElementById("orderhistory").style.visibility = "visible";
 document.getElementById("customerorder").style.visibility = "hidden"; 
 }
else if (document.getElementById("menu").value == "Show Area 3")
 {
 document.getElementById("allcustomers").style.visibility = "hidden";
 document.getElementById("orderhistory").style.visibility = "hidden";
 document.getElementById("customerorder").style.visibility = "visible"; 
 }
 else
 {
 document.getElementById("allcustomers").style.visibility = "hidden";
 document.getElementById("orderhistory").style.visibility = "hidden";
 document.getElementById("customerorder").style.visibility = "hidden"; 
 }
}

function GetCustomer()
{
   var objRequest = new XMLHttpRequest() ; 
    
   var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCustomers";

   objRequest.onreadystatechange = function()
   {
        if(objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText) ;
            GenerateOutput(output) ; 
        }
   }
    
   objRequest.open("GET", url, true) ;
   objRequest.send() ; 
   


  function GenerateOutput(result)
{
  var count = 0 ;
  var displaytext = "<table><tr><th>Customer Name</th><th></th><th>Customer ID</th><th></th><th></th><th>City</th></tr>" ;
  
  for (count=0; count < result.GetAllCustomersResult.length; count++)
  {
    displaytext += "<tr><td>" + result.GetAllCustomersResult[count].CompanyName + " </td><td>" + "</td><td> " + result.GetAllCustomersResult[count].CustomerID + " </td><td>" + "</td><td>"+ "</td><td> " + result.GetAllCustomersResult[count].City + "</td></tr>"; 
    
  }
   
  displaytext += "</table>" ;
  document.getElementById("displaycustomerlist").innerHTML = displaytext; 
  
}
}

function GetHistory()
{
   var objRequest = new XMLHttpRequest() ; 
    
   var url =  "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
   url += document.getElementById("custid").value ;
    
   objRequest.onreadystatechange = function()
   {
        if(objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText) ;
            GenerateOutput(output) ; 
        }
   }
    
   objRequest.open("GET", url, true) ;
   objRequest.send() ; 
   

function GenerateOutput(result)
{
  var count = 0 ;
  var displaytext = "<table><tr><th>Product Name</th><th></th><th>Quantities Ordered</th></tr>" ;
  
  for (count=0; count < result.length; count++)
  {
    displaytext += "<tr><td>"+ result[count].ProductName + " </td><td>" + "</td><td> " + result[count].Total + "</td></tr>" ;
    
  }
    
  displaytext += "</table>" ; 
  document.getElementById("custorderdisplay").innerHTML = displaytext;  
}
}

function GetOrder()
{
   var objRequest = new XMLHttpRequest() ;
    
   var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
   url += document.getElementById("3custid3").value ;
    
   objRequest.onreadystatechange = function()
   {
        if(objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText) ;
            GenerateOutput(output) ; 
        }
   }
   
   objRequest.open("GET", url, true) ;
   objRequest.send() ; 
   
   function GenerateOutput(result)
   {
  var count = 0 ;
  var displaytext = "<table><tr><th>Order Date</th><th></th><th>Order Id</th><th></th><th>Shipping Address</th><th></th><th>Shipping City</th><th></th><th>Shipping Name</th><th></th><th>Shipping Postal Code</th><th></th><th>Shipped Date</th></tr>" ;
  
  for (count=0; count < result.GetOrdersForCustomerResult.length; count++)
      {
      displaytext += "<tr><td>" + result.GetOrdersForCustomerResult[count].OrderDate + " </td><td>" + "</td><td>  " + result.GetOrdersForCustomerResult[count].OrderID + " </td><td>" + "</td><td>  " + result.GetOrdersForCustomerResult[count].ShipAddress + " </td><td>" + "</td><td>  " + result.GetOrdersForCustomerResult[count].ShipCity + " </td><td>" + "</td><td>  " + result.GetOrdersForCustomerResult[count].ShipName + " </td><td>" + "</td><td>  " + result.GetOrdersForCustomerResult[count].ShipPostcode + " </td><td>" + "</td><td>" + result.GetOrdersForCustomerResult[count].ShippedDate + "</td></tr>" ;
    
      }
  
  displaytext += "</table>" ; 
  document.getElementById("displayorder").innerHTML = displaytext; 
  
   }   
} 




