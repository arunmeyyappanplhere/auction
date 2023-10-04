function plus(){
    currentValue = document.getElementById("bid-amt-live");
    oldBidAmount = currentValue.value;
    newBidAmounnt = parseInt(oldBidAmount) + 1;
    currentValue.value = newBidAmounnt;    
};

function minus(){
    currentValue = document.getElementById("bid-amt-live");
    oldBidAmount = currentValue.value;
    newBidAmounnt = parseInt(oldBidAmount) - 1;
    currentValue.value = newBidAmounnt;    
    if (newBidAmounnt < 1){
        currentValue.value = 1;
    };
};

function doneBid1(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };
    window.location.href="main-auction2.html"

}

function doneBid2(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };

    window.location.href="main-auction3.html"

}

function doneBid3(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };

    window.location.href="main-auction4.html"
}

function doneBid4(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };

    window.location.href="main-auction5.html"
}

function doneBid5(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };
    window.location.href="main-auction6.html"
}

function doneBid6(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };
    window.location.href="main-auction7.html"

}

function doneBid7(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };

    window.location.href="main-auction8.html"

}

function doneBid8(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };

    window.location.href="main-auction9.html"
}

function doneBid9(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };

    window.location.href="main-auction10.html"
}

function doneBid10(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };
    window.location.href="main-auction11.html"
}

function doneBid11(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };

}

function doneBid12(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };

    window.location.href="main-auction13.html"

}

function doneBid13(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };

    window.location.href="main-auction14.html"
}

function doneBid14(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };

    window.location.href="main-auction15.html"
}

function doneBid15(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };
    window.location.href="main-auction16.html"
}

function doneBid16(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };
    window.location.href="main-auction17.html"
}

function doneBid17(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };
    window.location.href="main-auction18.html"
}

function doneBid18(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };
    window.location.href="main-auction19.html"
}

function doneBid19(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };
    window.location.href="main-auction20.html"
}

function doneBid20(){
    
    productName = document.getElementById("bid-product-name").innerHTML;
    customerName = document.getElementById("name-of-bidder").value;
    amount = document.getElementById("bid-amt-live").value;

    window.alert(`${productName} was sold to ${customerName} for ${amount}`)

    if(window.localStorage.getItem("Auction") == null){
        window.localStorage.setItem("Auction", JSON.stringify([[productName],[customerName],[amount]]));
    }

    else{
        OldHistory = JSON.parse(window.localStorage.getItem("Auction"));
        OldHistory[0].push(productName);
        OldHistory[1].push(customerName);
        OldHistory[2].push(amount)
        window.localStorage.setItem("Auction", JSON.stringify(OldHistory));
    };
    window.location.href="main-auction1.html"
}






function soldOut(){
    greyScaleImg = document.getElementById("grey-scaled-img");
    greyScaleImg.style.zIndex = 2;
}