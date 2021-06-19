from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.main_page, name = 'main_page'),
    path('blog', views.post_list, name = 'post_list'),
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
]