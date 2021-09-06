local food, water, drunk, stress = 0, 0, 0, 0
local foodDrain, waterDrain, drunkDrain, stressDrain = 0, 0, 0, 0
local foodDrainValue, waterDrainValue, drunkDrainValue, stressDrainValue = 0, 0, 0, 0

Citizen.CreateThread(function()
    while true do
        Wait(100)
        TriggerEvent('esx_advancedneeds:callback:getAllStatus', function(data)  -- this will get all of the available stats at once (no need to use TriggerEvent over and over ...)

            for statName, statData in pairs(data) do
                if statName == 'hunger' then
                    food = statData.percent()
                    foodDrain = statData.percentDrain()
                    foodDrainValue = statData.drain
                end
                if statName == 'thirst' then
                    water = statData.percent()
                    waterDrain = statData.percentDrain()
                    waterDrainValue = statData.drain
                end
                if statName == 'drunk' then
                    drunk = statData.percent()
                    drunkDrain = statData.percentDrain()
                    drunkDrainValue = statData.drain
                end
                if statName == 'stress' then
                    stress = statData.percent()
                    stressDrain = statData.percentDrain()
                    stressDrainValue = statData.drain
                end
            end

        end)
    end
end)

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        SendNUIMessage({
            pauseMenu = IsPauseMenuActive(),
            health = GetEntityHealth(PlayerPedId()) - 100,
            stamina = 100 - GetPlayerSprintStaminaRemaining(PlayerId()),

            food = food,
            water = water,
            drunk = drunk,
            stress = stress,

            foodDrain = foodDrain,
            waterDrain = waterDrain,
            drunkDrain = drunkDrain,
            stressDrain = stressDrain,

            foodDrainValue = foodDrainValue,
            waterDrainValue = waterDrainValue,
            drunkDrainValue = drunkDrainValue,
            stressDrainValue = stressDrainValue
        })
    end
end)