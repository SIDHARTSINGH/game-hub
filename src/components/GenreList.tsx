import useGenres from "../hooks/useGenres";

const GenreList = () => {
  // using a generic data fetching hook
  //    rename destructred property using alias {data : ganres}
  const { data: genres } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
