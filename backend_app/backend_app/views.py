from django.http import HttpResponse

def index(request):
    message = '<b>Api server with django 3.1.4.'
    return HttpResponse(message)