from django.shortcuts import render, redirect

from accounts.forms import AccountForm
from accounts.models import Account
from poker_sessions.models import Session


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


def detail(request, account_id):
    account = Account.objects.get(id=account_id)
    sessions = Session.ended.filter(account_id=account_id)
    return render(request,
                  'accounts/detail.html',
                  {'account': account,
                   'sessions': sessions}
                  )