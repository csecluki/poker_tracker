from django.shortcuts import render, redirect

from accounts.forms import AccountForm
from accounts.models import Account


def home(request):
    accounts = Account.objects.all()
    return render(request,
                  'accounts/home.html',
                  {'accounts': accounts}
                  )


def add(request):
    form = AccountForm(request.POST or None)
    if request.method == 'POST' and form.is_valid():
        form.save()
        return redirect('account:home')
    return render(request,
                  'accounts/add.html',
                  {'form': form}
                  )
