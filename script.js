// "use strict";

// // Selectors
// const headerBottom = document.querySelector("header .bottom");
// const mobileNav = document.querySelector(".bottom nav.mobile i");
// const currenciesContainers = document.querySelectorAll(
//   "main .sections section .currencies"
// );
// const exchangeToText = document.querySelector("main .exchange-to");
// const typeCurrLabels = document.querySelectorAll(
//   "main .sections section .input label"
// );
// const exchangeInputs = document.querySelectorAll(
//   "main .sections section .input input"
// );
// const searchInputFrom = document.querySelector('#search-cur-from')
// const searchInputTo = document.querySelector('#search-cur-to')
// const errorMsgsContainer = document.querySelector('.error-messages')




// // Variables
// const apiKey = '5658ba15e2ab4a7cb28bc4d2c0556785'
// let apiCurr = `https://api.currencyfreaks.com/latest?apikey=${apiKey}&fbclid=IwAR3MbiJbm1t7h0aQYiSI3S3AMN8zLbrTuT0w9au73SlIrFnJY1x9Vn8IKbE`
// apiCurr = 'https://api.currencyfreaks.com/latest?apikey=403afcb31c5b432fbf4808e4ffd34b8a&fbclid=IwAR0P93JIQzizF_MJYooHII_uGEsfbFhkVDOvyivM0GbVkGN62Ilw1Ix1MxA'
// let specificCurrencies = [
//   "Payeer",
//   "perfect_money",
//   "USDT",
//   "USD",
//   "BNB",
//   "BUSD",
//   "PAYPAL",
//   "WISE TRENSFER",
//   "IQD",
//   "DZD",
//   "XRP",
// ].map((curr) => curr.toUpperCase());
// let limitationMessages = 2;






// // Functions
// (async function getData() {
//   const res = await fetch(apiCurr);
//   const data = await res.json();
//   createCurrStructure(data.rates);
// })();

// function createCurrStructure(data) {
//   for (const currName in data) {
//     // Create currencies depending on specificCurrencies data
//     if (specificCurrencies.includes(currName.toUpperCase())) {
//       currenciesContainers.forEach((currContainer) => {
//         const currEle = document.createElement("div");
//         currEle.classList.add("currency");
//         currEle.innerHTML = currName;
//         currContainer.appendChild(currEle);

//         currEle.addEventListener("click", () => handleCurrClick(currEle));
//       });
//     }
//   }

//   currenciesContainers[0].children[0].click()
//   currenciesContainers[1].children[1].click()
// }


// function handleCurrClick(currEle) {
//   let currencies = [...currEle.parentElement.children];

//   // Add active class to clicked currency
//   currencies.forEach((curr) => curr.classList.remove("active"));
//   currEle.classList.add("active");

//   // Set labels name depending on clicked currency
//   currencies.forEach((curr) => {
//     if (curr.classList.contains("active")) {
//       let label = curr.parentElement.parentElement.children[1].children[1];
//       label.textContent = curr.textContent;
//     }
//   });

//   // Update message exchange from to
//   exchangeToText.textContent = `${typeCurrLabels[0].textContent} to ${typeCurrLabels[1].textContent}`;
//   exchangeToText.style.visibility = "visible";

//   const exchangeInp = currEle.parentElement.parentElement.children[1].children[0]
//   handleCurrenciesExchange(exchangeInp)
// }



// exchangeInputs.forEach((inp) => {
//   if (!(inp.placeholder === 'Search'))
//     inp.addEventListener("input", (e) => handleExchangeInput(e.target));
// });




// function handlePatternExchangeInp(inp) {
//   const lastChar = inp.value[inp.value.length - 1];
//   const notNumberCondition = !/[0-9.]/gi.test(lastChar);
//   const dotAtBeginning = inp.value[0] === ".";
//   let numberOfDots = 0

//   for (let i = 0; i < inp.value.length; i++) if
//     (inp.value[i] === '.') numberOfDots++

//   if (notNumberCondition || dotAtBeginning || numberOfDots >= 2)
//     inp.value = inp.value.slice(0, -1);
// }


// function handleCurrenciesExchange(inp) {
//   const nameCurrFrom = typeCurrLabels[0].textContent
//   const nameCurrTo = typeCurrLabels[1].textContent

//   // If currencies are the same
//   if (nameCurrFrom === nameCurrTo && limitationMessages >= 0) {
//     showErrorMsg()
//     return
//   }


//   async function showResultExchange(inpFrom, inpTo) {
//     console.log(inpFrom);
//     console.log(inpTo);
//     const res = await fetch(apiCurr);
//     const data = await res.json();

//     for (const currName in data.rates) {
//       let currValue = parseFloat(data.rates[currName]);

//       if (nameCurrFrom === currName) {
//         let inpValue = parseFloat(inpFrom.value)

//         if (inpFrom.value === '') {
//           inpTo.value = ''
//           return
//         }

//         let resultExchange = (inpValue * currValue).toFixed(3)
//         inpTo.value = resultExchange
//       }
//     }
//   }

//   if (inp.id === "input-from")
//     showResultExchange(exchangeInputs[0], exchangeInputs[2]);
//   else if (inp.id === "input-to")
//     showResultExchange(exchangeInputs[0], exchangeInputs[2]);
// }


// function handleExchangeInput(inp) {
//   handlePatternExchangeInp(inp)
//   handleCurrenciesExchange(inp)
// }


// function showErrorMsg() {
//   const msgEle = document.createElement('p')
//   msgEle.classList.add('error-message')
//   msgEle.innerHTML = 'This direction is not supported'
//   errorMsgsContainer.prepend(msgEle)
//   limitationMessages--


//   setTimeout(() => {
//     msgEle.classList.add('active')
//   }, 300);


//   setTimeout(() => {
//     msgEle.classList.remove('active')
//     setTimeout(() => {
//       msgEle.remove()
//       limitationMessages++
//     }, 600);
//   }, 3000);
// }







// // Events
// mobileNav.addEventListener("click", () => {
//   headerBottom.classList.toggle("active");
// });


// window.addEventListener("resize", () => {
//   if (window.innerWidth >= 992) headerBottom.classList.remove("active");
// });


// searchInputFrom.addEventListener('input', (e) => handleSearchInp(e.target))
// searchInputTo.addEventListener('input', (e) => handleSearchInp(e.target))



// async function handleSearchInp(inp) {
//   const res = await fetch(apiCurr)
//   const data = await res.json()
//   const currContainer = inp.parentElement.parentElement.children[3]

//   currContainer.innerHTML = ''

//   // If input is empty
//   if (inp.value.length === 0) {
//     // filter all specific currencies
//     for (const currName in data.rates) {
//       const containsSpecificCurr = specificCurrencies.includes(currName.toUpperCase())
//       if (containsSpecificCurr)
//         createCurrStructureInp(currName, currContainer)
//     }
//     return
//   }


//   // If input contains characters
//   for (const currName in data.rates) {
//     const containsCharOfInp = [...inp.value.toUpperCase()].some(letter => currName.includes(letter));
//     const containsSpecificCurr = specificCurrencies.includes(currName.toUpperCase())

//     if (containsSpecificCurr && containsCharOfInp)
//       createCurrStructureInp(currName, currContainer)
//   }
// }


// function createCurrStructureInp(currName, container) {
//       const currEle = document.createElement("div");
//       currEle.classList.add("currency");
//       currEle.innerHTML = currName;
//       container.appendChild(currEle);

//       currEle.addEventListener("click", () => handleCurrClick(currEle));
// }











// Use it to convert formate the currency
// const val = 2

// const formatter = new Intl.NumberFormat('en-US', {
//   style: "currency",
//   currency: "IQD",
// })

// console.log(formatter.format(val));








let str = `com lord net !@ 523 !@2 org GG`
let reg = /[^a-z0-9\s]/ig

console.log(str.match(reg));
console.log(reg.test(str));