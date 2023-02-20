import datetime

from django import forms

from poker_sessions.models import Session


class SessionForm(forms.ModelForm):

    class Meta:
        model = Session
        exclude = ('end', 'rebuys', 'hands', 'balance_after')


class EndSessionForm(forms.ModelForm):

    class Meta:
        model = Session
        fields = ('rebuys', 'hands', 'balance_after')

    end = forms.DateTimeField(initial=datetime.datetime.now, widget=forms.HiddenInput())
