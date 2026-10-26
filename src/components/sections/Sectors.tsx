import { sectors } from "@/content/sectors";

export function Sectors() {
  return (
    <section id="settori" tabIndex={-1} aria-labelledby="settori-title" className="section bg-white">
      <div className="container-x">
        <div className="section-intro">
          <h2 id="settori-title" className="t-h2 section-intro__title">
            Ogni settore ha le sue regole.
          </h2>
          <p className="section-intro__text">
            Le esigenze cambiano da un comparto all’altro. Per questo ogni progetto parte dalle regole del vostro
            mercato, non da un listino uguale per tutti.
          </p>
        </div>

        <div className="sectors">
          <div className="sectors__head" aria-hidden="true">
            <span>Settore</span>
            <span>Che cosa conta</span>
            <span>Come lo organizziamo</span>
          </div>
          <ul className="sectors__list">
            {sectors.map((sector) => (
              <li key={sector.name} className="sector">
                <h3 className="sector__name">{sector.name}</h3>
                <div>
                  <p className="sector__label">Che cosa conta</p>
                  <p className="sector__need">{sector.need}</p>
                </div>
                <div>
                  <p className="sector__label">Come lo organizziamo</p>
                  <p>{sector.approach}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
