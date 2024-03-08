const concert = {
  bands: [
    {
      name: "Rolling Stones",
      songs: ["Satisfaction", "Gimme Shelter", "Jumping' Jack Flash"],
    },
    {
      name: "Black Keys",
      songs: ["Lonely Boy", "Howling' For You", "Gold on the Ceiling"],
    },
    {
      name: "Kendrick Lamar",
      songs: ["HUMBLE.", "DNA.", "Alright"],
    },
  ],
};

function createPlaylist(concert) {
  // Use reduce to extract the songs from all bands
  return concert.bands.reduce((playlist, band) => {
    // Concatenate the songs of the current band to the playlist
    return playlist.concat(band.songs);
  }, []);
}

const playlist = createPlaylist(concert);
console.log(playlist);

/* [
  "Satisfaction",
  "Gimme Shelter",
  "Jumping' Jack Flash",
  "Lonely Boy",
  "Howling' For You",
  "Gold on the Ceiling",
  "HUMBLE.",
  "DNA.",
  "Alright",
]
*/
