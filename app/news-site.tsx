type Article = {
  slug: string;
  category: string;
  type: "Explainer" | "Analysis" | "Guide";
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  body: string[];
};

const articles: Article[] = [
  {
    slug: "computacion-cuantica-que-es-y-por-que-todavia-no-reemplazara-a-tu-computadora",
    category: "Tecnología",
    type: "Explainer",
    title: "Computación cuántica: qué es y por qué todavía no reemplazará a tu computadora",
    excerpt: "Una introducción sencilla a los principios de la computación cuántica, sus aplicaciones y sus limitaciones actuales.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "4 min",
    body: [
      "La computación cuántica utiliza principios de la física cuántica para procesar información de una manera diferente a las computadoras tradicionales. Mientras una computadora común trabaja con bits que representan ceros o unos, una computadora cuántica emplea cúbits, capaces de representar múltiples estados durante una operación.",
      "Esta característica permite explorar numerosas soluciones posibles al mismo tiempo. Por eso, la computación cuántica podría ser especialmente útil para simular moléculas, optimizar redes logísticas, desarrollar nuevos materiales y resolver ciertos problemas matemáticos complejos.",
      "Sin embargo, una computadora cuántica no es simplemente una versión más rápida de una computadora convencional. Muchos programas cotidianos, como un navegador, un editor de texto o un videojuego, no obtendrían grandes beneficios al ejecutarse en ella.",
      "El principal desafío es mantener los cúbits estables. El calor, las vibraciones y otras interferencias pueden generar errores en los cálculos. Los equipos cuánticos también requieren instalaciones especializadas y sistemas avanzados de refrigeración.",
      "En lugar de reemplazar completamente a las computadoras actuales, es más probable que funcionen como herramientas especializadas conectadas a sistemas tradicionales. El futuro tecnológico podría combinar procesadores convencionales, inteligencia artificial y computación cuántica según el tipo de problema que se necesite resolver.",
    ],
  },
  {
    slug: "el-verdadero-costo-de-almacenar-todo-en-la-nube",
    category: "Tecnología",
    type: "Analysis",
    title: "El verdadero costo de almacenar todo en la nube",
    excerpt: "La nube parece invisible, pero detrás de cada archivo existen servidores, energía, mantenimiento y decisiones sobre privacidad.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "4 min",
    body: [
      "Guardar fotos, documentos y copias de seguridad en la nube se ha convertido en una acción cotidiana. Aunque el proceso parece instantáneo y casi gratuito, cada archivo termina almacenado en centros de datos que consumen electricidad, requieren refrigeración y deben mantenerse activos durante todo el día.",
      "El costo económico no siempre aparece al comienzo. Muchas plataformas ofrecen una cantidad limitada de almacenamiento gratuito y luego cobran una suscripción mensual. Cuando una persona o empresa acumula grandes volúmenes de información, cambiar de proveedor también puede resultar difícil por el tiempo necesario para descargar, ordenar y trasladar los archivos.",
      "Existe además un costo relacionado con la privacidad. Al subir información a un servicio externo, el usuario depende de las políticas de seguridad, acceso y conservación de datos de la empresa proveedora. Una contraseña débil o una cuenta sin autenticación adicional puede dejar expuestos años de información.",
      "La nube sigue siendo una herramienta útil, especialmente para trabajar desde distintos dispositivos y proteger archivos frente a daños físicos. La mejor estrategia es utilizarla de manera consciente: eliminar duplicados, revisar permisos, activar la verificación en dos pasos y mantener copias locales de los documentos más importantes.",
      "La nube no elimina la infraestructura. Simplemente la traslada a computadoras que pertenecen y son administradas por otra organización.",
    ],
  },
  {
    slug: "hogares-inteligentes-sin-complicaciones-por-donde-empezar",
    category: "Tecnología",
    type: "Guide",
    title: "Hogares inteligentes sin complicaciones: por dónde empezar",
    excerpt: "Una guía práctica para incorporar dispositivos inteligentes sin llenar la casa de aparatos incompatibles o innecesarios.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "5 min",
    body: [
      "Transformar una vivienda en un hogar inteligente no requiere comprar decenas de dispositivos. Lo más conveniente es comenzar con un problema concreto: reducir el consumo eléctrico, mejorar la seguridad o automatizar una tarea repetitiva.",
      "Las luces inteligentes suelen ser una buena primera opción. Permiten establecer horarios, controlar la intensidad y apagar lámparas que quedaron encendidas. Los enchufes inteligentes ofrecen funciones similares para ventiladores, cafeteras u otros aparatos sencillos.",
      "Antes de comprar, conviene comprobar que los dispositivos sean compatibles con el mismo ecosistema o estándar. Mezclar plataformas puede obligar a utilizar varias aplicaciones y dificultar las automatizaciones. También es importante revisar si el producto continúa funcionando cuando se interrumpe internet.",
      "La seguridad debe ocupar un lugar central. Cada dispositivo conectado es otro punto que podría ser atacado. Se recomienda cambiar las contraseñas predeterminadas, actualizar el software y separar, cuando sea posible, los equipos inteligentes de las computadoras que almacenan información personal.",
      "Un hogar inteligente funciona mejor cuando la tecnología pasa desapercibida. Las automatizaciones deberían ahorrar tiempo y no crear nuevas tareas de mantenimiento. Empezar con uno o dos dispositivos permite evaluar su utilidad antes de ampliar el sistema.",
    ],
  },
  {
    slug: "baterias-de-estado-solido-la-promesa-detras-de-la-proxima-generacion-energetica",
    category: "Tecnología",
    type: "Explainer",
    title: "Baterías de estado sólido: la promesa detrás de la próxima generación energética",
    excerpt: "Qué diferencia a las baterías de estado sólido y por qué podrían cambiar los vehículos eléctricos y los dispositivos portátiles.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "4 min",
    body: [
      "La mayoría de los teléfonos, computadoras portátiles y vehículos eléctricos utilizan baterías de iones de litio con un electrolito líquido. Las baterías de estado sólido buscan reemplazar ese componente por un material sólido capaz de transportar los iones entre los electrodos.",
      "Este cambio podría permitir baterías con mayor densidad energética. En términos prácticos, un dispositivo podría funcionar durante más tiempo sin aumentar demasiado su peso. En los vehículos eléctricos, esto podría traducirse en una mayor autonomía.",
      "El electrolito sólido también podría reducir determinados riesgos relacionados con fugas o incendios. Sin embargo, esto no significa que la tecnología sea completamente inmune a fallas. El diseño, los materiales y el sistema de gestión de la batería siguen siendo fundamentales.",
      "El gran obstáculo es la fabricación. Producir baterías de estado sólido de forma uniforme, económica y a gran escala continúa siendo complejo. Algunos materiales pierden rendimiento después de numerosos ciclos de carga, mientras que otros requieren procesos industriales costosos.",
      "La tecnología posee un potencial considerable, pero su adopción probablemente será gradual. Antes de llegar a todos los dispositivos, podría aparecer primero en productos de alto costo o en aplicaciones donde el peso, la seguridad y la autonomía sean especialmente importantes.",
    ],
  },
  {
    slug: "derecho-a-reparar-por-que-arreglar-un-dispositivo-se-volvio-tan-dificil",
    category: "Tecnología",
    type: "Analysis",
    title: "Derecho a reparar: por qué arreglar un dispositivo se volvió tan difícil",
    excerpt: "Reparar un teléfono o una computadora puede ser más costoso que reemplazarlos. El diseño tecnológico tiene mucho que ver.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "4 min",
    body: [
      "Durante años, numerosos aparatos electrónicos podían abrirse con herramientas comunes. Sus baterías eran reemplazables y las piezas estaban disponibles en comercios especializados. En muchos dispositivos actuales, los componentes están pegados, soldados o vinculados mediante software.",
      "Las empresas argumentan que estas decisiones permiten fabricar productos más delgados, resistentes al agua y eficientes. Sin embargo, también dificultan las reparaciones independientes y pueden acortar la vida útil práctica de los equipos.",
      "El movimiento por el derecho a reparar propone que fabricantes y distribuidores ofrezcan repuestos, manuales, herramientas de diagnóstico y acceso razonable al software necesario para completar una reparación.",
      "La posibilidad de arreglar un dispositivo no solo afecta al consumidor. También tiene consecuencias ambientales. Reemplazar equipos por fallas pequeñas genera residuos electrónicos y aumenta la demanda de minerales, transporte y energía.",
      "Un buen sistema de reparación necesita equilibrar seguridad, propiedad intelectual y acceso técnico. No todos los arreglos deberían realizarse sin conocimientos adecuados, especialmente cuando existen baterías de alta capacidad. Aun así, los usuarios deberían poder elegir entre el servicio oficial, un técnico independiente o una reparación propia cuando sea segura y posible.",
      "# SECCIÓN 2: PROGRAMACIÓN",
    ],
  },
  {
    slug: "aprender-programacion-sin-memorizar-cientos-de-comandos",
    category: "Programación",
    type: "Guide",
    title: "Aprender programación sin memorizar cientos de comandos",
    excerpt: "Programar no consiste en recordar cada función, sino en comprender problemas, dividirlos y construir soluciones verificables.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "5 min",
    body: [
      "Uno de los errores más frecuentes al aprender programación es intentar memorizar toda la sintaxis de un lenguaje. Incluso los desarrolladores experimentados consultan documentación, ejemplos y referencias durante su trabajo.",
      "La habilidad central es aprender a dividir un problema. Una aplicación para registrar tareas, por ejemplo, puede separarse en funciones para crear, mostrar, editar, guardar y eliminar elementos. Cada parte se puede desarrollar y probar de manera independiente.",
      "También conviene practicar con proyectos pequeños. Una calculadora, un conversor de unidades o un registro de gastos enseñan más que copiar programas extensos sin comprenderlos. El objetivo es enfrentar dificultades manejables y aprender a investigar las soluciones.",
      "Los mensajes de error deben verse como pistas. Leer qué archivo, línea o función produjo el problema suele reducir considerablemente el área de búsqueda. Agregar impresiones temporales o utilizar un depurador ayuda a observar qué está haciendo realmente el programa.",
      "Aprender programación es un proceso acumulativo. Primero se dominan variables y condiciones; después aparecen funciones, estructuras de datos, archivos, bases de datos y redes. La sintaxis puede consultarse. Lo importante es desarrollar una forma ordenada de pensar.",
    ],
  },
  {
    slug: "que-es-una-api-explicado-con-el-ejemplo-de-un-restaurante",
    category: "Programación",
    type: "Explainer",
    title: "Qué es una API explicado con el ejemplo de un restaurante",
    excerpt: "Las API permiten que diferentes programas intercambien información sin conocer todos los detalles internos del otro sistema.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "4 min",
    body: [
      "Una API puede entenderse como el sistema de atención de un restaurante. El cliente consulta un menú, realiza un pedido y recibe una respuesta. No necesita ingresar a la cocina ni conocer cada paso utilizado para preparar el plato.",
      "En una aplicación, el menú equivale a la documentación de la API. Allí se especifican las operaciones disponibles, los datos requeridos y el formato de las respuestas.",
      "Cuando una aplicación solicita el pronóstico del tiempo, puede enviar una petición a una API meteorológica indicando una ciudad. El servidor procesa la solicitud y devuelve información estructurada, generalmente en un formato como JSON.",
      "Las API permiten reutilizar funciones ya desarrolladas. Un sitio puede integrar mapas, pagos, traducciones o sistemas de autenticación sin construir toda esa infraestructura desde cero.",
      "Sin embargo, también introducen dependencias. Si una API cambia, deja de funcionar o modifica sus precios, las aplicaciones conectadas pueden verse afectadas. Por eso es importante manejar errores, limitar las solicitudes y proteger las claves de acceso.",
      "Una API crea un contrato entre sistemas: define qué se puede pedir, cómo debe pedirse y qué clase de respuesta puede esperarse.",
    ],
  },
  {
    slug: "codigo-limpio-decisiones-pequenas-que-evitan-problemas-grandes",
    category: "Programación",
    type: "Guide",
    title: "Código limpio: decisiones pequeñas que evitan problemas grandes",
    excerpt: "Nombres claros, funciones breves y estructuras coherentes pueden facilitar el mantenimiento de cualquier proyecto.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "5 min",
    body: [
      "El código limpio no es necesariamente el código más corto. Es aquel que otra persona puede leer, modificar y probar sin tener que descifrar las intenciones de su autor.",
      "Un primer paso es utilizar nombres descriptivos. Una variable llamada `totalCompra` comunica más información que una llamada `x`. Las funciones también deberían indicar claramente qué hacen mediante nombres como `calcularImpuesto` o `validarUsuario`.",
      "Cada función debería tener una responsabilidad principal. Cuando una función valida datos, modifica una base de datos, envía un correo y genera un informe, cualquier cambio puede producir efectos inesperados.",
      "Los comentarios son útiles para explicar decisiones difíciles, pero no deberían compensar nombres confusos. Un comentario que dice “incrementar contador” junto a una línea evidente agrega poco valor. En cambio, explicar por qué se eligió una fórmula específica puede ayudar a futuros desarrolladores.",
      "La consistencia también importa. Utilizar un mismo estilo de indentación, organización de carpetas y manejo de errores reduce el esfuerzo mental necesario para comprender el proyecto.",
      "El código suele leerse muchas más veces de las que se escribe. Dedicar unos minutos a mejorar su claridad puede ahorrar horas de depuración en el futuro.",
    ],
  },
  {
    slug: "bases-de-datos-sql-y-nosql-como-elegir-sin-caer-en-modas",
    category: "Programación",
    type: "Analysis",
    title: "Bases de datos SQL y NoSQL: cómo elegir sin caer en modas",
    excerpt: "La elección de una base de datos debe depender de los datos, las consultas y las necesidades del proyecto.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "5 min",
    body: [
      "Las bases de datos SQL organizan la información en tablas relacionadas. Son especialmente útiles cuando los datos mantienen una estructura clara y las relaciones deben conservarse con precisión, como ocurre en sistemas bancarios, inventarios o plataformas de facturación.",
      "Las bases NoSQL agrupan distintas tecnologías, incluyendo documentos, grafos y almacenes de clave y valor. Suelen ofrecer mayor flexibilidad cuando los datos cambian con frecuencia o no encajan naturalmente en tablas rígidas.",
      "Ningún modelo es superior en todas las situaciones. Un sistema de ventas puede necesitar transacciones confiables y relaciones complejas, características para las que una base SQL resulta apropiada. Una aplicación que almacena eventos masivos o documentos con estructuras variables podría beneficiarse de una solución NoSQL.",
      "También es posible combinar tecnologías. Una empresa puede utilizar una base relacional para los pagos y otra orientada a documentos para catálogos o registros de actividad.",
      "La decisión debería considerar qué consultas se realizarán, cuánto crecerá el sistema, qué nivel de consistencia necesita y qué experiencia posee el equipo. Elegir una herramienta únicamente porque es popular puede crear dificultades innecesarias.",
      "La mejor base de datos no es la más moderna: es la que resuelve el problema con la menor complejidad razonable.",
    ],
  },
  {
    slug: "pruebas-automatizadas-el-cinturon-de-seguridad-del-software",
    category: "Programación",
    type: "Explainer",
    title: "Pruebas automatizadas: el cinturón de seguridad del software",
    excerpt: "Las pruebas no garantizan programas perfectos, pero ayudan a detectar rápidamente cuándo un cambio rompe algo importante.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "4 min",
    body: [
      "Una prueba automatizada ejecuta una parte del programa y verifica que el resultado coincida con lo esperado. Por ejemplo, una función que suma dos cantidades debería devolver cinco cuando recibe los números dos y tres.",
      "Las pruebas unitarias analizan funciones o componentes pequeños. Las pruebas de integración comprueban que diferentes partes puedan trabajar juntas, como una aplicación conectándose correctamente con su base de datos.",
      "También existen pruebas de extremo a extremo, que simulan acciones completas de un usuario. Un ejemplo sería abrir una tienda digital, agregar un producto al carrito y completar una compra de prueba.",
      "Su mayor ventaja aparece cuando el programa cambia. Un desarrollador puede modificar una función y ejecutar cientos de pruebas en pocos minutos para comprobar si afectó a otras áreas.",
      "Las pruebas no reemplazan la revisión humana ni eliminan todos los errores. Una prueba mal diseñada puede confirmar un comportamiento incorrecto. Por eso deben cubrir situaciones normales, límites y casos inesperados.",
      "Escribir pruebas requiere tiempo, pero ese esfuerzo suele recuperarse al reducir errores repetidos, facilitar actualizaciones y permitir que el equipo trabaje con mayor confianza.",
    ],
  },
  {
    slug: "gobierno-digital-mas-que-convertir-formularios-en-paginas-web",
    category: "Políticas públicas",
    type: "Analysis",
    title: "Gobierno digital: más que convertir formularios en páginas web",
    excerpt: "Digitalizar un trámite no sirve de mucho cuando el proceso continúa siendo lento, confuso o inaccesible.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "5 min",
    body: [
      "El gobierno digital suele asociarse con portales, aplicaciones y documentos electrónicos. Sin embargo, trasladar un formulario de papel a una pantalla no garantiza que el servicio público sea más eficiente.",
      "Una transformación real comienza revisando el proceso. Si un trámite exige información que otro organismo ya posee, la solución no debería consistir simplemente en pedir los mismos datos mediante internet. El objetivo tendría que ser reducir pasos, eliminar duplicaciones y mejorar la coordinación entre instituciones.",
      "La accesibilidad también es esencial. No todas las personas cuentan con una conexión estable, dispositivos modernos o conocimientos digitales. Los servicios deben ofrecer alternativas presenciales o asistidas para evitar que la digitalización aumente la exclusión.",
      "Otro desafío es la protección de datos. Los sistemas gubernamentales manejan información sensible y pueden convertirse en objetivos valiosos para ataques informáticos. La seguridad debe formar parte del diseño desde el comienzo.",
      "Un servicio público digital exitoso no se mide por la cantidad de aplicaciones creadas. Se mide por el tiempo ahorrado, la claridad del proceso, la reducción de errores y la capacidad de todas las personas para utilizarlo.",
    ],
  },
  {
    slug: "datos-abiertos-como-la-informacion-publica-puede-generar-valor-social",
    category: "Políticas públicas",
    type: "Explainer",
    title: "Datos abiertos: cómo la información pública puede generar valor social",
    excerpt: "Publicar datos de manera accesible permite investigar, fiscalizar y crear soluciones para problemas colectivos.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "4 min",
    body: [
      "Los datos abiertos son conjuntos de información que pueden consultarse, reutilizarse y distribuirse bajo condiciones claras. Pueden incluir presupuestos, estadísticas de transporte, calidad del aire, contrataciones o registros geográficos.",
      "Cuando estos datos se publican correctamente, periodistas, investigadores, empresas y organizaciones civiles pueden analizarlos para detectar tendencias y desarrollar herramientas. Una aplicación de transporte, por ejemplo, puede utilizar información pública para mostrar recorridos y horarios.",
      "Publicar un archivo no es suficiente. Los datos deben presentarse en formatos reutilizables, mantenerse actualizados y acompañarse de explicaciones sobre su contenido. Un documento escaneado puede ser público, pero resulta difícil de analizar automáticamente.",
      "También deben protegerse los datos personales. La transparencia no justifica exponer información que permita identificar indebidamente a ciudadanos. Antes de publicar, es necesario evaluar riesgos y aplicar técnicas de anonimización cuando corresponda.",
      "Los datos abiertos pueden mejorar la rendición de cuentas, pero no producen automáticamente participación ciudadana. Su verdadero valor aparece cuando las personas cuentan con herramientas, conocimientos y espacios institucionales para convertir la información en decisiones y acciones concretas.",
    ],
  },
  {
    slug: "como-disenar-politicas-publicas-basadas-en-evidencia",
    category: "Políticas públicas",
    type: "Guide",
    title: "Cómo diseñar políticas públicas basadas en evidencia",
    excerpt: "Una política efectiva necesita objetivos medibles, información confiable y mecanismos para corregir el rumbo.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "5 min",
    body: [
      "Diseñar una política pública basada en evidencia no significa que las estadísticas decidan por sí solas. Significa utilizar información verificable para comprender el problema, comparar alternativas y evaluar resultados.",
      "El primer paso es definir con precisión qué se quiere cambiar. “Mejorar la educación” es un objetivo demasiado amplio. Reducir el abandono escolar en una región y dentro de un período determinado permite medir avances.",
      "Después deben investigarse las causas. Un mismo problema puede estar relacionado con transporte, ingresos, infraestructura, salud o calidad educativa. Aplicar una solución antes de entender esas variables puede desperdiciar recursos.",
      "Cuando sea posible, conviene probar la intervención a menor escala. Un programa piloto ayuda a identificar dificultades operativas antes de expandirlo. También es necesario establecer indicadores y recopilar información desde el inicio.",
      "La evaluación no debe utilizarse únicamente para justificar decisiones ya tomadas. Su función es determinar qué funciona, para quién funciona y bajo qué condiciones.",
      "Finalmente, los resultados deben comunicarse con transparencia. Reconocer que un programa no alcanzó sus objetivos puede resultar incómodo, pero permite aprender y redirigir los recursos hacia alternativas más efectivas.",
    ],
  },
  {
    slug: "brecha-digital-el-problema-no-termina-con-entregar-dispositivos",
    category: "Políticas públicas",
    type: "Analysis",
    title: "Brecha digital: el problema no termina con entregar dispositivos",
    excerpt: "El acceso tecnológico depende de equipos, conectividad, habilidades, soporte y posibilidades reales de uso.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "4 min",
    body: [
      "La brecha digital suele medirse según la cantidad de personas que poseen conexión a internet. Sin embargo, estar conectado no significa necesariamente poder estudiar, trabajar o realizar trámites en condiciones adecuadas.",
      "Una familia puede tener un teléfono móvil con datos limitados, pero no una computadora para redactar documentos o participar cómodamente en una clase virtual. También puede existir conectividad, pero con baja velocidad o interrupciones frecuentes.",
      "Las habilidades representan otra dimensión. Saber utilizar redes sociales no equivale a poder evaluar fuentes, proteger una cuenta, completar formularios o utilizar herramientas profesionales.",
      "Las políticas públicas deben considerar el mantenimiento y el acompañamiento. Entregar computadoras sin soporte técnico puede generar depósitos llenos de equipos inutilizados por fallas pequeñas. La formación docente y comunitaria es tan importante como la infraestructura.",
      "La accesibilidad para personas con discapacidad también debe incorporarse desde el diseño de plataformas y contenidos.",
      "Reducir la brecha digital exige una estrategia amplia: dispositivos apropiados, internet asequible, capacitación, servicios accesibles y espacios donde las personas puedan recibir ayuda. La inclusión no consiste solo en conectar usuarios, sino en permitirles participar plenamente.",
    ],
  },
  {
    slug: "participacion-ciudadana-digital-oportunidades-y-riesgos",
    category: "Políticas públicas",
    type: "Explainer",
    title: "Participación ciudadana digital: oportunidades y riesgos",
    excerpt: "Las plataformas digitales pueden acercar a la ciudadanía a las decisiones públicas, pero también excluir o distorsionar el debate.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "4 min",
    body: [
      "Las consultas en línea, los presupuestos participativos y las plataformas de propuestas permiten que más personas expresen opiniones sin asistir físicamente a una reunión.",
      "Estas herramientas pueden ampliar la participación, pero no garantizan que la muestra sea representativa. Los participantes más activos en internet no siempre reflejan la diversidad de una comunidad. También pueden producirse campañas coordinadas, múltiples cuentas o intentos de manipular los resultados.",
      "Para que el proceso sea confiable, deben explicarse las reglas: quién puede participar, cómo se verifican las identidades, qué información se recopila y de qué manera influirán los resultados en la decisión final.",
      "La moderación es otro punto crítico. Un espacio sin reglas puede llenarse de ataques personales o desinformación. Una moderación excesiva, en cambio, puede excluir críticas legítimas.",
      "La participación digital debería complementar, no reemplazar completamente, los canales presenciales. Reuniones comunitarias, encuestas telefónicas y asistencia en oficinas pueden incorporar voces que quedarían fuera de una plataforma.",
      "La tecnología puede mejorar la democracia cuando hace el proceso más accesible y transparente. Sin instituciones dispuestas a escuchar y responder, se convierte únicamente en una caja de comentarios sofisticada.",
      "# SECCIÓN 4: MEDIOS DIGITALES",
    ],
  },
  {
    slug: "como-verificar-una-noticia-antes-de-compartirla",
    category: "Medios digitales",
    type: "Guide",
    title: "Cómo verificar una noticia antes de compartirla",
    excerpt: "Cinco minutos de verificación pueden evitar que una publicación falsa llegue a cientos de personas.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "5 min",
    body: [
      "El primer paso para verificar una noticia es leerla completa. Los titulares están diseñados para llamar la atención y, en ocasiones, exageran o simplifican el contenido.",
      "Luego se debe identificar la fuente. Es importante revisar quién publica la información, si cuenta con autores identificables y si ofrece datos de contacto o una política de correcciones.",
      "La fecha también puede cambiar el significado. Fotografías y artículos antiguos suelen circular como si describieran acontecimientos actuales. Una búsqueda inversa de imágenes puede ayudar a encontrar el contexto original de una fotografía.",
      "Otra técnica consiste en localizar la información en medios independientes entre sí. Que muchos perfiles repitan una afirmación no significa que existan múltiples fuentes; todos podrían estar copiando la misma publicación inicial.",
      "Las declaraciones sorprendentes deberían rastrearse hasta documentos, videos completos, estadísticas o fuentes oficiales. Los fragmentos fuera de contexto pueden modificar el sentido de una conversación.",
      "Cuando no existe evidencia suficiente, la mejor decisión es no compartir. La velocidad favorece a la desinformación, mientras que la verificación necesita pausa. Ser el primero en publicar algo falso aporta menos valor que ser quien evita que siga circulando.",
    ],
  },
  {
    slug: "economia-de-la-atencion-por-que-las-plataformas-compiten-por-cada-segundo",
    category: "Medios digitales",
    type: "Analysis",
    title: "Economía de la atención: por qué las plataformas compiten por cada segundo",
    excerpt: "Notificaciones, desplazamiento infinito y recomendaciones personalizadas buscan mantener al usuario dentro de la pantalla.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "4 min",
    body: [
      "Muchas plataformas digitales ofrecen servicios sin cobrar directamente al usuario. Su modelo de negocio depende de publicidad, compras internas o suscripciones. En todos estos casos, mantener la atención aumenta las posibilidades de generar ingresos.",
      "Las notificaciones crean motivos para regresar. El desplazamiento infinito elimina los puntos naturales de pausa. Los sistemas de recomendación presentan contenido relacionado con los intereses del usuario para evitar que abandone la aplicación.",
      "Estas herramientas no son necesariamente negativas. Una buena recomendación puede ayudar a descubrir música, información o comunidades valiosas. El problema aparece cuando el diseño prioriza el tiempo de permanencia sobre el bienestar o la calidad del contenido.",
      "Las publicaciones capaces de provocar sorpresa, miedo o indignación suelen generar más interacción. Como consecuencia, los sistemas pueden amplificar mensajes extremos aunque no sean los más precisos.",
      "Los usuarios pueden recuperar parte del control desactivando notificaciones innecesarias, estableciendo límites y seleccionando conscientemente sus fuentes. Sin embargo, la responsabilidad no debería recaer únicamente en decisiones individuales.",
      "Comprender la economía de la atención permite observar las plataformas de manera diferente: no solo como herramientas que utilizamos, sino como sistemas que también intentan dirigir nuestro comportamiento.",
    ],
  },
  {
    slug: "crear-un-podcast-desde-cero-con-recursos-basicos",
    category: "Medios digitales",
    type: "Guide",
    title: "Crear un podcast desde cero con recursos básicos",
    excerpt: "Una buena idea, una estructura clara y un audio entendible importan más que comprar el equipo más caro.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "5 min",
    body: [
      "Antes de elegir un micrófono o una plataforma, es necesario definir el tema del podcast. Una propuesta clara ayuda a mantener una identidad reconocible y facilita que los oyentes comprendan qué pueden esperar de cada episodio.",
      "El siguiente paso es decidir el formato. Puede tratarse de entrevistas, conversaciones, noticias breves, historias narradas o episodios educativos. También conviene establecer una duración aproximada y una frecuencia de publicación realista.",
      "Para comenzar, un teléfono o una computadora con auriculares puede ser suficiente. Lo más importante es grabar en una habitación silenciosa, evitar superficies que produzcan eco y mantener una distancia constante del micrófono.",
      "La edición permite eliminar pausas largas, ruidos y errores. Sin embargo, editar demasiado puede hacer que la conversación pierda naturalidad. Una introducción breve, una despedida clara y un volumen uniforme suelen ser suficientes para los primeros episodios.",
      "Finalmente, el podcast necesita un título, una portada y una descripción que expliquen su propuesta. La constancia y la mejora progresiva suelen ser más importantes que alcanzar una producción perfecta desde el primer día.",
    ],
  },
  {
    slug: "algoritmos-de-recomendacion-como-deciden-que-contenido-mostrarte",
    category: "Medios digitales",
    type: "Explainer",
    title: "Algoritmos de recomendación: cómo deciden qué contenido mostrarte",
    excerpt: "Las plataformas analizan señales de comportamiento para ordenar videos, publicaciones, noticias y productos.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "4 min",
    body: [
      "Cada minuto se publican más contenidos de los que una persona podría consumir durante toda su vida. Para organizar esa cantidad de información, las plataformas utilizan algoritmos de recomendación.",
      "Estos sistemas analizan señales como los contenidos vistos, el tiempo de reproducción, los clics, los comentarios y las cuentas seguidas. A partir de esos datos intentan predecir qué publicación podría resultar más interesante para cada usuario.",
      "Una recomendación no representa necesariamente lo mejor, lo más verdadero o lo más importante. Muchas veces representa aquello que tiene mayor probabilidad de mantener al usuario activo dentro de la plataforma.",
      "El sistema también puede crear ciclos de retroalimentación. Si una persona observa varios videos sobre un tema, recibirá más contenido similar. Con el tiempo, esto puede reducir la diversidad de perspectivas disponibles.",
      "Los algoritmos son útiles para descubrir información, pero deben utilizarse con conciencia. Buscar activamente nuevas fuentes, revisar el historial y seguir cuentas con miradas diferentes puede ampliar el contenido recibido.",
      "La personalización facilita la navegación, pero también influye silenciosamente en la manera en que comprendemos el mundo.",
    ],
  },
  {
    slug: "periodismo-movil-producir-contenidos-profesionales-desde-un-telefono",
    category: "Medios digitales",
    type: "Guide",
    title: "Periodismo móvil: producir contenidos profesionales desde un teléfono",
    excerpt: "Un teléfono inteligente puede servir para grabar, editar y publicar historias cuando se utiliza con planificación.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "5 min",
    body: [
      "Los teléfonos inteligentes han transformado la producción periodística. Con un solo dispositivo es posible grabar entrevistas, tomar fotografías, transmitir en directo, escribir notas y publicar contenidos.",
      "Antes de grabar, se debe limpiar la lente, comprobar el almacenamiento disponible y activar el modo avión para evitar interrupciones. También conviene grabar horizontalmente o verticalmente según la plataforma de publicación.",
      "El audio suele ser más importante que la calidad visual. Una imagen aceptable con sonido claro puede comprenderse, mientras que un video excelente con audio defectuoso pierde gran parte de su valor.",
      "La estabilidad puede mejorar apoyando el teléfono sobre una superficie o utilizando un trípode pequeño. También se recomienda grabar planos generales, medios y detalles para facilitar la edición.",
      "La velocidad no debe eliminar la verificación. Antes de publicar, es necesario confirmar nombres, lugares, fechas y declaraciones. Además, se debe solicitar consentimiento cuando la situación lo requiera.",
      "El periodismo móvil reduce barreras técnicas, pero sigue dependiendo de los principios tradicionales del oficio: precisión, contexto, ética y claridad.",
    ],
  },
  {
    slug: "how-small-ai-models-are-changing-on-device-computing",
    category: "Artificial Intelligence",
    type: "Explainer",
    title: "How small AI models are changing on-device computing",
    excerpt: "Smaller language and vision models are moving useful AI features from remote data centers onto phones, laptops and embedded devices.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-10",
    readTime: "7 min read",
    body: [
      "Artificial intelligence has often been presented as a service that lives somewhere else. A user sends a request to a remote data center, powerful accelerators process it, and a response returns over the internet. That model remains important, but a second approach is becoming more practical: running compact models directly on the device in a person’s hand, car, workplace or home.",
      "On-device models do not need to match the broad capability of the largest cloud systems to be useful. A model designed for transcription, summarization, image classification or command recognition can be optimized for one task and run with far fewer parameters. This specialization reduces memory use, power consumption and latency.",
      "Privacy is one of the strongest arguments for local processing. When audio, images or documents can be analyzed without leaving the device, the amount of sensitive information sent to a third party is reduced. Local processing does not automatically make a product private, because applications may still collect metadata or upload results, but it gives developers a stronger technical foundation for data minimization.",
      "Reliability is another advantage. A local feature can continue working when a connection is slow, expensive or unavailable. That matters in transportation, industrial equipment, emergency response and regions with inconsistent connectivity. It also removes part of the delay created by a network round trip.",
      "The trade-offs are real. Smaller models can produce weaker results, and mobile hardware has strict thermal and battery limits. Developers must decide which tasks should remain local, which require cloud processing and how the two systems should cooperate. The best products will probably use a hybrid design rather than choosing only one side.",
      "For users, the change may be less visible than the technology behind it. Instead of opening a separate chatbot, people may encounter AI as faster search, better accessibility, smarter camera tools and software that adapts to context while keeping more information on the device.",
    ],
  },
  {
    slug: "what-ai-benchmarks-can-and-cannot-prove",
    category: "Artificial Intelligence",
    type: "Analysis",
    title: "What AI benchmarks can — and cannot — prove",
    excerpt: "Benchmark scores are useful signals, but they are not a complete measure of whether an AI system is reliable, safe or useful.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-09",
    readTime: "8 min read",
    body: [
      "AI model releases are frequently summarized by a table of benchmark scores. The appeal is obvious: a single number makes comparison simple. Yet the same simplicity can hide important differences in how a model was tested, what the benchmark measures and whether the result reflects real-world use.",
      "A benchmark is most useful when its task is clearly defined and its examples remain separate from the model’s training data. If a model has seen identical or closely related questions during training, a high score may reflect memorization rather than general reasoning. This is difficult to rule out completely for models trained on large collections of public text.",
      "Prompting also changes results. A model may receive a carefully engineered instruction, multiple examples or repeated attempts before its best answer is counted. Those conditions can be appropriate for research, but they should be disclosed. A score produced under heavy optimization should not be presented as though it came from an ordinary first attempt.",
      "Different benchmarks measure different abilities. Coding tests may emphasize short functions, while production engineering requires maintenance, security, architecture and collaboration. Knowledge tests may reward factual recall but say little about whether a model recognizes uncertainty. A system can perform well on a narrow test and still fail in a workflow that matters to users.",
      "Independent evaluation helps because it reduces the incentive to select only favorable tests. Human review also remains necessary for qualities that are hard to compress into one metric, including clarity, harmful errors, consistency and the ability to follow domain-specific constraints.",
      "The responsible way to read benchmark claims is to treat them as evidence, not as a final verdict. Ask what was measured, whether the test was public, how many attempts were allowed and whether another organization reproduced the result. A model should ultimately be judged against the task it is expected to perform.",
    ],
  },
  {
    slug: "passkeys-explained-beyond-the-password",
    category: "Cybersecurity",
    type: "Guide",
    title: "Passkeys explained: what changes when the password disappears",
    excerpt: "Passkeys replace shared secrets with cryptographic credentials, reducing phishing risk while creating new recovery questions.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-08",
    readTime: "7 min read",
    body: [
      "Passwords work by asking a user and a service to share the same secret. That design creates a permanent target: the secret can be guessed, reused, stolen in a breach or captured by a convincing phishing page. Passkeys use a different model based on public-key cryptography.",
      "When a passkey is created, the device stores a private key and the service receives a related public key. The private key is not sent to the website during login. Instead, the device proves that it possesses the key by signing a challenge. A fake website cannot simply collect the credential and replay it elsewhere.",
      "Passkeys are usually unlocked with the same method used to unlock a device, such as a fingerprint, facial recognition or local PIN. The biometric data normally stays on the device; it is used to authorize access to the private key rather than being transmitted to every service.",
      "The largest practical challenge is account recovery. People lose phones, replace computers and forget which account synchronized a credential. Platforms can sync passkeys across trusted devices, while some services support additional recovery methods. Each option must balance convenience against the risk that an attacker abuses the recovery process.",
      "Organizations also need to consider shared devices, employee departures and regulated environments. A consumer-friendly synchronization system may not match the controls required by an enterprise. Device management and hardware security keys remain important for higher-risk accounts.",
      "Passkeys are not a universal cure for account compromise, but they remove several common password failures at once. The transition will be gradual because services must support older users and devices, yet the underlying security improvement is substantial.",
    ],
  },
  {
    slug: "zero-trust-is-an-architecture-not-a-product",
    category: "Cybersecurity",
    type: "Analysis",
    title: "Zero trust is an architecture, not a product",
    excerpt: "The phrase is frequently used in marketing, but its practical meaning is continuous verification and limited access.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-07",
    readTime: "6 min read",
    body: [
      "Zero trust is often advertised as something an organization can purchase. In practice, it is a way of designing access decisions. The central idea is that being inside a corporate network should not automatically make a user, device or application trustworthy.",
      "Traditional networks relied heavily on a protected perimeter. Once an employee connected through an office network or virtual private network, many internal resources became reachable. That model became harder to defend as cloud services, remote work and third-party integrations expanded.",
      "A zero-trust design evaluates several signals before granting access: identity, device health, location, requested resource and current risk. Access should be limited to what is necessary for the task, and a decision may be reevaluated when circumstances change.",
      "This requires more than an identity provider. Organizations need accurate inventories, strong authentication, segmented systems, useful logs and a process for removing unnecessary privileges. Weak asset management can undermine an otherwise sophisticated access platform.",
      "Implementation should begin with high-value resources and measurable goals. Replacing every system at once is expensive and risky. A phased approach can reduce standing privileges, require stronger authentication and isolate sensitive applications without interrupting the entire organization.",
      "The term becomes useful when it describes concrete controls. It becomes empty when attached to a product without explaining which trust assumptions are being removed.",
    ],
  },
  {
    slug: "why-software-supply-chain-security-matters",
    category: "Cybersecurity",
    type: "Explainer",
    title: "Why software supply-chain security matters",
    excerpt: "Modern applications depend on thousands of external components, making the build process part of the security boundary.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-06",
    readTime: "7 min read",
    body: [
      "A modern application is rarely written from the first line to the last by one team. It depends on operating systems, package managers, open-source libraries, hosted build services and deployment platforms. This accelerates development, but every dependency becomes part of the software supply chain.",
      "An attacker does not always need to break the final application directly. Compromising a popular package, maintainer account or build system can distribute malicious code through trusted channels. The victim may install the update because it appears to come from a legitimate source.",
      "Dependency scanning helps identify known vulnerabilities, but it is only one layer. Teams should also control who can publish releases, require strong authentication, review unexpected ownership changes and limit the permissions available to build systems.",
      "Reproducible and signed builds improve confidence by making it easier to verify that an artifact corresponds to reviewed source code. A software bill of materials can document included components, although a list alone does not prove that each component is safe.",
      "Reducing dependency count is an underrated defense. Every package adds maintenance and trust obligations. A small utility may not justify introducing a large dependency tree, especially in security-sensitive software.",
      "Supply-chain security is ultimately about preserving evidence from source to deployment. Organizations need to know what entered a build, who approved it and whether the artifact changed before reaching users.",
    ],
  },
  {
    slug: "why-typescript-became-a-default-for-large-web-projects",
    category: "Programming",
    type: "Analysis",
    title: "Why TypeScript became a default for large web projects",
    excerpt: "TypeScript does not eliminate JavaScript errors, but it gives teams a shared language for describing data and interfaces.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-05",
    readTime: "6 min read",
    body: [
      "JavaScript’s flexibility helped it become the language of the web. The same flexibility can make large applications difficult to change safely. A value expected to be a string may become undefined, an API response may change shape, or a function may be called with an invalid argument.",
      "TypeScript adds a static type system on top of JavaScript. The types are checked during development and removed when the code is compiled. Browsers still run JavaScript, but developers receive earlier feedback about many incompatible assumptions.",
      "The main benefit is not that every bug disappears. Types cannot prove that a business rule is correct or that a network request will succeed. Their value is communication: an interface records what a function expects, what an object contains and which cases must be handled.",
      "Types also improve tooling. Editors can offer more accurate completion, navigation and automated refactoring. These features matter when a codebase is maintained by many people over several years.",
      "There is a cost. Complex type definitions can become harder to understand than the code they describe, and teams can waste time chasing theoretical precision. Good TypeScript code uses the type system to clarify important boundaries rather than turning every expression into a puzzle.",
      "The language became popular because it supports gradual adoption. A project can begin with ordinary JavaScript and add stricter checks over time. That allows teams to improve safety without rewriting an entire application.",
    ],
  },
  {
    slug: "how-to-evaluate-an-open-source-dependency",
    category: "Programming",
    type: "Guide",
    title: "How to evaluate an open-source dependency before adding it",
    excerpt: "A package saves time only when its maintenance, security and long-term cost are understood.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-04",
    readTime: "7 min read",
    body: [
      "Installing a package can turn hours of work into a one-line command. The immediate convenience is visible; the future responsibility is not. Every dependency introduces code, update decisions and trust in people outside the project.",
      "Begin by asking whether the dependency is necessary. A small and stable function may be simpler to implement locally. A complex parser, cryptographic library or framework is different: using a well-reviewed project is usually safer than creating a private replacement.",
      "Examine maintenance activity, but do not confuse frequent commits with quality. Mature software may change slowly. More useful signals include clear release notes, responsive handling of security reports, documented support policy and multiple trusted maintainers.",
      "Review the dependency tree. A tiny package can pull in dozens of transitive packages, each with its own maintainers and risks. Lockfiles improve repeatability, but they do not remove the need to understand updates.",
      "Check the license before adoption. A technically excellent library may impose conditions that do not fit the project’s distribution model. Legal review becomes more important for commercial software and embedded products.",
      "Finally, define an exit strategy. Know which parts of the application depend on the package and avoid spreading library-specific assumptions everywhere. A dependency is easier to replace when it sits behind a clear internal interface.",
    ],
  },
  {
    slug: "why-web-performance-is-an-accessibility-issue",
    category: "Programming",
    type: "Explainer",
    title: "Why web performance is also an accessibility issue",
    excerpt: "Slow pages do more than frustrate users; they can exclude people with limited devices, data plans or network access.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-03",
    readTime: "6 min read",
    body: [
      "Web performance is often discussed as a conversion or search-ranking concern. It is also an accessibility issue. A page that requires a powerful phone, large data transfer or stable broadband may be effectively unavailable to many users.",
      "Heavy JavaScript can delay interaction even after visible content appears. On lower-cost hardware, parsing and executing code may take longer than downloading it. Reducing unnecessary client-side work can improve the experience without changing the visual design.",
      "Images are another common source of waste. Correct dimensions, modern formats and responsive delivery reduce bandwidth while preserving quality. Decorative media should not block access to essential information.",
      "Performance also affects assistive technology. Constant layout shifts, delayed controls and interface elements that appear after focus has moved can make navigation confusing. Stable structure benefits keyboard and screen-reader users as well as everyone else.",
      "A useful performance process measures real devices and networks, not only a developer laptop. Automated tests are valuable, but field data reveals how the site behaves for actual visitors.",
      "The fastest page is not automatically the most accessible, and accessibility requires much more than speed. Still, performance is part of inclusive design because it determines who can successfully reach and use the content.",
    ],
  },
  {
    slug: "what-data-centers-mean-for-local-power-grids",
    category: "Technology",
    type: "Analysis",
    title: "What data centers mean for local power grids",
    excerpt: "The growth of cloud and AI infrastructure is turning electricity planning into a central technology policy question.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-02",
    readTime: "8 min read",
    body: [
      "Data centers convert electricity into computation, storage and network services. As demand for cloud platforms and artificial intelligence grows, the size and concentration of new facilities are creating difficult questions for local power systems.",
      "A large project can require a connection comparable to other major industrial loads. Utilities must determine whether generation, transmission and substations can support the demand without reducing reliability for existing customers.",
      "Timing is a major challenge. A technology company may want capacity within a few years, while new transmission lines and power plants can take much longer to approve and construct. This mismatch can produce connection queues, higher costs or temporary reliance on existing fossil generation.",
      "Data centers can also provide benefits. Long-term contracts may support new energy projects, and flexible computing workloads could potentially shift some demand away from stressed periods. Those benefits depend on transparent agreements and technical capability rather than broad sustainability claims.",
      "Water use deserves separate scrutiny because some cooling systems consume significant volumes, especially in hot climates. Reporting should distinguish water withdrawn, water consumed and the local availability of the resource.",
      "Communities need clear information about jobs, tax revenue, infrastructure costs and environmental impact. The policy question is not simply whether data centers are good or bad; it is who pays for upgrades, who receives the benefits and what conditions protect the wider public.",
    ],
  },
  {
    slug: "the-real-tradeoffs-of-satellite-internet",
    category: "Technology",
    type: "Explainer",
    title: "The real trade-offs of satellite internet",
    excerpt: "Low-Earth-orbit systems can expand coverage, but capacity, cost and orbital management still matter.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-01",
    readTime: "7 min read",
    body: [
      "Satellite internet can reach places where laying fiber or cable is too expensive. Newer constellations in low Earth orbit reduce the delay associated with traditional geostationary satellites because signals travel a much shorter distance.",
      "Lower latency makes video calls, cloud applications and interactive services more practical. For rural homes, ships, aircraft and disaster recovery, the technology can provide connectivity where terrestrial networks are unavailable.",
      "Coverage does not mean unlimited capacity. Many users in the same area share satellite and ground-station resources. Performance can change as adoption grows, weather interferes or the network shifts traffic between satellites.",
      "Equipment and subscription costs may remain high for households with limited income. A service can be technically available while still being economically inaccessible. Public connectivity programs should evaluate affordability as well as geographic coverage.",
      "Large constellations also create concerns about space debris, collision avoidance and effects on astronomical observations. Operators and regulators need reliable coordination because orbital space is a shared environment.",
      "Satellite networks are best understood as one layer of communications infrastructure. They can complement fiber, mobile networks and fixed wireless systems, but they do not remove the need for investment in terrestrial connectivity.",
    ],
  },
  {
    slug: "how-digital-public-services-can-earn-trust",
    category: "Politics",
    type: "Analysis",
    title: "How digital public services can earn public trust",
    excerpt: "A government website is not successful merely because a paper form became an online form.",
    author: "Benjamin Blanco",
    publishedAt: "2026-06-30",
    readTime: "7 min read",
    body: [
      "Governments increasingly move applications, payments and records online. The change can reduce waiting time and administrative cost, but a poorly designed digital service can simply move bureaucracy from a counter to a screen.",
      "A trustworthy service begins with a clear user need. People should not have to understand the internal structure of an agency to complete a task. Forms should request only necessary information and explain why sensitive data is collected.",
      "Accessibility is a legal and practical requirement. Public services must work with keyboards, screen readers, older devices and slow connections. An online-only process can exclude people unless assisted and offline alternatives remain available.",
      "Security should be proportional to risk. Strong identity verification may be necessary for tax or health records, but excessive checks can create barriers. Agencies need a way to recover accounts without making recovery the weakest point in the system.",
      "Transparency matters when automated systems influence eligibility or enforcement. People should know when automation is used, what information affected a decision and how to appeal an error.",
      "The strongest digital services are maintained as long-term public infrastructure. Launching a polished website is easier than funding updates, support, security testing and policy changes over many years.",
    ],
  },
  {
    slug: "why-ai-regulation-keeps-returning-to-transparency",
    category: "Politics",
    type: "Explainer",
    title: "Why AI regulation keeps returning to transparency",
    excerpt: "Lawmakers disagree about many AI rules, but repeatedly focus on disclosure, documentation and accountability.",
    author: "Benjamin Blanco",
    publishedAt: "2026-06-29",
    readTime: "7 min read",
    body: [
      "Artificial intelligence regulation covers very different systems, from recommendation tools to software used in employment, credit and public services. A single technical rule is unlikely to fit every use, which is why many policy proposals begin with transparency.",
      "Transparency can mean several things. A user may need to know that they are interacting with an automated system. A regulator may require documentation about training data, testing and known limitations. An affected person may need an explanation of how a decision was reached.",
      "Disclosure alone is not enough. A company can publish a long technical report that few people can understand while leaving the practical risk unchanged. Information must be relevant to the audience and connected to a way of correcting harm.",
      "Risk-based approaches try to apply stronger obligations to systems with greater consequences. The difficulty is defining risk before deployment and updating the assessment when a model is used in a new context.",
      "Independent audits can add credibility, but audit quality depends on access, standards and incentives. A narrow test may miss discrimination, security failures or misuse that appears only in real operations.",
      "Transparency is attractive because it supports many other forms of oversight. It does not decide what uses should be prohibited, but it creates evidence needed for enforcement, research and public debate.",
    ],
  },
  {
    slug: "why-semiconductor-policy-is-about-more-than-factories",
    category: "World",
    type: "Analysis",
    title: "Why semiconductor policy is about more than building factories",
    excerpt: "Chip resilience depends on equipment, materials, skills and international coordination as much as fabrication capacity.",
    author: "Benjamin Blanco",
    publishedAt: "2026-06-28",
    readTime: "8 min read",
    body: [
      "Governments increasingly treat semiconductors as strategic infrastructure. The visible response is often a subsidy for a new fabrication plant, but the supply chain extends far beyond the building where chips are manufactured.",
      "Advanced production depends on specialized equipment, chemicals, design software, packaging and highly trained workers. A country can expand fabrication capacity while remaining dependent on foreign suppliers for critical stages.",
      "Workforce development takes time. Engineers, technicians and construction specialists cannot be created by a single grant. Training programs need stable demand and cooperation between schools, manufacturers and local communities.",
      "Energy, water and transport infrastructure also shape where facilities can operate. Semiconductor plants require reliable utilities and extremely controlled production environments. Public incentives should account for these supporting costs.",
      "International cooperation remains necessary because complete self-sufficiency would be expensive and inefficient. Resilience is more realistic when it means diversified suppliers, shared standards and the ability to recover from disruption.",
      "Industrial policy should therefore be evaluated by the network it creates, not only by the number of announced factories. The most important results may appear in skills, supplier development and long-term research capacity.",
    ],
  },
  {
    slug: "how-to-read-claims-about-green-technology",
    category: "World",
    type: "Guide",
    title: "How to read claims about green technology",
    excerpt: "Environmental claims become more useful when readers separate operational efficiency from full life-cycle impact.",
    author: "Benjamin Blanco",
    publishedAt: "2026-06-27",
    readTime: "6 min read",
    body: [
      "A product described as green may use less energy during operation, contain recycled material or support a lower-carbon system. These are different claims, and each requires different evidence.",
      "Operational efficiency is often easiest to measure. A new device may consume less electricity than an older model. But manufacturing emissions, mining, transport and disposal can still represent a large share of its total impact.",
      "Life-cycle analysis attempts to include these stages. The result depends on assumptions about product lifetime, electricity sources and recycling. Two studies can reach different conclusions without either being fraudulent if their boundaries differ.",
      "Comparisons should use the same functional unit. A battery, vehicle or data center must be evaluated by the service it provides, not only by its weight or headline energy use.",
      "Offsets deserve particular caution. A company may report a net-zero activity while continuing to emit and purchasing credits elsewhere. Readers should ask which emissions were reduced directly and which were balanced through another project.",
      "The most credible environmental claim states its scope, method and limitations. Precision is more informative than a broad label that suggests an entire product has no impact.",
    ],
  },
  {
    slug: "a-practical-guide-to-verifying-breaking-news",
    category: "Media Literacy",
    type: "Guide",
    title: "A practical guide to verifying breaking news online",
    excerpt: "The first version of a major event is often incomplete. A few simple checks can prevent false claims from spreading.",
    author: "Benjamin Blanco",
    publishedAt: "2026-06-26",
    readTime: "7 min read",
    body: [
      "Breaking news creates pressure to understand an event before reliable information is available. Images, short videos and anonymous claims move quickly because they appear to offer immediate certainty.",
      "Start with the original source. A screenshot of a post can remove context or alter the account name. Open the underlying link, check the publication time and determine whether the account has a history connected to the event.",
      "Location and timing can sometimes be verified through visible landmarks, weather, shadows or signs. Reverse-image search may reveal that an image came from an older event in another country.",
      "Look for independent confirmation. Ten accounts repeating the same claim do not represent ten sources if they all rely on one unverified post. Strong confirmation comes from separate observers, official records or reporters who explain what they verified.",
      "Language is a useful signal. Reliable early reporting often includes uncertainty: officials have not confirmed, the cause remains unknown, or the number may change. Absolute confidence without evidence should increase skepticism.",
      "Waiting is a verification tool. Sharing a claim five minutes later rarely causes harm, while amplifying a false accusation can. The goal is not to distrust everything; it is to match confidence to the quality of available evidence.",
    ],
  }
  ,{
    slug: "inteligencia-artificial-generativa-que-puede-hacer-y-donde-se-equivoca",
    category: "Inteligencia artificial y ciberseguridad",
    type: "Explainer",
    title: "Inteligencia artificial generativa: qué puede hacer y dónde se equivoca",
    excerpt: "Los sistemas generativos pueden producir contenido convincente, pero no comprenden ni verifican la información como una persona.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "5 min read",
    body: [
      "La inteligencia artificial generativa puede crear textos, imágenes, audio, video y código a partir de instrucciones. Estos sistemas aprenden patrones presentes en enormes cantidades de datos y los utilizan para producir nuevos resultados.",
      "Su capacidad para escribir respuestas fluidas puede generar la impresión de que comprenden completamente lo que dicen. Sin embargo, un modelo generativo calcula qué elementos tienen mayor probabilidad de aparecer a continuación. No posee automáticamente acceso a la verdad ni garantiza que sus respuestas sean correctas.",
      "Por esta razón, puede inventar nombres, fechas, citas o datos cuando no dispone de suficiente información. Este fenómeno suele conocerse como alucinación.",
      "La tecnología resulta útil para generar ideas, resumir borradores, explicar conceptos, crear prototipos y acelerar tareas repetitivas. Aun así, sus resultados deben revisarse, especialmente en áreas como salud, educación, derecho o finanzas.",
      "También es importante evitar compartir información privada o confidencial sin conocer cómo será procesada.",
      "La inteligencia artificial generativa funciona mejor como una herramienta de apoyo. Puede aumentar la productividad, pero la responsabilidad de verificar, decidir y asumir las consecuencias continúa perteneciendo a las personas.",
    ],
  },
  {
    slug: "contrasenas-seguras-por-que-la-longitud-importa-mas-que-la-complejidad-extrema",
    category: "Inteligencia artificial y ciberseguridad",
    type: "Guide",
    title: "Contraseñas seguras: por qué la longitud importa más que la complejidad extrema",
    excerpt: "Una contraseña larga y única suele ofrecer mayor protección que una combinación corta llena de símbolos difíciles de recordar.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "4 min read",
    body: [
      "Durante años se recomendó crear contraseñas cortas con mayúsculas, números y símbolos. El resultado suele ser una combinación difícil de recordar, pero relativamente predecible.",
      "Una alternativa consiste en utilizar frases largas formadas por varias palabras que no tengan una relación evidente. La longitud aumenta considerablemente la cantidad de combinaciones que un atacante tendría que probar.",
      "Cada cuenta debe tener una contraseña diferente. Cuando una plataforma sufre una filtración, los atacantes suelen probar las credenciales robadas en otros servicios. Reutilizar una contraseña puede permitir el acceso a varias cuentas.",
      "Los gestores de contraseñas facilitan esta tarea. Estas herramientas generan y almacenan claves únicas, mientras el usuario solo necesita recordar una contraseña principal sólida.",
      "La autenticación en dos pasos agrega una barrera adicional. Incluso si alguien obtiene la contraseña, necesitará otro factor para ingresar.",
      "La seguridad perfecta no existe, pero combinar contraseñas largas, claves únicas y autenticación adicional reduce considerablemente el riesgo de acceso no autorizado.",
    ],
  },
  {
    slug: "phishing-como-reconocer-mensajes-disenados-para-robar-informacion",
    category: "Inteligencia artificial y ciberseguridad",
    type: "Guide",
    title: "Phishing: cómo reconocer mensajes diseñados para robar información",
    excerpt: "Los ataques de phishing utilizan urgencia, miedo o premios falsos para lograr que una persona entregue sus credenciales.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "5 min read",
    body: [
      "El phishing es una técnica de engaño que intenta convencer a una persona para que entregue contraseñas, datos bancarios o códigos de verificación. Puede llegar mediante correo electrónico, mensajes de texto, redes sociales o llamadas.",
      "Una señal común es la urgencia. El mensaje puede afirmar que una cuenta será cerrada, que existe una deuda o que se detectó una actividad sospechosa. La presión busca evitar que el usuario analice la situación con calma.",
      "También deben revisarse el remitente y los enlaces. Una dirección puede parecer legítima a primera vista, pero contener letras adicionales o un dominio diferente. En lugar de abrir el enlace recibido, es más seguro ingresar manualmente a la aplicación o al sitio oficial.",
      "Ninguna organización confiable debería solicitar una contraseña completa o un código de autenticación mediante un mensaje inesperado.",
      "Cuando existe una duda, conviene contactar a la institución utilizando un canal conocido. No se debe responder directamente al posible atacante.",
      "El phishing funciona porque aprovecha emociones humanas, no porque requiera conocimientos técnicos avanzados. La mejor defensa es detenerse, verificar y no actuar bajo presión.",
    ],
  },
  {
    slug: "sesgos-en-inteligencia-artificial-cuando-los-datos-reproducen-desigualdades",
    category: "Inteligencia artificial y ciberseguridad",
    type: "Analysis",
    title: "Sesgos en inteligencia artificial: cuando los datos reproducen desigualdades",
    excerpt: "Un sistema automatizado puede producir decisiones injustas aunque nadie haya programado explícitamente una regla discriminatoria.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "5 min read",
    body: [
      "Los sistemas de inteligencia artificial aprenden a partir de datos. Cuando esos datos reflejan desigualdades históricas, errores o grupos poco representados, el modelo puede repetir esos patrones.",
      "Por ejemplo, un sistema utilizado para seleccionar candidatos podría aprender de contrataciones anteriores. Si las decisiones históricas favorecieron sistemáticamente a ciertos perfiles, el modelo podría interpretar esa tendencia como una señal de éxito.",
      "Los sesgos también pueden aparecer durante el diseño. La elección de variables, objetivos y métricas influye directamente en el comportamiento del sistema. Optimizar únicamente la precisión general puede ocultar errores frecuentes sobre grupos minoritarios.",
      "Reducir estos problemas requiere analizar la calidad de los datos, probar el sistema con grupos diversos y permitir auditorías independientes. También es importante ofrecer mecanismos para apelar decisiones automatizadas.",
      "La supervisión humana por sí sola no resuelve el problema. Las personas también poseen sesgos y pueden confiar demasiado en una recomendación producida por una computadora.",
      "La inteligencia artificial no es neutral simplemente por estar basada en matemáticas. Cada sistema refleja decisiones humanas sobre qué datos utilizar, qué objetivos perseguir y qué errores se consideran aceptables.",
    ],
  },
  {
    slug: "copias-de-seguridad-la-estrategia-sencilla-que-puede-salvar-todos-tus-archivos",
    category: "Inteligencia artificial y ciberseguridad",
    type: "Guide",
    title: "Copias de seguridad: la estrategia sencilla que puede salvar todos tus archivos",
    excerpt: "Una copia de seguridad bien planificada protege frente a fallas, robos, errores humanos y ataques de ransomware.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-14",
    readTime: "4 min read",
    body: [
      "Una copia de seguridad es una versión adicional de la información que puede recuperarse cuando los archivos originales se pierden, dañan o cifran.",
      "Guardar todos los datos en un solo dispositivo no constituye una copia de seguridad. Si ese equipo se rompe, es robado o sufre un ataque, toda la información puede desaparecer al mismo tiempo.",
      "Una estrategia conocida es la regla 3-2-1: mantener tres copias de la información, utilizar dos tipos de almacenamiento diferentes y conservar una copia en otra ubicación.",
      "Por ejemplo, los archivos pueden permanecer en la computadora, copiarse a un disco externo y almacenarse además en un servicio en la nube. El disco debería desconectarse después de completar la copia para reducir su exposición frente a ataques.",
      "Las copias deben ejecutarse periódicamente y probarse. Un respaldo que nunca fue verificado podría estar incompleto o dañado.",
      "También es conveniente proteger los archivos sensibles mediante cifrado y contraseñas seguras. Una copia de seguridad no debería convertirse en una nueva fuente de exposición.",
      "Preparar un sistema de respaldo requiere poco tiempo en comparación con el esfuerzo necesario para reconstruir años de documentos, fotografías y proyectos perdidos.",
    ],
  }

];

const sections = ["Artificial Intelligence", "Cybersecurity", "Programming", "Technology", "Politics", "World", "Media Literacy"];

function articlePath(article: Article) {
  return `/article/${article.slug}`;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00Z`));
}

function Header() {
  return (
    <>
      <div className="utility">
        <div className="shell utility-inner">
          <span>INDEPENDENT EXPLAINERS AND ANALYSIS</span>
          <span>NEXORA NEWS</span>
        </div>
      </div>
      <header className="header">
        <div className="shell header-inner">
          <a className="brand" href="/">
            <span className="mark">N</span>
            <span>NEXORA <b>NEWS</b></span>
          </a>
          <nav aria-label="Main navigation">
            <a href="/">Home</a>
            <a href="/latest">Latest</a>
            <a href="/about">About</a>
            <a href="/editorial-policy">Editorial Policy</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div>
          <a className="brand footer-brand" href="/">
            <span className="mark">N</span>
            <span>NEXORA <b>NEWS</b></span>
          </a>
          <p>
            Original explainers and analysis about technology, security,
            software, policy and the digital world.
          </p>
        </div>
        <div>
          <h3>Company</h3>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/editorial-policy">Editorial Policy</a>
          <a href="/corrections-policy">Corrections</a>
        </div>
        <div>
          <h3>Legal</h3>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/cookies">Cookies</a>
          <a href="/dmca">DMCA</a>
        </div>
      </div>
      <div className="shell copyright">
        © {new Date().getFullYear()} Nexora News. All rights reserved.
      </div>
    </footer>
  );
}

function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article className={featured ? "card featured" : "card"}>
      <div className="meta">
        <span>{article.category}</span>
        <span>{article.type}</span>
      </div>
      <h2><a href={articlePath(article)}>{article.title}</a></h2>
      <p>{article.excerpt}</p>
      <div className="byline">
        <span>By {article.author}</span>
        <span>{formatDate(article.publishedAt)} · {article.readTime}</span>
      </div>
      <a className="read" href={articlePath(article)}>Read full article →</a>
    </article>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell">
          <p className="kicker">NEXORA ORIGINALS</p>
          <h1>Understand the systems shaping the digital world.</h1>
          <p className="deck">
            Original explainers and analysis written to add context—not copied
            headlines, invented metrics or automatic summaries.
          </p>
        </div>
      </section>

      <main className="shell home">
        <ArticleCard article={articles[0]} featured />
        <section className="grid" aria-label="Original articles">
          {articles.slice(1).map((article) => (
            <ArticleCard article={article} key={article.slug} />
          ))}
        </section>
      </main>
    </>
  );
}

function ArticlePage({ article }: { article: Article }) {
  return (
    <main>
      <article className="article-page">
        <header className="article-header shell">
          <div className="meta">
            <span>{article.category}</span>
            <span>{article.type}</span>
          </div>
          <h1>{article.title}</h1>
          <p className="standfirst">{article.excerpt}</p>
          <div className="article-byline">
            <strong>By {article.author}</strong>
            <span>Published {formatDate(article.publishedAt)}</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        <div className="article-body">
          {article.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <aside className="editor-note">
            <strong>Editorial note</strong>
            <p>
              This article is an original Nexora News explainer. It is intended
              for general information and does not replace professional legal,
              financial or cybersecurity advice.
            </p>
          </aside>
        </div>
      </article>

      <section className="shell related">
        <p className="kicker">KEEP READING</p>
        <h2>Related explainers</h2>
        <div className="grid">
          {articles
            .filter((candidate) => candidate.slug !== article.slug)
            .slice(0, 3)
            .map((candidate) => (
              <ArticleCard article={candidate} key={candidate.slug} />
            ))}
        </div>
      </section>
    </main>
  );
}

function StaticPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="shell static-page">
      <p className="kicker">NEXORA NEWS</p>
      <h1>{title}</h1>
      <div className="static-copy">{children}</div>
    </main>
  );
}

const staticPages: Record<string, { title: string; content: React.ReactNode }> = {
  "/about": {
    title: "About Nexora News",
    content: (
      <>
        <p>Nexora News publishes original explainers and analysis about technology, cybersecurity, programming, public policy and digital media.</p>
        <p>Articles are written to clarify complex subjects. We do not present automated summaries or third-party reporting as original journalism.</p>
      </>
    ),
  },
  "/contact": {
    title: "Contact",
    content: <p>Email: <a href="mailto:blancobenjamin353@gmail.com">blancobenjamin353@gmail.com</a></p>,
  },
  "/editorial-policy": {
    title: "Editorial Policy",
    content: (
      <>
        <p>We aim to publish accurate, clearly labeled and original material. Analysis, guides and explainers are identified by type.</p>
        <p>When an article relies on outside reporting or research, the source should be named and linked. Material errors are corrected transparently.</p>
      </>
    ),
  },
  "/corrections-policy": {
    title: "Corrections Policy",
    content: <p>Send the article URL and a description of the suspected error to our contact email. Verified material errors will be corrected promptly.</p>,
  },
  "/privacy": {
    title: "Privacy Policy",
    content: <p>Nexora News may use cookies, analytics and advertising services. Where required, visitors can manage consent through the consent message displayed on the site.</p>,
  },
  "/terms": {
    title: "Terms of Use",
    content: <p>Content is provided for general informational purposes. External services and links are governed by their own terms and policies.</p>,
  },
  "/cookies": {
    title: "Cookie Policy",
    content: <p>Cookies may support essential features, analytics, preferences and advertising. Consent controls are provided where legally required.</p>,
  },
  "/dmca": {
    title: "DMCA and Copyright",
    content: <p>Copyright concerns may be submitted to blancobenjamin353@gmail.com with enough information to identify the relevant material.</p>,
  },
};

function Styles() {
  return (
    <style>{`
      :root {
        --paper: #f4f1ea;
        --ink: #181719;
        --muted: #666269;
        --card: #fff;
        --line: #ddd7cd;
        --red: #781324;
        --dark-red: #4f0b16;
      }
      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { margin: 0; background: var(--paper); color: var(--ink); }
      a { color: inherit; }
      .shell { width: min(1160px, calc(100% - 36px)); margin: 0 auto; }
      .utility { background: var(--dark-red); color: #fff; font-size: 11px; letter-spacing: .12em; }
      .utility-inner { min-height: 32px; display: flex; justify-content: space-between; align-items: center; }
      .header { background: rgba(255,255,255,.96); border-bottom: 1px solid var(--line); position: sticky; top: 0; z-index: 10; backdrop-filter: blur(14px); }
      .header-inner { min-height: 78px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
      .brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; font-family: Georgia, serif; letter-spacing: .04em; font-size: 21px; }
      .brand b { color: var(--red); }
      .mark { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 11px; background: var(--red); color: #fff; font-weight: 800; }
      nav { display: flex; flex-wrap: wrap; gap: 18px; }
      nav a { text-decoration: none; font-size: 14px; font-weight: 700; }
      nav a:hover { color: var(--red); }
      .hero { border-bottom: 1px solid var(--line); padding: 76px 0 52px; }
      .kicker { color: var(--red); font-weight: 800; letter-spacing: .14em; font-size: 12px; }
      .hero h1, .article-header h1, .static-page h1 { font-family: Georgia, serif; font-size: clamp(44px, 7vw, 78px); line-height: 1; margin: 12px 0 20px; max-width: 980px; }
      .deck, .standfirst { max-width: 800px; color: var(--muted); font-size: 20px; line-height: 1.65; }
      .home { padding: 36px 0 80px; }
      .grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 20px; }
      .card { background: var(--card); border: 1px solid var(--line); border-radius: 18px; padding: 24px; display: flex; flex-direction: column; min-height: 340px; box-shadow: 0 8px 30px rgba(40,30,22,.05); }
      .card.featured { margin-bottom: 26px; min-height: 410px; padding: 38px; background: linear-gradient(135deg, #fff, #f3e5e7); }
      .meta { display: flex; gap: 10px; flex-wrap: wrap; }
      .meta span { color: var(--red); font-size: 11px; text-transform: uppercase; letter-spacing: .1em; font-weight: 800; }
      .card h2 { font-family: Georgia, serif; font-size: 27px; line-height: 1.16; margin: 18px 0 14px; }
      .card.featured h2 { font-size: clamp(38px, 5vw, 62px); max-width: 900px; }
      .card h2 a { text-decoration: none; }
      .card h2 a:hover { color: var(--red); }
      .card > p { color: var(--muted); line-height: 1.62; }
      .byline { margin-top: auto; padding-top: 20px; border-top: 1px solid var(--line); display: flex; flex-direction: column; gap: 5px; color: var(--muted); font-size: 13px; }
      .read { margin-top: 18px; color: var(--red); font-weight: 800; text-decoration: none; }
      .article-page { padding: 64px 0 20px; }
      .article-header { border-bottom: 1px solid var(--line); padding-bottom: 38px; }
      .article-byline { display: flex; flex-wrap: wrap; gap: 14px 24px; color: var(--muted); margin-top: 28px; }
      .article-body { width: min(760px, calc(100% - 36px)); margin: 42px auto 70px; font-family: Georgia, serif; font-size: 20px; line-height: 1.82; }
      .article-body p { margin: 0 0 28px; }
      .editor-note { margin-top: 44px; padding: 22px; border-left: 4px solid var(--red); background: #fff; font-family: Arial, sans-serif; font-size: 15px; line-height: 1.6; }
      .editor-note p { margin: 8px 0 0; }
      .related { border-top: 1px solid var(--line); padding: 52px 0 80px; }
      .related > h2 { font-family: Georgia, serif; font-size: 38px; }
      .static-page { min-height: 65vh; padding: 72px 0 90px; }
      .static-copy { max-width: 760px; color: #444047; font-size: 19px; line-height: 1.8; }
      footer { background: #181719; color: #fff; padding: 52px 0 22px; }
      .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 34px; }
      .footer-grid p, .footer-grid a { color: #c9c5ca; }
      .footer-grid a { display: block; margin: 10px 0; text-decoration: none; }
      .footer-brand { color: #fff; }
      .copyright { margin-top: 38px; border-top: 1px solid #39363a; padding-top: 20px; color: #aaa5ad; font-size: 13px; }
      @media (max-width: 900px) {
        .header-inner { align-items: flex-start; flex-direction: column; padding: 18px 0; }
        .grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
      }
      @media (max-width: 620px) {
        .utility-inner span:last-child { display: none; }
        .grid { grid-template-columns: 1fr; }
        .card.featured { padding: 26px; }
        .footer-grid { grid-template-columns: 1fr; }
      }
    `}</style>
  );
}

export default function NewsSite({ path }: { path: string }) {
  const cleanPath = path === "/" ? "/" : path.replace(/\/+$/, "");
  const articleSlug = cleanPath.startsWith("/article/")
    ? cleanPath.slice("/article/".length)
    : "";
  const article = articles.find((item) => item.slug === articleSlug);
  const staticPage = staticPages[cleanPath];

  return (
    <>
      <Styles />
      <Header />
      {article ? (
        <ArticlePage article={article} />
      ) : staticPage ? (
        <StaticPage title={staticPage.title}>{staticPage.content}</StaticPage>
      ) : (
        <Home />
      )}
      <Footer />
    </>
  );
}
