from django.http import JsonResponse
from rest_framework import viewsets
from .serializers import UserSerializer
from .models import User
from rest_framework.response import Response

def getUserDetail(request, username, password):
    users = User.objects.filter(username=username,
                                password=password).values('Id', 'firstName', 'lastName', 'email', 'password')
    users = list(users)
    return JsonResponse(users, safe = False)