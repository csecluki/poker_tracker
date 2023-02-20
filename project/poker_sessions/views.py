from django.shortcuts import render, redirect

from poker_sessions.models import Session
from poker_sessions.forms import SessionForm, EndSessionForm


def home(request):
    active_session = Session.active.first()
    ended_sessions = Session.ended.all()
    return render(request,
                  'game_sessions/home.html',
                  {'active_session': active_session,
                   'ended_session': ended_sessions}
                  )


def start(request):
    form = SessionForm(request.POST or None)
    if request.method == 'POST' and form.is_valid():
        form.save()
        return redirect('session:home')
    return render(request,
                  'game_sessions/start.html',
                  {'form': form}
                  )


def end(request):
    form = EndSessionForm(request.POST or None)
    if request.method == 'POST' and form.is_valid():
        session, _ = Session.active.update_or_create(form.cleaned_data)
        session.account.balance += session.balance_after - session.balance_before
        session.account.save()
        return redirect('session:home')
    return render(request,
                  'game_sessions/end.html',
                  {'form': form}
                  )
