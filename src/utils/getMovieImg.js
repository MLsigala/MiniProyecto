import placeholder from '../img/movie.png';

export function getMovieImg(path) {
  if (path !== null) {
    return path.medium;
  }
  return placeholder;
}
