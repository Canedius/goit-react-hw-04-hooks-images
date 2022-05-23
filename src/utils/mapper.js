export function mapper(array) {
    return array.map(({ id,webformatURL,tags,largeImageURL }) => ({
      webformatURL,
      id,
      tags,
      largeImageURL,
    }));
  }