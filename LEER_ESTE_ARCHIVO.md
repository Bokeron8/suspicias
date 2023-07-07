```
├── components // Aca estan los componentes individuales creados con React, ej: los productos.
├── lib // Aca creamos funciones que vamos a reutilizar en varias partes.
├── pages // Aca estan las rutas de la pagina, y el index(la pagina principal).
│   ├── api // La ruta para apis por si necesitamos.
│   └── product // La ruta para cada producto individualmente, ej:localhost:3000/product/cubo-megaminx
├── public // Es para los archivos que no cambian, por ejemplo el icono de la pagina, imagenes. 
└── styles // El css que usamos
```
Aca te enseñan a como usar git por si nunca usaste.
https://www.freecodecamp.org/espanol/news/guia-para-principiantes-de-git-y-github/
https://education.github.com/git-cheat-sheet-education.pdf
https://gitforwindows.org/

Despues de instalar git anda a una carpeta cualquiera en visual studio y en la terminal escribi: 
```
git clone https://github.com/Bokeron8/suspicias.git     | descarga los archivos de la pagina
cd suspicias    | entra a la carpeta de suspicias
npm install     | instala las dependencias necesarias para poder usar la pagina localmente
git checkout development    | cambia la rama de trabajo en la que te encontras de git
```
Ahora ya podes modificar los archivos.

La idea basica de usar github seria la de mantener un control de las modificaciones que vamos realizando a la pagina asi si algo deja de funcionar o no nos gusta el cambio podes simplemente revertir a una version anterior.
