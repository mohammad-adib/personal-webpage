from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class home(TemplateView):
    template_name='my_app/index.html'


class research(TemplateView):
    template_name='my_app/research.html'


class webdeveloping(TemplateView):
    template_name='my_app/webdeveloping.html'

class personal(TemplateView):
    template_name='my_app/personal.html'

class about(TemplateView):
    template_name='my_app/about.html'
