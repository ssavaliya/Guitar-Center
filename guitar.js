var guitar = {"allProducts": [{
    "product_description": "These are one of the several Squier models available that offer a pretty good product for a reasonably low price. The pick-ups and hardware are sometimes suspect, and the workmanship varies from instrument to instrument. But for the price, these are a very good beginner's choice.",
    "shipping_details": "Charges for shipping $20.",
    "customer_reviews": " Hmm...well, sounds like a tele at low volumes...the higher the volume, the worse the squeals, like a pig really...ah well, it's a cheap guitar...also tends to rattle above the 10th fret. On the 1st and 2nd strings (to the point of fretting out completely), and on the 5 and 6 stings on the 1st through 3rd frets...weird...action. Settings help, but not much...hard to set the intonation as well (read, damn near impossible)... ",
    "price": "$204.99",
    "image_path": "main.jpg",
    "stock_availability": "true",
    "no_of_items": "10",
    "songs": "mere.mp3"

},{
    "product_description": "These are one of the several Squier models available that offer a pretty good product for a reasonably low price. The pick-ups and hardware are sometimes suspect, and the workmanship varies from instrument to instrument. But for the price, these are a very good beginner's choice.",
    "shipping_details": "Charges for shipping $10.",
    "customer_reviews": " Hmm...well, sounds like a tele at low volumes...the higher the volume, the worse the squeals, like a pig really...ah well, it's a cheap guitar...also tends to rattle above the 10th fret. On the 1st and 2nd strings (to the point of fretting out completely), and on the 5 and 6 stings on the 1st through 3rd frets...weird...action. Settings help, but not much...hard to set the intonation as well (read, damn near impossible)... ",
    "price": "$204.99",
    "image_path": "product1.jpg",
    "stock_availability": "true",
    "no_of_items": "10",
    "songs": "kygo.mp3"
},
{
    "product_description": "Modelled after the much more expensive Gibson SG guitars, the Epiphone SG G310 keeps it's cost low by using cheaper hardware and lower quality humbucking pick-ups. The G-310 features an alder body, a mahogany neck, and a dot-inlayed rosewood fingerboard.",
    "shipping_details": "Charges for shipping $25.",
    "customer_reviews": "  Heck...I bought it as a knock around guitar I could beat up a little as I carried it around with me. (I hate not having a guitar next to me...)...but it hasn't even fit this role very well. I considered putting in new pickups and tuners...but the whole buzzing thing seems impossible to cure. well, there you go...I'm planning to sell it, or failing that. When my new band plays our first show I guess I'll pull a Townsend on it...",
    "price": "$249.00",
    "image_path": "product2.jpg",
    "stock_availability": "true",
    "no_of_items": "14",
    "songs": "mus.mp3"
},
{
    "product_description": "Here's another guitar many people feel is a great value. This Pacifica features an agathis body, maple neck, and rosewood fretboard, with two single coil pick-ups, and one humbucker. The consensus is the guitar is reasonably well made, and the quality of the wood tends to be high.",
    "shipping_details": "Charges for shipping $18.",
    "customer_reviews": "  Yup...those were the pros above...basically this guitar. I guess it might be okay if you need something that looks and feels like a guitar. hmm...well, hit it hard and it chips...no finish flaws though. The tuners suck so bad it's hard to describe...tuning it is a real pain...but it doesn't go out too quickly I guess...Just to practice on if you don't care what it sounds like at all... ",
    "price": "$179.99",
    "image_path": "product3.jpg",
    "stock_availability": "true",
    "no_of_items": "14",
    "songs": "harris.mp3"
}]
};

var index = 0;
var item = guitar.allProducts[index];
var product_description = document.getElementById('product_description');
var shipping_details = document.getElementById('shipping_details');
var customer_reviews = document.getElementById('customer_reviews');
var image_path = document.getElementById('image_path');
var previous = document.getElementById('previous');
var next = document.getElementById('next');

displayItem(item);

previous.addEventListener('click', function() 
{
    displayItem(guitar.allProducts[--index]);
});    
next.addEventListener('click', function() 
{
    displayItem(guitar.allProducts[++index]);
});


function displayItem(item)
{
    product_description.innerText = item.product_description;
    shipping_details.innerText = item.shipping_details;
    customer_reviews.innerText = item.customer_reviews;
    image_path.src= item.image_path;
    previous.disabled = index <= 0;
    next.disabled = index >= guitar.allProducts.length -1;
    if(index === 1)
    {
        
    }
}

      //      document.getElementById("description").innerHTML = getQueryStringValue("description");

 var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++)
    {
        coll[i].addEventListener("click", function() 
        {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") 
            {
                content.style.display = "none";
            } else 
            {
                content.style.display = "block";
            }
        });
    }
function displyaDetails() 
{ 
     var x, text;
     x = document.getElementById("firstName").value;
     text = document.getElementById("lastName").value;
     var add,add2,cn,ct,st,pc,pn; 
     add = document.getElementById("address1").value;
     add2 = document.getElementById("address2").value;
     cn = document.getElementById("country").value;
     ct = document.getElementById("city").value;
     st = document.getElementById("state").value;
     pc = document.getElementById("postalCode").value;
     pn = document.getElementById("phoneNumber").value;
    if(x.length != 0)
    {
        if(text.length != 0)
        {
            if(add.length != 0)
            {
                if(add2.length != 0)
                {
                    if(cn.length != 0)
                    {
                        if(ct.length != 0)
                        {
                            if(st.length != 0)
                            {
                                if(pc.length != 0)
                                {
                                    if(pn.length != 0)
                                    {
                                        document.getElementById("details").style.display = "block";   
                                        document.getElementById("details").innerHTML = "First Name : " + x + "<br>"  
                                        + "Last Name : " + text + "<br>" 
                                        + "Address : " + add + "<br>" 
                                        + "Apt/Block : "  + add2 + "<br>"
                                        + "Country : "  + cn + "<br>"
                                        + "Code : "  + ct + "<br>" 
                                        + "State : "  + st + "<br>" 
                                        + "Zip Code : "  + pc + "<br>" 
                                        + "Phone Number : "  + pn;
                                    } 
                                    else
                                    alert("please enter PhoneNumber"); 
                                }else
                                alert("please enter Zip code"); 
                            }else
                            alert("please enter State");                 
                        } else
                        alert("please enter city");            
                    }else
                    alert("please enter Country");         
                }else
                alert("please enter address2");     
            } else
            alert("please enter address");    
        }else
        alert("please enter Lastname");        
    }else
    alert("please enter Firstname"); 
}