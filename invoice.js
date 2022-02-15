document.getElementById("submitt-button").addEventListener("click",function(){
    const buyer=document.getElementById("buyer_detail")
    const buyerInnerText=buyer.value
    document.getElementById('bayer-detail').innerText=buyerInnerText
})
document.getElementById("add").addEventListener("click",function(){
    const itemName=document.getElementById("item-name").value
    const price=document.getElementById("price").value
    const priceValue=parseFloat(price)
    const quantity=document.getElementById("quantity").value
    const quantityValue=parseFloat(quantity)
    const totalPrice=priceValue*quantityValue

    const subTotalValue=document.getElementById("Sub-total")
//   table
    const tr=document.createElement("tr")
    const th=document.createElement('th')
    const td1=document.createElement("td")
    const td2=document.createElement("td")
    const td3=document.createElement("td")

    th.innerText=itemName
    td1.innerText=price
    td2.innerText=quantity
    td3.innerText=totalPrice
    
    tr.appendChild(th)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    document.getElementById("table-info").appendChild(tr)

    td3.classList.add("item-total")
    totalCalculate()
})
// total-calculation
function totalCalculate(){
const subTotal=calculatesubTtotal()
const subtotalDisplay=document.getElementById("Sub-total")
subtotalDisplay.innerText=subTotal

const taxValue=subTotal*.02
const tax=document.getElementById("text-value")
tax.innerText=taxValue.toFixed(2)
const grandValue=subTotal-taxValue
const grand=document.getElementById("grand-total")
grand.innerText=grandValue

const grand2=document.getElementById("grand-total-2")
grand2.innerText=grandValue
}
// subtotal
function calculatesubTtotal(){
    let  subtotal=0
    const cost =document.getElementsByClassName("item-total")
    for(i=0;i<cost.length;i++){
        const element=cost[i].innerText
        const price=parseFloat(element)
        subtotal=subtotal+price
     
        
    }
return subtotal
}
