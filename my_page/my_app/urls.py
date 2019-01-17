from django.urls import path
from . import views

app_name='my_app'

urlpatterns=[
    path('',views.home.as_view(),name='home'),
    path('home/',views.home.as_view(),name='home'),
    path('research/',views.research.as_view(),name='research'),
    path('webdeveloping/',views.webdeveloping.as_view(),name='webdeveloping'),
    path('personal/',views.personal.as_view(),name='personal'),
    path('about/',views.about.as_view(),name='about')
]
