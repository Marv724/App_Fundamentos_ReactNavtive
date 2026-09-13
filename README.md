## Instalación de dependencias

Para el desarrollo de la aplicación se utilizarán las siguientes dependencias relacionadas con **React Navigation**. Estas permiten implementar la navegación entre las diferentes pantallas de la aplicación y gestionar de forma adecuada las áreas seguras en dispositivos móviles.

### 1. `@react-navigation/native`

Es el paquete principal de **React Navigation**. Proporciona la infraestructura básica necesaria para implementar la navegación dentro de la aplicación React Native.

Se utiliza como base para los diferentes tipos de navegadores, como Stack Navigator, Bottom Tab Navigator y Drawer Navigator.

```bash
npm install @react-navigation/native
```

---

### 2. `@react-navigation/native-stack`

Permite implementar una navegación basada en una **pila de pantallas (Stack Navigation)**.

En este proyecto se utilizará principalmente para permitir la navegación entre:

- Pantalla principal o **Home**.
- Pantalla de **Detalle** de un elemento seleccionado.

Por ejemplo, el flujo de navegación será:

```text
Home
  │
  └── Seleccionar tarjeta
          │
          ▼
       Detalle
```

Para instalarlo:

```bash
npm install @react-navigation/native-stack
```

---

### 3. `react-native-safe-area-context`

Permite manejar correctamente las **áreas seguras de la pantalla** en dispositivos que poseen elementos como:

- Barra de estado.
- Notch.
- Cámara frontal.
- Barra de navegación.
- Bordes especiales de la pantalla.

Esto evita que el contenido de la aplicación quede oculto detrás de estos elementos.

Este paquete ya se encuentra instalado en el proyecto.

Si fuera necesario instalarlo manualmente:

```bash
npm install react-native-safe-area-context
```

---

### 4. `react-native-screens`

Mejora la integración de las pantallas de React Navigation con las pantallas nativas de Android e iOS.

Su utilización permite que la navegación sea más eficiente y que las pantallas puedan aprovechar componentes nativos del sistema.

Para instalarlo:

```bash
npm install react-native-screens
```

---

### 5. `@expo/ngrok`

Este paquete es necesario para la ejecucion, para poder usar el --tunnel
```bash
npm install --save-dev @expo/ngrok
```

se recomienda ejecutar la aplicacion como 
```bash
npx expo start --tunnel -c
```
---

## Instalación de todos los paquetes

Si se desea instalar las dependencias desde cero, se pueden ejecutar los siguientes comandos:

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-native-safe-area-context
npm install react-native-screens
npm install --save-dev @expo/ngrok
```

### Resumen

| Paquete | Función |
|---|---|
| `@react-navigation/native` | Base de React Navigation |
| `@react-navigation/native-stack` | Navegación entre pantallas mediante Stack |
| `react-native-safe-area-context` | Manejo de áreas seguras de la pantalla |
| `react-native-screens` | Integración y optimización de pantallas nativas |
| `@expo/ngrok` | Atributo de Ejecución de Expo go|

Estas dependencias serán suficientes para implementar la navegación básica requerida por el proyecto, incluyendo la pantalla principal, la pantalla de detalle y el manejo de las áreas seguras de los dispositivos móviles.