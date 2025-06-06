# Generated by Django 5.1.4 on 2025-05-02 22:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('ClienteID', models.AutoField(primary_key=True, serialize=False)),
                ('Nombre', models.CharField(max_length=100)),
                ('Nacimiento', models.DateField()),
                ('Edad', models.IntegerField()),
                ('Genero', models.CharField(choices=[('', 'Seleccionar'), ('Masculino', 'Masculino'), ('Femenino', 'Femenino')], max_length=20)),
                ('Correo', models.EmailField(max_length=254)),
                ('Telefono', models.CharField(max_length=15)),
                ('Direccion', models.TextField()),
                ('Divulgacion', models.CharField(choices=[('', 'Seleccionar'), ('Recomendacion', 'Recomendacion'), ('Redes sociales', 'Redes sociales'), ('Sitio Web', 'Sitio Web'), ('Publicidad', 'Publicidad'), ('Otro', 'Otro')], max_length=100)),
                ('Altura', models.FloatField()),
                ('Peso', models.IntegerField()),
                ('Enfermedad', models.BooleanField()),
                ('Info_enfermedad', models.CharField(blank=True, max_length=100, null=True)),
                ('Cirugia', models.BooleanField(default=None)),
                ('Info_cirugia', models.CharField(blank=True, max_length=100, null=True)),
                ('Dolor', models.BooleanField(default=None)),
                ('Info_dolor', models.CharField(blank=True, max_length=100, null=True)),
                ('Medicamento', models.BooleanField(default=None)),
                ('Info_medicamento', models.CharField(blank=True, max_length=100, null=True)),
                ('Restricciones', models.BooleanField(default=None)),
                ('Info_restricciones', models.CharField(blank=True, max_length=100, null=True)),
                ('Descanso', models.IntegerField()),
                ('Fumas', models.BooleanField(default=None)),
                ('Alcohol', models.CharField(choices=[('', 'Seleccionar'), ('Nunca', 'Nunca'), ('Ocacionalmente', 'Ocacionalmente'), ('Regularmente', 'Regularmente')], max_length=20)),
                ('Chequeos', models.CharField(choices=[('', 'Seleccionar'), ('Anualmente', 'Anualmente'), ('Cada 6 meses', 'Cada 6 meses'), ('Solo cuando es necesario', 'Solo cuando es necesario'), ('Nunca', 'Nunca')], max_length=24)),
                ('Rutina', models.TextField()),
                ('Alimentacion', models.CharField(choices=[('', 'Seleccionar'), ('1 vez', '1 vez'), ('2 veces', '2 veces'), ('3 veces', '3 veces'), ('4 veces', '4 veces'), ('5 veces', '5 veces'), ('mas de 5', 'mas de 5 veces')], max_length=20)),
                ('Deseo_alimentacion', models.CharField(choices=[('', 'Seleccionar'), ('1', '1 vez'), ('2', '2 veces'), ('3', '3 veces'), ('4', '4 veces'), ('5', '5 veces'), ('mas de 5', 'mas de 5 veces')], max_length=100)),
                ('Hora_desayuno', models.CharField(blank=True, default=None, max_length=20, null=True)),
                ('Hora_media_manana', models.CharField(blank=True, default=None, max_length=20, null=True)),
                ('Hora_almuerzo', models.CharField(blank=True, default=None, max_length=20, null=True)),
                ('Hora_media_tarde', models.CharField(blank=True, default=None, max_length=20, null=True)),
                ('Hora_cena', models.CharField(blank=True, default=None, max_length=20, null=True)),
                ('Agua', models.FloatField()),
                ('Deporte', models.BooleanField(default=None)),
                ('Info_deporte', models.CharField(blank=True, max_length=100)),
                ('Semana_deporte', models.CharField(choices=[('', 'Seleccionar'), ('Menos de 1 hora', 'Menos de 1 hora'), ('1-3 horas', '1-3 horas'), ('3-5 horas', '3-5 horas'), ('Mas de 5 horas', 'Mas de 5 horas')], max_length=20)),
                ('Nutricion', models.BooleanField(default=None)),
                ('Info_nutricion', models.CharField(blank=True, max_length=100)),
                ('Alergia', models.BooleanField(default=None)),
                ('Info_alergia', models.CharField(blank=True, max_length=100)),
                ('Dieta', models.BooleanField(default=None)),
                ('Info_dieta', models.CharField(blank=True, max_length=100)),
                ('Macronutrientes', models.TextField(blank=True, choices=[('', 'Seleccionar'), ('Papa (Blanca, criolla)', 'Papa (Blanca, criolla)'), ('Arroz (Blanco, integral)', 'Arroz (Blanco, integral)'), ('Arepa de maiz', 'Arepa de maiz'), ('Tortilla de maiz', 'Tortilla de maiz'), ('Cereales (Granolas, otros)', 'Cereales (Granolas, otros)'), ('Platano (Maduro, verde)', 'Platano (Maduro, verde)'), ('Yuca', 'Yuca'), ('Quinoa', 'Quinoa'), ('Pan (Integral, blanco, centeno, avena)', 'Pan (Integral, blanco, centeno, avena)'), ('Avena', 'Avena'), ('Frijoles', 'Frijoles'), ('Lentejas', 'Lentejas'), ('Garbanzos', 'Garbanzos'), ('Tostadas de arroz', 'Tostadas de arroz'), ('Pollo', 'Pollo'), ('Pavo', 'Pavo'), ('Carne de res', 'Carne de res'), ('Cerdo', 'Cerdo'), ('Atun', 'Atun'), ('Mariscos (Mejillones, Camarones, otros)', 'Mariscos (Mejillones, Camarones, otros)'), ('Pescados (Salmon, Tilapia, otros)', 'Pescados (Salmon, Tilapia, otros)'), ('Huevos', 'Huevos'), ('Leche', 'Leche'), ('Yogurth (Griego, normal)', 'Yogurth (Griego, normal)'), ('Quesos', 'Quesos'), ('Añadir', 'Añadir alimento')], default=None, max_length=500, null=True)),
                ('Frutas_verduras', models.TextField()),
                ('Evitaciones', models.BooleanField(default=None)),
                ('Info_evitaciones', models.BooleanField(default=None)),
                ('Suplementacion', models.CharField(choices=[('', 'Seleccionar'), ('Si', 'Si'), ('No', 'No'), ('Depende del suplemento', 'Depende del suplemento')], max_length=250)),
                ('Entrenamientos', models.BooleanField(default=None)),
                ('Info_entrenamientos', models.CharField(blank=True, max_length=100, null=True)),
                ('Nivel', models.CharField(choices=[('', 'Seleccionar'), ('Principiante', 'Principiante (menos de 6 meses de experiencia)'), ('Intermedio', 'Intermedio (6 meses - 2 años de experiencia)'), ('Avanzado', 'Avanzado (más de 2 años de experiencia)')], max_length=100)),
                ('Frecuencia', models.CharField(choices=[('', 'Seleccionar'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6'), ('7', '7')], max_length=100)),
                ('Info_frecuencia', models.CharField(blank=True, choices=[('', 'Seleccionar'), ('Lunes', 'Lunes'), ('Martes', 'Martes'), ('Miercoles', 'Miercoles'), ('Jueves', 'Jueves'), ('Viernes', 'Viernes'), ('Sabado', 'Sabado'), ('Domingo', 'Domingo')], max_length=100)),
                ('Tiempo', models.CharField(choices=[('', 'Seleccionar'), ('Menos de 30 minutos', 'Menos de 30 minutos'), ('30-45 minutos', '30-45 minutos'), ('45-60 minutos', '45-60 minutos'), ('Más de 60 minutos', 'Más de 60 minutos')], max_length=20)),
                ('Hora', models.CharField(choices=[('', 'Seleccionar'), ('Mañana', 'Mañana'), ('Tarde', 'Tarde'), ('Noche', 'Noche')], max_length=20)),
                ('Objetivo', models.CharField(choices=[('', 'Seleccionar'), ('Perder grasa', 'Perder grasa'), ('Ganar músculo', 'Ganar músculo'), ('Mejorar resistencia', 'Mejorar resistencia'), ('Rehabilitación', 'Rehabilitación'), ('Otro', 'Otro')], max_length=100)),
                ('Experiencia', models.BooleanField()),
                ('Entorno', models.CharField(choices=[('', 'Seleccionar'), ('Gimnasio', 'Gimnasio'), ('Casa', 'Casa'), ('Exterior', 'Exterior'), ('Otro', 'Otro')], max_length=100)),
                ('Equipamiento', models.BooleanField()),
                ('Info_equipamiento', models.CharField(blank=True, choices=[('', 'Seleccionar'), ('Mancuernas', 'Mancuernas'), ('Bandas de resistencia', 'Bandas de resistencia'), ('Máquinas de gimnasio', 'Máquinas de gimnasio'), ('Otro', 'Otro')], max_length=100, null=True)),
                ('Disgusto', models.CharField(max_length=100)),
                ('Servicio', models.CharField(choices=[('', 'Seleccionar'), ('Entrenamiento personalizado', 'Entrenamiento personalizado'), ('Entrenamiento semipersonalizado', 'Entrenamiento semipersonalizado'), ('Entrenamiento online (videollamada)', 'Entrenamiento online (videollamada)'), ('Asesoría online 1 a 1', 'Asesoría online 1 a 1')], max_length=100)),
                ('Duracion_asesoria', models.CharField(choices=[('', 'Seleccionar'), ('3 Meses', '3 Meses'), ('6 Meses', '6 Meses'), ('12 Meses', '12 Meses')], max_length=100)),
                ('Sesiones', models.CharField(choices=[('', 'Seleccionar'), ('12 Sesiones', '12 Sesiones'), ('16 Sesiones', '16 Sesiones'), ('20 Sesiones', '20 Sesiones')], max_length=100)),
                ('Preferencias', models.TextField()),
                ('Contenido', models.TextField()),
                ('Redes', models.TextField()),
                ('Fecha_inicio', models.DateField()),
                ('fecha_fin', models.DateField()),
                ('fecha_pago', models.DateField()),
            ],
        ),
    ]
