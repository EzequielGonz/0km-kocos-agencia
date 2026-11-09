const pasos = [
  { titulo: 'Contanos qué vehículo buscás', texto: 'Modelo, versión o simplemente para qué lo vas a usar.' },
  { titulo: 'Conocemos tu situación', texto: 'Si tenés usado o anticipo y cómo preferís pagar.' },
  { titulo: 'Te mostramos las alternativas', texto: 'Con el precio final y las condiciones vigentes al consultar.' },
  { titulo: 'Elegís cómo avanzar', texto: 'Sin apuro: decidís cuando tengas todo claro.' },
];

export function Process() {
  return (
    <section className="seccion proceso" id="como-funciona">
      <div className="contenedor">
        <div className="proceso-cabeza">
          <h2 className="revela">Cómo empezamos</h2>
          <p className="seccion-bajada">Un primer paso sencillo para ver qué posibilidades se ajustan a lo que necesitás.</p>
        </div>
        <div className="pasos">
          <span className="pasos-riel" aria-hidden="true"><span className="pasos-avance" /></span>
          <ol>
            {pasos.map((paso, i) => (
              <li className="paso" key={paso.titulo}>
                <span className="paso-num" aria-hidden="true">{i + 1}</span>
                <h3>{paso.titulo}</h3>
                <p>{paso.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
