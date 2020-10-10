from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import viewsets
from .serializers import UserSerializer
from .models import User
from rest_framework.response import Response
from django.views.decorators.http import require_http_methods
import json

# Create your views here.

@require_http_methods(['POST'])
def getUserDetail(request, username, password):
    users = User.objects.filter(username=username,
                                password=password).values('firstName', 'lastName', 'email')
    users = list(users)
    return JsonResponse(status = 200, data = users)

# def registerUser(request):
#     user = User()