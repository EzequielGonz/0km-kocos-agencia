const questions = [
{q:'¿Qué es un plan de ahorro?',a:'Es una alternativa para planificar el acceso a un vehículo mediante un sistema de aportes. Las características y condiciones dependen de cada plan; podemos ayudarte a conocer las opciones disponibles.'},
{q:'¿Puedo consultar si todavía no sé qué vehículo quiero?',a:'Sí. Contanos qué tipo de vehículo te interesa y qué necesitás; podemos orientarte para explorar alternativas.'},
{q:'¿Puedo entregar mi vehículo usado?',a:'Podés contarnos qué vehículo tenés para entregar. Evaluaremos las alternativas disponibles según tu situación.'},
{q:'¿Puedo utilizar un anticipo?',a:'Sí, podés indicar si disponés de un anticipo al hacer tu consulta para recibir orientación sobre las opciones posibles.'},
{q:'¿Puedo consultar por financiación?',a:'Sí. Podemos orientarte sobre las alternativas de financiación disponibles para que conozcas las opciones aplicables a tu situación.'},
{q:'¿Puedo elegir entre distintas marcas?',a:'Podés consultar por alternativas de distintas marcas, incluyendo Volkswagen, Ford y Peugeot. La disponibilidad de opciones se revisa al momento de tu consulta.'}
];
export function Faq(){return <section className="faq-section" id="preguntas"><div className="wrap faq-layout"><div data-reveal><span className="eyebrow dark-kicker">RESPUESTAS CLARAS</span><h2>Preguntas frecuentes<span className="blue-dot">.</span></h2><p>Si todavía tenés dudas, estamos para ayudarte a empezar.</p></div><div className="faq-list">{questions.map(({q,a},index)=><details key={q} data-reveal data-reveal-delay={String(index*60)}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div></section>}
