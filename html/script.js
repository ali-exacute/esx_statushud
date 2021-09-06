$(function(){
    window.addEventListener("message", function(event){
        if (event.data.pauseMenu == false) {
            $(".ui").fadeIn();
            
            var health = event.data.health;
            $("#health-percent").html(Math.round(health) + "%");
            $("#health-level").css("width", health + "%");

            var stamina = event.data.stamina;
            $("#stamina-percent").html(Math.round(stamina) + "%");
            $("#stamina-level").css("width", stamina + "%");

            var food = event.data.food;
            $("#food-percent").html(Math.round(food) + "%");
            $("#food-level").css("width", food + "%");

            var water = event.data.water;
            $("#water-percent").html(Math.round(water) + "%");
            $("#water-level").css("width", water + "%");

            var drunk = event.data.drunk;
            $("#drunk-percent").html(Math.round(drunk) + "%");
            $("#drunk-level").css("width", drunk + "%");

            var stress = event.data.stress;
            $("#stress-percent").html(Math.round(stress) + "%");
            $("#stress-level").css("width", stress + "%");

            var foodDrain = event.data.foodDrain;
            var foodDrainValue = event.data.foodDrainValue;
            $("#foodDrain-percent").html(Math.round(foodDrain) + "% (" + Math.round(foodDrainValue) + ") ");
            $("#foodDrain-level").css("width", foodDrain + "%");

            var waterDrain = event.data.waterDrain;
            var waterDrainValue = event.data.waterDrainValue;
            $("#waterDrain-percent").html(Math.round(waterDrain) + "% (" + Math.round(waterDrainValue) + ") ");
            $("#waterDrain-level").css("width", waterDrain + "%");

            var drunkDrain = event.data.drunkDrain;
            var drunkDrainValue = event.data.drunkDrainValue;
            $("#drunkDrain-percent").html(Math.round(drunkDrain) + "% (" + Math.round(drunkDrainValue) + ") ");
            $("#drunkDrain-level").css("width", drunkDrain + "%");

            var stressDrain = event.data.stressDrain;
            var stressDrainValue = event.data.stressDrainValue;
            $("#stressDrain-percent").html(Math.round(stressDrain) + "% (" + Math.round(stressDrainValue) + ") ");
            $("#stressDrain-level").css("width", stressDrain + "%");

        } else {
            $(".ui").fadeOut();
        }
    })
})