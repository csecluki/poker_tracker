import datetime

from django import template

register = template.Library()

@register.filter
def percentage(value):
    return format(value, ".2%")

@register.filter
def duration(value: datetime.timedelta):
    secs = int(value.total_seconds())
    hours = secs // 3600
    mins = (secs - hours * 3600) // 60
    return f'{str(hours).zfill(2)}:{str(mins).zfill(2)}'
