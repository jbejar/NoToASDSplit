import podcastsData from "../../data/reason-to-not-split.json"
import Podcast from "./components/Podcast";
export default function Home() {
  return (
    <main className="content">
      <h1 className="heading">Reasons to Not Split</h1>


      <section className="features">
        {podcastsData.map(pod => 
          <article className="card">
            <Podcast {...pod}/>
          

        </article>
        )}
        
      </section>
    </main>
  );
}
