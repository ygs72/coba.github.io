const tex = "Selamat datang Di website Autobots disini"
            "Saya sebagai web Developer (Full-stack)" 
            "Saya tidak menerima Job apapun kondisi apapun.";
const typingElement = document.getElementById("typing-effect");
let index = 0;

function type() {
    if (index < Text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}
type();