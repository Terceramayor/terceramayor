export function getRandomByLength(object) {
  return Math.floor(Math.random() * object.length);
}

export default function createUrlRecomendationsDashboard(objectTags) {
  let genresUrl = [];
  const artists = [];
  let artistsUrl = [];
  const tracks = [];
  let tracksUrl = [];

  // Get two artist IDs and generate the corresponding url piece
  if (objectTags.artists.length > 0) {
    objectTags.artists.forEach((artist) => {
      artists.push(artist.id);
    });

    if (artists.length >= 2) {
      do {
        const artist = artists[getRandomByLength(objectTags.artists)];

        if (!artistsUrl.find((element) => element === artist)) {
          artistsUrl.push(artist);
        }
      } while (artistsUrl.length < 2);

      artistsUrl = [...artistsUrl];
      artistsUrl = artistsUrl.join('%2C');
      artistsUrl = ['&seed_artists=', artistsUrl];
    } else {
      artistsUrl = ['&seed_artists=', artists.toString()];
    }
    artistsUrl = artistsUrl.join('');
  }

  // Get one genre and generate the corresponding URL piece
  if (objectTags.genres.length > 0) {
    const randomGenre = Math.floor(Math.random() * objectTags.genres.length);
    genresUrl.push(objectTags.genres[randomGenre]);
    genresUrl = ['&seed_genres=', ...genresUrl];
    genresUrl = genresUrl.join('');
  }

  // Get two tracks IDs and generate the corresponding url piece
  if (objectTags.tracks.length > 0) {
    objectTags.tracks.forEach((track) => {
      tracks.push(track.id);
    });

    if (tracks.length >= 2) {
      do {
        const track = tracks[getRandomByLength(objectTags.tracks)];

        if (!tracksUrl.find((element) => element === track)) {
          tracksUrl.push(track);
        }
      } while (tracksUrl.length < 2);

      tracksUrl = [...tracksUrl];
      tracksUrl = tracksUrl.join('%2C');
      tracksUrl = ['&seed_tracks=', tracksUrl];
    } else {
      tracksUrl = ['&seed_tracks=', tracks.toString()];
    }
    tracksUrl = tracksUrl.join('');
  }

  const url = `https://api.spotify.com/v1/recommendations?limit=12${artistsUrl}${genresUrl}${tracksUrl}`;
  return url;
}
