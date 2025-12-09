function nextScreen(screenNumber) {
    // Purani screen chhupao
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });

    // Nayi screen dikhao
    document.getElementById('screen' + screenNumber).classList.remove('hidden');
}

function cutCake() {
    // Cake cutting animation logic
    document.getElementById('knife').style.display = 'none'; // Knife gayab
    document.getElementById('birthdayCake').style.transform = 'scale(1.2)'; // Cake bada ho jayega
    document.getElementById('cutMessage').classList.remove('hidden'); // Message dikhega
}
