
from django.contrib import admin
from django.urls import path
from apps.cliente.views import ClienteListView, ClienteCreateView,ClienteDeleteView, ClienteDetailView, ClienteUpdateView
from apps.main.views import Home
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Home, name='Home'),
    path('cliente/', ClienteListView.as_view(), name='lista_cliente'),
    path('cliente/crear/', ClienteCreateView.as_view(), name='crear_cliente'),
    path('accounts/', include('apps.accounts.urls')),
    path('cliente/', ClienteListView.as_view(), name='lista_cliente'),
    path('cliente/crear/', ClienteCreateView.as_view(), name='crear_cliente'),
    path('clientes/eliminar/<int:ClienteID>/', ClienteDeleteView.as_view(), name='eliminar_cliente'),
    path('clientes/detalle/<int:ClienteID>/', ClienteDetailView.as_view(), name='detalle_cliente'),
    path('cliente/editar/<int:pk>/', ClienteUpdateView.as_view(), name='editar_cliente')
]

