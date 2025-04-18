from apps.cliente.models import Cliente
from apps.cliente.form import Clienteform
from django.views.generic import CreateView, ListView, DeleteView, DetailView,UpdateView
from django.urls import reverse_lazy
from django.http import HttpResponseRedirect
from django import forms

class ClienteListView(ListView):
    model = Cliente
    template_name = 'cliente/cliente.html'
    context_object_name = 'cliente'
    login_url = "iniciar"


class ClienteCreateView(CreateView):
    model = Cliente
    form_class = Clienteform
    template_name = 'cliente/crear_cliente.html'
    success_url = reverse_lazy('lista_cliente')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        form = context['form']

        # Divide los campos en secciones (listas de nombres de campos)
        context['form_steps'] = [
            {
                "title": "INFORMACIÓN PERSONAL",
                "fields": [form[name] for name in [
                    'Nombre','Nacimiento','Edad','Genero','Correo','Telefono','Direccion','Divulgacion'
                ]]
            },
            {
                "title": "SALUD",
                "fields": [form[name] for name in [
                    'Altura','Peso','Enfermedad','Info_enfermedad','Cirugia','Info_cirugia','Dolor','Info_dolor',
                    'Medicamento','Info_medicamento','Restricciones','Info_restricciones','Descanso','Fumas','Alcohol','Chequeos'
                ]]
            },
            {
                "title": "HABITOS",
                "fields": [form[name] for name in [
                    'Rutina','Alimentacion','Deseo_alimentacion','Hora_desayuno','Hora_media_manana',
                    'Hora_almuerzo','Hora_media_tarde','Hora_cena','Agua','Deporte','Info_deporte','Semana_deporte'
                ]]
            },
            {
                "title": "NUTRICIÓN",
                "fields": [form[name] for name in [
                    'Nutricion','Info_nutricion','Alergia','Info_alergia','Dieta','Info_dieta',
                    'Macronutrientes','Frutas_verduras','Evitaciones','Info_evitaciones','Suplementacion'
                ]]
            },
            {
                "title": "ENTRENAMIENTO",
                "fields": [form[name] for name in [
                    'Entrenamientos','Info_entrenamientos','Nivel','Frecuencia','Info_frecuencia','Tiempo','Hora','Objetivo',
                    'Experiencia','Entorno','Equipamiento','Info_equipamiento','Disgusto','Preferencias'
                ]]
            },
            {
                "title": "SERVICIO CONTRATADO",
                "fields": [form[name] for name in [
                    'Servicio','Duracion_asesoria','Sesiones','Preferencias'
                ]]
            },
            {
                "title": "REDES SOCIALES",
                "fields": [form[name] for name in [
                    'Contenido','Redes'
                ]]
            },

            {
                "title": "Fechas",
                "fields": [form[name] for name in [
                    'Fecha_inicio','fecha_fin','fecha_pago'
                ]]
            },
        ]
        return context



from django.views.generic.edit import UpdateView
from django.urls import reverse_lazy

class ClienteUpdateView(UpdateView):
    model = Cliente
    form_class = Clienteform
    template_name = 'cliente/editar_cliente.html'  # Puedes usar el mismo si quieres
    success_url = reverse_lazy('lista_cliente')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        form = context['form']

        # Usamos los mismos pasos que en la vista de crear
        context['form_steps'] = [
            {
                "title": "INFORMACIÓN PERSONAL",
                "fields": [form[name] for name in [
                    'Nombre','Nacimiento','Edad','Genero','Correo','Telefono','Direccion','Divulgacion'
                ]]
            },
            {
                "title": "SALUD",
                "fields": [form[name] for name in [
                    'Altura','Peso','Enfermedad','Info_enfermedad','Cirugia','Info_cirugia','Dolor','Info_dolor',
                    'Medicamento','Info_medicamento','Restricciones','Info_restricciones','Descanso','Fumas','Alcohol','Chequeos'
                ]]
            },
            {
                "title": "HABITOS",
                "fields": [form[name] for name in [
                    'Rutina','Alimentacion','Deseo_alimentacion','Hora_desayuno','Hora_media_manana',
                    'Hora_almuerzo','Hora_media_tarde','Hora_cena','Agua','Deporte','Info_deporte','Semana_deporte'
                ]]
            },
            {
                "title": "NUTRICIÓN",
                "fields": [form[name] for name in [
                    'Nutricion','Info_nutricion','Alergia','Info_alergia','Dieta','Info_dieta',
                    'Macronutrientes','Frutas_verduras','Evitaciones','Info_evitaciones','Suplementacion'
                ]]
            },
            {
                "title": "ENTRENAMIENTO",
                "fields": [form[name] for name in [
                    'Entrenamientos','Info_entrenamientos','Nivel','Frecuencia','Info_frecuencia','Tiempo','Hora','Objetivo',
                    'Experiencia','Entorno','Equipamiento','Info_equipamiento','Disgusto','Preferencias'
                ]]
            },
            {
                "title": "SERVICIO CONTRATADO",
                "fields": [form[name] for name in [
                    'Servicio','Duracion_asesoria','Sesiones','Preferencias'
                ]]
            },
            {
                "title": "REDES SOCIALES",
                "fields": [form[name] for name in [
                    'Contenido','Redes'
                ]]
            },
            {
                "title": "Fechas",
                "fields": [form[name] for name in [
                    'Fecha_inicio','fecha_fin','fecha_pago'
                ]]
            },
        ]
        return context



class ClienteDeleteView(DeleteView):
    model = Cliente
    template_name = 'cliente/eliminar_cliente.html'
    success_url = reverse_lazy('lista_cliente')
    pk_url_kwarg = 'ClienteID' 


class ClienteDetailView(DetailView):
    model = Cliente
    template_name = 'cliente/detalle_cliente.html'
    context_object_name = 'cliente'
    pk_url_kwarg = 'ClienteID' 