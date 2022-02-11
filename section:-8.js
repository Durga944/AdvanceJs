// implementing module pattern

var account = (function(){
    var balance = 1000;
    return {
        name:"Durga",
        getBalance:function(){
            return balance;
        },
        addIntrest:function(intrest){
            balance+=intrest;
        }
    }
}());

console.log(account.name);
console.log(account.getBalance());

account.balance = 2000;
console.log(account.getBalance());

account.addIntrest(300);
console.log(account.getBalance());