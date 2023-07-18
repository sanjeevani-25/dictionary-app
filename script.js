const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener('click', () => {
    let input = document.getElementById("input-word").value;
    fetch(`${url}${input}`)
        .then((response) => response.json())
        .then((data) => {

            console.log(data);

            for (let index = 0; index < data[0].meanings.length; index++) {

                const m = data[0].meanings[index];
                const ph_len = data[0].phonetics.length;
                const ph = data[0].phonetics[ph_len - 1];

                result.innerHTML += `
                <div class="word">
                    <h3 id="txt">${input}</h3>
                    <button onclick="playSound()">
                        <i class="fa-solid fa-volume-high"></i>
                    </button>
                </div>
                <div class="details">
                <p>${m.partOfSpeech}</p>
                <p>${ph.text}</p>
                </div>`;


                for (let i = 0; i < data[0].meanings[index].definitions.length; i++) {
                    const def = data[0].meanings[index].definitions[i];

                    result.innerHTML += `
                    <p class="def">
                    Def ${i + 1} :</p>
                    <p class="word-meaning">
                    ${def.definition}</p>

                    <p class="word-example">
                    ${def.example || ""}
                    </p>
                    `;
                }
            }

            const ph_len = data[0].phonetics.length;
            const ph = data[0].phonetics[ph_len - 1];
            sound.setAttribute("src", `${ph.audio}`);

        });
});

function playSound() {
    sound.play();
}