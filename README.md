# Front end Wizeline-Academy Challenge.
## Instrucciones para instalar las variables de entorno indicadas abajo.
1. export SAUCEDEMO_STANDAR_USER=standard_user
2. export SAUCEDEMO_LOCKED_OUT_USER=locked_out_user
3. export SAUCEDEMO_PROBLEM_USER=problem_user
4. export SAUCEDEMO_PERFORMANCE_GLITCH_USER=performance_glitch_user
5. export SAUCEDEMO_GENERAL_PASSWORD=secret_sauce

### Pasos a reproducir:
* Ubicate en el directorio donde está el archivo environmentVariables.txt.
* Ejecuta el comando source con el archivo txt antes mencionado como parametro
```sh
$ source environmentVariables.txt
```
* Y todas las variables de entorno serán exportadas de un sola vez.

## ¿Como corro los casos de prueba?
    * Los casos de prueba se pueden correr de diferentes maneras, los puedes correr especificamente por documento de prueba como se muestra a continuación.

        Sintaxis:
        **testcade <nombre_browser> ruta_del_documento**

        Por linea de comandos:
        ```ssh
        $ testcafe chrome src/saucedemo/tests/Login.tests.js
        ```

    * Tambien los puedes correr todos de una sola vez usando un solo browser con el siguiente comando.

        Sintaxis:
        **npm run test-chrome**

        Por linea de comandos:
        ```sh
        $ npm run test-chrome
        ```
    * De igual manera puedes correr los script en multiples instancias de buscadores que en este caso serí con Chrome y Firefox como se muestra a continuacion.

        Por linea de comandos:
        ```sh
        $ npm run test-firefox-chrome
        ```
Nota: Tengamos en consideracion que los reportes se generaras solos y estan siendo ignorados por git entonces solo se quedaran localmente los reportes.

