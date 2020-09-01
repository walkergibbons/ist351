
var ItemName = new Array("Asparagus","Baked Potato","Broccoli","Carrots","Chicken Fingers","Cordon Bleu","French Fries","Green Beans","Hamburger","Lasagna","Peas","Salad","Vegetable Delight","Stir Fry","T-Bone Steak","Sweet Potatoes","Fried Chicken");
var ItemDescription = new Array("Fresh asparagus steamed with lemon and butter.",
"Loaded Potato with everything!!",
"Steamed Broccoli.",
"Fresh cooked Carrots in a lemon glaze.",
"Country Fried Chicken Fingers.",
"Famous the world over. Cordon Bleu contains chicken, ham, and swiss cheese.",
"French Fried Potato snacks.",
"Fresh Green Beans cooked with a special sauce.",
"Home Cooked Hamburger: anyway you like it!!",
"Old Italian recipe: Lasagna cooked by our famous chef.",
"Garden Peas cooked to perfection.",
"Tossed Green Salad with garden fresh tomatos and our famous house dressing.",
"Straight from the Orient. Wok cooked vegetables with a tantilizing sauce from China.",
"Another savory dish from the Orient.",
"Cooked over our Hickory Fireplace, this steak will melt in your mouth!",
"Fresh cooked sweet potatoes in a sweet glaze.",
"Southern Fried Chicken: the way you like it.");
var ItemPrice = new Array(2.99,2.99,2.99,2.99,5.99,9.99,1.99,2.99,5.99,9.99,2.99,3.99,8.99,8.99,12.99,3.99,8.99);
var ItemPic = new Array("Asparagus.gif","BakedPotatoe.gif","Broccoli.gif","Carrots.gif","ChickenFingers.gif","CordonBleu.gif","FrenchFries.gif","GreenBeans.gif","Hamburger.gif","Lasagna.gif");

function submitOrder(){
	var chx = document.getElementsByClassName('chx');
	var str = '';
	var subtotal = 0;
	var subtotalstr = "Subtotal: $";
	var tip = 0;
	var tipstr = "Tip: $";
	var tax = 0;
	var taxstr = "Tax: $";
	var total = 0;
	var totalstr = "Total $";
	var finalOrder = "Your Order: ";
	for(i = 0; i < chx.length; i++){
		if(chx[i].checked === true) {
			str += chx[i].name + " " + ItemPrice[i] + "<br>";
			subtotal += ItemPrice[i];
		}
	}
	for(i = 0; i < chx.length; i++) {
		if(chx[0].checked === true) {
			var p = document.getElementById("asparagusPic");
			p.style.display = "block";
		}
		if(chx[1].checked === true) {
			var p = document.getElementById("potatoPic");
			p.style.display = "block";
		}
		if(chx[2].checked === true) {
			var p = document.getElementById("broccoliPic");
			p.style.display = "block";
		}
		if(chx[3].checked === true) {
			var p = document.getElementById("carrotPic");
			p.style.display = "block";
		}
		if(chx[4].checked === true) {
			var p = document.getElementById("chickenfingersPic");
			p.style.display = "block";
		}
		if(chx[5].checked === true) {
			var p = document.getElementById("cordonPic");
			p.style.display = "block";
		}
		if(chx[6].checked === true) {
			var p = document.getElementById("fryPic");
			p.style.display = "block";
		}
		if(chx[7].checked === true) {
			var p = document.getElementById("greenbeanPic");
			p.style.display = "block";
		}
		if(chx[8].checked === true) {
			var p = document.getElementById("burgerPic");
			p.style.display = "block";
		}
		if(chx[9].checked === true) {
			var p = document.getElementById("lasagnaPic");
			p.style.display = "block";
		}
	}

	var x = document.getElementById("body");
	x.style.display = "none";
	subtotal = Math.round(100 * subtotal) /100;
	tip = subtotal * .15;
	realtip = Math.round(tip*100)/100;
	tax = subtotal * .07;
	realtax = Math.round(tax*100)/100;
	total = Math.round(100 * (subtotal + realtip + realtax)) /100;
	document.getElementById("actualBill").innerHTML = document.getElementById("actualBill").innerHTML + finalOrder +"<br>" + "<br>" + str + "<br>" + subtotalstr + subtotal + "<br>" + tipstr + realtip + "<br>" + taxstr + realtax + "<br>" + totalstr + total;
	var y = document.getElementById("bill");
	y.style.display = "block";
	
}

function checkall() {
	var items = document.getElementsByClassName('chx');
	for(var i = 0; i < items.length; i++)
		if(items[i].type === 'checkbox')
			items[i].checked = true;
}

function uncheckall() {
	var items = document.getElementsByClassName('chx');
	for(var i = 0; i < items.length; i++)
		if(items[i].type === 'checkbox')
			items[i].checked = false;
}

function munch0() {
	document.getElementById("asparagusPic").style.display = "none";
}

function munch1() {
	document.getElementById("potatoPic").style.display = "none";
}

function munch2() {
	document.getElementById("broccoliPic").style.display = "none";
}

function munch3() {
	document.getElementById("carrotPic").style.display = "none";
}

function munch4() {
	document.getElementById("chickenfingersPic").style.display = "none";
}

function munch5() {
	document.getElementById("cordonPic").style.display = "none";
}

function munch6() {
	document.getElementById("fryPic").style.display = "none";
}

function munch7() {
	document.getElementById("greenbeanPic").style.display = "none";
}

function munch8() {
	document.getElementById("burgerPic").style.display = "none";
}

function munch9() {
	document.getElementById("lasagnaPic").style.display = "none";
}

function goBack() {
	location.reload();
}

function funLink() {
	window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

