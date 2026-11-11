/*
  EQUIPO DE CTH — especialidades y especialistas de la Unidad (unidad.html)
  ---------------------------------------------------------------------------
  Este archivo es contenido, no código: para agregar una especialidad o un
  especialista basta con agregar un bloque aquí. La página arma sola los
  botones y las tarjetas.

  especialidades: botones del panel «Una unidad multidisciplinaria», en el
    orden en que aparecen. «Cuidado de heridas» y «Cuidados preventivos» son
    las dos tarjetas grandes de arriba y no van en esta lista.
    - id: código corto, sin espacios ni tildes. Es el que se usa en «en».
    - nombre: lo que se ve en el botón.
    - servicio (opcional): para un servicio sin especialista (Laboratorio).
      Lleva texto, boton y enlace.
    - enlace (opcional): un enlace a su landing, debajo de los especialistas.
      Lleva texto y href.

  especialistas: cada persona una sola vez.
    - en: códigos de las especialidades donde aparece. «heridas» es la
      tarjeta «Cuidado de heridas».
    - credenciales y horario: entre corchetes mientras CTH no los envíe.
    - Lo que se publique aquí lo autoriza CTH. Las afirmaciones clínicas
      las valida la Dra. Milagros Jaimes.

  Fuente: respuesta de CTH del 11 nov 2026 (lista «Servicios»).
*/
window.CTH_EQUIPO = {
  heridas: {
    nombre: 'Cuidado de heridas',
    texto: 'Incluye enfermería especializada en la sede, a domicilio y por telemedicina, con especialistas que trabajan en equipo en cada caso.'
  },

  especialidades: [
    { id: 'cg', nombre: 'Cirugía general' },
    { id: 'cc', nombre: 'Cirugía cardiovascular' },
    { id: 'cp', nombre: 'Cirugía plástica' },
    { id: 'mg', nombre: 'Medicina general' },
    { id: 'mi', nombre: 'Medicina interna e infectología' },
    { id: 'mf', nombre: 'Medicina física y rehabilitación', enlace: { texto: 'Conoce Fisiatría avanzada y terapia láser →', href: 'fisiatria.html' } },
    { id: 'nc', nombre: 'Nutrición clínica' },
    { id: 'to', nombre: 'Traumatología y ortopedia' },
    {
      id: 'eco', nombre: 'Ecografía y Doppler',
      servicio: {
        texto: 'Diagnóstico preciso y en tiempo real para respaldar tu tratamiento médico o fisiátrico. También realizamos jornadas de ecografía.',
        boton: 'Conoce el servicio',
        enlace: '#ecografia'
      }
    },
    {
      id: 'lab', nombre: 'Laboratorio',
      servicio: {
        texto: 'Exámenes de laboratorio en nuestra sede. Escríbenos y te informamos cuáles necesitas y cómo hacerlos.',
        boton: 'Solicita más información',
        enlace: '#contacto'
      }
    }
  ],

  especialistas: [
    {
      nombre: 'Dra. Milagros Jaimes',
      especialidad: 'Medicina física y rehabilitación (fisiatra) · Manejo avanzado de heridas',
      en: ['heridas', 'mg', 'mf'],
      areas: [
        'Manejo avanzado de heridas crónicas.',
        'Consulta de medicina general.',
        'Tratamiento de patologías osteomioarticulares y neurológicas.'
      ],
      credenciales: '[Universidad y número de colegiado]',
      horario: '[Días y horario de consulta · sede]'
    },
    {
      nombre: 'Dr. Pedro Hinojosa',
      especialidad: 'Cirugía general',
      en: ['heridas', 'cg'],
      areas: ['Manejo avanzado de heridas crónicas y quirúrgicas.'],
      credenciales: '[Universidad y número de colegiado]',
      horario: '[Días y horario de consulta · sede]'
    },
    {
      nombre: 'Dra. Risnel Cedeño',
      especialidad: 'Cirugía cardiovascular',
      en: ['heridas', 'cc'],
      areas: [
        'Manejo de heridas vasculares y pie diabético.',
        'Tratamiento de escleroterapia.'
      ],
      credenciales: '[Universidad y número de colegiado]',
      horario: '[Días y horario de consulta · sede]'
    },
    {
      nombre: 'Dr. Jesús Lozada',
      especialidad: 'Cirugía plástica y reconstructiva',
      en: ['heridas', 'cp'],
      areas: [
        'Manejo avanzado de quemaduras y otras heridas crónicas.',
        'Estética facial: toxina botulínica, ácido hialurónico y PRP (plasma rico en plaquetas).'
      ],
      credenciales: '[Universidad y número de colegiado]',
      horario: '[Días y horario de consulta · sede]'
    },
    {
      nombre: 'Dra. Marianela Rojas',
      especialidad: 'Medicina interna e infectología',
      en: ['mi'],
      areas: [
        'Consulta médica integral.',
        'Diagnóstico y manejo de enfermedades infecciosas y sistémicas.'
      ],
      credenciales: '[Universidad y número de colegiado]',
      horario: '[Días y horario de consulta · sede]'
    },
    {
      nombre: 'Dra. Julia Mendoza',
      especialidad: 'Medicina interna',
      en: ['mi'],
      areas: ['Control y seguimiento de patologías crónicas y metabólicas.'],
      credenciales: '[Universidad y número de colegiado]',
      horario: '[Días y horario de consulta · sede]'
    },
    {
      nombre: 'Dra. Lenys Peña',
      especialidad: 'Medicina física y rehabilitación (fisiatra)',
      en: ['mf'],
      areas: [
        'Consulta médica de evaluación y rehabilitación física.',
        'Tratamiento de patologías osteomioarticulares y funcionales.'
      ],
      credenciales: '[Universidad y número de colegiado]',
      horario: '[Días y horario de consulta · sede]'
    },
    {
      nombre: 'Lic. Zerimar Fernández',
      especialidad: 'Nutrición clínica',
      en: ['nc'],
      areas: ['Consulta nutricional y planes de alimentación especializados.'],
      credenciales: '[Universidad y número de colegiado]',
      horario: '[Días y horario de consulta · sede]'
    },
    {
      nombre: 'Dr. José Gregorio Barrio',
      especialidad: 'Traumatología y ortopedia',
      en: ['to'],
      areas: ['Lesiones del sistema musculoesquelético y ortopedia general.'],
      credenciales: '[Universidad y número de colegiado]',
      horario: '[Días y horario de consulta · sede]'
    }
  ]
};
