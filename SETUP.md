## Proceso de Instalación

### Instalar Node.js y npm

1.  **Descarga Node.js:**
    Visita el sitio web oficial de [Node.js](https://nodejs.org/) y descarga la versión LTS (Long Term Support) recomendada para tu sistema operativo.
2.  **Instala Node.js:**
    Sigue las instrucciones del instalador. Node.js incluye npm (Node Package Manager).
3.  **Verifica la Instalación:**
    Abre una nueva terminal y ejecuta los siguientes comandos:

    ```bash
    node -v
    npm -v
    ```

### Instalar pnpm

`pnpm` es un gestor de dependencias rápido y eficiente. Lo instalaremos globalmente usando npm:

1.  **Instalar pnpm globalmente:**

    ```bash
    npm install -g pnpm
    ```

2.  **Verificar la instalación:**

    Abre una nueva terminal y ejecuta:

    ```bash
    pnpm -v
    ```

### Instalar tsx

`tsx` es una herramienta para ejecutar archivos TypeScript directamente. Puedes instalarla usando `npm` o `pnpm`:

1. **Instalar `tsx` globalmente:**

- Usando npm
  ```bash
  npm install -g tsx
  ```
- Usando pnpm
  ```bash
  pnpm add -g tsx
  ```

2. **Verificar la instalación:**
   ```bash
   tsx --version
   ```

### Alternativa usando Homebrew y volta

1. **Instala Homebrew**: Si no lo tienes instalado, ejecuta el siguiente comando en tu terminal:

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Instala Volta**: Volta es una herramienta para gestionar herramientas de JavaScript. Puedes instalarla ejecutando:

   ```bash
   brew install volta
   ```

3. **Instala Node.js usando Volta**: Con Volta instalado, ejecuta:

   ```bash
   volta install node
   ```

4. **Verifica la Instalación con Volta**: Comprueba que Node.js y npm estén instalados correctamente con Volta:

   ```bash
   node -v
   npm -v
   ```

5. **Instala pnpm usando Volta**: Con Volta instalado, ejecuta:

   ```bash
   volta install pnpm
   ```

6. **Ejecuta `volta setup`**: Después de instalar `pnpm`, ejecuta el siguiente comando para asegurarte de que Volta esté configurado correctamente:

   ```bash
   volta setup
   ```
