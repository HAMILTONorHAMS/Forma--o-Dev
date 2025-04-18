function today (date) {
     const dias = ['Sunday' , ' Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , ' Friday' , 'Saturday']
     return dias[date.getUTCDay()];// Se não usar o UTC, ele diminui um dia 
}
console.log(today(new Date('1999-12-17')));
