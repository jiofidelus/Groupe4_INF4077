from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from .models import Patient


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['id', 'firstname', 'lastname',
                  'sex', 'photo', 'age', 'telephone', 'weight', 'city']
