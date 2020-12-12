from django.urls import path, include
from user import views
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token


# ? Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'', views.UserViewSet)

# ? The API URLs are now determined automatically by the router.
urlpatterns = [
    path('current-user/', views.currentUser),
    path('token-auth/', obtain_jwt_token),
    path('register/', views.register),
    path('', include(router.urls)),
]
