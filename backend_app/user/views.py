from django.contrib.auth.models import User
from .models import UserProfil
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import viewsets, status
from rest_framework.views import APIView
from .serializers import *


@api_view(['GET'])
def currentUser(request):
    """
    Determine the current user by their token, and return their data
    """

    serializer = UserSerializer(request.user)
    return Response(serializer.data)


@api_view(['POST'])
# @permission_classes([AllowAny])
def register(request, format=None):
    """
    This function is to register user
    """

    serializer = UserSerializerWithToken(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """

    queryset = User.objects.all()
    serializer_class = UserSerializer
