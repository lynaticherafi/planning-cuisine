document.addEventListener('DOMContentLoaded', function() {
    const jours = document.querySelectorAll('.jour');
    const plats = document.querySelectorAll('.plat');
    const petitsDej = document.querySelectorAll('.petit-dej');
    const diners = document.querySelectorAll('.diner-jour');

    jours.forEach((jour, index) => {
        jour.addEventListener('click', function() {
            plats.forEach(plat => {
                plat.style.display = 'none';
            });

            petitsDej.forEach(petitDej => {
                petitDej.style.display = 'none';
            });

            diners.forEach(diner => {
                diner.style.display = 'none';
            });

            const platId = this.id + '-plat';
            const petitDejId = this.id + '-petit-dej';
            const dinerId = this.id + '-diner';

            const selectedPlat = document.getElementById(platId);
            const selectedPetitDej = document.getElementById(petitDejId);
            const selectedDiner = document.getElementById(dinerId);

            if (selectedPlat) {
                selectedPlat.style.display = 'block';
            }

            if (selectedPetitDej) {
                selectedPetitDej.style.display = 'block';
            }

            if (selectedDiner) {
                selectedDiner.style.display = 'block';
            }
        });
    });
});



