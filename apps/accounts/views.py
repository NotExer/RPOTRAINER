from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
from django.contrib import messages

def register_view(request):
    context = {
        'username': '',
        'email': '',
        'password': '',
        'password2': '',
    }

    if request.method == 'POST':
        username = request.POST.get('username', '').strip()
        email = request.POST.get('email', '').strip()
        password = request.POST.get('password', '')
        password2 = request.POST.get('password2', '')

        context.update({
            'username': username,
            'email': email,
            'password': password,
            'password2': password2,
        })

        if not username or not email or not password or not password2:
            messages.error(request, 'Por favor, completa todos los campos.')

        elif not email.endswith('@gmail.com'):
            messages.error(request, 'El correo debe ser de Gmail (ejemplo@gmail.com).')

        else:
            try:
                validate_email(email)
            except ValidationError:
                messages.error(request, 'El correo no es válido.')
                return render(request, 'account/register.html', context)

            if password != password2:
                messages.error(request, 'Las contraseñas no coinciden.')

            elif User.objects.filter(username=username).exists():
                messages.error(request, 'El nombre de usuario ya existe.')

            elif User.objects.filter(email=email).exists():
                messages.error(request, 'El correo ya está registrado.')

            else:
                user = User.objects.create_user(username=username, email=email, password=password)
                login(request, user)
                return redirect('Home')

    return render(request, 'account/register.html', context)



def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username', '').strip()
        password = request.POST.get('password', '').strip()

        if not username or not password:
            messages.error(request, 'Por favor completa todos los campos.')
            return render(request, 'account/login.html')

        # Intentar autenticar por username
        user = authenticate(request, username=username, password=password)

        if user is None:
            # Intentar autenticar por email
            try:
                user_obj = User.objects.get(email=username)
                user = authenticate(request, username=user_obj.username, password=password)
            except User.DoesNotExist:
                user = None

        if user is not None:
            login(request, user)
            return redirect('Home')
        else:
            messages.error(request, 'Credenciales inválidas.')

    return render(request, 'account/login.html')

def logout_view(request):
    logout(request)
    return redirect('login')
