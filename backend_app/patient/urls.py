from django.urls import path, include
from patient import views
from rest_framework.routers import DefaultRouter


# ? Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'', views.PatientViewSet)

# ? The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]
