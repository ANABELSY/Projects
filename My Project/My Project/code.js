var price = 0;
var restraunt;
var Name;
var meal;
onEvent("restaurantDropdown", "change", function( ) {
  restraunt = getText("restaurantDropdown");
  Name = getText("nameInput");
  
});
onEvent("upButton","click", function( ) {
price = price + 5;
setProperty("dollarperpersonOutput", "text", price);
upDatesSreen();
});

onEvent("downButton", "click", function( ) {
  price = price - 5;
  setProperty("dollarperpersonOutput", "text", price);
  upDatesSreen();
});
function upDatesSreen() {
if (price <= 5 && restraunt == "Chick-fil-a" ) {
     meal = "nuggets";
   } else if (price >= 10 && restraunt == "Chick-fil-a" ) {
     meal = "sandwhich, fries and drink";
   } else if (price  <=  10 && restraunt == "Domino's" ) {
meal = "small pizza";
} else if (price  >=  11 && restraunt == "Domino's"  ) {
  meal = "meduim or large pizza";
} else if (price  <= 15 && restraunt == "Steakhouse" )  {
  meal = "6oz steak";
} else if (price >= 20 && restraunt == "Steakhouse") {
  meal = "8oz steak with fries";
}
setText("maintextArea", ((("Name: " + Name) + ". Restraunt: ") + restraunt + " meal: ") + meal + " $" +  price );
 }
