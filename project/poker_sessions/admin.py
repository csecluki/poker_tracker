from django.contrib import admin

from poker_sessions.models import Session


@admin.register(Session)
class SessionAdmin(admin.ModelAdmin):
    list_display = ('end', 'account', 'duration', 'total_capital_used', 'hands', 'rebuys', 'balance_change')
