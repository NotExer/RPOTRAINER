
from django.contrib import admin
from django.urls import path
from apps.cliente.views import ClienteListView, ClienteCreateView
from apps.main.views import Home
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Home, name='Home'),
    path('cliente/', ClienteListView.as_view(), name='lista_cliente'),
    path('cliente/crear/', ClienteCreateView.as_view(), name='crear_cliente'),
    path('accounts/', include('apps.accounts.urls')),

]

