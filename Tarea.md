El desarrollo debe realizarse sobre el repositorio en el que hicieron fork y debe
entregarse sobre se mismo repositorio. En el archivo readme del repositorio, debe
dar una explicación de los componentes y servicios realizados en angular para llegar
a la solución.
La fecha de entrega es el día viernes 31 de Enero a las 12 de la noche.
Los elementos importantes a considerar son:
• El reporitorio contiene el ejemplo de la aplicación y consumo de la siguiente
api:
o https://thawing-chamber-47973.herokuapp.com/cars
o https://thawing-chamber-47973.herokuapp.com/cool-cars
• Se tiene la posibilidad de utilizar los diferentes métodos del http.
• Se hace uso de componentes en angular
• No cambiar el puerto de carga de la aplicación angular, ya que los servicios
sólo aceptan consumo desde

La API a utilizar para el ejercicio es la siguiente:
o https://thawing-chamber-47973.herokuapp.com/owners
• Es necesario dar la posibilidad de trabajar con los 4 tipos de operaciones del
crud
• Deben tener presente que se debe poder asociar un owner a un carro. Para
esto deben mirar los campos que se tienen disponibles en la anterior API.
• La página de referencia para material design es
o https://material.angular.io/

Debe tener un componente que muestre una lista de los carros con sus
propietarios. Los carros deben presentar la imagen de este.
• Debe modificar el componente de edit-car para permitir agregar el
propietario.
• Debe tener un componente que permita ver la lista de propietarios.
• Debe tener un componente que permita crear o actualizar los propieatrios.
• Se debe poder eliminar varios propietarios al tiempo.
• Al eliminar un propietario debe eliminarse la relación que este tenga con un
carro.