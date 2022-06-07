	
	let myUser = {
		fName : "",
		password : "",
		ifInDebt : false,
		cashAmount : 0,
		transactionHistory : [],
		showInfo : function(){
			console.log("Name is " + this.fName)
			console.log("Password is " + this.password)
			console.log("Amount of cash is " + this.cashAmount)
			if (this.transactionHistory.length == 0 ) {
				console.log("You transaction history is " + this.transactionHistory + "none")
			}else{
				console.log("You transaction history is " + this.transactionHistory)
			}
			
			novigation()
		} 
	}
	let historyTaken = [];
	const limit = 300000;



	let exit = () => {
		delete myUser
		alert("To use the ATM again refresh the Web Page")
	}
	function confirm(name, amountOfCash, password){
		myUser.fName = name;
		myUser.password = password;
		myUser.cashAmount = amountOfCash;
	}


	function validNum(text){
		let num = parseInt(prompt(text))
		while (Number.isNaN(num)){

 			num = parseInt(prompt("Enter valid number"))

 		}
 		return num
	}

	function addMoney(){
		let amount = validNum("How much do you want to put on your account?")
		myUser.cashAmount += amount;
		myUser.transactionHistory.push(`+ ${amount}`);
		alert("Money added successfully!")
		novigation()
	}
	function takeMoney(){
		let amount = validNum("How much do you want to take from your account?")
		let totalTaken = 0;

		for (var i = 0; i < historyTaken.length; i++) {
			totalTaken += historyTaken[i]
		}
		if( (totalTaken+amount) > limit || amount > myUser.cashAmount){
			alert("Cannot take more than the limit, in this session you took " + totalTaken + " nCoins, limit is 300,000 nCoins or you are trying to take more than you have, your balance is " + myUser.cashAmount)

		}else{
			myUser.cashAmount -= amount;
			historyTaken.push(amount);
			myUser.transactionHistory.push(`- ${amount}`);
			alert("Money taken successfully!")
		}
		novigation()
	}

	function novigation(){
		let interaction = parseInt(prompt("Enter 1 if you want to put money on your account, 2 if you want to take money from your account, 3 if you want to see all the information about your account and 4 if you want to exit"))
 			if (interaction == 1) {
 				addMoney();
 			}else if(interaction == 2){
 				takeMoney();
 			}else if(interaction == 3){
 				myUser.showInfo()
 			}else{
 				exit();
 			}
	}


	function session(){
		let name = prompt("Your name please")
		let pass = prompt("Your password please")
		let cash = validNum("Your cash amount")
	
 		

 		console.log(`Name is ${name}`)
 		console.log(`Password is ${pass}`)
 		console.log(`Balance is ${cash} nCoins`)

 		let asd = parseInt(prompt("Enter 1 if the data in the console correct and 0 if it is not"))
 		if( asd === 1){
 			confirm(name, cash, pass)
 			alert("Your data is stored!")
 			novigation()
 		}else if(asd === 0){
 			session()
 		}
	}

	session()