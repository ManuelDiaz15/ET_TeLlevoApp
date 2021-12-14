#Aplicación de viajes compartidos para estudiantes DUOC "Te Llevo App"
###Dirección: https://lloni.github.io/tellevoappwebsite/



## Administrar autenticación y llamadas api
ionic g service services/authentication

## Páginas extra
ionic g page pages/intro
ionic g page pages/login

## Asegura área dentro
ionic g guard guards/auth --implements CanLoad

## Muestra la intro automáticamente una vez
ionic g guard guards/intro --implements CanLoad

## Logea automáticamente a los usuarios
ionic g guard guards/autoLogin --implements CanLoad

## Instalar capacitor
npm install @capacitor/core
npm install @capacitor/cli --save-dev

## Instalar localización
npm install @capacitor/geolocation
npx cap sync
npm install --save @ionic-native/geolocation

## Instalar mapa de Google
npm install @types/googlemaps --save-dev
npm install @capacitor/geolocation

## Instalar funcionalidades Android
npm install @capacitor/android

## Instalar servidor json
npm install -g json-server