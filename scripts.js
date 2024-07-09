const songs = [
    { title: "Kanye West - 'Gold Digger'", sample: "I Got a Woman" },
    { title: "Kendrick Lamar - 'LOYALTY.'", sample: "24K Magic" },
    { title: "Jay-Z - '99 Problems'", sample: "The Big Beat" },
    { title: "Drake - 'Nice for What'", sample: "Ex-Factor" },
    { title: "J. Cole - 'Power Trip'", sample: "We Reminisce Over You (T.R.O.Y.)" },
    { title: "Nas - 'The World Is Yours'", sample: "I Love Music" },
    { title: "Tupac - 'California Love'", sample: "Woman to Woman" },
    { title: "Notorious B.I.G. - 'Juicy'", sample: "Juicy Fruit" },
    { title: "Eminem - 'Stan'", sample: "Thank You" },
    { title: "Missy Elliott - 'Work It'", sample: "Heart of Glass" },
    { title: "OutKast - 'Ms. Jackson'", sample: "Strawberry Letter 23" },
    { title: "A Tribe Called Quest - 'Can I Kick It?'", sample: "Walk on the Wild Side" },
    { title: "Wu-Tang Clan - 'C.R.E.A.M.'", sample: "As Long As I've Got You" },
    { title: "Snoop Dogg - 'Who Am I (What's My Name)?'", sample: "Atomic Dog" },
    { title: "Run-D.M.C. - 'It's Like That'", sample: "Long Red" },
    { title: "Public Enemy - 'Fight the Power'", sample: "Funky Drummer" }
];

function createGrid() {
    const gridContainer = document.getElementById('grid-container');
    songs.forEach((song, index) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.textContent = song.title;
        gridItem.addEventListener('click', () => toggleGridItem(gridItem));
        gridContainer.appendChild(gridItem);
    });
}

function toggleGridItem(gridItem) {
    gridItem.classList.toggle('toggled');
}

document.addEventListener('DOMContentLoaded', createGrid);