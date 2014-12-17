document.getElementById("burger-menu").style.display="none";
function ReverseHamburgerMenuDisplay()
{
    var verschuif = document.getElementById("header");
   var id = document.getElementById("burger-menu");
   if( id.style.display == "none" ) { id.style.display = "block";
    verschuif.style.height = "258px";                                }
   else { id.style.display = "none";
        verschuif.style.height = "80px"; 
        }
}
/*function HamburgerMenuItemOver(id) { id.style.backgroundColor = "#E6E6E6"; }
function HamburgerMenuItemOut(id) { id.style.backgroundColor = "#4D4D4D"; }*/

