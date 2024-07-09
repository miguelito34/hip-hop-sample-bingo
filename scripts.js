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
        gridItem.addEventListener('click', () => toggleGridItem(gridItem, index));
        gridContainer.appendChild(gridItem);
    });
}

function toggleGridItem(gridItem, index) {
    gridItem.classList.toggle('toggled');
    checkWinCondition();
}

function checkWinCondition() {
    const gridItems = document.querySelectorAll('.grid-item');
    const gridState = Array.from(gridItems).map(item => item.classList.contains('toggled'));
    const winPatterns = [
        [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15], // Rows
        [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15], // Columns
        [0, 5, 10, 15], [3, 6, 9, 12] // Diagonals
    ];

    for (let pattern of winPatterns) {
        if (pattern.every(index => gridState[index])) {
            showBanner();
            return;
        }
    }
}

function showBanner() {
    const banner = document.getElementById('banner');
    banner.classList.add('visible');
    banner.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', createGrid);
