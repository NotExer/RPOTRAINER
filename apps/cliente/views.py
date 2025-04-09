from apps.cliente.models import Cliente
from apps.cliente.form import Clienteform
from django.views.generic import CreateView, ListView
from django.urls import reverse_lazy
from django.http import HttpResponseRedirect

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

