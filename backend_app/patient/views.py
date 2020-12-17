from rest_framework import viewsets, status
from .models import Patient
from .serializers import *


class PatientViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """

    queryset = Patient.objects.all()
    serializer_class = UserSerializer
