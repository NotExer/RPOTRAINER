from django.db import models


genero = [
    ('', 'Seleccionar'),
    ('Masculino', 'Masculino'),
    ('Femenino', 'Femenino'),
]


divulgacion = [
    ('', 'Seleccionar'),
    ('Recomendacion','Recomendacion'),
    ('Redes sociales','Redes sociales'),
    ('Sitio Web', 'Sitio Web'),
    ('Publicidad', 'Publicidad'),
    ('Otro', 'Otro'),
]

chequeos = [
    ('', 'Seleccionar'),
    ('Anualmente', 'Anualmente'),
    ('Cada 6 meses', 'Cada 6 meses'),
    ('Solo cuando es necesario','Solo cuando es necesario'),
    ('Nunca','Nunca'),
]

alimentacion = [
    ('', 'Seleccionar'),
    ('1 vez','1 vez'),
    ('2 veces','2 veces'),
    ('3 veces','3 veces'),
    ('4 veces','4 veces'),
    ('5 veces','5 veces'),
    ('mas de 5','mas de 5 veces'),
]

alcohol = [
    ('', 'Seleccionar'),
    ('Nunca','Nunca'),
    ('Ocacionalmente','Ocacionalmente'),
    ('Regularmente','Regularmente'),
]

deseo_alimentacion = [
    ('', 'Seleccionar'),
    ('1','1 vez'),
    ('2','2 veces'),
    ('3','3 veces'),
    ('4','4 veces'),
    ('5','5 veces'),
    ('mas de 5','mas de 5 veces'),
]

semana_deporte = [
    ('', 'Seleccionar'),
    ('Menos de 1 hora','Menos de 1 hora'),
    ('1-3 horas','1-3 horas'),
    ('3-5 horas','3-5 horas'),
    ('Mas de 5 horas','Mas de 5 horas'),
]

macronutrientes = [
    ('', 'Seleccionar'),
    ('Papa (Blanca, criolla)','Papa (Blanca, criolla)'),
    ('Arroz (Blanco, integral)','Arroz (Blanco, integral)'),
    ('Arepa de maiz','Arepa de maiz'),
    ('Tortilla de maiz','Tortilla de maiz'),
    ('Cereales (Granolas, otros)','Cereales (Granolas, otros)'),
    ('Platano (Maduro, verde)','Platano (Maduro, verde)'),
    ('Yuca','Yuca'),
    ('Quinoa','Quinoa'),
    ('Pan (Integral, blanco, centeno, avena)','Pan (Integral, blanco, centeno, avena)'),
    ('Avena','Avena'),
    ('Frijoles','Frijoles'),
    ('Lentejas','Lentejas'),
    ('Garbanzos','Garbanzos'),
    ('Tostadas de arroz','Tostadas de arroz'),
    ('Pollo','Pollo'),
    ('Pavo','Pavo'),
    ('Carne de res','Carne de res'),
    ('Cerdo','Cerdo'),
    ('Atun','Atun'),
    ('Mariscos (Mejillones, Camarones, otros)','Mariscos (Mejillones, Camarones, otros)'),
    ('Pescados (Salmon, Tilapia, otros)','Pescados (Salmon, Tilapia, otros)'),
    ('Huevos','Huevos'),
    ('Leche','Leche'),
    ('Yogurth (Griego, normal)','Yogurth (Griego, normal)'),
    ('Quesos','Quesos'),
    ('Añadir','Añadir alimento'),
]

suplementacion = [
    ('', 'Seleccionar'),
    ('Si','Si'),
    ('No','No'),
    ('Depende del suplemento','Depende del suplemento'),
]

nivel = [
    ('', 'Seleccionar'),
    ('Principiante','Principiante (menos de 6 meses de experiencia)'),
    ('Intermedio','Intermedio (6 meses - 2 años de experiencia)'),
    ('Avanzado','Avanzado (más de 2 años de experiencia)'),
]

frecuencia = [
    ('', 'Seleccionar'),
    ('3','3'),
    ('4','4'),
    ('5','5'),
    ('6','6'),
    ('7','7'),
]

info_frecuencia = [
    ('', 'Seleccionar'),
    ('Lunes','Lunes'),
    ('Martes','Martes'),
    ('Miercoles','Miercoles'),
    ('Jueves','Jueves'),
    ('Viernes','Viernes'),
    ('Sabado','Sabado'),
    ('Domingo','Domingo'),
]

tiempo = [
    ('', 'Seleccionar'),
    ('Menos de 30 minutos','Menos de 30 minutos'),
    ('30-45 minutos','30-45 minutos'),
    ('45-60 minutos','45-60 minutos'),
    ('Más de 60 minutos','Más de 60 minutos'),
]

hora = [
    ('', 'Seleccionar'),
    ('Mañana','Mañana'),
    ('Tarde','Tarde'),
    ('Noche','Noche'),
]

objetivo = [
    ('', 'Seleccionar'),
    ('Perder grasa','Perder grasa'),
    ('Ganar músculo','Ganar músculo'),
    ('Mejorar resistencia','Mejorar resistencia'),
    ('Rehabilitación','Rehabilitación'),
    ('Otro','Otro'),
]

entorno = [
    ('', 'Seleccionar'),
    ('Gimnasio','Gimnasio'),
    ('Casa','Casa'),
    ('Exterior','Exterior'),
    ('Otro','Otro'),
]

info_equipamiento = [
    ('', 'Seleccionar'),
    ('Mancuernas','Mancuernas'),
    ('Bandas de resistencia','Bandas de resistencia'),
    ('Máquinas de gimnasio','Máquinas de gimnasio'),
    ('Otro','Otro'),
]

servicio = [
    ('', 'Seleccionar'),
    ('Entrenamiento personalizado','Entrenamiento personalizado'),
    ('Entrenamiento semipersonalizado','Entrenamiento semipersonalizado'),
    ('Entrenamiento online (videollamada)','Entrenamiento online (videollamada)'),
    ('Asesoría online 1 a 1','Asesoría online 1 a 1'),
]

duracion_asesoria = [
    ('', 'Seleccionar'),
    ('3 Meses','3 Meses'),
    ('6 Meses','6 Meses'),
    ('12 Meses','12 Meses'),
]

sesiones = [
    ('', 'Seleccionar'),
    ('12 Sesiones','12 Sesiones'),
    ('16 Sesiones','16 Sesiones'),
    ('20 Sesiones','20 Sesiones'),
]




class Cliente(models.Model):
    ClienteID = models.AutoField(primary_key=True)
    Nombre = models.CharField(max_length=100, blank=False, null=False)
    Nacimiento = models.DateField(blank=False, null=False)
    Edad = models.IntegerField(blank=False, null=False)
    Genero = models.CharField(max_length=20, choices=genero, blank=False, null=False)
    Correo = models.EmailField(blank=False, null=False)
    Telefono = models.CharField(max_length=15, blank=False, null=False)
    Direccion = models.TextField(blank=False, null=False)
    Divulgacion = models.CharField(max_length=100, choices=divulgacion, blank=False, null=False)
#======================================================================================================================================================================================
    Altura = models.FloatField(blank=False, null=False)
    Peso = models.IntegerField(blank=False, null=False)
    Enfermedad = models.BooleanField(blank=False, null=False)
    Info_enfermedad = models.CharField(max_length=100, null=True, blank=True)
    Cirugia = models.BooleanField(default=None, blank=False, null=False)
    Info_cirugia = models.CharField(max_length=100, null=True, blank=True)
    Dolor = models.BooleanField(default=None, blank=False, null=False)
    Info_dolor = models.CharField(max_length=100, null=True, blank=True)
    Medicamento = models.BooleanField(default=None, blank=False, null=False)
    Info_medicamento = models.CharField(max_length=100, null=True, blank=True)
    Restricciones = models.BooleanField(default=None, blank=False, null=False)
    Info_restricciones = models.CharField(max_length=100, null=True, blank=True)
    Descanso = models.IntegerField(blank=False, null=False)
    Fumas = models.BooleanField(default=None, blank=False, null=False)
    Alcohol = models.CharField(max_length=20, choices=alcohol, blank=False, null=False)
    Chequeos = models.CharField(max_length=24, choices=chequeos, blank=False, null=False)  
#======================================================================================================================================================================================
    Rutina = models.TextField(blank=False, null=False)
    Alimentacion = models.CharField(max_length=20, choices=alimentacion, blank=False, null=False)
    Deseo_alimentacion = models.CharField(max_length=100, choices=deseo_alimentacion, blank=False, null=False)  # max_length añadido
    Hora_desayuno = models.CharField(max_length=20, default=None, blank=True, null=True)
    Hora_media_manana = models.CharField(max_length=20, default=None, blank=True, null=True)
    Hora_almuerzo = models.CharField(max_length=20, default=None, blank=True, null=True)
    Hora_media_tarde = models.CharField(max_length=20, default=None, blank=True, null=True)
    Hora_cena = models.CharField(max_length=20, default=None, blank=True, null=True)
    Agua = models.FloatField(blank=False, null=False)
    Deporte = models.BooleanField(default=None, blank=False, null=False )
    Info_deporte = models.CharField(max_length=100, blank=True, null=False)
    Semana_deporte = models.CharField(max_length=20, choices=semana_deporte, blank=False, null=False)  # max_length añadido
#======================================================================================================================================================================================
    Nutricion =  models.BooleanField(default=None, blank=False, null=False)
    Info_nutricion = models.CharField(max_length=100, blank=True, null=False)
    Alergia = models.BooleanField(default=None, blank=False, null=False)
    Info_alergia = models.CharField(max_length=100, blank=True, null=False)
    Dieta = models.BooleanField(default=None, blank=False, null=False)
    Info_dieta = models.CharField(max_length=100, blank=True, null=False)
    Macronutrientes = models.CharField(max_length=500, default=None, choices=macronutrientes, blank=False, null=True)
    Frutas_verduras = models.TextField(blank=False, null=False)
    Evitaciones = models.BooleanField(default=None, blank=False, null=False)
    Info_evitaciones = models.BooleanField(default=None, blank=False, null=False)
    Suplementacion = models.CharField(max_length=250, choices=suplementacion, blank=False, null=False)  # max_length añadido
#======================================================================================================================================================================================
    Entrenamientos = models.BooleanField(default=None, blank=False, null=False)
    Info_entrenamientos = models.CharField(max_length=100, null=True, blank=True)
    Nivel = models.CharField(max_length=100, choices=nivel, blank=False, null=False)  # max_length añadido
    Frecuencia = models.CharField(max_length=100, choices=frecuencia, blank=False, null=False)  # max_length añadido
    Info_frecuencia = models.CharField(max_length=100, choices=info_frecuencia, blank=True, null=False)  # max_length añadido
    Tiempo = models.CharField(max_length=20, choices=tiempo, blank=False, null=False)
    Hora = models.CharField(max_length=20, choices=hora, blank=False, null=False)  # max_length añadido
    Objetivo = models.CharField(max_length=100, choices=objetivo, blank=False, null=False)  # max_length añadido
    Experiencia = models.BooleanField(blank=False, null=False)
    Entorno = models.CharField(max_length=100, choices=entorno, blank=False, null=False)  # max_length añadido
    Equipamiento = models.BooleanField(blank=False, null=False)
    Info_equipamiento = models.CharField(max_length=100, choices=info_equipamiento, null=True, blank=True) # max_length añadido
    Disgusto = models.CharField(max_length=100, blank=False, null=False )
#======================================================================================================================================================================================
    Servicio = models.CharField(max_length=100, choices=servicio, blank=False, null=False)  
    Duracion_asesoria = models.CharField(max_length=100, choices=duracion_asesoria, blank=False, null=False )  
    Sesiones = models.CharField(max_length=100, choices=sesiones, blank=False, null=False )  
    Preferencias = models.TextField(blank=False, null=False)
#======================================================================================================================================================================================
    Contenido = models.TextField( blank=False, null=False)
    Redes = models.TextField( blank=False, null=False)
#======================================================================================================================================================================================
    Fecha_inicio = models.DateField(blank=False, null=False)
    fecha_fin = models.DateField(blank=False, null=False)
    fecha_pago = models.DateField(blank=False, null=False)

    