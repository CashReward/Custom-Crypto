//a4d8181d59474cdd8fac1c726e0ac9edeb853efb6abdd05cd8d456c2e4a7085d





let select = document.querySelectorAll('select');

let symbol = ["BTC","ETH","LINK","ADA","XTZ","XRP","BCH","ONT","EOS","BSV","ETC","LTC","VET","XLM","ZEC","QTUM","KNC","BNB","TRX","OKB","ATOM","CRO","ANKR","USDT","NEO","IOST","DASH","RVN","ERD","SXP","DOGE","ZRX","ALGO","TRUE","XMR","LRC","LEO","USDC","BTM","KCASH","ICX","ZIL","THETA","ONGAS","OMG","PAX","MATIC","ENJ","KAVA","RLC","MIOTA","HT","BAT","NULS","BNT","BCD","LEND","BAND","WAVES","REP","COMP","CVNT","MCO","CTXC","ELF","SWFTC","TMTG","FSN","NAS","TUSD","HYN","BTT","MOF","MANA","ITC","GAS","HC","HBAR","SOLO","EM","CONT","GTO","REN","LET","FET","ARPA","UTK","HDAO","SNT","FAIRG","WTC","OXT","ACHN","CVC","PAY","DGB","GNT","MSDT","TT","XEM"];

// tableau de sauvegarde donnée USD ------------------------------------------------------------>
let adresseApi = [];

let prixDollar =[];

let volumeDollar = [];

let hightDollar = [];

let lowDollar = [];

let marketDollar = [];

let supplyDollar = [];

//----------------------------------------------------------------------------------------->

//Tableau sauvegarde donnée crypto Euro--------------------------------------------------->
let adresseApiEur = [];

let prixEuro = [];

let volumeEuro = [];

let hightEuro = [];

let lowEuro = [];

let marketEuro = [];

let supplyEuro = [];

//------------------------------------------------------------------------------------------>

//Tableau sauvegarde crypto Yen ------------------------------------------------------------>

let adresseApiYen = [];

let prixYen = [];

let volumeYen = [];

let hightYen = [];

let lowYen = [];

let marketYen = [];

let supplyYen = [];
//------------------------------------------------------------------------------------------>

// Ajout tout les symbole en option du selecteur ------------------------------------------->

    for(let j=0;j<select.length;j++){

        for(let i = 0; i<symbol.length;i++){
       
            let option = document.createElement('option');
    
            option.value =  symbol[i];
            option.innerHTML =  symbol[i];
    
            select[j].appendChild(option);
        }
       
    };

//-------------------------------------------------------------------------------------------->

//Requete ajax pour actualiser le contenu----------------------------------------------------->

let refreshCryptoUsd = async function(){

    let enfantUsd = document.querySelector('.usd').children;

    for(let i =0;i<enfantUsd.length;i++){

        let url = adresseApi[i];

        let data = await fetch(url);

        if(data.ok){

            let requete = await data.json();

            let tableauDonnée = Object.values(requete.DISPLAY);

            let image = tableauDonnée[0].USD.IMAGEURL;
            console.log(image)


            prixDollar[i]   = tableauDonnée[0].USD.PRICE;
            volumeDollar[i] = tableauDonnée[0].USD.VOLUME24HOURTO;
            hightDollar[i]  = tableauDonnée[0].USD.HIGH24HOUR;
            lowDollar[i]    = tableauDonnée[0].USD.LOW24HOUR;
            marketDollar[i] = tableauDonnée[0].USD.MKTCAP;
            supplyDollar[i] = tableauDonnée[0].USD.SUPPLY;

            enfantUsd[i].children[1].textContent = prixDollar[i];
            enfantUsd[i].children[2].textContent = volumeDollar[i];
            enfantUsd[i].children[3].textContent = hightDollar[i];
            enfantUsd[i].children[4].textContent = lowDollar[i];
            enfantUsd[i].children[5].textContent = marketDollar[i];
            enfantUsd[i].children[6].textContent = supplyDollar[i];
        }
    }

};



let refreshCryptoEur = async function(){

    let enfantEur = document.querySelector('.eur').children;

    for(let i =0; i<enfantEur.length;i++){

        let url = adresseApiEur[i];

        let data = await fetch(url);

        if(data.ok){

            let requete = await data.json();

            let tableauDonnée = Object.values(requete.DISPLAY);

            prixEuro[i] = tableauDonnée[0].EUR.PRICE;
            volumeEuro[i] = tableauDonnée[0].EUR.VOLUME24HOURTO;
            hightEuro[i] = tableauDonnée[0].EUR.HIGH24HOUR;
            lowEuro[i] = tableauDonnée[0].EUR.LOW24HOUR;
            marketEuro[i] = tableauDonnée[0].EUR.MKTCAP;
            supplyEuro[i] = tableauDonnée[0].EUR.SUPPLY;

            enfantEur[i].children[1].textContent = prixEuro[i];
            enfantEur[i].children[2].textContent = volumeEuro[i];
            enfantEur[i].children[3].textContent = hightEuro[i];
            enfantEur[i].children[4].textContent = lowEuro[i];
            enfantEur[i].children[5].textContent = marketEuro[i];
            enfantEur[i].children[6].textContent = supplyEuro[i];
        }

    }
};

let refreshCryptoJpy = async function(){


    let enfantJpy = document.querySelector('.jpy').children;

    for(let i = 0; i<enfantJpy.length;i++){

        let url = adresseApiYen[i];

        let data = await fetch(url);

        if(data.ok){

            let requete = await data.json();

            let tableauDonnée = Object.values(requete.DISPLAY);

            prixYen[i] = tableauDonnée[0].JPY.PRICE;
            volumeYen[i] = tableauDonnée[0].JPY.VOLUME24HOURTO;
            hightYen[i] = tableauDonnée[0].JPY.HIGH24HOUR;
            lowYen[i] = tableauDonnée[0].JPY.LOW24HOUR;
            marketYen[i] = tableauDonnée[0].JPY.MKTCAP;
            supplyYen[i] = tableauDonnée[0].JPY.SUPPLY;

            enfantJpy[i].children[1].textContent = prixYen[i];
            enfantJpy[i].children[2].textContent = volumeYen[i];
            enfantJpy[i].children[3].textContent = hightYen[i];
            enfantJpy[i].children[4].textContent = lowYen[i];
            enfantJpy[i].children[5].textContent = marketYen[i];
            enfantJpy[i].children[6].textContent =supplyYen[i];
        }
    }
};
//------------------------------------------------------------------------------------------>

//requete ajax------------------------------------------------------------------------------>

let searchCryptoUsd = async function(prix,volume,high,low,market,supply){
    
    
    let crypto = Object(document.querySelector('.dollar').value);
    
    let devise = 'USD';

    let url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+crypto+"&tsyms="+devise+",?a4d8181d59474cdd8fac1c726e0ac9edeb853efb6abdd05cd8d456c2e4a7085d";

    adresseApi.push(url);
    
    let data = await fetch(url);

    if(data.ok){
    
        let requete = await data.json();

        let tableauDonnée = Object.values(requete.DISPLAY);
        
        let prixUsd = tableauDonnée[0].USD.PRICE;
        let volumBtcUsd = tableauDonnée[0].USD.VOLUME24HOURTO;
        let hightBtcUsd = tableauDonnée[0].USD.HIGH24HOUR;
        let lowBtcUsd   = tableauDonnée[0].USD.LOW24HOUR;
        let markerBtcUsd = tableauDonnée[0].USD.MKTCAP;
        let supplyBtcUsd = tableauDonnée[0].USD.SUPPLY;

        prixDollar.push(prixUsd);
        volumeDollar.push(volumBtcUsd);
        hightDollar.push(hightBtcUsd);
        lowDollar.push(lowBtcUsd);
        marketDollar.push(markerBtcUsd);
        supplyDollar.push(supplyBtcUsd);

        
        prix.textContent = prixUsd;
        volume.textContent = volumBtcUsd;
        high.textContent = hightBtcUsd;
        low.textContent = lowBtcUsd;
        market.textContent = markerBtcUsd;
        supply.textContent = supplyBtcUsd;



       

    }else{
        alert('Veuillez reeessayer plus tard, un problème est survenu.');
    }
        
    console.log(url)
        
};

let searchCryptoEur = async function(prix,volume,high,low,market,supply){
    
    
    let crypto = Object(document.querySelector('.euro').value);
    let devise = 'EUR';

    let url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+crypto+"&tsyms="+devise+",?a4d8181d59474cdd8fac1c726e0ac9edeb853efb6abdd05cd8d456c2e4a7085d";

    adresseApiEur.push(url);
    let data = await fetch(url);

    if(data.ok){
       
        let requete = await data.json();

        let tableauDonnée = Object.values(requete.DISPLAY);
        
        let prixEur = tableauDonnée[0].EUR.PRICE;
        let volumBtcEur = tableauDonnée[0].EUR.VOLUME24HOURTO;
        let hightBtcEur = tableauDonnée[0].EUR.HIGH24HOUR;
        let lowBtcEur   = tableauDonnée[0].EUR.LOW24HOUR;
        let markerBtcEur = tableauDonnée[0].EUR.MKTCAP;
        let supplyBtcEur = tableauDonnée[0].EUR.SUPPLY;

        prixEuro.push(prixEur);
        volumeEuro.push(volumBtcEur);
        hightEuro.push(hightBtcEur);
        lowEuro.push(lowBtcEur);
        marketEuro.push(markerBtcEur);
        supplyEuro.push(supplyBtcEur);
           
        prix.textContent = prixEur;
        volume.textContent = volumBtcEur;
        high.textContent = hightBtcEur;
        low.textContent = lowBtcEur;
        market.textContent = markerBtcEur;
        supply.textContent = supplyBtcEur;
       

    }else{
        alert('Veuillez reeessayer plus tard, un problème est survenu.');
    }
        
    
};

let searchCryptoJpy = async function(prix,volume,high,low,market,supply){
    
    
    let crypto = Object(document.querySelector('.yen').value);
    let devise = 'JPY';

    let url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+crypto+"&tsyms="+devise+",?a4d8181d59474cdd8fac1c726e0ac9edeb853efb6abdd05cd8d456c2e4a7085d";

    adresseApiYen.push(url);

    let data = await fetch(url); 

    if(data.ok){
       
        let requete = await data.json();

        let tableauDonnée = Object.values(requete.DISPLAY);
        
        let prixJpy = tableauDonnée[0].JPY.PRICE;
        let volumBtcJpy = tableauDonnée[0].JPY.VOLUME24HOURTO;
        let hightBtcJpy = tableauDonnée[0].JPY.HIGH24HOUR;
        let lowBtcJpy  = tableauDonnée[0].JPY.LOW24HOUR;
        let markerBtcJpy = tableauDonnée[0].JPY.MKTCAP;
        let supplyBtcJpy = tableauDonnée[0].JPY.SUPPLY;

        prixYen.push(prixJpy);
        volumeYen.push(volumBtcJpy);
        hightYen.push(hightBtcJpy);
        lowYen.push(lowBtcJpy);
        marketYen.push(markerBtcJpy);
        supplyYen.push(supplyBtcJpy);
            
        name.textContent = crypto;
        prix.textContent = prixJpy;
        volume.textContent = volumBtcJpy;
        high.textContent = hightBtcJpy;
        low.textContent = lowBtcJpy;
        market.textContent = markerBtcJpy;
        supply.textContent = supplyBtcJpy;

    }else{
        alert('Veuillez reeessayer plus tard, un problème est survenu.');
    }
        
    
};
//------------------------------------------------------------------------------------------>



// creer une fonction permettant de creer la div avec la crypto selectionnée---------------->

let afficherDonnéeUsd = ()=>{

    let nomCrypto = document.querySelector('.dollar').value;
       
    let cryptomonnaieUsd = document.createElement('div');
    cryptomonnaieUsd.className = 'monnaie';
    cryptomonnaieUsd.id = 'index_Usd' + '-' + nomCrypto ;
    
    let priceUsd = document.createElement('p');

    let nomUsd = document.createElement('p');
    nomUsd.textContent = nomCrypto;
    
    let volumUsd = document.createElement('p');
    
    let highUsd = document.createElement('p');

    let basUsd = document.createElement('p');
    
    let nbrcryptoUsd = document.createElement('p');
    
    let marketUsd = document.createElement('p');
     
    let dernierEnfant = document.querySelector('.usd');
   
    dernierEnfant.appendChild(cryptomonnaieUsd);
    cryptomonnaieUsd.appendChild(nomUsd);
    cryptomonnaieUsd.appendChild(priceUsd);
    cryptomonnaieUsd.appendChild(volumUsd);
    cryptomonnaieUsd.appendChild(highUsd);
    cryptomonnaieUsd.appendChild(basUsd);
    cryptomonnaieUsd.appendChild(marketUsd);
    cryptomonnaieUsd.appendChild(nbrcryptoUsd);

    let lastEnfant = dernierEnfant.lastChild;
    let collection = dernierEnfant.children;
    

    for(let i = 0;i<collection.length-1;i++){

        if(lastEnfant.id === collection[i].id && collection.length>1){

            lastEnfant.remove();
        }  
    }

    searchCryptoUsd(priceUsd,volumUsd,highUsd,basUsd,marketUsd,nbrcryptoUsd);
    
    setInterval(() => {
        
        refreshCryptoUsd();
    }, 1000);         
};

let afficherDonnéeEur = ()=>{

    let nomCrypto = document.querySelector('.euro').value;
    
    let cryptomonnaieEur = document.createElement('div');
    cryptomonnaieEur.className = 'monnaie';
    cryptomonnaieEur.id = 'index_Eur' + '-'+ nomCrypto;
    
    let priceEur = document.createElement('p');

    let nomEur = document.createElement('p');
    nomEur.textContent = nomCrypto;
    
    let volumEur = document.createElement('p');
    
    let highEur = document.createElement('p');

    let basEur = document.createElement('p');
    
    let nbrcryptoEur = document.createElement('p');
    
    let marketEur = document.createElement('p');
     
    let dernierEnfant = document.querySelector('.eur');

    dernierEnfant.appendChild(cryptomonnaieEur);

    cryptomonnaieEur.appendChild(nomEur);
    cryptomonnaieEur.appendChild(priceEur);
    cryptomonnaieEur.appendChild(volumEur);
    cryptomonnaieEur.appendChild(highEur);
    cryptomonnaieEur.appendChild(basEur);
    cryptomonnaieEur.appendChild(marketEur);
    cryptomonnaieEur.appendChild(nbrcryptoEur);

    let lastEnfant = dernierEnfant.lastChild;
    let collection = dernierEnfant.children;

    for(let i = 0;i<collection.length-1;i++){

        if(lastEnfant.id === collection[i].id && collection.length>1){

            lastEnfant.remove();
        }
    };


    searchCryptoEur(priceEur,volumEur,highEur,basEur,marketEur,nbrcryptoEur);
    
setInterval(() => {

    refreshCryptoEur();
}, 1000);
   
};

let afficherDonnéeJpy = ()=>{

    let nomCrypto = document.querySelector('.yen').value;
 
    let cryptomonnaieJpy = document.createElement('div');
    cryptomonnaieJpy.className = 'monnaie';
    cryptomonnaieJpy.id = 'index_Jpy' + '-'+ nomCrypto;
    
    let priceJpy = document.createElement('p');

    let nomJpy = document.createElement('p');
    nomJpy.textContent = nomCrypto;
    
    let volumJpy = document.createElement('p');
    
    let highJpy = document.createElement('p');

    let basJpy = document.createElement('p');
    
    let nbrcryptoJpy = document.createElement('p');
    
    let marketJpy = document.createElement('p');
     
    let dernierEnfant = document.querySelector('.jpy');

    dernierEnfant.appendChild(cryptomonnaieJpy);
    cryptomonnaieJpy.appendChild(nomJpy);
    cryptomonnaieJpy.appendChild(priceJpy);
    cryptomonnaieJpy.appendChild(volumJpy);
    cryptomonnaieJpy.appendChild(highJpy);
    cryptomonnaieJpy.appendChild(basJpy);
    cryptomonnaieJpy.appendChild(marketJpy);
    cryptomonnaieJpy.appendChild(nbrcryptoJpy);

    let lastEnfant = dernierEnfant.lastChild;
    let collection = dernierEnfant.children;

    for(let i = 0;i<collection.length-1;i++){

        if(lastEnfant.id === collection[i].id && collection.length>1){

            lastEnfant.remove();
        }
    };
         
    searchCryptoJpy(priceJpy,volumJpy,highJpy,basJpy,marketJpy,nbrcryptoJpy);

        setInterval(() => {
            refreshCryptoJpy();
        }, 1000);   
};

//------------------------------------------------------------------------------------------>


//Event pour bouton ajouter a ma liste------------------------------------------------------>

document.querySelector(".ajoutUSD").addEventListener('click',()=>{

    afficherDonnéeUsd();    
});     

document.querySelector(".ajoutEUR").addEventListener('click',()=>{

   afficherDonnéeEur();
    
});

document.querySelector(".ajoutJPY").addEventListener('click',()=>{
  
    afficherDonnéeJpy();
 
});

//--------------------------------------------------------------------------------------->







   