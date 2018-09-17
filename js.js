
//Things I'm trying (and currently failing) to fix myself: [1] How when the EeEe(k) function is called, my "if else" lines don't run correctly. When "kk" is created out of the function, its not alerted as red as its supposed to be (as you can see in my "if else" statement below the function. dog coat color kk is for recessive red, literally all other combos make black which is why all else is black. except red seems to be alerted randomly instead of when kk comes out of the function rn) :I

//go to https://www.w3schools.com/js/tryit.asp?filename=tryjs_ifthen 

//use their java IDE to run this youll have an easier time than trying to do it through html and chrome like me, an idiot

// an explanation of alleles if the weird letter combinations dont make sense and its bugging you: https://web.archive.org/web/20160905051522/http://www.dynastydog.com:80/help/page/23

function dog(id, coat, nrg, eye, K_){
this.id = id;
this.color = coat;
this.nrg = nrg;
this.eyeColor = eye;
this.K = K_;
}

var K = ["KK", "Kk", "kk"] //these are the 3 alleles for the black gene in dogs
var E = ["EE", "Ee", "EE"] //

//var weight_EEEE= [4,0,0]
//var weight_EEEe = [2,2,0]
var weight_EeEe = [1,2,1] // <-- this is the only one that matters atm since the parents, Kenzie and rainbow, have the matching Kk/Kk (or KkKk) alleles as you can see below in their arrays. this is the weight_EeEe that I explained above. Its also explained by that link that I sent, except in fruit terms lol
//var weight_Eeee = [0,2,2]

var kenzie = new dog(1,"gold","energetic","brown", "Kk");
var rainbow= new dog(2,"black","lazy","black", "Kk");
var puppy = []



function EeEe(K){
var totalweight=eval(weight_EeEe.join("+")) //get total weight (in this case, 10)
var weighed=new Array() //new array to hold "weighted" fruits
var currentallele=0
 
while (currentallele<K.length){ //step through each fruit[] element
    for (i=0; i<weight_EeEe[currentallele]; i++)
        weighed[weighed.length]=K[currentallele]
    currentallele++
	}

var randomnumber=Math.floor(Math.random()*totalweight)
var randomnumber2 = Math.floor(Math.random()*totalweight)

var weight = (weighed[randomnumber])
var weightt = (weighed[randomnumber2])

var weigh= weight + weightt

return weigh;

}




if (kenzie.K == K[1] && rainbow.K == K[1]){ 
   document.getElementById("demo").innerHTML = EeEe(K)
	if (EeEe(K) == "kk"){
    window.alert("RED");
    }else {
		window.alert("BLACK")
	};
}




</script>

</body>
</html>
