from django.utils import timezone
from .models import Post
from django.shortcuts import render,get_object_or_404,redirect
from .forms import PostForm
from django.contrib.auth.models import User
from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.contrib import messages


def post_list(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'blog/post_list.html', {'posts': posts})

def post_detail(request,pk):
    post = get_object_or_404(Post,pk=pk)
    return render(request, 'blog/post_detail.html', {'post': post})

def main_page(request):
    m_views = 'hello'
    return render(request, 'blog/main_page.html', {'views': m_views})

@login_required
def post_new(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm()
    return render(request, 'blog/post_edit.html', {'form': form })

@login_required
def post_edit(request, pk):
    post = get_object_or_404(Post, pk=pk)
    if request.method == "POST":
        # 사용권한 - 작성자만 이용 가능
        if(post.author == request.user):
            form = PostForm(request.POST, instance=post)
            if form.is_valid():
                post = form.save(commit=False)
                post.author = request.user
                post.published_date = timezone.now()
                post.save()
                return redirect('post_detail', pk=post.pk)
            return render(request, 'blog/post_edit.html', {'form': form })
        else:
            messages.error(request, "본인 게시글이 아닙니다.")
            return redirect('post_detail', pk=post.pk)
    else:
        if(post.author == request.user):
            form = PostForm(instance=post)
            return render(request, 'blog/post_edit.html', {'form': form })
        else:
            messages.error(request, "본인 게시글이 아닙니다.")
    return redirect('post_detail', pk=post.pk)

@login_required
def post_remove(request, pk):
    post = get_object_or_404(Post, pk=pk)
    if(post.author == request.user):
        post.delete()
        return redirect('post_list')
    else:
        messages.error(request, "본인 게시글이 아닙니다.")
        return redirect('post_detail', pk=post.pk)


def signup(request):
    # signup 으로 POST 요청이 왔을 때, 새로운 유저를 만드는 절차를 밟는다.
    if request.method == 'POST':
        # password와 confirm에 입력된 값이 같다면
        if request.POST['password'] == request.POST['confirm']:
            # user 객체를 새로 생성
            user = User.objects.create_user(username=request.POST['username'], password=request.POST['password'])
            # 로그인 한다
            auth.login(request, user)
            return redirect('/')
    # signup으로 GET 요청이 왔을 때, 회원가입 화면을 띄워준다.
    return render(request, 'blog/signup.html')

# 로그인
def login(request):
    # login으로 POST 요청이 들어왔을 때, 로그인 절차를 밟는다.
    if request.method == 'POST':
        # login.html에서 넘어온 username과 password를 각 변수에 저장한다.
        username = request.POST['username']
        password = request.POST['password']

        # 해당 username과 password와 일치하는 user 객체를 가져온다.
        user = auth.authenticate(request, username=username, password=password)
        
        # 해당 user 객체가 존재한다면
        if user is not None:
            # 로그인 한다
            auth.login(request, user)
            return redirect('/')
        # 존재하지 않는다면
        else:
            # 딕셔너리에 에러메세지를 전달하고 다시 login.html 화면으로 돌아간다.
            return render(request, 'blog/login.html', {'error' : 'username or password is incorrect.'})
    # login으로 GET 요청이 들어왔을때, 로그인 화면을 띄워준다.
    else:
        return render(request, 'blog/login.html')

# 로그 아웃
def logout(request):
    # logout으로 POST 요청이 들어왔을 때, 로그아웃 절차를 밟는다.
    if request.method == 'POST':
        auth.logout(request)
        return redirect('/')

    # logout으로 GET 요청이 들어왔을 때, 로그인 화면을 띄워준다.
    return render(request, 'blog/login.html')