//Petite phrase en anglais sur les chats (fun fact)
$.ajax({
    url: "https://meowfacts.herokuapp.com/",
    method: "GET",
    success: function(facts) {
        $('#info')[0].innerHTML = facts.data[0];
    }
})
//Initialise la date d'aujourd'hui pour l'avatar et le fond du site
var inp = new Date().toJSON().substr(0, 10);

//Fonction
function api(){
    $(document).ready(function(){
        $('#profil').css('background-image', 'url("https://www.gravatar.com/avatar/'+md5(inp)+'?d=identicon&s=50")');
    })
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod",
        method: "GET",
        data:{
            "api_key": "DEMO_KEY", //TODO a changer par votre key
            "date": inp
        },
        success: function(nasa) {
            $('body').css('background-image', 'url("'+nasa.url+'")');
        }
    });
}
//Lancement du premier pour rafraichir les images
api();

//Au click du bouton du form
function refresh(){
    inp = $("[name='date']")[0].value;
    api();
}