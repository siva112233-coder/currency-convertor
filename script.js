const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
let fromc="usd";
let toc="inr";
  const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };
let selection=document.querySelectorAll(".container select");
for(let select of selection)
{
  for( code in countryList)
  {
    let create=document.createElement("option");
    create.innerText=code;
    create.value=code;
    if(code=="USD" && select.name==="from")
    {
        create.selected="selected";
    }
    else if(code=="INR" && select.name==="to")
        {
            create.selected="selected";
        }
    select.append(create);
  }
}

window.addEventListener("load",async ()=>{
  let pick=document.querySelector(".amount input");
  var value=pick.value;
   if(value<=0)
   {
    value=1;
    pick.value=1;
   }
  let url=`${BASE_URL}/${fromc}.json`;
  let response=await fetch(url);
   const data=await response.json();
     let rate=data[fromc];
     let rate1=rate[toc];
     console.log(rate1);
     let total=value*rate1;
     final.innerText=`${value} ${fromc.toUpperCase()} = ${total} ${toc.toUpperCase()}`;
})
selection[0].addEventListener("change",(event)=>{
  changeflag(event.target);
})

selection[1].addEventListener("change",(event)=>{
  changeflag1(event.target);
})
const changeflag=(element)=>{
  var newone=element.value;
  var country=countryList[newone];
  document.querySelector("#one").src=`https://flagsapi.com/${country}/flat/64.png`;
  fromc=newone.toLowerCase();

}
const changeflag1=(element)=>{
  var newone=element.value;
  var country=countryList[newone];
  document.querySelector("#two").src=`https://flagsapi.com/${country}/flat/64.png`;
  toc=newone.toLowerCase();
}
// document.querySelector("button").addEventListener("click", async (e)=>{
//   e.preventDefault();
//   let pick=document.querySelector(".amount input");
//   var value=pick.value;
//    if(value<=0)
//     alert("enter an valid amount!!!");
//   let url=`${BASE_URL}/${fromc}.json`;
//   let response=await fetch(url);
//   console.log(response);
//   const data=await response.json();
//   let rate=data[fromc][toc];
//   console.log(rate);
// })
let final=document.querySelector("#answer");
document.querySelector("button").addEventListener("click", async (e)=>{
  e.preventDefault();
  let pick=document.querySelector(".amount input");
  var value=pick.value;
   if(value<=0)
   {
    value=1;
    pick.value=1;
    alert("enter an valid amount!!!");
   }
  let url=`${BASE_URL}/${fromc}.json`;
  let response=await fetch(url);
   const data=await response.json();
     let rate=data[fromc];
     let rate1=rate[toc];
     console.log(rate1);
     let total=value*rate1;
     final.innerText=`${value} ${fromc.toUpperCase()} = ${total} ${toc.toUpperCase()}`;
})
