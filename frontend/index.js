const $optionLocation = document.querySelector('#side-effects')


fetch("http://localhost:3000/effects")
    .then(response => response.json())
    .then(effects => effects.forEach(effect => {
        if (effect.effect_type === "negative") {
            const $option = document.createElement('option')

            $option.value = effect.name
            $option.textContent = effect.name

            $optionLocation.append($option)
        }
    }))