from cliente.views import ClienteListView, ClienteCreateView
from django.urls import path


urlpatterns = [
    path('cliente/', ClienteListView.as_view(), name='lista_cliente'),
    path('cliente/crear/', ClienteCreateView.as_view(), name='crear_cliente'),
]
