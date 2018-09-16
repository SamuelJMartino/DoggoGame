<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>

//Things I'm trying to fix: [1] How it says "undefined" amongst my alleles when the code is ran [2] how to make it run 1 weighted random K allele instead of 3 at once like it is rn

//go to https://www.w3schools.com/js/tryit.asp?filename=tryjs_ifthen 

//use their java IDE to run this youll have an easier time than trying to do it through html and chrome like me, an idiot

//also go to http://www.javascriptkit.com/javatutors/weighrandom2.shtml to understand what the weight_EeEe and pretty much everything new is. I'm using it to make certain Kk(black gene) alleles in my K array occur 50% more often than KK and kk like they naturally do when the parents are Kk and Kk like kenzie and rainbow are here. I want to eventually implement into that "if" statement that is commented out once the undefines are fixed.

function dog(id, coat, nrg, eye, K_){
this.id = id;
this.color = coat;
this.nrg = nrg;
this.eyeColor = eye;
this.K = K_;
}

var K = ["KK", "Kk", "kk"] //these are the 3 alleles for the black gene in dogs

//var weight_EEEE= [4,0,0]
//var weight_EEEe = [2,2,0]
var weight_EeEe = [1,2,1] // <-- this is the only one that matters atm since the parents, Kenzie and rainbow, have the matching Kk/Kk (or KkKk) alleles as you can see below in their arrays. this is the weight_EeEe that I explained above. Its also explained by that link that I sent, except in fruit terms lol
//var weight_Eeee = [0,2,2]

var kenzie = new dog(1,"gold","energetic","brown", "Kk");
var rainbow= new dog(2,"black","lazy","black", "Kk");

/*
if (kenzie.K && rainbow.K == K[1]){
window.alert("yay! The if statement for matching K alleles works.")
} else {
window.alert("boo!")
}
*/

//Below is the rest of that tutorial for making Kk/Kk occur 2x more often than KK and kk. It seems to be working aside from the "undefined" that it keeps creating. And the fact that its creating 3 different weighted random alleles at once instead of 1 weighted random one. Wtf is causing that undefined-ness
var totalweight=eval(weight_EeEe.join("+"))
var weighed=new Array()
var currentAllele=0

while (currentAllele<K.length){ 
    for (i=0; i<weight_EeEe[currentAllele]; i++)
        weighed[weighed.length]=K[currentAllele]
    currentAllele++
    
    var randomnumber=Math.floor(Math.random()*totalweight)
	document.write(weighed[randomnumber])


}


</script>

</body>
</html>
