/* PRODUCTOS DE CTH · contenido, no código (19 nov 2026)
   Arma el catálogo (productos.html) y la ficha de cada producto (producto.html?p=<id>).

   Para agregar un producto: copia un bloque { ... } completo, cambia el id (en minúsculas, sin espacios ni acentos)
   y llena sus datos. Lo que falte se deja en null o [] y la página muestra el espacio pendiente entre corchetes.

   Regla (Jenny, 19 nov 2026): la descripción y «Qué aporta esta tecnología» se publican tal como los declara
   el fabricante en su ficha técnica o en sus instrucciones de uso, sin reformularlos para que digan más.
   No llevan validación de la Dra. Milagros Jaimes. La web no muestra precios ni vende.

   Campos:
   - id: lo que va en la dirección de la ficha (producto.html?p=id).
   - marca, nombre, tipo (por ejemplo «Apósito de colágeno con plata»), familia (nombre corto de la tecnología).
   - descripcion: una o dos frases del fabricante.
   - presentaciones: lista de medidas o presentaciones del fabricante, por ejemplo ['5 × 5 cm', '10 × 10 cm'].
   - aporta: hasta tres puntos { t: título, d: texto }.
   - foto: ruta de la fotografía oficial (null mientras no llegue).
   - ficha: enlace a la ficha técnica del fabricante (null mientras no llegue). */
window.CTH_PRODUCTOS = [
  {
    id: 'colactive-plus-ag',
    marca: 'Covalon',
    nombre: 'ColActive® PLUS Ag',
    tipo: 'Apósito de colágeno con plata',
    familia: 'Colágeno con plata',
    descripcion: 'Apósito antimicrobiano diseñado para ayudar a mantener un ambiente húmedo en la superficie de la herida y apoyar el proceso de cicatrización.',
    presentaciones: [],
    aporta: [
      { t: 'Ambiente húmedo', d: 'Ayuda a mantener condiciones de humedad en la superficie de la herida.' },
      { t: 'Componente antimicrobiano', d: 'La plata está destinada a prevenir la colonización bacteriana del apósito.' },
      { t: 'Absorción', d: 'Su composición permite absorber líquido de la herida.' }
    ],
    foto: null,
    ficha: null
  },
  {
    id: 'covawound-silicona',
    marca: 'Covalon',
    nombre: 'CovaWound Silicona',
    tipo: 'Apósito de silicona',
    familia: 'Apósito de silicona',
    descripcion: null,
    presentaciones: [],
    aporta: [],
    foto: null,
    ficha: null
  },
  {
    id: 'covawound-alginate-ag',
    marca: 'Covalon',
    nombre: 'CovaWound Alginate Ag',
    tipo: 'Alginato con plata',
    familia: 'Alginato con plata',
    descripcion: null,
    presentaciones: [],
    aporta: [],
    foto: null,
    ficha: null
  },
  {
    id: 'platsul-a-crema',
    marca: 'Platsul',
    nombre: 'Platsul-A crema',
    tipo: 'Crema de aplicación tópica',
    familia: 'Crema de aplicación tópica',
    descripcion: null,
    presentaciones: [],
    aporta: [],
    foto: null,
    ficha: null
  }
];
