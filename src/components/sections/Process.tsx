import { processSteps } from "@/content/process";

/**
 * Metodo in cinque passaggi. La linea arancione che collega i passaggi si completa
 * durante lo scorrimento nei browser che supportano le scroll-driven animations;
 * negli altri casi (o con "riduci movimento") è mostrata già completa.
 */
export function Process() {
  return (
    <section id="metodo" tabIndex={-1} aria-labelledby="metodo-title" className="section process on-dark">
      <div className="container-x process__grid">
        <div className="process__intro">
          <div className="process__sticky">
            <h2 id="metodo-title" className="t-h2">
              Cinque passaggi, dal primo incontro alla gestione quotidiana.
            </h2>
            <p className="process__text">
              Il metodo è lo stesso per ogni cliente; cambiano i tempi, che dipendono dalla complessità dei flussi. In
              ogni fase sapete che cosa succede e che cosa ricevete.
            </p>
          </div>
        </div>

        <ol className="steps" role="list">
          {processSteps.map((step, index) => (
            <li key={step.title} className="step">
              <span className="step__node" aria-hidden="true" />
              {index < processSteps.length - 1 ? (
                <span className="step__line" aria-hidden="true">
                  <span className="step__fill" />
                </span>
              ) : null}
              <p className="step__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="t-h3">{step.title}</h3>
              <p className="step__text">{step.text}</p>
              <p className="step__output">
                <span className="t-label step__output-label">Cosa ricevete</span>
                {step.output}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
