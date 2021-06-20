from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.main_page, name = 'main_page'),
    path('blog', views.post_list, name = 'post_list'),
    path('blog/post/<int:pk>/', views.post_detail, name='post_detail'),
    path('blog/post/new', views.post_new, name='post_new'),
    path('blog/post/<int:pk>/edit/', views.post_edit, name='post_edit'),
    path('blog/post/<int:pk>/remove/', views.post_remove, name='post_remove'),
]