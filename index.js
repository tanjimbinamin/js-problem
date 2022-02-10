let serial = 1;


const cardDistribution = (array) => {
    let outputArray = {};

    let card="";
    let gift;


    array.map(element => {
        let dis = element.district.toUpperCase();
        card += dis[0];
        card += dis[1];
        let cur = element.currentYear%100;
        card += cur;
        let p = element.postNo.toString();
        card += p.slice(0,2);
        card += element.birthYear;
        card += ('0000000000' + serial).slice(-6);
        outputArray['cardNumber'] = card;
        if(serial%2==0){
            outputArray['gift'] = "R";
        }
        else{
            outputArray['gift'] = "W";
        }
        serial++;
    })
    
    return outputArray;
}


const result = cardDistribution(
    [
        {name: "Mr. Rashed", birthYear: 1999, currentYear: 2022, district: "Dhaka", postNo: 1200, priority: 2},
        {name: "Mr. Raju", birthYear: 1995, currentYear: 2022, district: "Rajshahi", postNo: 1211, priority: 1},
    ]
);

console.log(result);