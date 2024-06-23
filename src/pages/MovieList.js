import { Card } from "../components";
import { useFetch, useTitle } from "../hooks";

export const MovieList = ({apiPath, title}) => {

  const {eachMovie: movie} = useFetch(apiPath);

  // Page title;
  useTitle(title);

  return (
    <main>
      <section className="mx-auto max-w-7xl py-7">
        <div className="flex flex-wrap justify-start other:justify-evenly">
          {
            movie.map(omovie => {
              return <Card key={omovie.id} omovie={omovie}/>
            })
          }
        </div>
      </section>
    </main>
  )
}
